# @simple-component/markdown

React component for rendering markdown content with configurable options.

## Installation

<details>
  <summary>NPM</summary>
  ```bash
  npm install @simple-component/markdown
  ```
</details>

<details>
  <summary>Yarn</summary>
  ```bash
  yarn add @simple-component/markdown
  ```
</details>

## Usage

Simple usage of the `Markdown` component passing the content as the children property.

```jsx
import React from "react";
import { Markdown } from "@simple-component/markdown";

const App = () => {
  return <Markdown># Hello World</Markdown>;
};
```

Using the `value` property to pass the markdown content.

```jsx
import React from "react";
import { Markdown } from "@simple-component/markdown";

const App = () => {
  return <Markdown value={"# Hello World"} />;
};
```
