import { FileCheck, Layout, UserCheck, type LucideIcon } from "lucide-react";

interface SidebarDataProps {
    label: string;
    to: string;
    icon: LucideIcon;
}

export const sidebarData: SidebarDataProps[] = [
    { label: "Dashboard", to: "/", icon: Layout },
    { label: "Attendance", to: "/attendance", icon: UserCheck },
    { label: "Report", to: "/report", icon: FileCheck },
];
