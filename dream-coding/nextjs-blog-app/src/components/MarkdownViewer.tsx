'use client';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import remarkGfm from 'remark-gfm';

type Props = {
  content: string;
};
export default function MarkdownViewer({ content }: Props) {
  return (
    <ReactMarkdown
      className="lg:prose-x prose max-w-none"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const { children, className, node, style, ref, ...rest } = props;
          const match = /language-(\w+)/.exec(className ?? '');
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag="div"
              {...rest}
              // eslint-disable-next-line
              style={materialDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className="max-h-60 w-full object-cover"
            src={image.src ?? ''}
            alt={image.alt ?? ''}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
