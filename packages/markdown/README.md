# @simplecomponent/markdown

React component for rendering markdown content with pre-configured `yaml` frontmatter handler.

The component uses originally the [`react-markdown`](https://www.npmjs.com/package/react-markdown)
library with the plugins [`remark-gfm`](https://www.npmjs.com/package/remark-gfm),
[`remark-frontmatter`](https://www.npmjs.com/package/remark-frontmatter) and
[`remark-parse-frontmatter`](https://www.npmjs.com/package/remark-parse-frontmatter).

It extends the properties of the original component and also maintains the original behaviour.

## Installation

The package is available at npmjs.org registry, it can be installed using your favorite package
manager, such as `npm` or `yarn`. Because it is a react component, the package does not include
the `react` dependency, but they are required to use the component. Make sure the `react` component
is present in your project.

### NPM

```bash
npm install @simplecomponent/markdown
```

### YARN

```bash
yarn add @simplecomponent/markdown
```

## Usage

Simple usage of the `Markdown` component passing the content as the children property, based on
the original implementation:

```jsx
import React from "react";
import { Markdown } from "@simplecomponent/markdown";

const App = () => {
  return <Markdown># Hello World</Markdown>;
};
```

Using the `value` property to pass the markdown content instead of the children property:

```jsx
import React from "react";
import { Markdown } from "@simplecomponent/markdown";

const App = () => {
  return <Markdown value={"# Hello World"} />;
};
```

### Parsing YAML Frontmatter

The component also parses the `yaml` frontmatter from the markdown content:

```jsx
import React from "react";
import { Markdown } from "@simplecomponent/markdown";

const markdown = `---
title: Hello World
---

# Hello World
`;

const App = () => {
  return <Markdown value={markdown} />;
};
```

To access the frontmatter data, two new optional properties are now available in the component,
the `BeforeDataComponent` and `AfterDataComponent`. These properties receives a component type
with the data property, they will be rendered before and after the markdown content, respectively.

```jsx
import React from "react";
import { Markdown } from "@simplecomponent/markdown";

const markdown = `---
image: "https://example.com/image.jpg"
author: "John Doe"
published: "2021-01-01 00:00:00"
---

# Hello World

This is a simple example.
`;

const HeroImage = ({ data }) => {
  return (
    <div>
      <img src={data.image} alt="Hero Image" />
    </div>
  );
};

const Author = ({ data }) => {
  return (
    <div>
      <p>
        Author: {data.author} - Published at {data.published}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <Markdown
      value={markdown}
      BeforeDataComponent={HeroImage}
      AfterDataComponent={Author}
    />
  );
};
```

The result of the example above will be the following HTML structure (excluding the comments):

```html
<div>
  <!-- The BeforeDataComponent -->
  <div>
    <img src="https://example.com/image.jpg" alt="Hero Image" />
  </div>
  <!-- The markdown content parsed -->
  <div>
    <h1>Hello World</h1>
    <p>This is a simple example.</p>
  </div>
  <!-- The AfterDataComponent -->
  <div>
    <p>Author: John Doe - Published at 2021-01-01 00:00:00</p>
  </div>
</div>
```

### Customizing the Markdown Component

Read more the original [`react-markdown`](https://www.npmjs.com/package/react-markdown) documentation to
learn how to customize the component and its API usage.

## License

The package is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
