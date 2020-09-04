import React, { useState } from "react"
// Gatsby
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"
// Components
import Layout from "../components/layout"
import Card from "../components/card"
import GlobalCTA from "../components/globalCta"
import SEO from "../components/seo"
import DraggableCards from "../components/draggableCards"
// Boostrap
import { Container, Row, Col } from "react-bootstrap"
// Animations
import { useSpring } from "react-spring"
import * as easings from "d3-ease"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// Styled Colors
import { colors } from "../components/styledVariables"
// Styled Elements
import {
  Section,
  ContentBox,
  AnimatedLargeHeading,
  AnimatedSmall,
  LinkButton,
  AnimatedLinkButton,
  LargeSVGOverlay,
  Heading,
  CoolSpan,
} from "../components/styledElements"

const getImages = (arr, prop) => {
  let returnVal = []
  arr.forEach(elem => {
    returnVal.push(elem.cardImage)
  })
  return returnVal
}

const HeadingEntry = data => {
  const props = useSpring({
    config: { duration: 1000 },
    transform: "translate3d(0px,0,0) scale(1) rotate(0deg)",
    opacity: "1",
    from: {
      transform: "translate3d(0px,5px,0) scale(1) rotate(0deg)",
      opacity: "0",
    },
  })
  return (
    <AnimatedLargeHeading style={props} Hero>
      {data.children}
    </AnimatedLargeHeading>
  )
}

const HomepageTemplate = data => {
  const flowerEntry = useSpring({
    config: { duration: 1000, easing: easings.easeCubic },
    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
    from: { transform: "translate3d(0px,0px,0) scale(2) rotate(0deg)" },
  })

  const smallEntry = useSpring({
    config: { duration: 1000 },
    transform: "translate3d(0px,0,0) scale(1) rotate(0deg)",
    opacity: "1",
    from: {
      transform: "translate3d(0px,15px,0) scale(1) rotate(0deg)",
      opacity: "0",
    },
  })

  const buttonEntry = useSpring({
    config: { duration: 1000 },
    transform: "translate3d(0px,0,0) scale(1) rotate(0deg)",
    opacity: "1",
    from: {
      transform: "translate3d(0px,5px,0) scale(1) rotate(0deg)",
      opacity: "0",
    },
  })

  const { frontmatter } = data.data.pageData
  const { hero, work } = frontmatter

  const [heroBackground, setHeroBackground] = useState(hero.content[0].color)
  const [heroContent, setHeroContent] = useState(hero.content[0])
  const [on, set] = React.useState(true)

  const BGColor = {
    backgroundColor: heroBackground,
  }

  const cardImages = getImages(hero.content)

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      {/* Section */}
      <Section style={BGColor} HeroPadding>
        <LargeSVGOverlay style={flowerEntry}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 900 950"
          >
            <path d="M272 248C553 9 765-77 590 117c170-78 505-25-100 280 360-35 259 118 14 135 729 89 275 169-28 106 202 133-126 59-258 0-843 1448-414-1727-144-438 57-306 389-608 198 48z"></path>
          </svg>
        </LargeSVGOverlay>
        <Container>
          <Row className="align-items-lg-center">
            <Col lg={6} className="mb-4 order-lg-2 mb-lg-0">
              <ContentBox onClick={() => set(!on)}>
                <DraggableCards
                  SetHeroBackground={setHeroBackground}
                  SetHeroContent={setHeroContent}
                  HeroContent={hero.content}
                  ImageSrc={cardImages}
                />
              </ContentBox>
            </Col>
            <Col
              lg={6}
              className="pt-4 mt-4 order-lg-1 pt-lg-0 mt-sm-0 pr-lg-4 pr-xl-5"
            >
              <ContentBox MW650 key={on}>
                {heroContent.label ? (
                  <AnimatedSmall
                    style={smallEntry}
                    dangerouslySetInnerHTML={{ __html: heroContent.label }}
                  />
                ) : (
                  ""
                )}
                {heroContent.heading ? (
                  <HeadingEntry key={on} data={"How to make this work?"}>
                    {heroContent.heading.substring(
                      0,
                      heroContent.heading.lastIndexOf(" ")
                    ) + " "}
                    <CoolSpan>{heroContent.heading.split(" ").pop()}</CoolSpan>
                  </HeadingEntry>
                ) : (
                  ""
                )}
                <ContentBox className="pt-2">
                  {heroContent.buttonTitle ? (
                    <AniLink
                      cover
                      to={heroContent.buttonURL}
                      duration={colors.aniLinkDuration}
                      bg={colors.pink}
                    >
                      <AnimatedLinkButton style={buttonEntry}>
                        {heroContent.buttonTitle}
                      </AnimatedLinkButton>
                    </AniLink>
                  ) : (
                    ""
                  )}
                </ContentBox>
              </ContentBox>
            </Col>
          </Row>
        </Container>
      </Section>
      {/* //Section */}
      <Section Small>
        <Container className="pb-1">
          <ContentBox className="d-md-flex align-items-md-end justify-content-md-between">
            {work.heading ? (
              <Heading
                className="mb-0"
                dangerouslySetInnerHTML={{ __html: work.heading }}
              />
            ) : (
              ""
            )}
            {work.buttonTitle ? (
              <ContentBox className="show-after-768">
                <Link to={work.buttonURL}>
                  <LinkButton Small>{work.buttonTitle}</LinkButton>
                </Link>
              </ContentBox>
            ) : (
              ""
            )}
          </ContentBox>
        </Container>
        <Container className="pt-4">
          <Row>
            {[...Array(6)].map((e, i) => (
              <Col key={i} md="6" lg="4" xl="4" className="mb-4">
                <Card />
              </Col>
            ))}
          </Row>
          {work.buttonTitle ? (
            <ContentBox className="text-right hide-after-768">
              <Link to={work.buttonURL}>
                <LinkButton Small>{work.buttonTitle}</LinkButton>
              </Link>
            </ContentBox>
          ) : (
            ""
          )}
        </Container>
      </Section>
      {/* //Section */}
      <GlobalCTA />
      {/* Section */}
    </Layout>
  )
}

export default HomepageTemplate

export const query = graphql`
  query($path: String!) {
    pageData: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        description
        template
        hero {
          content {
            label
            heading
            buttonTitle
            buttonURL
            color
            cardImage {
              childImageSharp {
                fluid(maxWidth: 4000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        work {
          heading
          buttonTitle
          buttonURL
        }
      }
    }
  }
`
