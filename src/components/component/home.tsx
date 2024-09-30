"use client"
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export default function MandliGarba() {
  const [activeFaq, setActiveFaq] = useState(0)

  const faqData = [
    {
      question: "Am I supposed to collect physical copy of the pass, if bought on the website?",
      answer: "Yes. Physical passes are mandatory for entry on campus. Digital passes bought from our website can be validated for physical passes at the following locations: At the Venue (Ticket Window), At Cafe Mocha, Bodakdev (30th Sept to 2nd Oct | 12pm to 9pm), At Cafe Mocha, Gulbai Tekra (30th Sept to 2nd Oct | 12pm to 9pm), At Cafe Mocha, InfoCity Club (30th Sept to 2nd Oct | 12pm to 9pm)"
    },
    {
      question: "How can we avail discounts?",
      answer: "Early bird passes are 1800!"
    },
    // Add more FAQ items here
  ]

  return (
    <div className="min-h-screen bg-[#5c0000] text-[#d4af37] relative overflow-hidden">
    {/* Animated Background SVG */}
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="garba-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#d4af37" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
        </radialGradient>
        <filter id="garba-blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
      <g className="animate-spin-slow" style={{ transformOrigin: 'center', animation: 'spin 60s linear infinite' }}>
        <circle cx="500" cy="500" r="300" fill="url(#garba-gradient)" filter="url(#garba-blur)" />
        <circle cx="500" cy="500" r="250" fill="url(#garba-gradient)" filter="url(#garba-blur)" style={{ animationDelay: '-10s' }} />
        <circle cx="500" cy="500" r="200" fill="url(#garba-gradient)" filter="url(#garba-blur)" style={{ animationDelay: '-20s' }} />
      </g>
      <g className="animate-float" style={{ animation: 'float 50s ease-in-out infinite' }}>
        {[...Array(50)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1000}
            cy={Math.random() * 1000}
            r={Math.random() * 10 + 5}
            fill="#d4af37"
            fillOpacity="0.1"
          />
        ))}
      </g>
    </svg>
      <main>
        <section className="py-12 md:py-24 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">मंडली गरबा</h1>
            <h2 className="text-2xl md:text-3xl mb-8">Navratri 2024 At Its Best</h2>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Dates</h3>
              <p className="text-lg">3rd to 12th Oct 2024</p>
              <p className="text-lg">08:00 PM onwards</p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Venue</h3>
              <p className="text-lg">Mandli Garba 2024, near Ognaj toll tax,</p>
              <p className="text-lg">off S.P ring road, Ahmedabad, Gujarat.</p>
            </div>
            <Link href="/buy-now" className="bg-[#d4af37] text-[#5c0000] px-6 py-3 rounded-full text-xl font-bold hover:bg-yellow-500 inline-block">
              Book Passes
            </Link>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-[#4c0000]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">What is Mandli</h2>
            <p className="text-lg mb-4">
              Mandli is a design-first event that hosts the most awaited Sheri - Style Garba. The initiative of a group of friends, and now CEPT alumni, commemorates the love, passion and zeal for garba into a shared and immersive ecosystem.
            </p>
            <p className="text-lg mb-4">
              An experience curated through Design installations, Dhol & Shehnai and your love!
            </p>
            <p className="text-lg mb-8">Aavo Fari Jodaiye!!</p>
            <div className="text-center">
              <Link href="/about" className="bg-[#d4af37] text-[#5c0000] px-6 py-3 rounded-full text-xl font-bold hover:bg-yellow-500 inline-block">
                Know More
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Glimpses from Past</h2>
            {/* Add image gallery here */}
            <div className="text-center mt-8">
              <Link href="/gallery" className="bg-[#d4af37] text-[#5c0000] px-6 py-3 rounded-full text-xl font-bold hover:bg-yellow-500 inline-block">
                View Gallery
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-[#4c0000]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-[#d4af37] pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown className={`transform transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {activeFaq === index && (
                    <p className="mt-2 text-[#d4af37]">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
