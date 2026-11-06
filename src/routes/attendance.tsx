import { createFileRoute } from '@tanstack/react-router'
import AttendancePage from '../features/Attendance'

export const Route = createFileRoute('/attendance')({
  component: () => {
    return <AttendancePage />
    
  }
})
