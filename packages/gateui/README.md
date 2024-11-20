# GateUI

[![npm version](https://img.shields.io/npm/v/@gateui/cli.svg)](https://www.npmjs.com/package/gateui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

GateUI is a simple and powerful identity management solution for Next.js applications using Supabase.

## Features

- 🚀 **Automatic Supabase Setup**: Streamlined configuration process for Supabase
- 🔐 **Authentication**: Easy-to-use components for login, signup, and password reset
- 👤 **User Management**: Built-in components for user profiles and account settings
- 🏢 **Organization Management**: (Coming Soon) Manage teams and organizations
- 🔑 **Access Control**: (Coming Soon) Implement role-based access control

## Installation

To install GateUI in your Next.js project, run:

```bash
npx @gateui/cli init
```

This command will set up GateUI and guide you through the configuration process.

## Quick Start

After installation, you can start using GateUI features in your Next.js pages:

```bash
npx @gateui/cli add auth
```

```tsx
import { Login } from "@/components/auth";

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <Login />
    </div>
  );
}
```

## Documentation

For detailed usage instructions, API references, and examples, visit our [documentation](https://gateui.com/docs/install).

## Requirements

- Next.js 14+ with App Router
- TypeScript
- Supabase project

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/codebymedu/gateui/issues) on GitHub.

## License

GateUI is [MIT licensed](https://github.com/codebymedu/gateui/blob/main/LICENSE.md).
