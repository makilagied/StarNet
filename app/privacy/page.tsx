import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Lock, Database } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600">Last updated: January 1, 2024</p>
        </div>

        {/* Privacy Content */}
        <Card className="shadow-lg border-0 mb-8">
          <CardContent className="pt-6 prose max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
                <p className="text-gray-600 mb-4">
                  At StarNet, we are committed to protecting your privacy and ensuring the security of your personal
                  information. This policy explains how we collect, use, and protect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <Eye className="h-6 w-6 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-2">What We Collect</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Email address (for voucher delivery)</li>
                      <li>• Phone number (optional)</li>
                      <li>• Payment information (processed securely)</li>
                      <li>• Device MAC address (for access control)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <Lock className="h-6 w-6 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-2">What We Don't Collect</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Browsing history</li>
                      <li>• Website visits</li>
                      <li>• Personal communications</li>
                      <li>• Downloaded content</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use your information solely for:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Providing internet access services</li>
                  <li>Processing payments and delivering vouchers</li>
                  <li>Customer support and technical assistance</li>
                  <li>Network security and abuse prevention</li>
                  <li>Service improvement and analytics (anonymized)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Database className="h-8 w-8 text-purple-600 mb-4" />
                  <p className="text-gray-600 mb-4">
                    We implement industry-standard security measures to protect your data:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>SSL/TLS encryption for all data transmission</li>
                    <li>Secure payment processing through certified providers</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal data on a need-to-know basis</li>
                    <li>Data retention policies to minimize stored information</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No Browsing Monitoring</h2>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-900 mb-2">Your Privacy is Protected</h3>
                  <p className="text-green-800">
                    We do not monitor, log, track, or store any of your internet browsing activities, websites visited,
                    or online communications. Your internet usage is private and confidential.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or share your personal information with third parties, except:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With service providers who assist in our operations (under strict confidentiality)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-600 mb-4">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File a complaint with data protection authorities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-600 mb-4">
                  We use minimal cookies only for essential website functionality and user authentication. We do not use
                  tracking cookies or third-party analytics that compromise your privacy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  For privacy-related questions or requests, contact our Data Protection Officer:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> privacy@starnet.com
                    <br />
                    <strong>Phone:</strong> +255 123 456 789
                    <br />
                    <strong>Address:</strong> 123 Tech Street, Dar es Salaam, Tanzania
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="text-center">
          <Button asChild variant="outline" className="bg-transparent">
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
