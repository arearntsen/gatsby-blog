import React, { Component } from 'react'
import e from './elements';
import * as parallax from './styles/parallax'

class Parallax extends Component {
  render() {
    return (
      <e.div css={parallax.cssParallaxContainer}>
        <e.div bc="green" css={parallax.cssParallaxGroup}>
          <e.div css={parallax.cssParallaxLayerBase}>
            Base1
          </e.div>
          <e.div css={parallax.cssParallaxLayerBack}>
            Slow1
          </e.div>
        </e.div>
        <e.div bc="blue" css={parallax.cssParallaxGroup}>
          <e.div css={parallax.cssParallaxLayerBase}>
            Base2
          </e.div>
          <e.div css={parallax.cssParallaxLayerBack}>
            Slow2
          </e.div>
        </e.div>
        <e.div bc="pink" css={parallax.cssParallaxGroup}>
          <e.div css={parallax.cssParallaxLayerBase}>
            Base3
          </e.div>
          <e.div css={parallax.cssParallaxLayerBack}>
            Slow3
          </e.div>
        </e.div>
      </e.div>
    )
  }
}
export default Parallax
