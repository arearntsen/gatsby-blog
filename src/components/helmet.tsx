import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

type Props = {
  children?: React.ReactNode
}

const HelmetComp = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query HelmetQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
    )}
  />
)

export default HelmetComp
