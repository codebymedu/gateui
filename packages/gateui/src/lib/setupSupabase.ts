import { exec } from "child_process";
import fs from "fs";
import path from "path";
import {
  supabaseClientClient,
  supabaseAuthMiddleware,
  supabaseServerClient,
  readme,
} from "../features/supabase";

export const setupSupabase = (libAlias: string) => {
  // Install required libraries
  exec(
    "npm install @supabase/supabase-js @supabase/ssr",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error installing packages: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }

      // Define the content for each file
      const supabaseContent = {
        client: supabaseClientClient,
        serverClient: supabaseServerClient,
        middleware: supabaseAuthMiddleware,
        README: readme,
      };

      // Resolve the base directory path
      const baseDir = path.resolve(process.cwd(), libAlias);

      // Ensure the directory exists
      if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
      }

      // Write the alias strings to their respective files within the `supabase` folder
      Object.keys(supabaseContent).forEach((alias) => {
        const filePath = path.join(
          baseDir,
          "supabase",
          `${alias}.${alias === "readme" ? "md" : "ts"}`
        );
        const content = supabaseContent[alias];

        // Create the 'supabase' folder if it doesn't exist
        const supabaseFolderPath = path.dirname(filePath);
        if (!fs.existsSync(supabaseFolderPath)) {
          fs.mkdirSync(supabaseFolderPath, { recursive: true });
        }

        // Write to the file
        fs.writeFileSync(filePath, content, "utf8");
      });
    }
  );
};
