"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/codeBlock";
import { CheckCircle } from "lucide-react";

const features = [
  {
    id: "authentication",
    title: "Authentication",
    description: [
      "User sign-up and login",
      "Login with Magic Link",
      "Social authentication (Google, etc.)",
      "Password reset functionality",
      <span className="text-green-500 flex items-center gap-2">
        <CheckCircle size={16} />
        Saves 16 hours of work
      </span>,
    ],
    installation: "npx @gateui/cli add auth",
  },
  {
    id: "user-management",
    title: "User Management",
    description: [
      "User profile editing",
      "Account deactivation and deletion",
      "Account security management",
      <span className="text-green-500 flex items-center gap-2">
        <CheckCircle size={16} />
        Saves 14 hours of work
      </span>,
    ],
    installation: "npx @gateui/cli add user",
  },
  {
    id: "organization-management",
    title: "Organization Management",
    isComingSoon: true,
    description: [
      "Create and manage organizations",
      "Invite members to organizations",
      "Assign roles within organizations",
      "Organization settings and preferences",
    ],
    installation: "npm install @your-library/organization-management",
  },
  {
    id: "access-controls",
    title: "Access Controls",
    isComingSoon: true,
    description: [
      "Role-based access control (RBAC)",
      "Custom permission sets",
      "API key management",
      "Audit logs for access events",
    ],
    installation: "npm install @your-library/access-controls",
  },
];

export function Features() {
  const [activeTab, setActiveTab] = useState("authentication");

  return (
    <section
      id="features"
      className="container mx-auto px-4 py-20 mt-8 md:mt-16"
    >
      <h3 className="text-3xl font-bold mb-6 text-center">
        But it doesnt have to be this way
      </h3>

      <p className="text-lg max-w-3xl text-center mx-auto mb-12">
        After I finished reputable.so, I was reflecting in the development
        process, well as its clear already, what took the most time was
        authentication.
        <br />
        <br />
        Since I have a lot of ideas, and love to build a lot of apps (
        <a
          href="https://codebymedu.com"
          target="_blank"
          className="text-blue-600 hover:undercover"
        >
          check my portfolio
        </a>
        ) I decided I have to do something about it.
        <br />
        <br />
        Since I love Supabase and having full access to my code, I decided
        against using existing identity managers (such as Clerk)
        <br />
        <br />
        That's when I had the idea to create a reusable library. So I used all
        the code from Reputable.so and all the learnings to create GateUI.
        <br />
        <br /> I actually ended up deleting the authenticaton in Reputable and
        replacing it with GateUI completely.
        {/* Pick and choose the tools you need—all designed to save you time and
        adapt to your app. */}
      </p>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full   max-w-3xl mx-auto"
      >
        <TabsList className="flex w-full flex-wrap h-32 md:h-fit">
          {features.map((feature) => (
            <TabsTrigger
              key={feature.id}
              value={feature.id}
              className="px-3 py-2 text-sm sm:text-base flex-none"
            >
              {feature.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {features.map((feature) => (
          <TabsContent key={feature.id} value={feature.id} className="mt-6">
            {feature.isComingSoon ? (
              <h2>{feature.title} is under development</h2>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
                <ul className="list-disc pl-5 mb-6 ">
                  {feature.description.map((item, index) => (
                    <li key={index} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-2">Installation</h3>
                <CodeBlock code={feature.installation} language="bash" />
              </>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
