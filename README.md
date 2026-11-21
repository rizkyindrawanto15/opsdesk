# OpsDesk — Premium IT Service Management (ITSM) SaaS

OpsDesk is an enterprise-grade IT Service Management SaaS platform inspired by Apple, Linear, and modern developer tooling. Engineered for high-velocity engineering organizations, OpsDesk eliminates ticket debt through automated SLA tracking, instant incident triage, and unified hardware asset fleet governance.

---

## Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS with custom enterprise design tokens
- **UI Primitives**: Radix UI + Custom Linear/Apple-inspired component library
- **Icons**: Lucide React (1.5px/1.75px precision stroke width, **0 emojis**)
- **Motion**: Framer Motion
- **Telemetry Charts**: Custom SVG Charting Engine (AreaChart & BarChart with interactive tooltip tracking)
- **Notifications**: Sonner

---

## Design System Principles

- **Neutral Canvas**: Soft white (`#FFFFFF`) and delicate gray surfaces (`#F8F9FA`, `#F1F4F8`) create a calm, focused workspace.
- **Restrained Blue Accent**: Single primary accent (`#2563EB` / `#1D4ED8`) reserved strictly for active indicators, primary action triggers, and focus rings.
- **Micro-Borders & Subtle Shadows**: 1px crisp neutral borders (`#E2E8F0`) with layered soft shadows (`shadow-subtle`, `shadow-float`).
- **Data Density & Readability**: Tabular numbers for financial metrics and timestamps, compact padding, and sharp status pills.
- **Strict Policy**: **Zero emojis** and zero loud artificial gradients.

---

## Directory Structure

```
opsdesk/
├── src/
│   ├── app/
│   │   ├── (app)/                       # Authenticated Application Shell
│   │   │   ├── layout.tsx               # Shared App Layout (Sidebar + Header + Command Palette)
│   │   │   ├── dashboard/page.tsx       # Executive KPIs, Velocity Chart & Incident Feed
│   │   │   ├── tickets/page.tsx         # Full Queue with Status/Priority Filters & Detail Drawer
│   │   │   ├── assets/page.tsx          # IT Asset Fleet, Hardware & SaaS Licenses
│   │   │   ├── team/page.tsx            # Specialist Roster, On-Call Rotation & Workload Meters
│   │   │   ├── reports/page.tsx         # SLA Compliance Matrix, MTTR & Resolution Time
│   │   │   ├── notifications/page.tsx   # System Alerts, SLA Warnings & Incident Feed
│   │   │   └── settings/page.tsx        # Organization Profile, SLA Policy & Security Controls
│   │   ├── features/page.tsx            # Technical Capabilities & Enterprise Comparison
│   │   ├── globals.css                  # Apple/Linear Design Tokens & Variable System
│   │   ├── layout.tsx                   # Root HTML Shell & Sonner Toast Provider
│   │   └── page.tsx                     # Public Landing Page
│   ├── components/
│   │   ├── dashboard/                   # Dashboard-specific widgets (KPI, Charts, Feed)
│   │   ├── landing/                     # Landing page sections (Hero, Preview, Features, Workflow, CTA)
│   │   ├── layout/                      # AppSidebar, AppHeader, CommandMenu, QuickCreateModal, PublicNav
│   │   └── ui/                          # Button, Badge, Card, Input, Table, Tabs, Drawer, Modal, StatusPill
│   └── lib/
│       ├── mock-data.ts                 # Strongly-typed preview dataset
│       ├── types.ts                     # Enterprise domain interfaces
│       └── utils.ts                     # Class merger & date formatters
├── public/                              # Static public assets
├── next.config.ts                       # Next.js configuration
├── postcss.config.mjs                   # PostCSS configuration
├── tailwind.config.ts                   # Tailwind theme extensions & design tokens
└── tsconfig.json                        # Strict TypeScript configuration
```

---

## Verified Routes

### Public Routes
- **`/`**: Premium public landing page featuring an interactive live product dashboard preview with tab switching (Incident Queue, SLA Compliance, Asset Fleet), 6 capability pillars, 4-step workflow, and enterprise trust credentials.
- **`/features`**: Technical breakdown of all 6 architectural modules and an enterprise comparison matrix (OpsDesk vs Legacy ITSM).

### Application Routes
- **`/dashboard`**: Workspace greeting, 4 KPI cards with week-over-week deltas, 7-day ticket velocity area chart, status distribution bars, recent incident queue, live activity stream, and quick action bar.
- **`/tickets`**: Searchable and filterable queue (All, Open, In Progress, Pending, Resolved) with priority badges (P1-P4), assignee chips, SLA countdown, and an interactive side-drawer showing audit logs.
- **`/assets`**: IT Asset Fleet management table covering workstations, network switches, YubiKeys, and SaaS licenses with depreciation, warranty alerts, and asset enrollment modal.
- **`/team`**: Service desk team roster, on-call primary and secondary responder assignments, active workload capacity meters, and specialist invitation modal.
- **`/reports`**: SLA Compliance Tier performance matrix, median resolution times by priority tier, customer satisfaction rating (4.92/5.0), and SOC 2 export simulation.
- **`/notifications`**: Alert center categorized by SLA warnings, assignments, and fleet events with read/unread state toggles.
- **`/settings`**: Organization tenant configuration, customizable P1-P4 SLA response and resolution thresholds, SAML 2.0 / SCIM toggles, and Phase 2 data persistence architectural notice.

---

## Running the Application

### 1. Development Mode
```bash
cd "C:\Users\HP\.gemini\antigravity\scratch\opsdesk"
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build & Execution
```bash
npm run build
npm start
```

### 3. Type Checking
```bash
npm run typecheck
```

---

## Phase 2 Roadmap

1. **Authentication & Multi-Tenancy**:
   - NextAuth.js / Supabase Auth with SAML 2.0 Okta integration.
   - Dynamic organization tenant subdomains (`tenant.opsdesk.io`).
2. **Database Persistence**:
   - PostgreSQL database schema managed with Prisma or Drizzle ORM.
   - Real-time subscriptions for incident queue updates via WebSockets / Supabase Realtime.
3. **Inbound Telemetry Integrations**:
   - Incoming webhook endpoints for Datadog, Prometheus Alertmanager, PagerDuty, and AWS CloudWatch.
   - Bidirectional Slack bot for `/incident` commands and thread syncing.
4. **Automated SLA Job Scheduler**:
   - Cron-based background workers evaluating active timers and triggering automated phone/SMS escalations for unacknowledged P1 tickets.
