"use client"

import { Label } from "@/components/ui/label"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Copy, Download, Wifi, Clock, Users } from "lucide-react"
import { generateVoucherPDF } from "@/utils/pdf-generator"

export default function VoucherSuccessPage() {
  const searchParams = useSearchParams()
  const voucherCode = searchParams.get("code")
  const [copied, setCopied] = useState(false)
  const [voucherDetails, setVoucherDetails] = useState<any>(null)

  useEffect(() => {
    // Get voucher details from localStorage
    const storedVoucher = localStorage.getItem("purchasedVoucher")
    if (storedVoucher) {
      setVoucherDetails(JSON.parse(storedVoucher))
    }
  }, [])

  const copyToClipboard = () => {
    if (voucherCode) {
      navigator.clipboard.writeText(voucherCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const downloadVoucher = () => {
    if (voucherDetails && voucherCode) {
      generateVoucherPDF(
        {
          code: voucherCode,
          plan: {
            name: voucherDetails.plan.name,
            duration: voucherDetails.plan.duration,
            speed: voucherDetails.plan.speed,
            devices: voucherDetails.plan.devices,
            price: voucherDetails.plan.price,
          },
          purchaseDate: voucherDetails.purchaseDate,
          status: voucherDetails.status,
        },
        "StarNet-Wifi",
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Wifi className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">StarNet</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Purchase Complete</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Message */}
        <div className="text-center mb-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Purchase Successful!</h1>
          <p className="text-gray-600">Your WiFi voucher is ready to use</p>
        </div>

        {/* Voucher Details */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Your Voucher Details</CardTitle>
            <CardDescription>Save this information for your records</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Voucher Code */}
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Label className="text-sm font-medium text-gray-600 block mb-2">Voucher Code</Label>
              <div className="text-3xl font-mono font-bold text-blue-600 mb-4 tracking-wider">{voucherCode}</div>
              <div className="flex gap-2 justify-center">
                <Button onClick={copyToClipboard} variant="outline" size="sm">
                  <Copy className="h-4 w-4 mr-2" />
                  {copied ? "Copied!" : "Copy Code"}
                </Button>
                <Button onClick={downloadVoucher} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Plan Details */}
            {voucherDetails && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Duration</div>
                      <div className="text-sm text-gray-600">{voucherDetails.plan.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Max Speed</div>
                      <div className="text-sm text-gray-600">Up to {voucherDetails.plan.speed}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-medium">Devices</div>
                      <div className="text-sm text-gray-600">
                        {voucherDetails.plan.devices} device{voucherDetails.plan.devices > 1 ? "s" : ""}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <div className="font-medium">Status</div>
                      <div className="text-sm text-gray-600">Ready to use</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>How to Connect</CardTitle>
            <CardDescription>Follow these simple steps to get online</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <div className="font-medium">Connect to WiFi Network</div>
                  <div className="text-sm text-gray-600">Look for "StarNet" in your available networks</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <div className="font-medium">Open Your Browser</div>
                  <div className="text-sm text-gray-600">You'll be automatically redirected to the login page</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <div className="font-medium">Enter Your Voucher Code</div>
                  <div className="text-sm text-gray-600">
                    Type or paste: <code className="bg-gray-100 px-1 rounded">{voucherCode}</code>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  4
                </div>
                <div>
                  <div className="font-medium">Start Browsing!</div>
                  <div className="text-sm text-gray-600">Enjoy your high-speed internet access</div>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1">
            <Link href="/login">Use Voucher Now</Link>
          </Button>
          <Button asChild variant="outline" className="flex-1 bg-transparent">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>

        {/* Support */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Our support team is available 24/7 to assist you</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm">
                <span>📧 support@starnet.com</span>
                <span className="hidden sm:inline">•</span>
                <span>📞 (555) 123-4567</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
