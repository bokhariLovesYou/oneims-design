import React from "react"
// Gatsby
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
// Components
import Layout from "../components/layout"
import Card from "../components/card"
import GlobalCTA from "../components/globalCta"
import SEO from "../components/seo"
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
  ImageWrapper,
  AnimatedLargeHeading,
  AnimatedSmall,
  CardStackWrapper,
  CardStack,
  LinkButton,
  AnimatedLinkButton,
  LargeSVGOverlay,
  Heading,
  CoolSpan,
} from "../components/styledElements"

const HomepageTemplate = data => {
  const flowerEntry = useSpring({
    config: { duration: 2000, easing: easings.easeCubic },
    transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
    from: { transform: "translate3d(-1500px,0px,0) scale(3) rotate(0deg)" },
  })
  const imageEntry = useSpring({
    config: {
      duration: 1000,
      friction: 12,
      tension: 1,
      easing: easings.easeCubic,
    },
    transform: "translate3d(0px,0,0) scale(1) rotate(0deg)",
    from: { transform: "translate3d(-2000px,0,0) scale(0.8) rotate(100deg)" },
  })
  const cardEntry1 = useSpring({
    config: { duration: 1000, friction: 5, easing: easings.easeCubic },
    transform: "translate3d(0px,0,0) scale(1) rotate(8deg)",
    from: { transform: "translate3d(0px,2000px,0) scale(0.8) rotate(100deg)" },
  })
  const cardEntry2 = useSpring({
    config: { duration: 1000, friction: 5 },
    transform: "translate3d(0px,0,0) scale(1) rotate(3deg)",
    from: { transform: "translate3d(-2000px,0px,0) scale(0.8) rotate(100deg)" },
  })
  const cardEntry3 = useSpring({
    config: { duration: 1000, friction: 5 },
    transform: "translate3d(0px,0,0) scale(1) rotate(-3deg)",
    from: {
      transform: "translate3d(-2000px,-2000px,0) scale(0.8) rotate(100deg)",
    },
  })
  const cardEntry4 = useSpring({
    config: { duration: 800, friction: 5, easing: easings.easeCubic },
    transform: "translate3d(0px,0,0) scale(1) rotate(-5deg)",
    from: {
      transform: "translate3d(2000px,-2000px,0) scale(0.8) rotate(100deg)",
    },
  })

  const smallEntry = useSpring({
    config: { duration: 150, friction: 15 },
    transform: "translate3d(0px,0,0) scale(1) rotate(0deg)",
    opacity: "1",
    from: {
      transform: "translate3d(0px,15px,0) scale(1) rotate(0deg)",
      opacity: "0",
    },
    delay: 1400,
  })

  const headingEntry = useSpring({
    config: { duration: 150, friction: 15, tension: 170 },
    transform: "translate3d(0px,0,0) scale(1) rotate(0deg)",
    opacity: "1",
    from: {
      transform: "translate3d(0px,5px,0) scale(1) rotate(0deg)",
      opacity: "0",
    },
    delay: 1700,
  })

  const buttonEntry = useSpring({
    config: { duration: 150, friction: 15, tension: 170 },
    transform: "translate3d(0px,0,0) scale(1) rotate(0deg)",
    opacity: "1",
    from: {
      transform: "translate3d(0px,5px,0) scale(1) rotate(0deg)",
      opacity: "0",
    },
    delay: 1900,
  })

  const { frontmatter } = data.data.pageData
  const { hero, work } = frontmatter
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      {/* Section */}
      <Section BGOrange HeroPadding>
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
              <ContentBox>
                <CardStackWrapper>
                  <CardStack RotateMinus4Deg Black style={cardEntry1} />
                  <CardStack Rotate3Deg White style={cardEntry2} />
                  <CardStack RotateMinus3Deg Pink style={cardEntry3} />
                  <CardStack Rotate4Deg Orange style={cardEntry4} />
                  <ImageWrapper HeroImageCard style={imageEntry}>
                    <Img
                      className=""
                      fluid={hero.cardImage.childImageSharp.fluid}
                      alt=""
                    />
                  </ImageWrapper>
                </CardStackWrapper>
              </ContentBox>
            </Col>
            <Col lg={6} className="pt-4 order-lg-1 pt-lg-0">
              <ContentBox>
                {hero.label ? (
                  <AnimatedSmall
                    style={smallEntry}
                    dangerouslySetInnerHTML={{ __html: hero.label }}
                  />
                ) : (
                  ""
                )}
                {hero.heading ? (
                  <AnimatedLargeHeading style={headingEntry} Hero>
                    {hero.heading.substring(0, hero.heading.lastIndexOf(" ")) +
                      " "}
                    <CoolSpan>{hero.heading.split(" ").pop()}</CoolSpan>
                  </AnimatedLargeHeading>
                ) : (
                  ""
                )}
                <ContentBox className="pt-2">
                  {hero.buttonTitle ? (
                    <AniLink
                      paintDrip
                      to={hero.buttonURL}
                      duration={colors.aniLinkDuration}
                      hex={colors.pink}
                    >
                      <AnimatedLinkButton style={buttonEntry}>
                        {hero.buttonTitle}
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
            {[...Array(8)].map((e, i) => (
              <Col key={i} md="6" lg="4" xl="3" className="mb-4">
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
          label
          heading
          buttonTitle
          buttonURL
          cardImage {
            childImageSharp {
              fluid(maxWidth: 4000) {
                ...GatsbyImageSharpFluid
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
