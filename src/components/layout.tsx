import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

import './layout.css'

type Props = {
  children: React.ReactNode
}

interface Node {
  id: string
  title: string
  slug: string
}

interface Page {
  node: Node
}

const renderPages = (pages: Page[]) => {
  const components = pages.map((page: Page) => (
    <div>{page.node.slug}</div>
  ))

  return components
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        allContentfulBlogPost {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={`${data.site.siteMetadata.title}`} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {renderPages(data.allContentfulBlogPost.edges)}
        </div>
      </>
    )}
  />
)

export default Layout
