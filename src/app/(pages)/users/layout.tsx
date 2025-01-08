import Navbar from "@/components/navbar/Navbar";
import RecentBlogsList from "@/components/sidebar/RecentBlogsList";
import Sidebar from "@/components/sidebar/Sidebar";
import { ToastContainer } from "react-toastify";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <ToastContainer autoClose={4000} />
      <Sidebar>
        <RecentBlogsList />
      </Sidebar>
      <div className="bg-secbackground flex-1 text-blackText flex flex-col justify-between transition-colors duration-300 ease-in-out">
        <Navbar />
        <div className="py-4 px-12">{children}</div>

        <footer className="bg-secbackground main-footer sticky bottom-0 text-center py-2">
          <div className="main-footer-pagination"></div>
          <p>&copy; 2025 Blog AI Generator by Shubham Nanaware</p>
        </footer>
      </div>
    </div>
  );
}
