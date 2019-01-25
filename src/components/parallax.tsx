import React, { Component } from 'react'
import e from './elements';
import * as parallax from './styles/parallax'

class Parallax extends Component {
  render() {
    return (
      <e.div css={parallax.cssParallaxContainer}>
        <e.div css={parallax.cssParallaxGroup}>
          <e.div css={parallax.cssParallaxLayerBase}>
            Hello
          </e.div>
          <e.div css={parallax.cssParallaxLayerBack}>
            Hello
          </e.div>
        </e.div>
        <e.div css={parallax.cssParallaxGroup}>
          <e.div css={parallax.cssParallaxLayerBase}>
            Hello
          </e.div>
          <e.div css={parallax.cssParallaxLayerBack}>
            Hello
          </e.div>
        </e.div>
        <e.div css={parallax.cssParallaxGroup}>
          <e.div css={parallax.cssParallaxLayerBase}>
            Hello
          </e.div>
          <e.div css={parallax.cssParallaxLayerBack}>
            Hello
          </e.div>
        </e.div>
      </e.div>
    )
  }
}
export default Parallax
