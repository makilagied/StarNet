import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Shield, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 text-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <h1 className="text-5xl font-bold mb-6">Fast WiFi Access</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Buy a voucher, connect instantly. Simple and affordable internet access.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/buy-voucher">Buy Voucher</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/login">Use Voucher</Link>
          </Button>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>1 Hour</CardTitle>
                <div className="text-3xl font-bold text-blue-600">500 TZS</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• 1 hour access</li>
                  <li>• 50 Mbps speed</li>
                  <li>• 1 device</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/buy-voucher?plan=1hour">Buy Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-500 border-2">
              <CardHeader>
                <CardTitle>1 Day</CardTitle>
                <div className="text-3xl font-bold text-blue-600">1,200 TZS</div>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Popular</span>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• 24 hours access</li>
                  <li>• 100 Mbps speed</li>
                  <li>• 1 device</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/buy-voucher?plan=1day">Buy Now</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>1 Week</CardTitle>
                <div className="text-3xl font-bold text-blue-600">7,000 TZS</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• 7 days access</li>
                  <li>• 100 Mbps speed</li>
                  <li>• 1 device</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/buy-voucher?plan=1week">Buy Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why StarNet?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fast Speed</h3>
              <p className="text-gray-600">Up to 100 Mbps</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">Safe connection</p>
            </div>
            <div className="text-center">
              <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Available</h3>
              <p className="text-gray-600">Always online</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
