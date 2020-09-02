import React, { Component } from "react"
// Boostrap
import Container from "react-bootstrap/Container"
import {
  Section,
  ContentBox,
  Small,
  LinkButton,
  LargeSVGOverlay,
  Heading,
  CoolSpan,
} from "../components/styledElements"

export class GlobalCTA extends Component {
  render() {
    return (
      <Section BGBlack TextWhite>
        <LargeSVGOverlay InvertedSVG Orange>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 900 950"
          >
            <path d="M248 0C116 118 20 118 36 0c-170-415-192 530-6 940 2 9 14 10 10-3-42-137 17-488 409-404 9 2 11-9 4-11C157 426 69 240 270 0c6-11-1-20-22 0z"></path>
          </svg>
        </LargeSVGOverlay>
        <LargeSVGOverlay InvertedSVG Larger LightSky>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 900 950"
          >
            <path d="M248 0C116 118 20 118 36 0c-170-415-192 530-6 940 2 9 14 10 10-3-42-137 17-488 409-404 9 2 11-9 4-11C157 426 69 240 270 0c6-11-1-20-22 0z"></path>
          </svg>
        </LargeSVGOverlay>
        <Container>
          <ContentBox className="text-left ml-0 mr-auto" MW700>
            <Small>Simplify The Build.</Small>
            <Heading Hero className="text-white">
              Learn More about OneIMS <CoolSpan Inverted>Design.</CoolSpan>
            </Heading>
            <ContentBox className="pt-3">
              <a href="https://www.oneims.com/get-started/">
                <LinkButton className="text-white">Get Started ›</LinkButton>
              </a>
            </ContentBox>
          </ContentBox>
        </Container>
      </Section>
    )
  }
}

export default GlobalCTA
