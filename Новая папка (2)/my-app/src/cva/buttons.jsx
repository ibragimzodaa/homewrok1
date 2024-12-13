// import { cva } from "class-variance-authority";

import { cva } from "class-variance-authority"



export const button = cva(["font-semibold", "white"] , {
    variants : {
        color : {
            primary : "text-white bg-blue-900",
            secondary : "text-blue-500 bg-black",
            tertiary : "text-black"
        },
        size: {
            large : "p-[20px]",
            medium : "p-[15px]",
            old : "p-[10px]"
        },
        border : {
            large : "rounded-lg",
            medium : "rounded-md",
            old : "rounded-sm"
        },
        fontSize : {
            large : "text-[30px]",
            medium : "text-[20px]",
            old : "text-[10px]"
        },
        marginLeft :{ 
            large : "ml-[300px]",
            medium : "ml-[200px]",
            old : "ml-[100px]"
        },
        marginTop :{ 
            large : "mt-[300px]",
            medium : "mt-[200px]",
            old : "mt-[100px]"
        }
    }
})

export function Button({children, color, props,size,border,fontSize,marginLeft,marginTop}) {
    return <button {...props} className={button({color,size,border,fontSize,marginLeft,marginTop})}>{children}</button>
}