import Link from "next/link";
import { LayoutDashboard, History, Home, Bell, Settings } from "lucide-react";
import {
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Validation History",
    url: "#",
    icon: History,
  },
  {
    title: "Alerts",
    url: "#",
    icon: Bell,
  },
  {
    title: "Pipeline Config",
    url: "#",
    icon: Settings,
  },
];

function Sidebar() {
  return (
    <ShadcnSidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl mb-4">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
}

export default Sidebar;