"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Wifi, Ticket, CheckCircle, AlertCircle, Send } from "lucide-react"

export default function SupportPage() {
  const [ticketForm, setTicketForm] = useState({
    subject: "",
    priority: "medium",
    category: "technical",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate ticket submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    // In real app, redirect to ticket confirmation page
    alert(
      "Support ticket submitted successfully! Ticket ID: #ST-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    )
  }

  const recentTickets = [
    {
      id: "ST-ABC123",
      subject: "Connection keeps dropping",
      status: "open",
      priority: "high",
      created: "2024-01-15",
      lastUpdate: "2024-01-15",
    },
    {
      id: "ST-DEF456",
      subject: "Voucher code not working",
      status: "resolved",
      priority: "medium",
      created: "2024-01-14",
      lastUpdate: "2024-01-14",
    },
    {
      id: "ST-GHI789",
      subject: "Billing inquiry",
      status: "in-progress",
      priority: "low",
      created: "2024-01-13",
      lastUpdate: "2024-01-14",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-red-100 text-red-800"
      case "in-progress":
        return "bg-yellow-100 text-yellow-800"
      case "resolved":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Button asChild variant="ghost" className="mr-4 hover:bg-gray-100 transition-colors">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Ticket className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get technical support and track your support tickets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Create Ticket */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Create Support Ticket</CardTitle>
              <CardDescription>Describe your issue and we'll help you resolve it</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm((prev) => ({ ...prev, subject: e.target.value }))}
                    required
                    className="mt-1"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <select
                      id="category"
                      value={ticketForm.category}
                      onChange={(e) => setTicketForm((prev) => ({ ...prev, category: e.target.value }))}
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    >
                      <option value="technical">Technical Issue</option>
                      <option value="billing">Billing</option>
                      <option value="voucher">Voucher Problem</option>
                      <option value="connection">Connection Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <select
                      id="priority"
                      value={ticketForm.priority}
                      onChange={(e) => setTicketForm((prev) => ({ ...prev, priority: e.target.value }))}
                      className="w-full p-2 border border-gray-300 rounded-md mt-1"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm((prev) => ({ ...prev, description: e.target.value }))}
                    required
                    className="mt-1 min-h-[120px]"
                    placeholder="Please provide detailed information about your issue, including any error messages and steps you've already tried..."
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Creating Ticket...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Create Ticket
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Tickets */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Your Recent Tickets</CardTitle>
                <CardDescription>Track the status of your support requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentTickets.map((ticket) => (
                    <div key={ticket.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-gray-900">{ticket.subject}</h4>
                          <p className="text-sm text-gray-600">Ticket ID: {ticket.id}</p>
                        </div>
                        <div className="flex gap-2">
                          <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                          <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>Created: {ticket.created}</span>
                        <span>Updated: {ticket.lastUpdate}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Tickets
                </Button>
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Quick Help</CardTitle>
                <CardDescription>Common solutions for immediate help</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/help#connection-problems">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    Connection Issues
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/help#voucher-issues">
                    <Ticket className="h-4 w-4 mr-2" />
                    Voucher Problems
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start bg-transparent">
                  <Link href="/help">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    View All FAQs
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg border-0 bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="font-semibold text-blue-900 mb-2">Need Immediate Help?</h3>
                  <p className="text-blue-700 text-sm mb-4">For urgent issues, contact our support team directly</p>
                  <div className="space-y-2">
                    <p className="text-blue-800">📧 support@starnet.com</p>
                    <p className="text-blue-800">📞 +255 123 456 789</p>
                    <p className="text-blue-800">🕒 24/7 Support Available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
