"use client";
import { CodeBlock as ReactCodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import { useCopyToClipboard } from "react-use";

export function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  // --- STATE ---

  const [state, copyToClipboard] = useCopyToClipboard();

  // --- CALLBACKS ---

  const copyCode = () => {
    copyToClipboard(code);
  };

  // --- RENDER ---

  return (
    <ReactCodeBlock code={code} language={language} theme={themes.oneDark}>
      <ReactCodeBlock.Code className="border rounded-none w-full max-w-[500px] p-4 relative">
        <div className="table-row">
          <ReactCodeBlock.LineContent className="table-cell">
            <ReactCodeBlock.Token />
          </ReactCodeBlock.LineContent>

          <button
            className=" border px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
            onClick={copyCode}
          >
            {state.value ? "Copied!" : "Copy code"}
          </button>
        </div>
      </ReactCodeBlock.Code>
    </ReactCodeBlock>
  );
}