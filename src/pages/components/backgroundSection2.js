import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import background from './backgroundImage.module.css'

import BackgroundImage from 'gatsby-background-image'

const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`
/**
 * In this functional component a fullscreen <BackgroundImage />  is created.
 * @param className   string    className(s) from styled-components.
 * @param children    nodes     Child-components.
 * @return {*}
 * @constructor
 */
const FullBackground = ({ children }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "ceciBackground.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )

  // Single Image Data
  const imageData = desktop.childImageSharp.fluid

  return (
    <StyledFullScreenWrapper>
      <BackgroundImage
        Tag="section"
        className={background.bgImg}
        fluid={imageData}
        backgroundColor={`white`}
        title="Ceci's Design"
        id="fullscreenbg"
        role="img"
        aria-label="Fullscreen Background"
      >
        {children}
      </BackgroundImage>
    </StyledFullScreenWrapper>
  )
}

const StyledFullBackground = styled(FullBackground)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledFullBackground