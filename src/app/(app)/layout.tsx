"use client";

import * as React from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppHeader } from "@/components/layout/app-header";
import { CommandMenu } from "@/components/layout/command-menu";
import { QuickCreateModal } from "@/components/layout/quick-create-modal";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = React.useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = React.useState(false);
  const [createTicketOpen, setCreateTicketOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-neutral-50/60 text-foreground">
      {/* Sidebar (Desktop sticky + Mobile drawer) */}
      <AppSidebar
        isOpenMobile={mobileSidebarOpen}
        onCloseMobile={() => setMobileSidebarOpen(false)}
        onOpenCreateTicket={() => setCreateTicketOpen(true)}
        onOpenCommandMenu={() => setCommandMenuOpen(true)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <AppHeader
          onToggleMobileSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          onOpenCreateTicket={() => setCreateTicketOpen(true)}
          onOpenCommandMenu={() => setCommandMenuOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>

      {/* Global Modals */}
      <CommandMenu
        open={commandMenuOpen}
        onOpenChange={setCommandMenuOpen}
        onOpenCreateTicket={() => setCreateTicketOpen(true)}
      />

      <QuickCreateModal
        open={createTicketOpen}
        onOpenChange={setCreateTicketOpen}
      />
    </div>
  );
}
