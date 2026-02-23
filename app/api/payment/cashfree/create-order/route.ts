import { Cashfree, CFEnvironment } from "cashfree-pg"
import { NextResponse } from "next/server"

const cashfree = new Cashfree(
    CFEnvironment.PRODUCTION,
    process.env.CASHFREE_APP_ID,
    process.env.CASHFREE_SECRET_KEY
)

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { amount, customerName, customerPhone, customerEmail, orderNote } = body

        if (!amount) {
            return NextResponse.json({ error: "Amount is required" }, { status: 400 })
        }

        const orderId = `order_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`

        const request = {
            order_amount: amount,
            order_currency: "INR",
            order_id: orderId,
            customer_details: {
                customer_id: `cust_${Date.now()}`,
                customer_phone: customerPhone?.replace(/[^0-9]/g, "") || "9999999999",
                customer_name: customerName || "FitPlan User",
                customer_email: customerEmail || "hello@fitplanindia.com",
            },
            order_meta: {
                return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://www.fitplanindia.com"}/payment/status?order_id={order_id}`,
            },
            order_note: orderNote || "FitPlan India Service",
        }

        const response = await cashfree.PGCreateOrder(request)

        return NextResponse.json({
            success: true,
            payment_session_id: response.data.payment_session_id,
            order_id: orderId,
        })
    } catch (error: any) {
        console.error("Cashfree Create Order Error:", error?.response?.data || error.message)
        return NextResponse.json(
            { error: "Failed to create payment session", details: error?.response?.data || error.message },
            { status: 500 }
        )
    }
}
