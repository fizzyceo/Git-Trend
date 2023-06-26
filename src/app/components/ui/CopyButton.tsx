'use client'
import { FC, HTMLAttributes, forwardRef } from 'react'
import { Button } from './Button';
import { Copy } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface CopyButtonProps extends HTMLAttributes<HTMLButtonElement> {
  apkiKey: string
}

const CopyButton= forwardRef<HTMLButtonElement,CopyButtonProps>(({apkiKey,className,...props},ref)=>{

    return (
        <Button
        {...props}

        className= "absolute inset-y-0 h-full  right-0 animate-in fade-in duration-300 z-30"
    onClick={() => {
      navigator.clipboard.writeText(apkiKey);
      toast.success("API copied successfully")
    }}
    variant="ghost">
    <Copy className="h-5 w-5" />
  </Button>

    )
})   

// ({apkiKey}) => {
//     return   //   }
  

export default CopyButton