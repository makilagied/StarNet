import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Wifi, Users, Award, Target } from "lucide-react"

export default function AboutPage() {
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
              <Wifi className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">StarNet</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Kuhusu StarNet</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tunatoa huduma za intaneti za haraka na za kuaminika kwa bei nafuu. Lengo letu ni kuunganisha kila mtu na
            ulimwengu wa kidijitali.
          </p>
        </div>

        {/* Hadithi Yetu */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hadithi Yetu</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  StarNet ilianzishwa mwaka 2020 na lengo la kutoa huduma za intaneti za haraka na za bei nafuu kwa
                  jamii zetu. Tumeanza kama kampuni ndogo lakini tumekua kuwa moja ya watoa huduma wa intaneti
                  wanaotegemewa zaidi.
                </p>
                <p>
                  Kwa miaka mitatu, tumewahudumia zaidi ya wateja 1,000 na kujenga mtandao imara unaofanya kazi masaa 24
                  kwa siku. Tunaendelea kuboresha huduma zetu ili kukidhi mahitaji ya kisasa ya mawasiliano.
                </p>
                <p>
                  Tunaamini kwamba kila mtu anastahili kupata huduma za intaneti za ubora wa juu, na ndio maana
                  tunafanya kazi kwa bidii kutoa huduma bora kwa bei nafuu.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Maono Yetu</h3>
              <p className="mb-6">
                Kuwa kampuni inayoongoza katika kutoa huduma za intaneti za haraka na za kuaminika Afrika Mashariki.
              </p>
              <h3 className="text-2xl font-bold mb-4">Dhamira Yetu</h3>
              <p>
                Kuunganisha jamii zetu na ulimwengu wa kidijitali kupitia huduma za intaneti za ubora wa juu na za bei
                nafuu.
              </p>
            </div>
          </div>
        </div>

        {/* Maadili Yetu */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Maadili Yetu</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Wateja Kwanza</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Wateja wetu ni kipaumbele chetu cha kwanza. Tunafanya kila kitu ili kuhakikisha wanapata huduma bora
                  zaidi.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Ubora</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tunatoa huduma za ubora wa juu kila wakati. Hatutaki chini ya bora zaidi kwa wateja wetu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Uaminifu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tunafanya kazi kwa uwazi na uaminifu. Ahadi zetu ni za kweli na tunazitimu kila wakati.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Takwimu */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Mafanikio Yetu</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
              <div className="text-gray-600">Wateja Wenye Furaha</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-gray-600">Muda wa Kufanya Kazi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-gray-600">Msaada wa Wateja</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">3+</div>
              <div className="text-gray-600">Miaka ya Uzoefu</div>
            </div>
          </div>
        </div>

        {/* Wito wa Hatua */}
        <Card className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <CardContent className="pt-8 pb-8">
            <h2 className="text-2xl font-bold mb-4">Tayari Kuanza?</h2>
            <p className="mb-6 text-blue-100">Jiunge nasi leo na upate huduma za intaneti za haraka na za kuaminika.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">Angalia Huduma</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                <Link href="/contact">Wasiliana Nasi</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
