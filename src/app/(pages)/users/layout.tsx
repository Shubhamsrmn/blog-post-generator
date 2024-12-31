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
      <div className="h-[200vh] flex-1">
        <Navbar />
        <div className="py-4 px-12">{children}</div>
      </div>
    </div>
  );
}
