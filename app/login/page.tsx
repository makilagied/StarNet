"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft, Wifi, CheckCircle, XCircle } from "lucide-react"

export default function LoginPage() {
  const [voucherCode, setVoucherCode] = useState("")
  const [isValidating, setIsValidating] = useState(false)
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean
    message: string
    voucherDetails?: any
  } | null>(null)

  const validateVoucher = async () => {
    if (!voucherCode.trim()) return

    setIsValidating(true)
    setValidationResult(null)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Check if voucher exists in localStorage (demo purposes)
    const storedVoucher = localStorage.getItem("purchasedVoucher")

    if (storedVoucher) {
      const voucher = JSON.parse(storedVoucher)
      if (voucher.code === voucherCode.toUpperCase() && voucher.status === "unused") {
        // Mark voucher as used
        voucher.status = "used"
        voucher.activatedAt = new Date().toISOString()
        localStorage.setItem("purchasedVoucher", JSON.stringify(voucher))

        setValidationResult({
          isValid: true,
          message: "Voucher activated successfully! You now have internet access.",
          voucherDetails: voucher,
        })

        // In a real app, you would redirect to a success page or activate the connection
        setTimeout(() => {
          window.location.href = "/connected"
        }, 2000)
      } else if (voucher.code === voucherCode.toUpperCase() && voucher.status === "used") {
        setValidationResult({
          isValid: false,
          message: "This voucher has already been used.",
        })
      } else {
        setValidationResult({
          isValid: false,
          message: "Invalid voucher code. Please check and try again.",
        })
      }
    } else {
      // Demo: Accept some sample voucher codes
      const sampleCodes = ["DEMO123", "TEST456", "SAMPLE789"]
      if (sampleCodes.includes(voucherCode.toUpperCase())) {
        setValidationResult({
          isValid: true,
          message: "Demo voucher activated! You now have internet access.",
          voucherDetails: {
            plan: { name: "Demo Plan", duration: "1 hour" },
          },
        })
        setTimeout(() => {
          window.location.href = "/connected"
        }, 2000)
      } else {
        setValidationResult({
          isValid: false,
          message: "Invalid voucher code. Please check and try again.",
        })
      }
    }

    setIsValidating(false)
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
                Back to Home
              </Link>
            </Button>
            <div className="flex items-center space-x-2">
              <Wifi className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">StarNet</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Enter Voucher Code</CardTitle>
            <CardDescription>Enter your voucher code to get internet access</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="voucherCode">Voucher Code</Label>
              <Input
                id="voucherCode"
                placeholder="Enter your voucher code"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                className="text-center text-lg font-mono tracking-wider"
                maxLength={15}
              />
              <p className="text-xs text-gray-500 mt-1 text-center">Enter the code from your voucher receipt</p>
            </div>

            {validationResult && (
              <Alert className={validationResult.isValid ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                {validationResult.isValid ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <XCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertDescription className={validationResult.isValid ? "text-green-800" : "text-red-800"}>
                  {validationResult.message}
                </AlertDescription>
              </Alert>
            )}

            <Button
              onClick={validateVoucher}
              className="w-full"
              size="lg"
              disabled={isValidating || !voucherCode.trim()}
            >
              Connect to WiFi
            </Button>

            <div className="text-center space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">Don't have a voucher?</span>
                </div>
              </div>

              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/buy-voucher">Buy Voucher</Link>
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Demo codes for testing:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">DEMO123</code>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">TEST456</code>
                <code className="bg-gray-100 px-2 py-1 rounded text-xs">SAMPLE789</code>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4 text-center">Look for "StarNet" in your available networks</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
