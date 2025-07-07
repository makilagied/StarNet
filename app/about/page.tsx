import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About StarNet</h1>
          <p className="text-xl text-gray-600">Fast, reliable WiFi for everyone</p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              StarNet started in 2024 to make internet access simple and affordable. We use a voucher system - no
              contracts, no credit checks.
            </p>
            <p className="text-gray-600">Today we serve 1,000+ customers with 99.9% uptime.</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600">Customers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button asChild>
            <Link href="/buy-voucher">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
