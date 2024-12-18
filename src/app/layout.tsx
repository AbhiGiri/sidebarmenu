
import "../styles/globals.css";
import SidebarWrapper from "@/components/SidebarWrapper";
import { ThemeProvider } from "./contexts/theme-provider";

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
        <ThemeProvider>
          <SidebarWrapper />
          <main className="flex-1 p-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

