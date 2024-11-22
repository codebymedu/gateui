import { CodeBlock } from "@/components/codeBlock";
import { buttonVariants } from "@/components/ui/button";
import { Clock } from "lucide-react";
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
  title: "User Management - GateUI",
  description:
    "Setup user management in your application using GateUI Identity Management Library.",
};

export default function InstallPage() {
  // --- RENDER ---

  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-bold mb-2 font-mono flex md:flex-row gap-4 items-start flex-col-reverse md:items-center">
          Setup User Management{" "}
          <div className="py-1 px-2 flex gap-2 items-center bg-green-500 text-sm">
            <Clock size={16} /> Saves 14 hours of work
          </div>
        </h1>

        <p className="mb-6 text-neutral-400">
          Everything for letting users manage their accounts
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

          <CodeBlock code="npx @gateui/cli add user" language="js" />

          <p>
            This will copy all the user management code to your codebase.
            Continue below to see more in details what is added to the codebase.
          </p>
        </section>

        <section className="mb-16">
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

        <section className="mb-16">
          <h2 className="text-xl font-semibold mb-2 font-mono">
            What is installed
          </h2>

          <p className="mb-2">
            All the necessary code has been installed in the following places:
          </p>

          <Table>
            <TableCaption>User Components and Functions</TableCaption>
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
                <TableCell>@/components/user/</TableCell>
                <TableCell>
                  Exports: UserProfile, UserProfileDetails, UserProfileSecurity
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lib</TableCell>
                <TableCell>@/lib/user</TableCell>
                <TableCell>Exports: updateUser</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </section>

        <section className="mb-16 border p-4 rounded-md w-fit">
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
