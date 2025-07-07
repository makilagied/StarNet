"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, CreditCard, Smartphone, Wifi } from "lucide-react"

const plans = [
  { id: "1hour", name: "1 Hour", price: 500, duration: "1 hour", devices: 1, speed: "50 Mbps" },
  { id: "1day", name: "1 Day", price: 1200, duration: "24 hours", devices: 1, speed: "100 Mbps", popular: true },
  { id: "1week", name: "1 Week", price: 7000, duration: "7 days", devices: 1, speed: "100 Mbps" },
]

export default function BuyVoucherPage() {
  const [selectedPlan, setSelectedPlan] = useState("1day")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isProcessing, setIsProcessing] = useState(false)

  const selectedPlanDetails = plans.find((plan) => plan.id === selectedPlan)

  const handlePurchase = async () => {
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generate voucher code
    const voucherCode = Math.random().toString(36).substring(2, 15).toUpperCase()

    // In a real app, you'd save this to your database
    localStorage.setItem(
      "purchasedVoucher",
      JSON.stringify({
        code: voucherCode,
        plan: selectedPlanDetails,
        purchaseDate: new Date().toISOString(),
        status: "unused",
      }),
    )

    // Redirect to success page
    window.location.href = `/voucher-success?code=${voucherCode}`
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Buy WiFi Voucher</h1>
          <p className="text-gray-600">Choose your plan and get instant internet access</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Select Your Plan</CardTitle>
              <CardDescription>Choose the duration that works best for you</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan}>
                {plans.map((plan) => (
                  <div key={plan.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={plan.id} id={plan.id} />
                    <Label htmlFor={plan.id} className="flex-1 cursor-pointer">
                      <div
                        className={`p-4 rounded-lg border-2 ${selectedPlan === plan.id ? "border-blue-500 bg-blue-50" : "border-gray-200"} ${plan.popular ? "ring-2 ring-blue-200" : ""}`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-semibold">{plan.name}</h3>
                              {plan.popular && (
                                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">
                              {plan.duration} • {plan.devices} device • Up to {plan.speed}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-blue-600">TZS {plan.price}</div>
                          </div>
                        </div>
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Complete your purchase securely</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Payment Method */}
              <div>
                <Label className="text-base font-medium">Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center cursor-pointer">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="mobile" id="mobile" />
                    <Label htmlFor="mobile" className="flex items-center cursor-pointer">
                      <Smartphone className="h-4 w-4 mr-2" />
                      Mobile Money
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Card Details */}
              {paymentMethod === "card" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="John Doe" />
                  </div>
                </div>
              )}

              {/* Mobile Money */}
              {paymentMethod === "mobile" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input id="phoneNumber" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="provider">Provider</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Select Provider</option>
                      <option>M-Pesa</option>
                      <option>Airtel Money</option>
                      <option>MTN Mobile Money</option>
                    </select>
                  </div>
                </div>
              )}

              <Separator />

              {/* Order Summary */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Plan: {selectedPlanDetails?.name}</span>
                  <span>TZS {selectedPlanDetails?.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Processing Fee</span>
                  <span>TZS 100</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>TZS {((selectedPlanDetails?.price || 0) + 100).toLocaleString()}</span>
                </div>
              </div>

              <Button onClick={handlePurchase} className="w-full" size="lg" disabled={isProcessing}>
                {isProcessing
                  ? "Processing..."
                  : `Pay TZS ${((selectedPlanDetails?.price || 0) + 100).toLocaleString()}`}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By completing this purchase, you agree to our Terms of Service and Privacy Policy. Your voucher code
                will be generated instantly after payment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
