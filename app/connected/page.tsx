"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wifi, Clock, Download, Upload, Users, CheckCircle } from "lucide-react"

export default function ConnectedPage() {
  const [timeRemaining, setTimeRemaining] = useState(3600) // 1 hour in seconds
  const [dataUsed, setDataUsed] = useState(0.5) // GB
  const [downloadSpeed, setDownloadSpeed] = useState(85.4)
  const [uploadSpeed, setUploadSpeed] = useState(23.7)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const timeProgress = ((3600 - timeRemaining) / 3600) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Wifi className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">StarNet</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Connected</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to StarNet!</h1>
          <p className="text-gray-600">You're now connected to high-speed internet</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Session Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-600" />
                Session Information
              </CardTitle>
              <CardDescription>Your current internet session details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Time Remaining</span>
                  <span className="text-2xl font-bold text-blue-600">{formatTime(timeRemaining)}</span>
                </div>
                <Progress value={timeProgress} className="h-2" />
                <p className="text-xs text-gray-500 mt-1">Session expires automatically</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{dataUsed} GB</div>
                  <div className="text-xs text-gray-600">Data Used</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-xs text-gray-600">Device Connected</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Speed Test */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-green-600" />
                Connection Speed
              </CardTitle>
              <CardDescription>Real-time connection performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Download className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">{downloadSpeed}</div>
                  <div className="text-xs text-gray-600">Mbps Download</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Upload className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600">{uploadSpeed}</div>
                  <div className="text-xs text-gray-600">Mbps Upload</div>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                Run Speed Test
              </Button>
            </CardContent>
          </Card>

          {/* Usage Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>Make the most of your internet session</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Streaming and browsing are optimized for your plan</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Your session will auto-disconnect when time expires</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Contact support if you experience any issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Purchase additional time anytime before expiry</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your connection and account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full">
                <Link href="/buy-voucher">Extend Session</Link>
              </Button>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/support">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/about">About StarNet</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Network Status */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              Network Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">Excellent</div>
                <div className="text-sm text-gray-600">Signal Strength</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">12ms</div>
                <div className="text-sm text-gray-600">Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">47</div>
                <div className="text-sm text-gray-600">Users Online</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
