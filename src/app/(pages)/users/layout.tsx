import Navbar from "@/components/navbar/Navbar";
import RecentBlogsList from "@/components/sidebar/RecentBlogsList";
import Sidebar from "@/components/sidebar/Sidebar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar>
        <RecentBlogsList />
      </Sidebar>
      <div className="relative flex-1 text-blackText flex flex-col justify-between">
        <Navbar />
        <div className="py-4 px-12">{children}</div>

        <footer className="main-footer sticky bottom-0 text-center py-2 bg-white">
          <div className="main-footer-pagination"></div>
          <p>&copy; 2025 Blog AI Generator by Shubham Nanaware</p>
        </footer>
      </div>
    </div>
  );
}
