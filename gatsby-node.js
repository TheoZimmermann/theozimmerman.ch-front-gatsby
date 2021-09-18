/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        path: require.resolve('path-browserify'),
      },
      fallback: {
        fs: false,
        assert: require.resolve('assert/'),
      },
    },
  });
  if (stage === 'build-javascript' || stage === 'develop') {
    actions.setWebpackConfig({
      plugins: [plugins.provide({ process: 'process/browser' })],
    });
  }
};
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
  query projectsQuery {
    allStrapiProject {
        edges {
          node {
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
          next {
            slug
            title
          }
        }
      }
      }
  }
`, { limit: 1000 }).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog articles pages.

    const ProjectTemplate = path.resolve('src/templates/project.tsx');

    result.data.allStrapiProject.edges.forEach((project) => {
      createPage({
      // Path for this page — required
        path: `/project${project.node.slug}`,
        component: ProjectTemplate,
        context: {
          name: project.node.title,
          next: project.next?.slug,
        },
      });
    });
  });
};
