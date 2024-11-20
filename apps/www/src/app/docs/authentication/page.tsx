import { CodeBlock } from "@/components/codeBlock";
import { buttonVariants } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication Guide - GateUI",
  description:
    "Setup authentication in your application using GateUI Identity Management Library.",
};

export default function AuthenticationPage() {
  // --- RENDER ---

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold mb-2 font-mono flex gap-4 items-center">
          Setup Authentication
          <div className="py-1 px-2 flex gap-2 items-center bg-green-500 text-sm">
            <Clock size={16} /> Saves 16 hours of work
          </div>
        </h1>

        <p className="mb-6 text-neutral-400">
          Everything for handling authenticating users
        </p>

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

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">Installation</h2>

          <ol className="list-decimal pl-6 mb-4">
            <li>Open your terminal</li>
            <li>Navigate to your project folder</li>
            <li>Run the following command:</li>
          </ol>

          <CodeBlock code="npx @gateui/cli add auth" language="js" />

          <p>
            This will copy all the authentication code to your codebase.
            Continue below to see more in details what is added to the codebase.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 font-mono">How to use</h2>

          <p className="mb-2">
            All you need to do is use the Login component in where you want the
            login to be such as in a /login route or modal.
          </p>

          <p className="mb-8">
            Login component also contains the signup component so there is no
            need to create a separate route for signup. But if you wish to do
            so, the Signup component is also exported from @/components/auth
          </p>

          <p className="mb-2 font-bold">Example Login Page</p>

          <CodeBlock
            code={`
            import { Login } from "@/components/auth";

export default function LoginPage() {
  // --- RENDER ---

  return (<div>
    <h1>Welcome to MyApp</h1>
    
    <LoginForm />
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
            <li>Components: @/components/auth/</li>
            <li className="ml-4">
              Exports: Login, SignUp, ForgotPassword, Logout
            </li>
            <li>Lib: @/lib/auth</li>
            <li className="ml-4">
              Exports: getUser, loginWithPassword, loginWithProvider,
              loginWithMagicLink, signUpWithPassword, logout
            </li>
            <li>Routes: /auth/callback and /auth/confirm</li>
          </ul>
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
