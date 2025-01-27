import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import { AppSidebar } from "../@/components/app-sidebar.tsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      <main className="mx-auto">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
