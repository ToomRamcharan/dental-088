'use client'

import React, { useState, useEffect } from 'react'
import Motion from '../components/Motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Doctors from '../components/Doctors'
import Technology from '../components/Technology'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import GoogleMap from '../components/GoogleMap'
import Footer from '../components/Footer'
import WhatsAppCTA from '../components/WhatsAppCTA'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  if (!mounted) return null

  const siteConfig = {
    clinicName: "Partha Dental - Khammam",
    phone: "+919390113891",
    email: "online@parthadental.com",
    address: "Wyra Rd, opp. to Rohit Test Tube Baby Centre, above Titan Watch Showroom, Nehru Nagar",
    city: "Khammam",
    pincode: "507001",
    rating: "4.7",
    waLink: "https://wa.me/919390113891",
    designFamily: "Editorial",
    navType: "Minimal",
    heroType: "Interactive",
    servicesType: "Flip Cards",
    footerType: "Newsletter",
    colors: {"primary": "#1E293B", "primary_light": "#334155", "secondary": "#F8FAFC", "secondary_light": "#FFFFFF", "accent": "#3B82F6", "bg": "#FAFAFA", "bg_dark": "#0F172A", "fg": "#0F172A", "fg_muted": "#64748B", "border": "#E2E8F0", "white": "#FFFFFF"},
  }

  return (
    <main id="main-content" className="min-h-screen bg-bg-site text-foreground">
      <Navbar config={siteConfig} />
      <Hero config={siteConfig} />
      <About config={siteConfig} />
      <Services config={siteConfig} />
      <Doctors config={siteConfig} />
      <Technology config={siteConfig} />
      <Testimonials config={siteConfig} />
      <Gallery config={siteConfig} />
      <FAQ config={siteConfig} />
      <Contact config={siteConfig} />
      <GoogleMap config={siteConfig} />
      <Footer config={siteConfig} />
      <WhatsAppCTA config={siteConfig} />
    </main>
  )
}
