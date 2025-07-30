"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wifi,
  Clock,
  Calendar,
  CalendarDays,
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle,
  Users,
  Signal,
  Shield,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [logoError, setLogoError] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="bg-green-100 text-green-800 border-green-200 mb-6">WiFi Network: Free WiFi</Badge>
          </div>

          {/* Large Logo in Hero */}
          <div className="mb-8 flex justify-center">
            {!logoError ? (
              <Image
                src="https://res.cloudinary.com/dtybdu8su/image/upload/v1753860681/StarNet__2_-removebg-preview_1_sp67a7.png"
                alt="StarNet WiFi Logo"
                width={400}
                height={120}
                className="h-20 md:h-24 w-auto max-w-[400px]"
                onError={() => setLogoError(true)}
                priority
              />
            ) : (
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">StarNet WiFi</h1>
            )}
          </div>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Pata intaneti ya haraka na ya kuaminika kwa bei nafuu. Vouchers za kila mahitaji yako.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => document.getElementById("bundles")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Wifi className="mr-2 h-5 w-5" />
              Ona Bei za Vouchers
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+255618903516">Piga Simu Sasa</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Bundles Section */}
      <section id="bundles" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bei za Vouchers</h2>
            <p className="text-gray-600">Chagua bundle inayokufaa zaidi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 8 Hours Bundle */}
            <Card className="relative border-2 hover:border-green-500 transition-colors">
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Masaa 8</CardTitle>
                <CardDescription>Kwa matumizi ya muda mfupi</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-4">TZS 500</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Kasi ya juu
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Muda wa masaa 8
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data bila kikomo
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <a href="tel:+255618903516">Nunua Sasa</a>
                </Button>
              </CardContent>
            </Card>

            {/* Daily Bundle */}
            <Card className="relative border-2 border-green-500 shadow-lg scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-green-600 text-white">Maarufu Zaidi</Badge>
              </div>
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Siku Nzima</CardTitle>
                <CardDescription>Kwa matumizi ya kila siku</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-4">TZS 1,000</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Kasi ya juu sana
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Masaa 24 kamili
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data bila kikomo
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <a href="tel:+255618903516">Nunua Sasa</a>
                </Button>
              </CardContent>
            </Card>

            {/* Weekly Bundle */}
            <Card className="relative border-2 hover:border-green-500 transition-colors">
              <CardHeader className="text-center">
                <CalendarDays className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Wiki Nzima</CardTitle>
                <CardDescription>Kwa matumizi ya muda mrefu</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-4">TZS 5,000</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Kasi ya juu kabisa
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Siku 7 kamili
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data bila kikomo
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <a href="tel:+255618903516">Nunua Sasa</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jinsi ya Kupata Voucher</h2>
            <p className="text-gray-600">Hatua rahisi za kupata na kutumia voucher yako</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Piga Simu au SMS</h3>
                  <p className="text-gray-600">Piga simu au tuma SMS kwenye +255 618 903 516</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fika kwa Wakala</h3>
                  <p className="text-gray-600">Au fika moja kwa moja Nyumbani Pub</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Unganisha WiFi</h3>
                  <p className="text-gray-600">Unganisha kwenye network "Free WiFi"</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Ingiza Code</h3>
                  <p className="text-gray-600">Ingiza voucher code na uanze kutumia</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              {!logoError ? (
                <Image
                  src="https://res.cloudinary.com/dtybdu8su/image/upload/v1753860681/StarNet__2_-removebg-preview_1_sp67a7.png"
                  alt="StarNet WiFi Logo"
                  width={300}
                  height={80}
                  className="h-16 w-auto max-w-[300px]"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <h2 className="text-3xl font-bold text-gray-900">Kwa Nini StarNet?</h2>
              )}
            </div>
            {!logoError && <h2 className="text-3xl font-bold text-gray-900 mb-4">Kwa Nini Tuchague?</h2>}
            <p className="text-gray-600">Huduma bora za intaneti kwa bei nafuu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Signal className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kasi ya Juu</h3>
              <p className="text-gray-600">Intaneti ya haraka na ya kuaminika kwa matumizi yako yote</p>
            </div>

            <div className="text-center">
              <Shield className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Salama na Imara</h3>
              <p className="text-gray-600">Mtandao salama na wa kuaminika kwa usalama wa data yako</p>
            </div>

            <div className="text-center">
              <Users className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Huduma 24/7</h3>
              <p className="text-gray-600">Msaada wa haraka wakati wowote wa mchana au usiku</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pata Voucher Yako</h2>
            <p className="text-gray-600">Wasiliana nasi kupata voucher yako ya intaneti</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Mawasiliano</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Simu/SMS</p>
                    <p className="text-green-600">+255 618 903 516</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Mahali</p>
                    <p className="text-gray-600">Nyumbani Pub</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">WiFi Network</p>
                    <p className="text-gray-600">Free WiFi</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Phone className="mr-2 h-4 w-4" />
                  <a href="tel:+255618903516">Piga Simu Sasa</a>
                </Button>
                <Button className="w-full bg-transparent" variant="outline">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  <a href="sms:+255618903516">Tuma SMS</a>
                </Button>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Maelezo ya Huduma</h3>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Masaa ya Kufanya Kazi</h4>
                  <p className="text-sm text-green-700">Siku zote: 24 masaa</p>
                  <p className="text-sm text-green-700">Msaada: Wakati wowote</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Njia za Malipo</h4>
                  <p className="text-sm text-blue-700">• Fedha taslimu</p>
                  <p className="text-sm text-blue-700">• M-Pesa</p>
                  <p className="text-sm text-blue-700">• Airtel Money</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">Aina za Kifaa</h4>
                  <p className="text-sm text-purple-700">• Simu za mkononi</p>
                  <p className="text-sm text-purple-700">• Kompyuta za mezani</p>
                  <p className="text-sm text-purple-700">• Tablets na laptops</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                {!logoError ? (
                  <Image
                    src="https://res.cloudinary.com/dtybdu8su/image/upload/v1753860681/StarNet__2_-removebg-preview_1_sp67a7.png"
                    alt="StarNet WiFi Logo"
                    width={200}
                    height={60}
                    className="h-10 w-auto max-w-[200px] brightness-0 invert"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Wifi className="h-8 w-8 text-green-500" />
                    <span className="text-2xl font-bold">StarNet</span>
                  </div>
                )}
              </div>
              <p className="text-gray-400 mb-4">
                Huduma bora za intaneti kwa bei nafuu. Tunahakikisha unapata intaneti ya haraka na ya kuaminika.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Mawasiliano</h3>
              <div className="space-y-2 text-gray-400">
                <p>Simu: +255 618 903 516</p>
                <p>Mahali: Nyumbani Pub</p>
                <p>WiFi: Free WiFi</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Bei za Vouchers</h3>
              <div className="space-y-2 text-gray-400">
                <p>Masaa 8: TZS 500</p>
                <p>Siku nzima: TZS 1,000</p>
                <p>Wiki nzima: TZS 5,000</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StarNet WiFi. Haki zote zimehifadhiwa.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
