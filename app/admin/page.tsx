"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Wifi, Users, CreditCard, TrendingUp, Search, Download, Eye, MoreHorizontal } from "lucide-react"

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data - in real app, this would come from your database
  const stats = {
    totalUsers: 1247,
    activeVouchers: 89,
    todayRevenue: 45000, // TZS
    monthlyRevenue: 850000, // TZS
  }

  const recentVouchers = [
    {
      id: 1,
      code: "ABC123XYZ",
      plan: "1 Day",
      price: 1200,
      status: "active",
      user: "john@example.com",
      created: "2024-01-15",
    },
    {
      id: 2,
      code: "DEF456UVW",
      plan: "1 Hour",
      price: 500,
      status: "used",
      user: "mary@example.com",
      created: "2024-01-15",
    },
    {
      id: 3,
      code: "GHI789RST",
      plan: "1 Week",
      price: 7000,
      status: "unused",
      user: "peter@example.com",
      created: "2024-01-14",
    },
    {
      id: 4,
      code: "JKL012QRS",
      plan: "1 Day",
      price: 1200,
      status: "expired",
      user: "sarah@example.com",
      created: "2024-01-14",
    },
  ]

  const recentUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+255 123 456 789",
      vouchers: 3,
      lastActive: "2024-01-15",
    },
    {
      id: 2,
      name: "Mary Smith",
      email: "mary@example.com",
      phone: "+255 987 654 321",
      vouchers: 1,
      lastActive: "2024-01-15",
    },
    {
      id: 3,
      name: "Peter Johnson",
      email: "peter@example.com",
      phone: "+255 555 123 456",
      vouchers: 5,
      lastActive: "2024-01-14",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "used":
        return "bg-blue-100 text-blue-800"
      case "unused":
        return "bg-yellow-100 text-yellow-800"
      case "expired":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <Button asChild variant="ghost">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Site
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Wifi className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">StarNet Admin</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">Administrator</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Active Vouchers</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.activeVouchers}</p>
                </div>
                <Wifi className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Today's Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">TZS {stats.todayRevenue.toLocaleString()}</p>
                </div>
                <CreditCard className="h-8 w-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-gray-900">TZS {stats.monthlyRevenue.toLocaleString()}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="vouchers" className="space-y-6">
          <TabsList>
            <TabsTrigger value="vouchers">Vouchers</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* Vouchers Tab */}
          <TabsContent value="vouchers">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Voucher Management</CardTitle>
                    <CardDescription>View and manage all vouchers</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="Search vouchers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Code</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Plan</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">User</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Created</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentVouchers.map((voucher) => (
                        <tr key={voucher.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-mono text-sm">{voucher.code}</td>
                          <td className="py-3 px-4">{voucher.plan}</td>
                          <td className="py-3 px-4">TZS {voucher.price.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <Badge className={getStatusColor(voucher.status)}>{voucher.status}</Badge>
                          </td>
                          <td className="py-3 px-4 text-sm">{voucher.user}</td>
                          <td className="py-3 px-4 text-sm">{voucher.created}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>View and manage registered users</CardDescription>
                  </div>
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    Export Users
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Phone</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Vouchers</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Last Active</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{user.name}</td>
                          <td className="py-3 px-4 text-sm">{user.email}</td>
                          <td className="py-3 px-4 text-sm">{user.phone}</td>
                          <td className="py-3 px-4">
                            <Badge variant="secondary">{user.vouchers}</Badge>
                          </td>
                          <td className="py-3 px-4 text-sm">{user.lastActive}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Report</CardTitle>
                  <CardDescription>Generate detailed revenue reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input id="startDate" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="endDate">End Date</Label>
                      <Input id="endDate" type="date" />
                    </div>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Generate Revenue Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage Report</CardTitle>
                  <CardDescription>Generate user activity and usage reports</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="reportType">Report Type</Label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>Daily Usage</option>
                        <option>Weekly Summary</option>
                        <option>Monthly Overview</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="format">Format</Label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>PDF</option>
                        <option>Excel</option>
                        <option>CSV</option>
                      </select>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Generate Usage Report
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
