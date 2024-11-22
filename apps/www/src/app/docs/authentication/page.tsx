import { CodeBlock } from "@/components/codeBlock";
import { buttonVariants } from "@/components/ui/button";
import { Clock, Info } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <h1 className="text-3xl font-bold mb-2 font-mono flex md:flex-row gap-4 items-start flex-col-reverse md:items-center">
          Setup Authentication
          <div className="py-1 px-2 flex gap-2 items-center bg-green-500 text-sm">
            <Clock size={16} /> Saves 16 hours of work
          </div>
        </h1>

        <p className="mb-6 text-neutral-400">
          Everything for handling authenticating users
        </p>

        <section className="mb-16">
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

        <section className="mb-16">
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

        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-2 font-mono">How to use</h2>

          <p className="mb-2">
            All you need to do is use the LoginWithMagicLink component in where
            you want the login to be such as in a /login route or modal.
          </p>

          <p className="mb-2 font-bold">Example Login Page</p>

          <CodeBlock
            className="max-w-[700px]"
            code={`
            import { LoginWithMagicLink } from "@/components/auth";
import { getUser } from "@/lib/auth";

export default async function LoginPage() {
  // --- STATE ---
  const isLoggedIn = Boolean(await getUser())

  // --- RENDER ---
  if(isLoggedIn) {
    // redirect to homepage
  }

  return (<div>
    <h1>Welcome to MyApp</h1>
    
    <LoginWithMagicLink enabledProviders={["google"]} />
    </div>)
}
`}
            language="jsx"
          />
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-2 font-mono">API Overview</h2>

          <p className="mb-2">
            All the necessary code has been installed in the following places:
          </p>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Category</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Components</TableCell>
                <TableCell>@/components/auth/</TableCell>
                <TableCell>
                  Exports: LoginWithMagicLink, Logout
                  <br />
                  <span className="text-sm text-muted-foreground">
                    Note: Only Login with magic link or social providers are
                    currently enabled. Signup is not needed since MagicLink
                    automatically creates a user.
                  </span>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lib</TableCell>
                <TableCell>@/lib/auth</TableCell>
                <TableCell>
                  Exports: getUser, loginWithProvider, loginWithMagicLink,
                  logout
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Routes</TableCell>
                <TableCell>/auth/callback</TableCell>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="mb-16 border p-4 rounded-md w-fit">
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

        <section className="mb-16">
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
