import MainContainerWrapper from "@/components/common/MainContainerWrapper";
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
    <>
      <ToastContainer autoClose={4000} />
      <Sidebar>
        <RecentBlogsList />
      </Sidebar>
      <MainContainerWrapper>
        <Navbar />
        <div className="py-4 px-12">{children}</div>
        <footer className="bg-secbackground main-footer sticky bottom-0 text-center py-2">
          <div className="main-footer-pagination"></div>
          <p>&copy; 2025 Blog AI Generator by Shubham Nanaware</p>
        </footer>
      </MainContainerWrapper>
    </>
  );
}
