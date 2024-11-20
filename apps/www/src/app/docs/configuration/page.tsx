import { CodeBlock } from "@/components/codeBlock";

export const metadata: Metadata = {
  title: "Configurations - GateUI",
  description:
    "Configure your application using GateUI Identity Management Library.",
};

export default function InstallPage() {
  // --- RENDER ---

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 font-mono">Configuring GateUI</h1>

      <section className="mb-8">
        <code className="bg-neutral-700 p-1">gateui.json</code> is located at
        the root of your project and we use it to understand your project and
        configure the features your install.
        <p className="mt-2">
          Configuration fields are automatically created with each install, but
          I highly recommend reviewing them afterwards.
        </p>
      </section>

      <h2 className="text-xl font-semibold mb-4 font-mono">Structure</h2>
      <CodeBlock
        className="max-w-[750px]"
        code={`
        {
  # Supabase clients location. 
  "supabase": {
    "client": "./lib/supabase/client", 
    "serverClient": "./lib/supabase/server"
  },
  # Aliases of the folders where the installed features will be saved.
  "aliases": { 
    "components": "./components/",
    "lib": "./lib/",
  },
  # Authentication specific configurations
  "authentication": {
    "methods": ["password", "magic_link", "google"],
    "callbackURL": "/auth/callback",
    "emailConfirmURL": "/auth/confirm"
  },
  # User management configurations
  user: {
    # Coming Soon
  }
  # Organization management configurations
  organization: {
    # Coming Soon
  }
  # Access Control Configurations
  accessControl: {
    # Coming Soon
  }
}`}
        language="json"
      />
    </div>
  );
}
