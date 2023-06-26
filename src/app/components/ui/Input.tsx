import { FC, HTMLAttributes, forwardRef } from 'react'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    apiKey:string | null
}

const Input = forwardRef<HTMLInputElement,InputProps>(({
    className,apiKey
},ref)=>{


    return(

<input
    ref={ref}
    value={apiKey ?? ""}
    readOnly
    className="flex h-12 w-[350px] mx-auto rounded-md border border-slate-300 bg-transparent py-3 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
  />
)
})
export default Input



// <input
//     value={input.apiKey ?? ""}
//     className="flex h-12 w-[90%] md:w-full rounded-md border border-slate-300 bg-transparent py-3 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
//   />