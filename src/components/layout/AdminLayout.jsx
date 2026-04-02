import Sidebar from "./Sidebar";
import Header from "./Header";

export default function AdminLayout({ children }) {
  return (
    <div className="flex bg-[#F6F8FB] min-h-screen">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1">

        <Header />

        <div className="p-6">
          {children}
        </div>

      </div>
    </div>
  );
}