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
        const { orderId } = body

        if (!orderId) {
            return NextResponse.json({ error: "Order ID is required" }, { status: 400 })
        }

        const response = await cashfree.PGOrderFetchPayments(orderId)

        const successfulPayment = response.data.find(
            (payment: any) => payment.payment_status === "SUCCESS"
        )

        if (successfulPayment) {
            return NextResponse.json({
                success: true,
                payment_status: "SUCCESS",
                payment_method: successfulPayment.payment_group,
                payment_amount: successfulPayment.payment_amount,
            })
        } else {
            return NextResponse.json({
                success: false,
                payment_status: "PENDING_OR_FAILED",
            })
        }
    } catch (error: any) {
        console.error("Cashfree Verify Payment Error:", error?.response?.data || error.message)
        return NextResponse.json(
            { error: "Failed to verify payment", details: error?.response?.data || error.message },
            { status: 500 }
        )
    }
}
