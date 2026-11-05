import { Download, Plus, type LucideIcon } from "lucide-react"

export interface HeaderDataProps {
  to: string
  title: string
  description?: string
  actionLabel?: string
  actionIcon?: LucideIcon
}

export const headerData: HeaderDataProps[] = [
  {
    to: "/",
    title: "DASHBOARD",
    description: "Ringkasan aktivitas hari ini",
  },
  {
    to: "/attendance",
    title: "ATTENDANCE",
    description: "Kelola data kehadiran",
    actionLabel: "Tambah Absensi",
    actionIcon: Plus,
  },
  {
    to: "/report",
    title: "REPORT",
    description: "Lihat laporan lengkap",
    actionLabel: "Export",
    actionIcon: Download,
  },
]