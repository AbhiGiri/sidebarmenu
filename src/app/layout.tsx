
import "../styles/globals.css";
import SidebarWrapper from "@/components/SidebarWrapper";

export const metadata = {
  title: "Dashboard App",
  description: "A simple dashboard layout with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex">
          <SidebarWrapper />
          <main className="flex-1 p-4">
            {children}
          </main>
      </body>
    </html>
  );
}

