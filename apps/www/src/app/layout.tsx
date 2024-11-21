import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DocsSidebar } from "./_components/sideBar";
import { NavBar } from "./_components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GateUI - Open Source Identity Management Library",
  description:
    "A secure and lightweight library for managing authentication and authorization in modern web applications using Next.JS and Supabase.",
  keywords: [
    "identity management",
    "authentication",
    "authorization",
    "Next.js",
    "open source",
    "supabase",
  ],
  applicationName: "@gateui/cli",
  authors: [{ name: "Meduard Krasniqi", url: "https://codebymedu.com" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://gateui.com",
    title: "GateUI - Open Source Identity Management Library",
    description:
      "A secure and lightweight library for managing authentication and authorization in modern web applications using Next.JS and Supabase.",
    siteName: "@gateui/cli",
  },
  twitter: {
    card: "summary_large_image",
    site: "@codebymedu",
    creator: "@codebymedu",
    title: "GateUI - Open Source Identity Management Library",
    description:
      "A secure and lightweight library for managing authentication and authorization in modern web applications using Next.JS and Supabase.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono dark`}
      >
        <SidebarProvider>
          <DocsSidebar />

          <main className="p-2 w-full">
            <header className="w-full flex flex-col md:flex-row justify-between items-start  md:items-center">
              <SidebarTrigger />

              <NavBar />
            </header>
            <div className="p-4 md:p-16 leading-7">{children}</div>{" "}
            <footer>
              <p className="w-full text-center py-4">
                Build with ❤️ by{" "}
                <a
                  href="https://codebymedu.com"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Medu.
                </a>{" "}
                Inspired by{" "}
                <a
                  href="https://ui.shadcn.com/"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  shadcn/ui.
                </a>{" "}
                Built for Next.js & Supabase community.
              </p>
            </footer>
          </main>
        </SidebarProvider>
        <script
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
      </body>
    </html>
  );
}
