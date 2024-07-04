import { getServerSession } from "next-auth/next"
import ClientPage from "./ClientPage"

export default async function Home() {
  const session = await getServerSession()

  return <ClientPage session={session} />
}
