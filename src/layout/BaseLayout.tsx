import type { FC, ReactNode } from "react"
import Navbar from "../components/Navbar"


interface Props {
    children:  ReactNode | ReactNode[];
}

const BaseLayout: FC<Props> = ({children}) => {
      return (
        <>
       <Navbar/>
       <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"> {children}</main> 
        </>
    )
      }

export default BaseLayout;