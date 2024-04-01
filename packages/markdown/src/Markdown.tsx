import { type ComponentType } from "react";
import { default as ReactMarkdown } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkFrontMatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import { useMarkdown } from "./hooks/useMarkdown";
import { useHandlers } from "./hooks/useHandlers";

type ReactMarkdownProps = Parameters<typeof ReactMarkdown>[0];

/**
 * The properties of the `Markdown` component.
 *
 * @remarks
 *
 * It extends the original properties of the {@link ReactMarkdown | `Markdown`} component from the `react-markdown` library.
 *
 * @see {@link https://www.npmjs.com/package/react-markdown}
 */
export interface MarkdownProps extends ReactMarkdownProps {
  /**
   * The URL to fetch the markdown content from.
   */
  href?: string;

  /**
   * The markdown content to render (can be used instead of `children`)
   */
  value?: string;

  /**
   * The component rendered after the markdown, it receives the extracted data from the frontmatter as a `data` prop
   */
  AfterDataComponent?: ComponentType<{ data: object }>;

  /**
   * The component rendered before the markdown, it receives the extracted from the frontmatter as a `data` prop
   */
  BeforeDataComponent?: ComponentType<{ data: object }>;
}

/**
 * Renders the markdown content
 *
 * @param props The {@link MarkdownProps}
 * @returns The markdown component extended with the {@link MarkdownProps.AfterDataComponent | `AfterDataComponent`} or {@link MarkdownProps.BeforeDataComponent | `BeforeDataComponent`} components
 *
 * @see {@link https://www.npmjs.com/package/react-markdown}
 */
export const Markdown = ({
  href,
  value,
  AfterDataComponent,
  BeforeDataComponent,
  children,
  remarkPlugins,
  remarkRehypeOptions,
  ...props
}: MarkdownProps) => {
  const { content } = useMarkdown({ value, children, href });
  const { data, yaml } = useHandlers();

  return (
    <>
      {BeforeDataComponent && data && <BeforeDataComponent data={data} />}
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          [remarkFrontMatter, { type: "yaml", marker: "-" }],
          remarkParseFrontmatter,
          ...(remarkPlugins || []),
        ]}
        remarkRehypeOptions={{
          ...(remarkRehypeOptions || {}),
          handlers: {
            ...(remarkRehypeOptions?.handlers || {}),
            yaml,
          },
        }}
        {...props}
      >
        {content}
      </ReactMarkdown>
      {AfterDataComponent && data && <AfterDataComponent data={data} />}
    </>
  );
};
