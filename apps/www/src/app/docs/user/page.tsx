import { CodeBlock } from "@/components/codeBlock";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function InstallPage() {
  // --- RENDER ---

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold mb-6 font-mono">
          Setup User Management
        </h1>

        <p className="mb-6 text-neutral-400">
          Everything for letting users manage their accounts
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">
            Prerequisites
          </h2>

          <ul className="list-disc pl-6">
            <li>GateUI Installed</li>
          </ul>

          <ul className="list-disc pl-6">
            <li>Supabase Installed</li>
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

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">Installation</h2>

          <ol className="list-decimal pl-6 mb-4">
            <li>Open your terminal</li>
            <li>Navigate to your project folder</li>
            <li>Run the following command:</li>
          </ol>

          <CodeBlock code="npx @cdm/gateui add user" language="js" />

          <p>
            This will copy all the user management code to your codebase.
            Continue below to see more in details what is added to the codebase.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">How to use</h2>

          <p className="mb-2">
            All you need to do is use the UserProfile component in your page.
          </p>

          <p className="mb-2 font-bold">Example Profile Page</p>

          <CodeBlock
            className="max-w-[700px]"
            code={`
            import { UserProfile } from "@/components/user";

export default function UserProfilePage() {
  // --- RENDER ---

  return (<div>
    <h1>Welcome to MyApp</h1>
    
    <UserProfile />
    </div>)
}
`}
            language="jsx"
          />
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">
            What is installed
          </h2>

          <p className="mb-2">
            All the necessary code has been installed in the following places:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>Components: @/components/user/</li>
            <li className="ml-4">
              Exports: UserProfile, UserProfileDetails, UserProfileSecurity
            </li>
            <li>Lib: @/lib/user</li>
            <li className="ml-4">Exports: updateUser</li>
          </ul>
        </section>

        <section className="mb-8 border p-4 rounded-md w-fit">
          <h2 className="text-xl font-semibold mb-2 font-mono">
            Next Steps: Access Control (optional)
          </h2>
          <p className="mb-4">
            Learn how to install access control features such as restricting
            pages or using roles.
          </p>
          <Link
            href="/docs/access-control"
            className={buttonVariants({
              variant: "default",
              className: "text-white",
            })}
          >
            Access Control
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
                href="https://supabase.com/docs/guides/auth"
                className="text-blue-600 hover:underline"
              >
                Supabase Authentication Documentation
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}