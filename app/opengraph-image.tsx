import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'FitPlan India - Expert Indian Diet Plans'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #064e3b, #059669)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Pattern Overlay - Subtle circles */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-200px',
                        left: '-200px',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
                        borderRadius: '50%',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-100px',
                        right: '-100px',
                        width: '500px',
                        height: '500px',
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0) 70%)',
                        borderRadius: '50%',
                    }}
                />

                {/* Content Container */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        padding: '60px 80px',
                        borderRadius: '40px',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    {/* Logo / Brand Area */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '30px',
                        }}
                    >
                        {/* Heart Icon SVG */}
                        <svg
                            width="64"
                            height="64"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            style={{ marginRight: '24px' }}
                        >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        <div
                            style={{
                                fontSize: 64,
                                fontWeight: 800,
                                color: 'white',
                                letterSpacing: '-0.02em',
                            }}
                        >
                            FitPlan India
                        </div>
                    </div>

                    {/* Main Headline */}
                    <div
                        style={{
                            fontSize: 42,
                            fontWeight: 600,
                            color: 'rgba(255, 255, 255, 0.9)',
                            textAlign: 'center',
                            lineHeight: 1.2,
                            marginBottom: '20px',
                            maxWidth: '900px',
                        }}
                    >
                        Personalized Indian Diet Plans
                    </div>

                    {/* Subheadline badges */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '20px',
                            marginTop: '10px',
                        }}
                    >
                        <div
                            style={{
                                padding: '10px 24px',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                borderRadius: '100px',
                                fontSize: 24,
                                color: '#fff',
                                fontWeight: 500,
                            }}
                        >
                            PCOS
                        </div>
                        <div
                            style={{
                                padding: '10px 24px',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                borderRadius: '100px',
                                fontSize: 24,
                                color: '#fff',
                                fontWeight: 500,
                            }}
                        >
                            Thyroid
                        </div>
                        <div
                            style={{
                                padding: '10px 24px',
                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                borderRadius: '100px',
                                fontSize: 24,
                                color: '#fff',
                                fontWeight: 500,
                            }}
                        >
                            Weight Loss
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '30px',
                        opacity: 0.8,
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fbbf24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span style={{ fontSize: 20, color: '#fff' }}>Medically Reviewed</span>
                    </div>
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#fff' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fbbf24"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        </svg>
                        <span style={{ fontSize: 20, color: '#fff' }}>Expert Nutritionists</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
