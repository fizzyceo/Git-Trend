
import { authOptions } from '@/lib/Auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import { FC } from 'react'
import {formatDistance } from 'date-fns'
import LargeHeading from './ui/LargeHeading'
import Paragraph from './ui/Paragraph'
import Input from './ui/Input'
import Table from './Table'
import APIOptions from './APIOptions'
import CopyButton from './ui/CopyButton'

const ApiAvailable: FC =async ({}) => {
  const user = await getServerSession(authOptions)
  if (!user) return notFound()
  const apiKeys = await db.apiKey.findMany({
    where:{
      userId:user.user.id
    }
  })
  const activeApiKey=apiKeys.find((key) => key.enabled)
  if(!activeApiKey) return notFound()
  const userRequests = await db.apiRequest.findMany({
    where:{
      apiKeyId:{
        in:apiKeys.map((apiKey) => apiKey.id)
      } 
    }
  })
  const serializedRequests = userRequests.map((request) => ({
    ...request,
    timestamp: formatDistance(new Date(request.timestamp), new Date())
  }))
  return <div className='my-10 flex flex-col gap-8 items-center'>
      <LargeHeading size='default'>Welcome Back, {user.user.name}</LargeHeading>
      <div className=' flex flex-col md:flex-row items-center gap-4'>
                <Paragraph className='w-[200px]' size='default'>Your API-Key:</Paragraph>
                <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          {/* Show a copy icon if API key was generated successfully */}
          {activeApiKey.key ? (
          <CopyButton apkiKey={activeApiKey.key}/>
          ) : null}
          <Input
            apiKey={activeApiKey.key}
            placeholder="Request an API key to display it here"
          />
        </div>

                <APIOptions apiKey={activeApiKey.key} apiKeyId={activeApiKey.id}/>

      </div>
      <div className='w-screen overflow-x-scroll'>
      <Table userRequests={serializedRequests}/>
      </div>
  </div>
}

export default ApiAvailable