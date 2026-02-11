import { Droplets, Zap, HardHat, Bot, LayoutDashboard, Home } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "Water", url: "/dashboard/water", icon: Droplets },
  { title: "Electricity", url: "/dashboard/electricity", icon: Zap },
  { title: "Construction", url: "/dashboard/construction", icon: HardHat },
  { title: "AI Hub", url: "/dashboard/chat", icon: Bot },
];

export function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sidebar-primary to-[hsl(200,85%,50%)]">
            <span className="text-sm font-bold text-sidebar-primary-foreground">T</span>
          </div>
          <span className="font-display text-lg font-bold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            Tamaddun
          </span>
        </NavLink>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-medium"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Back to Home">
                  <NavLink to="/" className="hover:bg-sidebar-accent">
                    <Home className="h-4 w-4" />
                    <span>Back to Home</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
