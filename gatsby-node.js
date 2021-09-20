/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.onCreateWebpackConfig = ({ actions, plugins, stage }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         path: require.resolve('path-browserify'),
//       },
//       fallback: {
//         fs: false,
//         assert: require.resolve('assert/'),
//       },
//     },
//   });
//   if (stage === 'build-javascript' || stage === 'develop') {
//     actions.setWebpackConfig({
//       plugins: [plugins.provide({ process: 'process/browser' })],
//     });
//   }
// };
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
        }
        next {
          title
          slug
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
        path: `/projects/${project.node.slug}`,
        component: ProjectTemplate,
        context: {
          slug: project.node.slug,
          name: project.node.title,
          next: project.next ? project.next.slug : null,
        },
      });
    });
  });
};

const crypto = require('crypto');

module.exports.onCreateNode = async ({ node, actions, createNodeId }) => {
  if (node.internal.type === 'StrapiProject') {
    const newNode = {
      id: createNodeId(`StrapiProjectContent-${node.id}`),
      parent: node.id,
      children: [],
      internal: {
        content: node.body || ' ',
        type: 'StrapiProjectContent',
        mediaType: 'text/markdown',
        contentDigest: crypto
          .createHash('md5')
          .update(node.body || ' ')
          .digest('hex'),
      },
    };
    actions.createNode(newNode);
    actions.createParentChildLink({
      parent: node,
      child: newNode,
    });
  }
};
