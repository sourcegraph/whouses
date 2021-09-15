export const examples = ["vercel", "lodash", "passport", "express"];
export const url1 = "https://sourcegraph.com/search?q=context:global+%5C%22";
export const url2 =
  '%5C":%5Cs%5C"%5B0-9a-zA-Z-~%5E*.%2B><%3D%7C%5Cs%5D%2B%5C"+file:%5Epackage%5C.json&patternType=regexp';

export const generateExamples = () => {
  return examples.map((e) => {
    return (
      <a className="card" href={url1+e+url2}>
        {e}
      </a>
    );
  });
};
