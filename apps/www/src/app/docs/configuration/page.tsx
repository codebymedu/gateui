import { CodeBlock } from "@/components/codeBlock";

export default function InstallPage() {
  // --- RENDER ---

  return (
    <div>
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
    "hooks": "./hooks/",
    "actions": "./actions/"
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
