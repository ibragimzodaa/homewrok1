import { cva } from "class-variance-authority"

export const button = cva(["font-semibold", "text-white"] , {
    variants : {
      color : {
        primary : "bg-[#056088]",
        secondary : "bg-blue-500 bg-black",
        tertiary : "bg-black"
    },
        size: {
          large : "p-[20px]",
          medium : "p-[15px]",
          old : "p-[10px]"
      },
      marginTop : {
        large : "mt-[50px]",
        medium : "mt-[35px]",
        old : "mt-[25px]",
      },
      marginBottom : {
        large : "mb-[50px]",
        medium : "mb-[35px]",
        old : "mb-[25px]",
      }
    }
})

export function Button({children,props, color,size,marginTop,marginBottom}) {
    return <button {...props} className={button({color,size,marginTop,marginBottom})}>{children}</button>
}