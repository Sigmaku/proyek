import { Outlet, createRootRoute } from '@tanstack/react-router'
import Sidebar from '../features/common/Sidebar'

export const Route = createRootRoute({
  component: () => {
    return (
        <div className='flex flex-row w-full h-screen overflow-hidden'>
          <div className='h-full shrink-0 overflow-y-auto scrollbar-none'>
            <Sidebar />
          </div>
          <div className='flex-1 overflow-y-auto scrollbar-none h-full w-full'>
            <Outlet />
          </div>
        </div>
    )
  }
})
