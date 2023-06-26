import {FC, HTMLAttributes, forwardRef} from 'react'
import {VariantProps, cva} from 'class-variance-authority'
import { cn } from '@/lib/cn'

const HeadingVariants = cva("text-black text-center dark:text-white lg:text-left font-extrabold tracking-tighter",{
    variants: {
        size:{
            default: "text-4xl md:text-5xl lg:text-6xl",
            large:"text-5xl md:text-6xl lg:text-7xl",
            sm:"text-2xl sm:text-3xl lg:text-4xl "
        },
        defaultVariants:{
            size:"default"
        }
    }
})
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof HeadingVariants> {}
const LargeHeading=forwardRef<HTMLHeadingElement,HeadingProps>(({
    className, size, children,...props
},ref)=>{


    return(
    <h1
    ref={ref}
    {...props}
    className={cn(HeadingVariants({className,size}))} >{
        children
    }</h1>
)
}
)

export default LargeHeading