import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Clock, Shield } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Simple WiFi plans for everyone</p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Clock className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Hourly Access</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600 mb-4">500 TZS</div>
              <ul className="space-y-2 text-sm mb-6">
                <li>• 1 hour access</li>
                <li>• 50 Mbps speed</li>
                <li>• 1 device</li>
                <li>• Instant activation</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/buy-voucher?plan=1hour">Buy Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-blue-500 border-2">
            <CardHeader>
              <Shield className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Daily Access</CardTitle>
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Popular</span>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-4">1,200 TZS</div>
              <ul className="space-y-2 text-sm mb-6">
                <li>• 24 hours access</li>
                <li>• 100 Mbps speed</li>
                <li>• 1 device</li>
                <li>• Best value</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/buy-voucher?plan=1day">Buy Now</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Wifi className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Weekly Access</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-purple-600 mb-4">7,000 TZS</div>
              <ul className="space-y-2 text-sm mb-6">
                <li>• 7 days access</li>
                <li>• 100 Mbps speed</li>
                <li>• 1 device</li>
                <li>• Maximum savings</li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/buy-voucher?plan=1week">Buy Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* How it works */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">How It Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-1">Buy Voucher</h3>
                <p className="text-sm text-gray-600">Choose your plan</p>
              </div>
              <div>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold mb-1">Connect</h3>
                <p className="text-sm text-gray-600">Join "StarNet" network</p>
              </div>
              <div>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold mb-1">Enter Code</h3>
                <p className="text-sm text-gray-600">Use your voucher</p>
              </div>
              <div>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-semibold mb-1">Browse</h3>
                <p className="text-sm text-gray-600">Enjoy fast internet</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
