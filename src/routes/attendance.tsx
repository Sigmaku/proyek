import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/attendance')({
  component: () => {
    return <div>Hello "/card"!</div>
  }
})
