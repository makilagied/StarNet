import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600">Last updated: January 1, 2024</p>
        </div>

        {/* Terms Content */}
        <Card className="shadow-lg border-0 mb-8">
          <CardContent className="pt-6 prose max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using StarNet's WiFi services, you accept and agree to be bound by the terms and
                  provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                <p className="text-gray-600 mb-4">
                  StarNet provides internet access through a voucher-based system. Each voucher grants access to our
                  WiFi network for a specified duration and is limited to one device.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Vouchers are non-transferable and single-use</li>
                  <li>Each voucher supports exactly one device</li>
                  <li>Service availability is subject to network coverage</li>
                  <li>Speeds may vary based on network conditions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-600 mb-4">Users agree to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Use the service in compliance with all applicable laws</li>
                  <li>Not engage in illegal activities or transmit harmful content</li>
                  <li>Not attempt to circumvent security measures</li>
                  <li>Respect bandwidth limitations and fair usage policies</li>
                  <li>Keep voucher codes secure and confidential</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment and Refunds</h2>
                <p className="text-gray-600 mb-4">
                  Payment for vouchers is required in advance. Refunds are available for unused vouchers within 24 hours
                  of purchase, subject to our refund policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
                <p className="text-gray-600 mb-4">
                  We respect your privacy and handle your data in accordance with our Privacy Policy. We do not monitor,
                  log, or store your browsing activities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Service Availability</h2>
                <p className="text-gray-600 mb-4">
                  While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. Maintenance windows and
                  unforeseen outages may occur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  StarNet's liability is limited to the amount paid for the voucher. We are not responsible for any
                  indirect, incidental, or consequential damages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                <p className="text-gray-600 mb-4">
                  We reserve the right to terminate or suspend access to our services for violations of these terms or
                  for any other reason at our discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-600 mb-4">
                  We may update these terms from time to time. Continued use of our services constitutes acceptance of
                  any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
                <p className="text-gray-600 mb-4">For questions about these terms, please contact us at:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> legal@starnet.com
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
