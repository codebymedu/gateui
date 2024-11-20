import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DocsSidebar } from "./_components/sideBar";

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

              <span className="text-sm md:text-xl ml-4 md:ml-0 text-neutral-400 font-semibold ">
                GateUI - Fully Functional Auth Components for Next.js and
                Supabase
              </span>
            </header>
            <div className="p-4 md:p-16">{children}</div>{" "}
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
