import { signIn } from 'next-auth/react'

export default function Unauthorized() {
  const handler = () => signIn('github')
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Unauthorized Access</h1>
      <p className="mb-4">You do not have permission to access this site.</p>
      <button
        onClick={handler}
        className="px-4 py-2 font-bold text-white bg-github rounded hover:bg-github-dark"
      >
        Sign in with GitHub
      </button>
    </div>
  )
}
