"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Wifi, Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/help", label: "Help" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Wifi className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold">StarNet</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/buy-voucher">Buy Voucher</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === item.href ? "bg-blue-100 text-blue-700" : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/buy-voucher">Buy Voucher</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
