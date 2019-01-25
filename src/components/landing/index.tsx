import React from 'react'
import e from '../elements'
import Top from './top'
import BlogSummary from './blogsummary'
import Background from './background'

type Props = {
  children?: React.ReactNode
}

const Landing = ({ children }: Props) => (
    <>
    <e.div h="100vh">
      <Top />
    </e.div>
    <Background>
      <BlogSummary />
    </Background>
    </>
)

export default Landing

/**
 *       <>
        <div css={cssContainer}>
          <Top />
          <BlogSummary />
          {renderPages(data.allContentfulBlogPost.edges)}
        </div>
      </>
 */