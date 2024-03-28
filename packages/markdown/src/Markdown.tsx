import { type ComponentType, type ForwardedRef, type PropsWithChildren, forwardRef, type AriaAttributes } from 'react';
import { default as ReactMarkdown } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkFrontMatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import { useMarkdown } from './useMarkdown';
import { useHandler } from './useHandler';

export type MarkdownProps = PropsWithChildren<{
  className?: string;
  components?: Parameters<typeof ReactMarkdown>[0]["components"];
  AfterDataComponent?: ComponentType<{ data: object }>;
  BeforeDataComponent?: ComponentType<{ data: object }>;
  href?: string;
  value?: string;
}> & AriaAttributes;

export const Markdown = forwardRef(
  function Markdown({
    className,
    href,
    value,
    components,
    AfterDataComponent,
    BeforeDataComponent,
    children,
    ...props
  }: MarkdownProps, ref: ForwardedRef<HTMLDivElement>) {
    const { content } = useMarkdown({ value, children, href });
    const { data, yaml } = useHandler();

    return (
      <div className={className} ref={ref} {...props}>
        {BeforeDataComponent && data && (<BeforeDataComponent data={data} />)}
        <ReactMarkdown
          components={components}
          remarkPlugins={[
            remarkGfm,
            [remarkFrontMatter, { type: "yaml", marker: "-" }],
            remarkParseFrontmatter,
          ]}
          remarkRehypeOptions={{ handlers: { yaml }}}
        >
          {content}
        </ReactMarkdown>
        {AfterDataComponent && data && (<AfterDataComponent data={data} />)}
      </div>
    );
  }
);