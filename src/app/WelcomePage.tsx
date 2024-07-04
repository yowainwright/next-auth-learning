"use client";
import { signIn } from "next-auth/react"

export default function WelcomePage() {
  const handler = () => signIn('github')
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="mb-4">Please sign in with GitHub to continue.</p>
      <button
        className="bg-github text-white py-2 px-6 rounded-md hover:bg-github-dark"
        onClick={handler}
      >
        Sign in with GitHub
      </button>
    </div>
  )
}
