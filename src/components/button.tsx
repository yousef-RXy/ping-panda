import { cn } from "@/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function Button({ children, className, href, ...props }: ButtonProps) {
  return (
    <Link
      href={href ?? "#"}
      className={cn(
        "group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-brand-700 px-8 text-base/7 font-medium text-white  transition-all hover:ring-2 hover:ring-brand-700 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2 z-10 shadow-lg duration-300 hover:shadow-xl",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight
          href="/sign-up"
          className="size-4 shrink-0 transition-transform text-white duration-300 ease-in-out group-hover:translate-x-[2px]"
        />
      </span>
      <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 duration-500 transition-all group-hover:left-[120%]" />
    </Link>
  )
}

export default Button
