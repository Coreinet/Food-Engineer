import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Oops! It looks like you missed filling in your name, email, or message. Let\'s complete all the fields so we can chat! ✨' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Hmm, that email doesn\'t look quite right! Try using a format like: yourname@email.com 📧' },
        { status: 400 }
      )
    }

    // Here you would typically send an email
    // For now, we'll just log the data and return success
    console.log('Contact Form Submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    })

    // In a real application, you would use a service like:
    // - Nodemailer
    // - SendGrid
    // - Resend
    // - EmailJS (client-side)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Perfect! Your message is on its way to us. We\'ll get back to you super soon! 🎉' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Oh no! Something unexpected happened. But don\'t worry - just try sending your message again! 🔧' },
      { status: 500 }
    )
  }
} 