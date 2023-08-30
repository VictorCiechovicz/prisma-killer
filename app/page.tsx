import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return <pre>{JSON.stringify(session, null, 2)}</pre>
}
