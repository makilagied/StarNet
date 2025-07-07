"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Search, ChevronDown, HelpCircle } from "lucide-react"

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const faqs = [
    {
      question: "How do I buy a voucher?",
      answer: "Click 'Buy Voucher', choose your plan, pay, and get your code instantly.",
    },
    {
      question: "How do I connect?",
      answer: "1. Connect to 'StarNet' network\n2. Open browser\n3. Enter your voucher code\n4. Start browsing!",
    },
    {
      question: "My voucher isn't working",
      answer: "Check the code is correct. Make sure it hasn't expired or been used. Contact support if needed.",
    },
    {
      question: "Can I use multiple devices?",
      answer: "No, each voucher works on one device only.",
    },
    {
      question: "How fast is the internet?",
      answer: "Up to 50 Mbps for hourly plans, up to 100 Mbps for daily and weekly plans.",
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, for unused vouchers within 24 hours of purchase.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Help Center</h1>
          <p className="text-xl text-gray-600">Find answers to common questions</p>
        </div>

        {/* Search */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* FAQs */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <Card key={index}>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      <ChevronDown className="h-5 w-5" />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Contact */}
        <Card className="mt-8 bg-blue-50">
          <CardContent className="pt-6 text-center">
            <h3 className="font-semibold mb-2">Still need help?</h3>
            <p className="text-gray-600 mb-4">Contact our support team</p>
            <Button asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
