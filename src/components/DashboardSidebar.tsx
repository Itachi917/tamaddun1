import { 
  Droplets, Zap, HardHat, LayoutDashboard, Home, MessageSquare, Store 
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/components/language-provider";
import { translations } from "@/lib/translations";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader,
} from "@/components/ui/sidebar";

export function DashboardSidebar() {
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const staffItems = [
    { title: t.sidebar.overview, url: "/dashboard", icon: LayoutDashboard },
    { title: t.sidebar.water, url: "/dashboard/staff/water", icon: Droplets },
    { title: t.sidebar.electricity, url: "/dashboard/staff/electricity", icon: Zap },
    { title: t.sidebar.construction, url: "/dashboard/staff/construction", icon: HardHat },
    { title: t.sidebar.chat, url: "/dashboard/staff/chat", icon: MessageSquare },
  ];

  const customerItems = [
    { title: t.sidebar.servicePortal, url: "/dashboard/customer", icon: Store },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Tamaddun Logo" className="h-8 w-8 shrink-0 rounded-lg object-contain" />
          <span className="font-display text-lg font-bold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
            Tamaddun
          </span>
        </NavLink>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t.sidebar.staffLabel}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {staffItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink to={item.url} end={item.url === "/dashboard"} className="hover:bg-sidebar-accent flex items-center gap-2" activeClassName="bg-sidebar-accent text-sidebar-primary font-medium">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>{t.sidebar.customerLabel}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {customerItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <NavLink to={item.url} className="hover:bg-sidebar-accent flex items-center gap-2" activeClassName="bg-sidebar-accent text-sidebar-primary font-medium">
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
                <SidebarMenuButton asChild tooltip={t.sidebar.backHome}>
                  <NavLink to="/" className="hover:bg-sidebar-accent flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>{t.sidebar.backHome}</span>
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
