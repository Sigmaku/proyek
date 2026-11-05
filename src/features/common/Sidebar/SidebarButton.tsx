import { Link } from "@tanstack/react-router"
import type { ReactNode } from "react"

export interface SidebarButtonProps {
    title: string
    url: string
    icon: ReactNode
    exact?:boolean
}

const SidebarButton = ({title, url, icon, exact = false}: SidebarButtonProps) => {
    return (
        <Link 
            to={url}
            activeOptions={{exact}}
            className=" flex flex-row gap-3 items-center rounded-xl px-3 py-2 transition-all hover:scale-103"
            activeProps={{ className: "bg-linear-to-b from-mist-800 via-mist-600 to-matcha-milk text-white hover:shadow-lg hover:shadow-matcha-milk" }}
            inactiveProps={{ className: "hover:shadow-lg" }}
        >
            {icon}
            <div className="font-semibold">{title}</div>
        </Link>
    )
}

export default SidebarButton