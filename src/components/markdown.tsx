import React from 'react';
import Markdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

interface RenderedMarkdownProps {
    body: string,
}

const RenderedMarkdown = ({
  body,
}: RenderedMarkdownProps) => (
  <Markdown
    rehypePlugins={[rehypeSlug]}
    components={{
      p: ({ node, children }) => {
        if (node.children[0].tagName === 'img') {
          const image: any = node.children[0];
          return (
            <figure className="image">
              <Zoom
                overlayBgColorEnd="#ffc701"
                overlayBgColorStart="#ffc701"
              >
                <img
                  className="w-full"
                  src={image.properties.src}
                  alt={image.properties.alt}
                />
              </Zoom>
              <figcaption>
                {' '}
                {image.properties.alt}
                {' '}
              </figcaption>
            </figure>
          );
        }
        // Return default child if it's not an image
        return <p>{children}</p>;
      },
    }}
    transformImageUri={(uri) => (uri.startsWith('http') ? uri : `${process.env.API_URL}${uri}`)}
  >
    {body}
  </Markdown>
);

export default RenderedMarkdown;
