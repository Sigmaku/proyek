import { createFileRoute } from '@tanstack/react-router'
import DashboardPage from '../features/Dashboard'

export const Route = createFileRoute('/')({
  component: () => {
    return <DashboardPage />
  }
})

