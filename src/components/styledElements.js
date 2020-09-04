import styled, { css } from "styled-components"
// Styled Variables
import { colors } from "./styledVariables"
// Animations
import { animated } from "react-spring"
// Mixins
const HeroImageCard = `
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 100%;
height: auto;
user-select: none;
position: absolute;
z-index: 5;
`

const InvertedSVG = `
    left: unset;
    top: unset;
    right: 0;
    bottom: 0;
    width: 100%;
    transform: rotate(180deg);
    @media (min-width: 1800px) {
        width: 100vw;
        top: unset;
        bottom: -20vh;
      }
      @media (min-width: 2500px) {
        bottom: -40vh;
      }
`

const VisuallyHidden = `
    position: absolute;
    overflow: hidden;
    clip: rect(1px,1px,1px,1px);
`

const HorizontallyScrollableList = `
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    display: none;
  }
`

const HorizontallyScrollableListItem = `
  flex: 0 0 auto;
`

export const CoolSpan = styled.span`
  background-color: ${props => (props.Inverted ? "#fff" : colors.black)};
  padding: 0 0.5rem;
  color: ${props => (props.Inverted ? colors.black : "#fff")};
`

export const Section = styled.section`
  padding: 3rem 0;
  transition: 0.7s ease;
  overflow: hidden;
  position: relative;
  padding-top: ${props => (props.HeroPadding ? "7rem" : "")};
  @media (min-width: 992px) {
    padding: 6rem 0;
    padding: ${props => (props.Small ? "4rem 0" : "")};
    padding-top: ${props => (props.HeroPadding ? "7rem" : "")};
  }
  background-color: ${props => (props.BGOrange ? colors.orange : "")};
  background-color: ${props => (props.BGBlack ? colors.black : "")};
  color: ${props => (props.TextWhite ? colors.white : "")};
`

export const ContentBox = styled.div`
  position: relative;
  max-width: ${props => (props.MW800 ? "800px" : "")};
  max-width: ${props => (props.MW700 ? "700px" : "")};
  max-width: ${props => (props.MW600 ? "600px" : "")};
  max-width: ${props => (props.MW650 ? "650px" : "")};
`

export const ImageWrapper = styled(animated.div)`
  ${props =>
    props.HeroImageCard
      ? css`
          ${HeroImageCard}
        `
      : ""}
`

export const LargeHeading = styled.h1`
  text-decoration: ${props => (props.Underlined ? "underline" : "")};
  font-size: ${props => (props.Archive ? "6rem" : "")};
  font-weight: ${props => (props.Archive ? "800" : "")};
  @media (min-width: 992px) {
    font-size: ${props => (props.Hero ? "4rem" : "")};
    font-size: ${props => (props.Archive ? "12rem" : "")};
  }
  @media (min-width: 1200px) {
    font-size: ${props => (props.Hero ? "5rem" : "")};
  }
  @media (min-width: 1650px) {
    font-size: ${props => (props.Archive ? "14rem" : "")};
  }
  margin-left: ${props => (props.Traced ? "0" : "")};
  margin-right: ${props => (props.Traced ? "0" : "")};
  ${props =>
    props.VisuallyHidden
      ? css`
          ${VisuallyHidden}
        `
      : ""}
`

export const HeadingTrace = styled.span`
  color: transparent;
  line-height: 1.2;
  padding: 0 2rem;
  display: block;
  -webkit-text-stroke: 1px ${colors.black};
  font-weight: ${props => (props.Archive ? "800" : "")};
  font-size: ${props => (props.Archive ? "6rem" : "")};
  @media (min-width: 992px) {
    font-size: ${props => (props.Hero ? "4rem" : "")};
    font-size: ${props => (props.Archive ? "12rem" : "")};
  }
  @media (min-width: 1200px) {
    font-size: ${props => (props.Hero ? "5rem" : "")};
  }
  @media (min-width: 1650px) {
    font-size: ${props => (props.Archive ? "14rem" : "")};
  }
`

export const AnimatedLargeHeading = styled(animated.h1)`
  @media (min-width: 992px) {
    font-size: ${props => (props.Hero ? "4rem" : "")};
  }
  @media (min-width: 1200px) {
    font-size: ${props => (props.Hero ? "5rem" : "")};
  }
`

export const Heading = styled.h2`
  text-decoration: ${props => (props.Underlined ? "underline" : "")};
  @media (min-width: 992px) {
    font-size: ${props => (props.Hero ? "4rem" : "")};
  }
  @media (min-width: 1200px) {
    font-size: ${props => (props.Hero ? "4rem" : "")};
  }
`

export const Small = styled.span`
  display: block;
  font-weight: 600;
  margin-bottom: 0;
`

export const AnimatedSmall = styled(animated.span)`
  display: block;
  font-weight: 600;
  margin-bottom: 0;
`

export const CardStackWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: calc(70vmin + 5rem);
  user-select: none;
  @media (min-width: 1500px) {
    height: 850px;
  }
`

export const AnimatedImage = styled(animated.div)`
  width: 100%;
  height: 475px;
  overflow: hidden;
  background-color: blue
  box-shadow: 2px 5px 27px rgba(0,0,0,.32);
  cursor: grab;
  will-change: transform;
  user-select: none;
  touch-action: none;
  @media (min-width: 768px) {
    height: 600px;
    max-width: 600px;
  }
  @media (min-width: 992px) {
    height: 630px;
    max-width: 100%;
  }
  @media (min-width: 1500px) {
    height: 750px;
  }
  @media (min-width: 1800px) {
    height: 800px;
  }
`

export const DraggableCardWrapper = styled(animated.div)`
  position: absolute;
  will-change: transform;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const DraggableCard = styled(animated.div)`
  background-color: white;
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 45vh;
  max-width: 300px;
  height: 85vh;
  max-height: 570px;
  cursor: grab;
  border-radius: 10px;
  box-shadow: 2px 5px 27px rgba(0, 0, 0, 0.12);
`

export const CardStack = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  transform: ${props => (props.Rotate3Deg ? "rotate(3deg)" : "")};
  transform: ${props => (props.Rotate4Deg ? "rotate(8deg)" : "")};
  transform: ${props => (props.RotateMinus3Deg ? "rotate(-3deg)" : "")};
  transform: ${props => (props.RotateMinus4Deg ? "rotate(-5deg)" : "")};
  background-color: #fff;
  background-color: ${props => (props.White ? "#eee" : "")};
  background-color: ${props => (props.Orange ? "#ead99c" : "")};
  background-color: ${props => (props.Pink ? "#e6babe" : "")};
  background-color: ${props => (props.Black ? colors.black : "")};
`

export const LinkButton = styled.button`
  font-weight: 700;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 1.2384219rem;
  text-decoration: underline;
  padding: 0;
  font-size: ${props => (props.Small ? "1rem" : "")};
  @media (min-width: 992px) {
    font-size: 1.5384219rem;
    font-size: ${props => (props.Small ? "1rem" : "")};
  }
  &:hover {
    text-decoration: underline;
  }
`

export const AnimatedLinkButton = styled(animated.button)`
  font-weight: 700;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 1.2384219rem;
  text-decoration: underline;
  padding: 0;
  font-size: ${props => (props.Small ? "1rem" : "")};
  @media (min-width: 992px) {
    font-size: 1.5384219rem;
    font-size: ${props => (props.Small ? "1rem" : "")};
  }
  &:hover {
    text-decoration: underline;
  }
`

export const LargeSVGOverlay = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @media (min-width: 1500px) {
    width: 80vw;
  }

  @media (min-width: 1800px) {
    width: 105vw;
  }
  @media (min-width: 2400px) {
    width: 105vw;
  }
  ${props =>
    props.InvertedSVG
      ? css`
          ${InvertedSVG}
          transform: ${props =>
            props.Larger ? "rotate(180deg) scale(1.5);" : ""};
        `
      : ""}
  svg {
    path {
      fill: ${colors.pink};
      fill: ${props => (props.Navy ? colors.navy : "")};
      fill: ${props => (props.LightSky ? colors.lightsky : "")};
      fill: ${props => (props.Orange ? colors.orange : "")};
      fill: ${props => (props.OneIMSBlue ? colors.oneimsblue : "")};
    }
  }
`

export const LogoWrapper = styled.div``

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  svg {
    path {
      fill: ${colors.black};
    }
  }
`

export const LogoSpan = styled.span`
  font-weight: 600;
  padding-left: 0.5rem;
  font-size: 1.1rem;
  display: block;
  color: ${colors.black};
  &:hover {
    text-decoration: none;
  }
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  ${props =>
    props.HorizontallyScrollableList
      ? css`
          ${HorizontallyScrollableList}
        `
      : ""}
`

export const ListItem = styled.li`
  ${props =>
    props.HorizontallyScrollableListItem
      ? css`
          ${HorizontallyScrollableListItem}
        `
      : ""}
`
