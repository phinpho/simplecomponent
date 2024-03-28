export const extractFrontmatterObject = (state: unknown): object => {
  if (typeof state !== "object" || state === null) return {};
  if (!("options" in state)) return {};
  if (typeof state.options !== "object" || state.options === null) return {};
  if (!("file" in state.options)) return {};
  if (typeof state.options.file !== "object" || state.options.file === null)
    return {};
  if (!("data" in state.options.file)) return {};
  if (
    typeof state.options.file.data !== "object" ||
    state.options.file.data === null
  )
    return {};
  if (!("frontmatter" in state.options.file.data)) return {};
  if (
    typeof state.options.file.data.frontmatter !== "object" ||
    state.options.file.data.frontmatter === null
  )
    return {};

  return state.options.file.data.frontmatter;
};