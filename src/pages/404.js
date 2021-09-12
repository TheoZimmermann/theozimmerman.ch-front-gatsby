import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/layout';

const notFoundPage = () => (
    <Layout>
        <SEO title="404 page not found" />
        <h1> Nothing to do here </h1>
        <Link className="big-link" to="/"> go back to home  </Link>
    </Layout>
);
export default notFoundPage;
