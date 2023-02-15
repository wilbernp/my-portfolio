import React from "react"
import { Navbar } from "../Navbar"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="bg-slate-800 min-h-screen px-container">
        {children}
      </main>
    </>
  )
}
