import React from 'react'
import e from '../elements'
import { css } from '@emotion/core'
import { withPrefix } from 'gatsby';

type Props = {
  children?: React.ReactNode
}

const cssContainer = css`
  clip-path: polygon(0 100px, 100% 0%, 100% 100%, 0% 100%);
`

const cssDotsContainer = css`
  position: fixed;
  height: 100vh;
  width: 50vw;
  top: 0;
  right: 0;
  padding: 20px 20px 20px 0;
  display: flex;
  opacity: 0.5;
`
const cssDots = css`
  background-image: ${`url(${withPrefix('/dots.svg')})`};
  flex: 1;
  flex-basis: auto;
`

const Landing = ({ children }: Props) => (
    <e.div w100 bc="#00245C" mh="100vh" pos="relative" css={cssContainer}>
      <e.div w100 css={cssDotsContainer}>
        <e.div css={cssDots}/>
      </e.div>
      {children}
    </e.div>
)

export default Landing
