"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bundle: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Ujumbe wako umetumwa! Tutawasiliana nawe hivi karibuni.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Button asChild variant="ghost" className="mr-4">
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Rudi Nyumbani
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <Phone className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Wasiliana Nasi</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Wasiliana na StarNet</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tuko hapa kukusaidia. Wasiliana nasi kwa maswali yoyote au kununua bundles zetu za WiFi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Tuma Ujumbe</CardTitle>
              <CardDescription>Jaza fomu hii na tutawasiliana nawe haraka iwezekanavyo.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Jina Kamili</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Jina lako kamili"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Nambari ya Simu</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+255 xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Barua Pepe</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="bundle">Bundle Unayotaka</Label>
                  <select
                    id="bundle"
                    name="bundle"
                    value={formData.bundle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Chagua bundle</option>
                    <option value="1hour">Bundle ya Saa 1 - TZS 500</option>
                    <option value="1day">Bundle ya Siku 1 - TZS 1,200</option>
                    <option value="1week">Bundle ya Wiki 1 - TZS 7,000</option>
                    <option value="business">Huduma za Biashara</option>
                    <option value="home">Huduma za Nyumbani</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Ujumbe</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Andika ujumbe wako hapa..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Tuma Ujumbe
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Maelezo ya Mawasiliano</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Simu</h3>
                    <p className="text-gray-600">+255 123 456 789</p>
                    <p className="text-gray-600">+255 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Barua Pepe</h3>
                    <p className="text-gray-600">info@starnet.co.tz</p>
                    <p className="text-gray-600">support@starnet.co.tz</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Mahali</h3>
                    <p className="text-gray-600">
                      Barabara ya Uhuru, Jengo la Biashara
                      <br />
                      Dar es Salaam, Tanzania
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Masaa ya Kufanya Kazi</h3>
                    <p className="text-gray-600">Jumatatu - Ijumaa: 8:00 - 18:00</p>
                    <p className="text-gray-600">Jumamosi: 9:00 - 15:00</p>
                    <p className="text-gray-600">Jumapili: Msaada wa dharura tu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Njia za Malipo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">M-Pesa</h3>
                    <p className="text-gray-600">Nambari: 123 456 789</p>
                    <p className="text-gray-600">Jina: StarNet WiFi</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Airtel Money</h3>
                    <p className="text-gray-600">Nambari: 987 654 321</p>
                    <p className="text-gray-600">Jina: StarNet WiFi</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Malipo ya Moja kwa Moja</h3>
                    <p className="text-gray-600">Karibu ofisini mwetu kwa malipo ya fedha taslimu</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
