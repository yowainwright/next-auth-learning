"use client";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react"
import { Session, DefaultSession } from "next-auth"
import { useRouter } from 'next/navigation'

type ClientPageProps = {
  session: Session | null
}

type ProfileImageProps = {
  src?: string | null | undefined
}

type User = DefaultSession['user'] & {
  isOrgMember: boolean
}

export const Loader = () => <div>Loading...</div>;

export const ProfileImage = ({ src }: ProfileImageProps) =>
  src ?
  <div className="w-44 h-44 relative mb-4">
    <Image
      src={src}
      fill
      alt=""
      className="object-cover rounded-full"
    />
  </div>
  : null;

export default function ClientPage({ session: serverSession }: ClientPageProps) {
  const sessionData = useSession()
  console.log({ sessionData, serverSession })
  const { data: session, status } = sessionData
  const currentSession = session ?? serverSession
  const router = useRouter()
  const { image: src, name = '', email = '', isOrgMember = false } = (currentSession?.user || {}) as User;
  if (!isOrgMember) {
    router.push('/unauthorized')
    return null
  }

  if (status === "loading") return <div>Loading...</div>

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <ProfileImage src={src} />
      <p className="text-2xl mb-2">Welcome <span className="font-bold">{name}</span>. Signed In As</p>
      <p className="font-bold mb-4">{email}</p>
      <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button>
    </div>
  )
}
