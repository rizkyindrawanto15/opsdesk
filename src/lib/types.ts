export type TicketStatus = "open" | "in_progress" | "pending" | "resolved" | "closed";
export type TicketPriority = "low" | "medium" | "high" | "urgent";
export type TicketCategory =
  | "Hardware"
  | "Access & Security"
  | "Network & VPN"
  | "Software & SaaS"
  | "Cloud Infrastructure"
  | "Onboarding";

export type SLAStatus = "healthy" | "warning" | "breached";

export interface UserSummary {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role?: string;
  department?: string;
}

export interface Ticket {
  id: string;
  key: string;
  title: string;
  description: string;
  status: TicketStatus;
  priority: TicketPriority;
  category: TicketCategory;
  requester: UserSummary;
  assignee: UserSummary | null;
  createdAt: string;
  updatedAt: string;
  slaDue: string;
  slaStatus: SLAStatus;
  tags: string[];
  impact: "Individual" | "Department" | "Organization-wide";
}

export type AssetCategory =
  | "Workstation"
  | "Mobile Device"
  | "Network Infrastructure"
  | "Server & Cloud"
  | "SaaS License"
  | "Security Key";

export type AssetStatus = "active" | "in_stock" | "maintenance" | "retired";

export interface Asset {
  id: string;
  assetTag: string;
  name: string;
  category: AssetCategory;
  model: string;
  serialNumber: string;
  status: AssetStatus;
  assignedTo: UserSummary | null;
  department: string;
  purchaseDate: string;
  warrantyExpires: string;
  cost: number;
  location: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  department: string;
  status: "online" | "in_meeting" | "away" | "offline";
  activeTicketsCount: number;
  resolvedThisWeek: number;
  onCall: "primary" | "secondary" | "none";
  tier: "Tier 1 Support" | "Tier 2 Engineering" | "DevOps & SRE" | "IT Operations Lead";
}

export interface KPIMetric {
  id: string;
  label: string;
  value: string;
  delta: string;
  deltaType: "increase-good" | "increase-bad" | "decrease-good" | "decrease-bad" | "neutral";
  subtext: string;
}

export interface ActivityEvent {
  id: string;
  actor: UserSummary;
  action: string;
  targetId: string;
  targetKey: string;
  timestamp: string;
  type: "status_change" | "assignment" | "comment" | "sla_alert" | "asset_link";
  details?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  type: "sla" | "assignment" | "system" | "asset";
  severity: "info" | "warning" | "critical";
  link?: string;
}

export interface SLAMetric {
  category: string;
  complianceRate: number; // e.g. 98.4
  targetRate: number; // e.g. 95.0
  totalTickets: number;
  metCount: number;
  breachedCount: number;
}
