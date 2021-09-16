import React from 'react';
import tw from 'twin.macro';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactContainer = tw.div`
max-w-7xl container mx-auto px-4 sm:px-6 mt-16 lg:mt-24 mb-40
`;

const AboutPage = () => (
    <Layout>
        <SEO title="Contact" />
        <h1 className="invisible">
            {PageTitle}
        </h1>

        <ContactContainer>
            <h4>
                Contact me
            </h4>

        </ContactContainer>
    </Layout>
);

export default AboutPage;
