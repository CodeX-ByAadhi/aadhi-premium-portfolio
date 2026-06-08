import * as React from 'react'
import { cn } from '@/lib/utils'
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('rounded-[2rem] border border-[#ead7b7] bg-[#fffaf0]/80 text-[#2f2418] shadow-[0_25px_80px_rgba(100,70,30,0.10)] backdrop-blur-xl', className)} {...props} />)
Card.displayName = 'Card'
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => <div ref={ref} className={cn('p-6', className)} {...props} />)
CardContent.displayName = 'CardContent'
export { Card, CardContent }
