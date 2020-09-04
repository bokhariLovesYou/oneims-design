import React, { useState } from "react"
// Gatsby Img
import Img from "gatsby-image"
// Styled Elements
import {
  ImageWrapper,
  CardStackWrapper,
  AnimatedImage,
} from "../components/styledElements"
// Animations
import { useSprings, animated, interpolate } from "react-spring"
import { useDrag } from "react-use-gesture"

let counter = 0
const to = i => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 250,
})
const from = i => ({ x: 1500, rot: 50, scale: 1.1, y: 0 })
const trans = (r, s) =>
  `rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const DraggableCards = data => {
  // Draggable
  const cards = data.ImageSrc
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
      if (!down && trigger) {
        if (counter === cards.length - 1) {
          counter = 0
        } else {
          counter++
        }
        data.SetHeroBackground(data.HeroContent[counter].color)
        data.SetHeroContent(data.HeroContent[counter])
        gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      }
      set(i => {
        if (index !== i) return // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index)
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1 // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        }
      })
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set(i => to(i)), 600)
    }
  )
  return (
    <CardStackWrapper>
      {props.map(({ x, y, rot, scale }, i) => (
        <ImageWrapper
          key={i}
          HeroImageCard
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <AnimatedImage
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            <Img
              className="non-draggable card-image-src"
              fluid={cards[i].childImageSharp.fluid}
            />
          </AnimatedImage>
        </ImageWrapper>
      ))}
    </CardStackWrapper>
  )
}

export default DraggableCards
