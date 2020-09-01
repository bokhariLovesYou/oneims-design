import React, { Component } from "react"
// Link
import { Link } from "gatsby"
// Styled Components
import styled from "styled-components"
// Styled Colors
import { colors } from "./styledVariables"
// Refactor and remove
import HeroImage from "../images/hero-image.png"

const CardWrapper = styled.article``
const CardContent = styled.div``
const CardTop = styled.div``
const CardImageWrapper = styled.div``
const CardBottom = styled.div`
  padding-top: 1rem;
`
const CardTagWrapper = styled.div`
  display: inline-block;
  padding: 0.15rem 0.35rem 0.1rem 0.35rem;
  text-decoration: none;
  white-space: nowrap;
  border: 1px solid transparent;
  color: ${colors.white};
  background-color: ${colors.black};
  font-weight: 600;
  margin-bottom: 0.5rem;
`
const CardTag = styled.span`
  display: block;
  font-size: 0.8rem;
`
const CardTitleWrapper = styled.div``
const CardTitle = styled.h3``
const CardDescriptionWrapper = styled.div``
const CardDescription = styled.p`
  font-weight: 400;
`

export class Card extends Component {
  render() {
    return (
      <Link to="" className="text-decor-none">
        <CardWrapper>
          <CardContent>
            <CardTop>
              <CardImageWrapper>
                <img src={HeroImage} alt />
              </CardImageWrapper>
            </CardTop>
            <CardBottom>
              <Link to="/">
                <CardTagWrapper>
                  <CardTag>WordPress</CardTag>
                </CardTagWrapper>
              </Link>
              <CardTitleWrapper>
                <CardTitle className="card-title">Remote Onboarding</CardTitle>
              </CardTitleWrapper>
              <CardDescriptionWrapper>
                <CardDescription>
                  Three new members of the OneIMS Team share their advice for
                  stargin a new job while working remotely.
                </CardDescription>
              </CardDescriptionWrapper>
            </CardBottom>
          </CardContent>
        </CardWrapper>
      </Link>
    )
  }
}

export default Card
