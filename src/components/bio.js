/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Written by <strong>{author.name}</strong> {author.summary}
        {` `}
        You should follow him on
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
           Twitter
        </a>
        {`, `}
        <a href={`https://linkedin.com/${social.linkedin}`}>
           Linked In
        </a>
        {`.`}
      </p>
    </div>
  )
}

export default Bio
