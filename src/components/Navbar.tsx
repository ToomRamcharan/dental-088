"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar({ config }: { config: any }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border-color py-4">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#home" className="text-lg font-heading font-bold text-foreground tracking-tight">Partha Dental - Khammam</a>
        <div className="hidden lg:flex items-center gap-6">
          {["Home","About","Services","Doctors","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-foreground/60 hover:text-foreground transition-colors text-sm tracking-wide">{l}</a>
          ))}
        </div>
        <a href="#contact" className="hidden lg:block text-sm text-foreground border border-foreground/20 px-4 py-1.5 hover:bg-foreground hover:text-white transition-colors">Contact</a>
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  )
}
