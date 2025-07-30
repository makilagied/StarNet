"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wifi, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              {!logoError ? (
                <Image
                  src="https://res.cloudinary.com/dtybdu8su/image/upload/v1753860681/StarNet__2_-removebg-preview_1_sp67a7.png"
                  alt="StarNet Logo"
                  width={180}
                  height={60}
                  className="h-12 w-auto max-w-[180px]"
                  onError={() => setLogoError(true)}
                  priority
                />
              ) : (
                <div className="flex items-center space-x-2">
                  <Wifi className="h-8 w-8 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">StarNet</span>
                </div>
              )}
            </div>
            <Badge className="bg-green-100 text-green-800 border-green-200 hidden sm:inline-flex">
              WiFi: Free WiFi
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => document.getElementById("bundles")?.scrollIntoView({ behavior: "smooth" })}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Bei za Vouchers
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Pata Voucher
            </button>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <a href="tel:+255618903516">Piga Simu</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Badge className="bg-green-100 text-green-800 border-green-200 w-fit">WiFi: Free WiFi</Badge>
              <button
                onClick={() => {
                  document.getElementById("bundles")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
                className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Bei za Vouchers
              </button>
              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  setIsOpen(false)
                }}
                className="text-left text-gray-700 hover:text-green-600 transition-colors font-medium"
              >
                Pata Voucher
              </button>
              <Button size="sm" className="w-fit bg-green-600 hover:bg-green-700">
                <a href="tel:+255618903516">Piga Simu</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
