'use client'

import { useEffect } from 'react'

type ErrorProps = {
  error: Error
  reset: () => void
}

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => console.error(error), [error])
  const handler = () => reset()
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={handler}>Try again</button>
    </div>
  )
}
