/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
import SEO from '../components/seo.js';

const Button = tw.button`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        alt="gatsby astronaut"
      />
    </div>
    <Button>Activate</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/using-typescript/">Go to `Using TypeScript`</Link>
  </Layout>
);

export default IndexPage;
