import styled from '@emotion/styled'
import { css } from '@emotion/core'

const pxToRem = (px: string, set1RM: string = '16px'): string => {
  const regex = /[^px]+/
  // const pxValue = (+px.match(regex)[0])
  // const rmValue = +set1RM.match(regex)[0]

  return px
}

interface DynamicProps {
  c?: string
  w?: string
  b?: string
  size?: string
  w100?: boolean
  p?: string
  wmax?: boolean
  mh?: string
  h?: string
  m?: string
  bree?: boolean
  ubuntu?: boolean
  bc?: string
  label?: string
  oa?: boolean
  pointer?: boolean
  ellipsis?: string
  pos?: string
  overflow?: string
  hide?: boolean
  nowrap?: boolean
  z?: string
  z1?: boolean
  wi?: string
  mw?: string
  op?: string
  top?: string
  bo?: string
  le?: string
  ri?: string
  lh?: string
  maxh?: string
  i?: boolean
  minw?: string
  uppercase?: boolean
  lowercase?: boolean
  bor?: string
}

class Elements {
  contentMaxWidth: string
  flex: any
  dynamic: any
  h: any
  h1: any
  h2: any
  h3: any
  h4: any
  h5: any
  h6: any
  spacer: any
  main: any
  p: any
  div: any
  header: any
  section: any
  cssp: any
  p1: any
  p2: any
  p3: any
  p4: any
  p5: any
  p6: any
  a: any
  ins: any
  li: any
  ul: any
  constructor() {
    this.contentMaxWidth = '1080px'
    this.flex = (props: any) => css`
      ${props.f && 'display: flex; justify-content: flex-start; align-items: flex-start;'};
      ${props.fc && 'display: flex; flex-direction: column; justify-contflex-start; align-items: flex-start;'};
      ${props.f && props.left && 'justify-content: flex-start;'};
      ${props.fc && props.left && 'align-items: flex-start;'};
      ${props.fg && `flex: ${props.fg}`};
      ${props.f && props.right && 'justify-content: flex-end;'};
      ${props.fc && props.right && 'align-items: flex-end;'};
      ${props.f && props.top && 'align-items: flex-start;'};
      ${props.fc && props.top && 'justify-content: flex-start;'};
      ${props.f && props.bottom && 'align-items: flex-end;'};
      ${props.fc && props.bottom && 'justify-content: flex-end;'};
      ${props.ftl && 'display:flex; justify-content: flex-start; align-items: flex-start;'};
      ${props.ftr && 'display:flex; justify-content: flex-end; align-items: flex-start;'};
      ${props.fbl && 'display:flex; justify-content: flex-start; align-items: flex-end;'};
      ${props.fbr && 'display:flex; justify-content: flex-end; align-items: flex-end;'};
      ${props.fcl && 'display:flex; justify-content: flex-start; align-items: center;'};
      ${props.fcr && 'display:flex; justify-content: flex-end; align-items: center;'};
      ${props.ftc && 'display:flex; justify-content: center; align-items: flex-start;'};
      ${props.fbc && 'display:flex; justify-content: center; align-items: flex-end;'};
      ${props.fcc && 'display:flex; justify-content: center; align-items: center;'};
      ${props.fctl && 'display:flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;'};
      ${props.fctr && 'display:flex; flex-direction: column; align-items: flex-end; justify-content: flex-start;'};
      ${props.fcbl && 'display:flex; flex-direction: column; align-items: flex-start; justify-content: flex-end;'};
      ${props.fcbr && 'display:flex; flex-direction: column; align-items: flex-end; justify-content: flex-end;'};
      ${props.fccl && 'display:flex; flex-direction: column; align-items: flex-start; justify-content: center;'};
      ${props.fccr && 'display:flex; flex-direction: column; align-items: flex-end; justify-content: center;'};
      ${props.fctc && 'display:flex; flex-direction: column; align-items: center; justify-content: flex-start;'};
      ${props.fcbc && 'display:flex; flex-direction: column; align-items: center; justify-content: flex-end;'};
      ${props.fccc && 'display:flex; flex-direction: column; align-items: center; justify-content: center;'};
      ${props.fw && 'flex-wrap: wrap;'};
      ${props.f1 && 'flex: 1;'};
      ${props.f2 && 'flex: 2;'};
      ${props.f3 && 'flex: 3;'};
      ${props.fs0 && 'flex-shrink: 0;'};
      ${props.fsb && 'justify-content: space-between;'};
      ${props.fsa && 'justify-content: space-around;'};
      ${props.fse && 'justify-content: space-evenly;'};
    `
    this.dynamic = (props: DynamicProps): any => css`
      ${props.c && `color: ${props.c};`};
      ${props.w && `font-weight: ${props.w};`};
      ${props.b && 'font-weight: 700;'};
      ${props.size && `font-size: ${pxToRem(props.size)};`};
      ${props.w100 && 'width: 100%;'};
      ${props.p && `padding: ${props.p};`};
      ${props.wmax && `max-width: ${this.contentMaxWidth};`};
      ${props.h && `height: ${props.h};`};
      ${props.m && `margin: ${props.m};`};
      ${props.bree && 'font-family: bree, sans-serif;'};
      ${props.ubuntu && 'font-family: ubuntu, sans-serif;'};
      ${props.bc && `background-color: ${props.bc};`};
      ${props.label && `label: -${props.label};`};
      ${props.oa && `overflow: auto;`};
      ${props.pointer && `cursor: pointer`};
      ${props.ellipsis && `
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;`
      }
      ${props.uppercase && 'text-transform: uppercase;'}
      ${props.lowercase && 'text-transform: lowercase;'}
      ${props.pos && `position: ${props.pos};`}
      ${props.overflow && `overflow: ${props.overflow};`}
      ${props.hide && 'display: none;'}
      ${props.nowrap && 'white-space: nowrap;'}
      ${props.z1 && 'z-index: 1;'}
      ${props.z && `z-index: ${props.z};`}
      ${props.wi && `width: ${props.wi};`}
      ${props.mw && `max-width: ${props.mw};`}
      ${props.op && `opacity: ${props.op};`}
      ${props.top && `top: ${props.top};`}
      ${props.bo && `bottom: ${props.bo};`}
      ${props.bor && `border-radius: ${props.bor};`}
      ${props.le && `left: ${props.le};`}
      ${props.ri && `right: ${props.ri};`}
      ${props.maxh && `max-height: ${props.maxh};`}
      ${props.minw && `min-width: ${props.minw};`}
      ${props.mh && `min-height: ${props.mh};`}
      ${props.lh && `line-height: ${props.lh};`}
      ${props.i && `font-style: italic;`}
    `
    this.h = css`
      label: -header;
      font-family: ubuntu, sans-serif;
      color: inherit;
      font-weight: 500;
      line-height: 1.2;
    `
    this.cssp = css`
      font-family: ubuntu, sans-serif;
      color: inherit;
      font-weight: 400;
      line-height: 1.2;
    `
    this.h1 = styled.h1`
      ${this.h};
      label: -h1;
      font-size: ${pxToRem('35px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.h2 = styled.h2`
      ${this.h};
      label: -h2;
      font-size: ${pxToRem('22px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.h3 = styled.h3`
      ${this.h};
      label: -h3;
      font-size: ${pxToRem('18px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.h4 = styled.h4`
      ${this.h};
      label: -h4;
      font-size: ${pxToRem('16px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.h5 = styled.h5`
      ${this.h};
      label: -h5;
      font-size: ${pxToRem('14px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.h6 = styled.h6`
      ${this.h};
      label: -h6;
      font-size: ${pxToRem('12px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.p1 = styled.p`
      ${this.cssp};
      label: -p2;
      font-size: ${pxToRem('22px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.p2 = styled.p`
      ${this.cssp};
      label: -p2;
      font-size: ${pxToRem('22px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.p3 = styled.p`
      ${this.cssp};
      label: -p3;
      font-size: ${pxToRem('18px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.p4 = styled.p`
      ${this.cssp};
      label: -p4;
      font-size: ${pxToRem('16px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.p5 = styled.p`
      ${this.cssp};
      label: -p5;
      font-size: ${pxToRem('14px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.p6 = styled.p`
      ${this.cssp};
      label: -p6;
      font-size: ${pxToRem('11px')};
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.main = styled.main`
      label: -main;
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.spacer = styled.div`
      label: -spacer;
      flex: 1;
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.p = styled.p`
      label: -p;
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.div = styled.div`
      label: -div;
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.header = styled.header`
      label: -div;
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.section = styled.section`
      label: -section;
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.a = styled.a`
      label: -anchor;
      text-decoration: none;
      color: inherit;
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.ins = styled.ins`
      label: -insert;
      color: inherit;
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.ul = styled.ul`
      label: -ul;
      color: inherit;
      padding: 0;
      margin: 0;
      ${this.flex as any};
      ${this.dynamic as any};
    `
    this.li = styled.li`
      list-style-type: circle;
      padding: 0;
      label: -ul;
      color: inherit;
      ${this.flex as any};
      ${this.dynamic as any};
    `
  }
}

const e = new Elements()

export default e
