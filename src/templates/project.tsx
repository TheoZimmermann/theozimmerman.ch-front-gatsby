import React from 'react';
import { graphql } from 'gatsby';

import ProjectLayout from '../components/projectLayout';
import ProjectLanding from '../components/project/landing';
import ProjectBody from '../components/project/body';

export const query = graphql`
  query ProjectQuery($slug: String!) {
    strapiProject(slug: { eq: $slug }) {
        body
        title
        slug
        strapiId
        shortDescription
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
    }
  }
`;

const Project = ({ data }) => {
    const project = data.strapiProject;
    const seo = {
        metaTitle: project.title,
        metaDescription: project.shortDescription,
        shareImage: project.featuredImage,
        project: true,
    };

    return (
        <ProjectLayout>
            <ProjectLanding project />
            <ProjectBody project />
        </ProjectLayout>
    );
};

export default Project;
