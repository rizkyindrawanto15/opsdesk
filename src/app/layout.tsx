import type { Metadata } from "next";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/language-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpsDesk — Enterprise IT Service Management SaaS",
  description:
    "Premium IT Service Management platform designed for high-velocity engineering and enterprise IT teams. Real-time incident triage, automated SLA tracking, and IT asset lifecycle management.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth">
      <body className="h-full bg-background text-foreground font-sans antialiased selection:bg-blue-600/10 selection:text-blue-700">
        <LanguageProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#FFFFFF",
                color: "#0F172A",
                border: "1px solid #E2E8F0",
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.08)",
                fontSize: "12px",
              },
            }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
