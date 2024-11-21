#!/usr/bin/env node

import fs from "fs";
import inquirer from "inquirer";
import chalk from "chalk";
import { setupSupabase } from "../lib/setupSupabase";

// Define the structure of the config
interface Config {
  supabase: {
    client: string;
    serverClient: string;
  };
  aliases: {
    components: string;
    lib: string;
  };
}

// Function to ask questions
async function askQuestions(): Promise<Config> {
  const config: Config = {
    supabase: {
      client: "./src/lib/supabase/client",
      serverClient: "./src/lib/supabase/serverClient",
    },
    aliases: {
      components: "./src/components/",
      lib: "./src/lib/",
    },
  };

  // Step 2: Ask for aliases for components and lib
  const aliasAnswers = await inquirer.prompt([
    {
      type: "input",
      name: "componentsAlias",
      message: "Enter the path for the components alias (e.g., ./components/):",
      default: "./src/components/",
    },
    {
      type: "input",
      name: "libAlias",
      message: "Enter the path for the lib alias (e.g., ./lib/):",
      default: "./src/lib/",
    },
  ]);

  // Step 1: Ask if Supabase is configured
  const { supabaseConfigured } = await inquirer.prompt([
    {
      type: "confirm",
      name: "supabaseConfigured",
      message: "Is Supabase configured?",
      default: false,
    },
  ]);

  // If Supabase is not configured, configure it automatically
  if (!supabaseConfigured) {
    console.log(chalk.cyan("Configuring Supabase for you..."));

    setupSupabase(aliasAnswers.libAlias);

    // Simulate the Supabase setup process (handle actual setup later)
    console.log(chalk.green("\nSupabase has been configured automatically."));

    // Inform the user on what to do next
    console.log(chalk.blue("\nNext steps:"));
    console.log("1. Set the supabase environment variables in your .env file.");
    console.log(
      "2. Import created supabase/middleware.ts in next.js middleware.ts:"
    );
  } else {
    console.log(chalk.green("\nSupabase is already configured."));

    // If Supabase is already configured, ask for the paths to the clients
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "clientPath",
        message:
          "Enter the path for the Supabase client (e.g., ./lib/supabase/client):",
        default: "./src/lib/supabase/client",
      },
      {
        type: "input",
        name: "serverClientPath",
        message:
          "Enter the path for the Supabase server client (e.g., ./lib/supabase/server):",
        default: "./src/lib/supabase/server",
      },
    ]);

    config.supabase.client = answers.clientPath;
    config.supabase.serverClient = answers.serverClientPath;
  }

  config.aliases.components = aliasAnswers.componentsAlias;
  config.aliases.lib = aliasAnswers.libAlias;

  console.log(chalk.green("\ngateui.json has been created."));

  return config;
}

async function saveConfig(config: Config) {
  const configFilePath = "./gateui.json";

  fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2));
  console.log(`Configuration saved to ${configFilePath}`);
}

// Main function to execute the flow
async function main() {
  const config = await askQuestions();
  await saveConfig(config);
}

main();
