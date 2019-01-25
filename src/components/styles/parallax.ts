import { css } from '@emotion/core'

export const cssParallaxContainer = css`
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  -ms-perspective-origin-x: 100%;
`
export const cssPrallaxLayer = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -ms-transform-origin-x: 100%;
`
export const cssParallaxLayerBase = css`
  transform: translateZ(0);
`

export const cssParallaxLayerBack = css`
  transform: translateZ(-1px) scale(2);
`
export const cssParallaxLayerDeep = css`
  transform: translateZ(-2px) scale(3);
`
export const cssParallaxGroup = css`
  position: relative;
  height: 900px;
  transform-style: preserve-3d;
`