"use client";

import { useSession } from "next-auth/react"

import ClientPage from "./ClientPage"
import WelcomePage from "./WelcomePage"

export default function ClientWrapper() {
  const sessionData = useSession()
  const { data: session, status } = sessionData
  const hasSession = session !== undefined
  const isLoading = status === "loading"
  if (hasSession && isLoading) return <div>Loading...</div>
  if (!session) return <WelcomePage />
  return <ClientPage session={session} />
}
