import { CodeBlock } from "@/components/codeBlock";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function InstallPage() {
  // --- RENDER ---

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold mb-6 font-mono">
          Get Started with GateUI
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">
            Prerequisites
          </h2>
          <ul className="list-disc pl-6">
            <li>Next.js 14+ with App Router (app folder)</li>
            <li>TypeScript</li>
            <li>An existing Next.js project</li>
          </ul>
          <p className="mt-2">
            If you haven't installed Next.js yet, follow the{" "}
            <Link
              href="https://nextjs.org/docs/getting-started/installation"
              className="text-blue-600 hover:underline"
            >
              Next.js installation guide
            </Link>
            .
          </p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-xl font-semibold mb-2 font-mono">Installation</h2>
          <ol className="list-decimal pl-6 mb-4">
            <li>Open your terminal</li>
            <li>Navigate to your project folder</li>
            <li>Run the following command:</li>
          </ol>

          <CodeBlock code="npx @cdm/gateui init" language="js" />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">
            What Happens Next
          </h2>
          <ul className="list-disc pl-6">
            <li>GateUI will check if Supabase is configured</li>
            <li>
              If Supabase isn't set up, the installer will guide you through the
              process
            </li>
            <li>A gateui.json file will be created with your configuration</li>
          </ul>
        </section>

        <section className="mb-8 border p-4 rounded-md w-fit">
          <h2 className="text-xl font-semibold mb-2 font-mono">
            Next Steps: Authentication Setup
          </h2>
          <p className="mb-4">
            Learn how to add authentication to your app using GateUI components.
          </p>
          <Link
            href="/docs/authentication"
            className={buttonVariants({
              variant: "default",
              className: "text-white",
            })}
          >
            Authentication Guide
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">Need Help?</h2>
          <p>
            If you encounter any issues, please{" "}
            <Link
              href="https://github.com/codebymedu/gateui/issues"
              className="text-blue-600 hover:underline"
            >
              open an issue
            </Link>{" "}
            on our GitHub repository. We'll respond as soon as possible.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2 font-mono">
            Additional Resources
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <Link
                href="https://supabase.io/docs"
                className="text-blue-600 hover:underline"
              >
                Supabase Documentation
              </Link>
            </li>
            <li>
              <Link
                href="https://supabase.com/docs/guides/getting-started/quickstarts/nextjs"
                className="text-blue-600 hover:underline"
              >
                Supabase Next.js Setup
              </Link>
            </li>
            <li>
              <Link
                href="https://nextjs.org/docs/getting-started/installation"
                className="text-blue-600 hover:underline"
              >
                Next.js Installation Guide
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
