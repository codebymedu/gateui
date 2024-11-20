import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DocsSidebar } from "./_components/sideBar";
import { Github } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

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
  title: "GateUI - Fully Functional Auth Components",
  description:
    "React and Supabase components to setup authentication in minutes.",
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
            <header className="w-full flex justify-between  items-center">
              <div className="">
                <SidebarTrigger />

                <span className="text-xl text-neutral-400 font-semibold ">
                  GateUI - Fully Functional Auth Components for Next.js and
                  Supabase
                </span>
              </div>

              <Link
                href="https://github.com/codebymedu/gateui"
                target="_blank"
                className={buttonVariants({
                  variant: "ghost",
                  className: "rounded-full h-16 w-16",
                })}
              >
                <Github
                  style={{ height: "22px", width: "22px", color: "white" }}
                />
              </Link>
            </header>
            <div className="p-16">{children}</div>{" "}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
