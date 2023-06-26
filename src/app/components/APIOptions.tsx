'use client'

import Error from 'next/error'
import { FC, useState } from 'react'
import { toast } from 'react-hot-toast'
import { RevokeApiData } from '../../../types/api-key'
import { revokeApiKey } from '@/lib/revokeApiKey'
import { createApiKey } from '@/lib/createApiKey'
import { Button } from './ui/Button'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface APIOptionsProps {
  apiKey: string
  apiKeyId: string
}

const APIOptions: FC<APIOptionsProps> = ({apiKey,apiKeyId}) => {
  const [isCreating,setisCreating] = useState(false)
  const router = useRouter()
  const [IsRevoking,setIsRevoking] = useState(false)
  const createNewAPIKey=async()=>{
      setisCreating(true)
    try{
      const revokedKey = await revokeApiKey()


      const newAPIKey = await createApiKey()

      router.refresh()
    }catch(err){
          toast.error("error creating API key")
    }finally{

      setisCreating(false)
    }
      
  }
  const revokingApiKey=async()=>{
      setIsRevoking(true)
    try{
      const revokedKey = await revokeApiKey()  
      router.refresh()
    }catch(err){
          toast.error("error Revoking API key")
    }finally{

      setIsRevoking(false)
    }
      
  }
  
  return <div  className=' flex items-center'>
    <div className='flex flex-row items-center gap-3'>
        <Button variant='ghost' disabled={isCreating || IsRevoking} onClick={createNewAPIKey}>
          {isCreating && <Loader2 className='animate-spin w-4 h-4'/>}
          
          <p>New API Key</p>
        </Button>
        <Button variant='ghost' disabled={isCreating || IsRevoking}  onClick={revokingApiKey}>
        {IsRevoking && <Loader2 className='animate-spin w-4 h-4'/>}
        <p>Revoke API Key</p></Button>
    </div>
  </div>
}

export default APIOptions