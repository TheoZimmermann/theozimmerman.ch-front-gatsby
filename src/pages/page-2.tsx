/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/destructuring-assignment */
// Gatsby supports TypeScript natively!
import React from 'react';
import { PageProps, Link } from 'gatsby';

import Layout from '../components/layout.js';
import SEO from '../components/seo.js';

const SecondPage = (props: PageProps) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>
      Welcome to page 2 (
      {props.path}
      )
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
