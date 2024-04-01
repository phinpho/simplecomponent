import { useCallback, useState } from "react";
import { extractFrontmatterObject } from "../lib/extractFrontmatterObject";

export const useHandlers = () => {
  const [data, setData] = useState<object>({});

  const yaml = useCallback(
    (state: unknown) => {
      setData(extractFrontmatterObject(state));
      return undefined;
    },
    [setData]
  );

  return {
    data,
    yaml,
  };
}
