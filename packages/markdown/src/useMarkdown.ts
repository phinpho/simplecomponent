import { type ReactNode, useState, useEffect } from "react";

export type UseMarkdownOptions = {
  value?: string;
  href?: string;
  children?: ReactNode;
};

export const useMarkdown = ({ value, children, href }: UseMarkdownOptions) => {
  const [content, setContent] = useState<string>(value || (typeof children === "string" ? children : ""));
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (href && !loaded) {
      fetch(href).then((response) => {
        if (response.ok) {
          response.text().then((text) => setContent(text));
        } else {
          throw new Error(`Failed to fetch markdown from "${href}"`);
        }
        setLoaded(true);
      });
    }
  }, [href, loaded, setContent]);

  return {
    content,
  }
}