import React, { Component } from "react"
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
// Styled Elements
import {
  Section,
  ContentBox,
  ImageWrapper,
  LargeHeading,
  Small,
  CardStackWrapper,
  CardStack,
  LinkButton,
  LargeSVGOverlay,
  Heading,
  CoolSpan,
} from "../components/styledElements"

export class HomepageTemplate extends Component {
  render() {
    const { frontmatter } = this.props.data.pageData
    const { hero, work } = frontmatter
    return (
      <Layout>
        <SEO title={frontmatter.title} description={frontmatter.description} />
        {/* Section */}
        <Section BGOrange HeroPadding>
          <LargeSVGOverlay>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 900 950"
            >
              <path d="M80 0c13 37 22 95 0 168 113-61 544-312 12 159 220-35 677-17 213 93 521 103 511 326 60 196 624 325 339 293-30 63C402 1572-599-249 80 0z"></path>
            </svg>
          </LargeSVGOverlay>
          <Container>
            <Row className="align-items-lg-center">
              <Col lg={6} className="mb-4 order-lg-2 mb-lg-0">
                <ContentBox>
                  <CardStackWrapper>
                    <CardStack RotateMinus4Deg Black />
                    <CardStack Rotate3Deg White />
                    <CardStack RotateMinus3Deg Pink />
                    <CardStack Rotate4Deg Orange />
                    <ImageWrapper HeroImageCard>
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
                    <Small dangerouslySetInnerHTML={{ __html: hero.label }} />
                  ) : (
                    ""
                  )}
                  {hero.heading ? (
                    <LargeHeading Hero>
                      {hero.heading.substring(
                        0,
                        hero.heading.lastIndexOf(" ")
                      ) + " "}
                      <CoolSpan>{hero.heading.split(" ").pop()}</CoolSpan>
                    </LargeHeading>
                  ) : (
                    ""
                  )}
                  <ContentBox className="pt-2">
                    {hero.buttonTitle ? (
                      <Link to={hero.buttonURL}>
                        <LinkButton>{hero.buttonTitle}</LinkButton>
                      </Link>
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
