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
// Animation
import TransitionLink from "gatsby-plugin-transition-link"
// Styled Elements
import {
  Section,
  ContentBox,
  ImageWrapper,
  LargeHeading,
  HeadingTrace,
  AnimatedSmall,
  CardStackWrapper,
  CardStack,
  LinkButton,
  AnimatedLinkButton,
  LargeSVGOverlay,
  Heading,
  CoolSpan,
  List,
  ListItem,
} from "../components/styledElements"

const HomepageTemplate = data => {
  const { frontmatter } = data.data.pageData
  const { hero, work } = frontmatter
  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      {/* Section */}
      <Section Small>
        <LargeSVGOverlay>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 900 950"
          >
            <path d="M356 0c-18 115-92 248-221 392 178-82 379-110 249 122C-753 2025-372-868 356 0z"></path>
          </svg>
        </LargeSVGOverlay>
        <Container>
          <ContentBox className="text-center d-flex justify-content-center align-items-center">
            <HeadingTrace Archive>Work</HeadingTrace>
            <HeadingTrace Archive>Work</HeadingTrace>
            <LargeHeading Archive Traced Underlined>
              Work
            </LargeHeading>
            <HeadingTrace Archive>Work</HeadingTrace>
            <HeadingTrace Archive>Work</HeadingTrace>
            {/* <ContentBox>
              <List>
                <ListItem>All Work</ListItem>
              </List>
            </ContentBox> */}
          </ContentBox>
          <ContentBox className="pt-5 pb-3 text-center">
            <Heading>See what we do and why we do it.</Heading>
          </ContentBox>
        </Container>
        <Container className="pt-4">
          <Row>
            {[...Array(12)].map((e, i) => (
              <Col key={i} md="6" className="mb-4">
                <Card LargerTitle />
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
      {/* //Section */}
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
