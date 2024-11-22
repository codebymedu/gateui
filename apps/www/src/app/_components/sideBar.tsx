import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LogIn,
  User,
  Layers,
  Shield,
  Home,
  Download,
  Terminal,
  FileJson,
  Star,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    section: "Authentication",
    links: [
      {
        title: "Authentication Guide",
        url: "/authentication",
        icon: <LogIn />,
      },
    ],
  },
  {
    section: "User",
    links: [{ title: "User Management", url: "/user", icon: <User /> }],
  },
  {
    section: "Organization Management",
    links: [
      {
        title: "Organization Setup",
        url: "/organization-management",
        icon: <Layers />,
      },
    ],
  },
  {
    section: "Access Control",
    links: [
      {
        title: "Access Control Setup",
        url: "/access-control",
        icon: <Shield />,
      },
    ],
  },
] as const;

export function DocsSidebar() {
  return (
    <Sidebar variant="floating" className="">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/"}>
                    <Home />
                    <code className="">Home</code>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/docs/install"}>
                    <Download />
                    <code>Install</code>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href={"/docs/configuration"}>
                    <FileJson />
                    <code>Config</code>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {sections.map((section) => (
          <SidebarGroup key={section.section}>
            <SidebarGroupLabel>{section.section}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.links.map((link) => (
                  <SidebarMenuItem key={link.title}>
                    <SidebarMenuButton className="py-2 h-auto" asChild>
                      <Link href={`/docs/${link.url}`}>
                        {link.icon}
                        <code>{link.title}</code>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <a
          href={"https://github.com/codebymedu/gateui"}
          target="_blank"
          className="border group w-full flex items-center gap-2 p-4 border-primary hover:bg-primary duration-100"
        >
          <Star /> Star on Github
        </a>
      </SidebarFooter>
    </Sidebar>
  );
}
