import {FC, HTMLAttributes, forwardRef} from 'react'
import {VariantProps, cva} from 'class-variance-authority'
import { cn } from '@/lib/cn'

const ParagraphVariants = cva("max-w-porse text-slate-700 dark:text-slate-300 mb-2 text-center",{
    variants: {
        size:{
            default: "text-base sm:text-lg",
            sm:"text-sm sm:text-base"
        },
        defaultVariants:{
            size:"default"
        }
    }
})
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof ParagraphVariants> {}
const Paragraph=forwardRef<HTMLParagraphElement,ParagraphProps>(({
    className, size, children,...props
},ref)=>{


    return(
    <p 
    ref={ref}
    {...props}
    className={cn(ParagraphVariants({className,size}))} >{
        children
    }</p>
)
}
)

export default Paragraph