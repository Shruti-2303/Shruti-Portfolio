import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Email service integration
    // Option 1: Resend (Recommended - Modern, easy to use)
    // Step 1: Install: npm install resend
    // Step 2: Get API key from https://resend.com/api-keys
    // Step 3: Add to .env.local: RESEND_API_KEY=re_xxxxx
    // Step 4: Uncomment the code below and replace 'onboarding@resend.dev' with your verified domain email
    
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    await resend.emails.send({
      from: 'Portfolio Contact <contact.shruti.com>', // Replace with your verified domain
      to: ['sharmas23032001@gmail.com'], // Your email address
      replyTo: email, // User's email for reply
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })


    return NextResponse.json(
      { 
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
