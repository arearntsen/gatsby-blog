import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import e from '../elements';
import moment from 'moment';

type Props = {
  children?: React.ReactNode
}

interface Node {
  id: string
  title: string
  slug: string
  heroImage: any
  createdAt: any
  description: any
}

interface Page {
  node: Node
}

const cssItemImage = css`
  width: 100%;
  height: auto;
`

const renderPages = (pages: Page[]) => {
  const components = pages.map((page: Page) => (
    <e.div fcl w100 mw="500px" bc="#00245C" h="200px" pos="relative" f1 m="20px">
      <e.div h="100px" wi="200px" f1 fcc>
        <img css={cssItemImage} src={page.node.heroImage.file.url}/>
      </e.div>
      <e.div fctl f1 p="10px" ftl h="180px">
        <e.h4 c="white">{moment(page.node.createdAt).format('DD-MM-YY')}</e.h4>
        <e.h4 c="white">{page.node.title}</e.h4>
        <e.p5 c="white">{page.node.description.description}</e.p5>
      </e.div>
    </e.div>
  ))

  return components
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
    query SiteQuery2 {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            id
            createdAt
            title
            description {
              description
            }
            slug
            heroImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `}
    render={data => {
      return (
        <>
          <e.div w100 bc="#00245C" f1 fctc p="100px 0 0 0">
            {renderPages(data.allContentfulBlogPost.edges)}
          </e.div>
        </>
        )
      }
    }
  />
)

export default Layout
