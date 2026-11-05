import SidebarButton from "./SidebarButton"
import { sidebarData } from "../../../lib/dataSidebar"

const Sidebar = () => {
  return (
    <div className="bg-mist-200 w-60 h-screen shadow-[6px_0_12px_-6px_rgba(0,0,0,0.3)] flex flex-col items-center gap-16 font-outfit p-3">
      {/* Header Logo */}
      <div className="text-5xl font-black text-gradient">
        GRAYE
      </div>

      {/* Sidebar */}
      <div className="flex flex-col gap-5 px-2 w-full ">
        {sidebarData.map((item) => {
          const Icon = item.icon
          return (
            <SidebarButton icon={<Icon size={20} />} title={item.label} url={item.to}/>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar