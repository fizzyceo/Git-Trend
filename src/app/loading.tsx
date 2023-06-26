import { Loader2 } from 'lucide-react'
import { FC } from 'react'



const Loading= ({}) => {
  return (<div className='w-screen h-screen flex items-center justify-center'>
  <Loader2 className='animate-spin w-8 h-8 text-[#2e2b2b] dark:text-white  '/>
  </div>)

}

export default Loading