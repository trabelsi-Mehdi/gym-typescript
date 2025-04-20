import { Outlet } from "react-router-dom";
import Sidebar from "@/components/sidebar/AppSidebar";
import Topbar from "@/components/topbar/Topbar";
import { SidebarProvider } from "@/context/SidebarContext";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Topbar />
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
