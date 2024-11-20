import { CodeBlock } from "@/components/codeBlock";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function InstallPage() {
  // --- RENDER ---

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold mb-6 font-mono">
          Setup Authentication
        </h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">
            Prerequisites
          </h2>
          <ul className="list-disc pl-6">
            <li>GateUI Installed</li>
          </ul>
          <p className="mt-2">
            If you haven't installed GateUI yet, follow the{" "}
            <Link
              href="http://localhost:3000/docs/install"
              className="text-blue-600 hover:underline"
            >
              GateUI installation guide
            </Link>
            .
          </p>
        </section>

        <section className="mb-8 border p-4 rounded-md w-fit">
          <h2 className="text-xl font-semibold mb-2 font-mono">
            Next Steps: User Management (optional)
          </h2>
          <p className="mb-4">
            Learn how to install user management features such as user profile.
          </p>
          <Link
            href="/docs/user"
            className={buttonVariants({
              variant: "default",
              className: "text-white",
            })}
          >
            User Management
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
            on my GitHub repository. I'll respond as soon as possible.
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
