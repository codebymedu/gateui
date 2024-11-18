#!/usr/bin/env node

/**
 * API:
 * - init
 *  search for supabase in the project
 *  if not found, asks if it exists or want to install
 *  if middleware.ts exists: inform this will overwrite the current middleware.ts
 *
 *
 *
 */

import fs from "fs";
import inquirer from "inquirer";

// Define the default configuration type
type Config = {
  callbackUrl: string;
  authenticationMethod: "magicLink" | "password";
  enabledProviders: ("google" | "" | "none")[];
  aliases: {
    components: string;
    lib: string;
    supabase: string;
  };
};

// Define the default configuration
const defaultConfig: Config = {
  callbackUrl: "http://localhost:3000/auth/callback",
  authenticationMethod: "magicLink",
  enabledProviders: ["google"],
  aliases: {
    components: "@/components",
    lib: "@/lib",
    supabase: "@/lib/supabase",
  },
};

console.log("Hello World! This is GateUI init.");

// Function to ask user for configuration details
async function askQuestions() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "callbackUrl",
      message:
        "Enter callback URL (default: http://localhost:3000/auth/callback):",
      default: defaultConfig.callbackUrl,
    },
    {
      type: "list",
      name: "authenticationMethod",
      message: "Select authentication method:",
      choices: ["magicLink", "password"],
      default: defaultConfig.authenticationMethod,
    },
    {
      type: "checkbox",
      name: "enabledProviders",
      message: "Select enabled providers (you can select none):",
      choices: [
        { name: "Google", value: "google" },
        { name: "None", value: "none" },
      ],
      default: defaultConfig.enabledProviders,
    },
  ]);

  // Adjust enabledProviders array: If "None" is selected, set the array to empty.
  let enabledProviders = answers.enabledProviders;
  if (enabledProviders.includes("none")) {
    enabledProviders = [];
  }

  // Construct the config object based on user input
  const config: Config = {
    callbackUrl: answers.callbackUrl,
    authenticationMethod: answers.authenticationMethod as
      | "magicLink"
      | "password",
    enabledProviders: enabledProviders,
    aliases: defaultConfig.aliases,
  };

  // Write the config to a file
  fs.writeFileSync("auth.json", JSON.stringify(config, null, 2), "utf8");
  console.log("auth.json file has been created with your configuration.");
}

// Run the function to ask questions
askQuestions();
