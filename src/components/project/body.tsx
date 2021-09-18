import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Markdown from 'react-markdown';
import tw from 'twin.macro';

const BodyWrapper = tw.h1`
w-full max-w-7xl
`;

const HeaderWrapper = tw.h1`
sticky inset-0 w-full bottom-auto
`;

interface BodyProps {
    project: {
        body: string,
        title: string,
        slug: string,
        strapiId: number,
        shortDescription: string,
        featuredImage: {
            localFile: {
                childImageSharp: {
                    gatsbyImageData: string,
                }
            }
        }
    }
}

const Body = ({ project }: BodyProps) => (
    <div>
        <HeaderWrapper />
        <BodyWrapper>
            <div style={{ display: 'grid' }}>
                <GatsbyImage
                    style={{
                        gridArea: '1/1',
                    }}
                    alt={` ${project.title} project`}
                    image={getImage(project.featuredImage?.localFile)}
                    layout="fullWidth"
                />
                <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: '1/1',
                        position: 'relative',
                        // This centers the other elements inside the hero component
                        placeItems: 'center',
                        display: 'grid',
                    }}
                >
                    <h1 style={{ color: 'white' }}>{project.title}</h1>
                </div>
            </div>
            <div className="uk-section">
                <div className="uk-container uk-container-small">
                    <Markdown escapeHtml={false}>
                        {project.body}
                    </Markdown>
                </div>
            </div>
            next: next ? next.node : null,
        </BodyWrapper>
    </div>
);

export default Body;
