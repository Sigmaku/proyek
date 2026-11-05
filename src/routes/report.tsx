import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/report')({
  component: () => {
      return <div>Hello "/igh"!</div>
  }
})
