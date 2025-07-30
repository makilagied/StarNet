import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wifi, Clock, Shield, Users, Building, Home } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Huduma Zetu za WiFi</h1>
          <p className="text-xl text-gray-600">Bundles za intaneti kwa kila mtu</p>
        </div>

        {/* Bundles za Kawaida */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Bundles za Kawaida</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Bundle ya Saa</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600 mb-4">TZS 500</div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Muda wa matumizi: Saa 1</li>
                  <li>• Kasi: Hadi 50 Mbps</li>
                  <li>• Vifaa: 1 kifaa</li>
                  <li>• Uongozaji wa haraka</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Nunua Sasa</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-500 border-2">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Bundle ya Siku</CardTitle>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Maarufu</span>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600 mb-4">TZS 1,200</div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Muda wa matumizi: Masaa 24</li>
                  <li>• Kasi: Hadi 100 Mbps</li>
                  <li>• Vifaa: 1 kifaa</li>
                  <li>• Thamani bora zaidi</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Nunua Sasa</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Wifi className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Bundle ya Wiki</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600 mb-4">TZS 7,000</div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Muda wa matumizi: Siku 7</li>
                  <li>• Kasi: Hadi 100 Mbps</li>
                  <li>• Vifaa: 1 kifaa</li>
                  <li>• Akiba kubwa zaidi</li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/contact">Nunua Sasa</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Huduma za Biashara */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Huduma za Biashara</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Building className="h-12 w-12 text-indigo-600 mb-4" />
                <CardTitle>Biashara Ndogo</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start gap-2">
                    <Wifi className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Kasi ya kipekee hadi 200 Mbps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Iliyoboreshwa kwa vifaa vingi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Usalama wa hali ya juu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Msaada wa kiufundi 24/7</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Wasiliana na Mauzo</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Home className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Huduma za Nyumbani</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600 mb-6">
                  <li className="flex items-start gap-2">
                    <Wifi className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Intaneti ya haraka hadi 150 Mbps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Msaada wa vifaa vingi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Udhibiti wa wazazi unapatikana</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Mipango ya kila mwezi</span>
                  </li>
                </ul>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Jifunze Zaidi</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Jinsi Inavyofanya Kazi */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Jinsi Inavyofanya Kazi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold mb-1">Chagua Bundle</h3>
                <p className="text-sm text-gray-600">Chagua mpango unaokufaa</p>
              </div>
              <div>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <h3 className="font-semibold mb-1">Wasiliana Nasi</h3>
                <p className="text-sm text-gray-600">Piga simu au tuma ujumbe</p>
              </div>
              <div>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold mb-1">Lipa</h3>
                <p className="text-sm text-gray-600">Lipa kwa njia unazopendelea</p>
              </div>
              <div>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600">4</span>
                </div>
                <h3 className="font-semibold mb-1">Tumia</h3>
                <p className="text-sm text-gray-600">Furahia intaneti ya haraka</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
