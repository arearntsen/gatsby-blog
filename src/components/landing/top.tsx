import React from 'react'
import { StaticQuery, graphql, withPrefix } from 'gatsby'
import { css } from '@emotion/core'
import e from '../elements';

type Props = {
  children?: React.ReactNode
}

const cssContainer = css`
`

const cssTopContent = css`
  width: 100vw;
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  scroll-behavior: smooth;
`
const cssMainTitle = css`
  font-family: sans-serif;
`

const cssMenu = css`
  position: fixed;
  top: 0;
  right: 0;
`
const cssGraphic = css`
    background-image: ${`url(${withPrefix('/dots.svg')})`};
    height:30px;
    width: 100%;
    opacity: 0.7;
`
const cssGraphic2 = css`
    background-image: ${`url(${withPrefix('/dots.svg')})`};
    height: 60px;
    width: 50px;
    opacity: 0.7;
`
const cssImageContainer = css`
  perspective: 1px;
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
`
const cssImage = css`
  width: 100%;
`

const Top = ({ children }: Props) => {
  return (
    <StaticQuery
      query={graphql`
        query LandingTop {
          allContentfulLandingMeta {
            edges {
              node {
                mainImage {
                  file {
                    url
                  }
                }
                mainTitle
              }
            }
          }
        }
      `}
      render={data => {
        const metaData = data.allContentfulLandingMeta.edges && data.allContentfulLandingMeta.edges[0] && data.allContentfulLandingMeta.edges[0].node

        return (
            <e.div w100 h="500px" css={cssContainer}>
              <e.div css={cssImageContainer}>
                <img src={metaData.mainImage.file.url} css={cssImage}/>
              </e.div>
            </e.div>
          )
        }
      }
    />
  )
  }

export default Top

/**
 *               <div css={cssTopContent} style={{backgroundImage: `url(${metaData.mainImage.file.url})`}}>
                <h1 css={cssMainTitle}>{metaData.mainTitle}</h1>
              </div>
              <e.div w100 fctr css={cssMenu}>
                <e.div w100 fcr h="60px">
                  <e.h4 m="0 20px 0 0" c="white">About</e.h4>
                  <e.h4 m="0 40px 0 0" c="white">Menu</e.h4>
                </e.div>
                <e.div fctr m="0 40px 0 0">
                  <e.div css={cssGraphic} />
                  <e.div css={cssGraphic2} />
                  <e.div css={cssGraphic2} />
                </e.div>
              </e.div>
 */