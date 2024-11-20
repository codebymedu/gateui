"use client";
import { CodeBlock as ReactCodeBlock } from "react-code-block";
import { themes } from "prism-react-renderer";
import { useCopyToClipboard } from "react-use";
import { cn } from "@/lib/utils";

export function CodeBlock({
  code,
  language,
  className,
}: {
  code: string;
  language: string;
  className?: string;
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
      <ReactCodeBlock.Code
        className={cn(
          "border rounded-none w-full max-w-[500px] p-4 pt-16 md:pt-4 relative text-wrap",
          className
        )}
      >
        <div className="absolute top-4 left-4 md:hidden">{language}</div>
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
