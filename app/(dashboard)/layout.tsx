import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-dvh">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="mx-auto w-full p-0 md:max-w-screen-lg md:p-8 flex-1">
        <div className="flex flex-row items-start gap-4 md:gap-6">
          <Sidebar />
          <div className="flex-1 overflow-x-hidden">{children}</div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}