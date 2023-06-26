'use client'


import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
interface SignInButtonProps {
  
}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setisLoading] = useState<boolean>(false)
  const signingOut =async ()=>{
    setisLoading(true)
    try{
      await signIn('google')
    }catch(err){

      toast.error('Error while signing in PLease try again');

      console.log(err);
      
    }
    
  }

  return <Button onClick={signingOut}
  isLoading={isLoading}>
    Sign In
  </Button>
}

export default SignInButton