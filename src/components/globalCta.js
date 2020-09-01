import React, { Component } from "react"
import { Link } from "gatsby"
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
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 900 950"
          >
            <path d="M80 0c13 37 22 95 0 168 113-61 544-312 12 159 220-35 677-17 213 93 521 103 511 326 60 196 624 325 339 293-30 63C402 1572-599-249 80 0z"></path>
          </svg>
        </LargeSVGOverlay>
        <LargeSVGOverlay InvertedSVG Larger LightSky>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 900 950"
          >
            <path d="M80 0c13 37 22 95 0 168 113-61 544-312 12 159 220-35 677-17 213 93 521 103 511 326 60 196 624 325 339 293-30 63C402 1572-599-249 80 0z"></path>
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
