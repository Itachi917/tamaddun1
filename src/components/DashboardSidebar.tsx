import { 
  Droplets, 
  Zap, 
  HardHat, 
  LayoutDashboard, 
  Home, 
  MessageSquare, 
  Store 
} from "lucide-react";
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

const staffItems = [
  { title: "Overview", url: "/dashboard", icon: LayoutDashboard },
  { title: "Water System", url: "/dashboard/staff/water", icon: Droplets },
  { title: "Electricity", url: "/dashboard/staff/electricity", icon: Zap },
  { title: "Construction", url: "/dashboard/staff/construction", icon: HardHat },
  { title: "Staff Chat", url: "/dashboard/staff/chat", icon: MessageSquare },
];

const customerItems = [
  { title: "Service Portal", url: "/dashboard/customer", icon: Store },
];

export function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <NavLink to="/" className="flex items-center gap-2">
          
          {/* --- IMAGE LOGO START --- */}
          {/* Make sure to put your logo.png in the public folder */}
          <img 
            src="/logo.png" 
            alt="Tamaddun Logo" 
            className="h-8 w-8 shrink-0 rounded-lg object-contain" 
          />
          {/* --- IMAGE LOGO END --- */}

          <span className="font-display text-lg font-bold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            Tamaddun
          </span>
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        
        {/* --- GROUP 1: STAFF PORTAL --- */}
        <SidebarGroup>
          <SidebarGroupLabel>Staff Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {staffItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      end={item.url === "/dashboard"}
                      className="hover:bg-sidebar-accent flex items-center gap-2"
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

        {/* --- GROUP 2: CUSTOMER PORTAL --- */}
        <SidebarGroup>
          <SidebarGroupLabel>Customer Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink
                      to={item.url}
                      className="hover:bg-sidebar-accent flex items-center gap-2"
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

        {/* --- BOTTOM GROUP: HOME LINK --- */}
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Back to Home">
                  <NavLink to="/" className="hover:bg-sidebar-accent flex items-center gap-2">
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
