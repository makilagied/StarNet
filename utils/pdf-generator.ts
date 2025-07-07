import jsPDF from "jspdf"

export interface VoucherData {
  code: string
  plan: {
    name: string
    duration: string
    speed: string
    devices: number
    price: number
  }
  purchaseDate: string
  status: string
}

export function generateVoucherPDF(voucherData: VoucherData): void {
  const doc = new jsPDF()

  // Set up colors
  const primaryColor = [59, 130, 246] // Blue
  const secondaryColor = [107, 114, 128] // Gray

  // Header
  doc.setFillColor(...primaryColor)
  doc.rect(0, 0, 210, 40, "F")

  // Logo and title
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(24)
  doc.setFont("helvetica", "bold")
  doc.text("StarNet", 20, 25)

  doc.setFontSize(12)
  doc.setFont("helvetica", "normal")
  doc.text("WiFi Voucher Receipt", 20, 32)

  // Reset text color
  doc.setTextColor(0, 0, 0)

  // Voucher code section
  doc.setFillColor(248, 250, 252)
  doc.rect(20, 50, 170, 30, "F")
  doc.setDrawColor(226, 232, 240)
  doc.rect(20, 50, 170, 30, "S")

  doc.setFontSize(10)
  doc.setTextColor(...secondaryColor)
  doc.text("VOUCHER CODE", 25, 60)

  doc.setFontSize(20)
  doc.setFont("courier", "bold")
  doc.setTextColor(...primaryColor)
  doc.text(voucherData.code, 25, 72)

  // Plan details
  doc.setTextColor(0, 0, 0)
  doc.setFont("helvetica", "bold")
  doc.setFontSize(14)
  doc.text("Plan Details", 20, 95)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)

  const details = [
    ["Plan:", voucherData.plan.name],
    ["Duration:", voucherData.plan.duration],
    ["Max Speed:", `Up to ${voucherData.plan.speed}`],
    ["Devices:", `${voucherData.plan.devices} device${voucherData.plan.devices > 1 ? "s" : ""}`],
    ["Price:", `TZS ${voucherData.plan.price.toLocaleString()}`],
    ["Purchase Date:", new Date(voucherData.purchaseDate).toLocaleString()],
    ["Status:", voucherData.status.charAt(0).toUpperCase() + voucherData.status.slice(1)],
  ]

  let yPos = 105
  details.forEach(([label, value]) => {
    doc.setFont("helvetica", "bold")
    doc.text(label, 25, yPos)
    doc.setFont("helvetica", "normal")
    doc.text(value, 70, yPos)
    yPos += 8
  })

  // Instructions
  doc.setFont("helvetica", "bold")
  doc.setFontSize(14)
  doc.text("How to Connect", 20, yPos + 10)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(10)

  const instructions = [
    '1. Connect to "StarNet" network',
    "2. Open your web browser",
    "3. Enter your voucher code when prompted",
    "4. Enjoy your internet access!",
  ]

  yPos += 20
  instructions.forEach((instruction) => {
    doc.text(instruction, 25, yPos)
    yPos += 6
  })

  // Support information
  doc.setFillColor(248, 250, 252)
  doc.rect(20, yPos + 10, 170, 25, "F")
  doc.setDrawColor(226, 232, 240)
  doc.rect(20, yPos + 10, 170, 25, "S")

  doc.setFont("helvetica", "bold")
  doc.setFontSize(12)
  doc.text("Need Help?", 25, yPos + 20)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  doc.text("Email: support@starnet.com", 25, yPos + 27)
  doc.text("Phone: +255 123 456 789", 25, yPos + 32)

  // Footer
  doc.setFontSize(8)
  doc.setTextColor(...secondaryColor)
  doc.text("Thank you for choosing StarNet!", 20, 280)
  doc.text(`Generated on ${new Date().toLocaleString()}`, 20, 285)

  // Save the PDF
  doc.save(`StarNet-Voucher-${voucherData.code}.pdf`)
}
