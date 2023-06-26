
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { authOptions } from '@/lib/Auth'
import ApiAvailable from '../components/ApiAvailable'
import RequestApiKey from '../components/RequestApiKey'

export const metadata: Metadata = {
  title: 'Git Trends API | Dashboard',
  description: 'Free & open-source repositories trends API ',
  icons:{
    icon:'/integration.png'
  }
}
const page = async () => {
  const user = await getServerSession(authOptions)
  if (!user) return notFound()
  
  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  })

  return (
    <div className='w-screen mx-auto py-20'>
      {apiKey ? (

        <ApiAvailable />
      ) : (
        <RequestApiKey />
      )}
    </div>
  )
}

export default page