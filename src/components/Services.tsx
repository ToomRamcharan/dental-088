"use client"
import { useState } from "react"
import { Gem, Stethoscope, Sparkles, Syringe, SmilePlus, Baby, ArrowRight } from "lucide-react"
import Motion from "./Motion"
import { fadeUp } from "./Motion"

const ICONS = [Gem, Stethoscope, Sparkles, Syringe, SmilePlus, Baby]
const SERVICES = [
  {title:"General Dentistry",desc:"Comprehensive checkups and preventive care."},
  {title:"Root Canal",desc:"Pain-free therapy to save infected teeth."},
  {title:"Teeth Whitening",desc:"Professional whitening for a brighter smile."},
  {title:"Dental Implants",desc:"Permanent tooth replacement solutions."},
  {title:"Orthodontics",desc:"Braces and aligners for straighter teeth."},
  {title:"Pediatric Dentistry",desc:"Gentle dental care for children."},
]

export default function Services({ config }: { config: any }) {
  const [flipped, setFlipped] = useState(-1)
  return (
    <section id="services" className="section-padding bg-bg-site">
      <div className="section-container">
        <Motion variants={fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading">Our Services</h2>
          <p className="text-foreground-muted mt-3">Comprehensive dental care under one roof</p>
        </Motion>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i]
            return (
              <Motion key={i} variants={fadeUp} delay={i} className="perspective-1000" style={{perspective:"1000px"}}>
                <div onClick={() => setFlipped(flipped === i ? -1 : i)} className={`"relative w-full h-64 cursor-pointer transition-transform duration-500 ${flipped === i ? "[transform:rotateY(180deg)]" : ""}" style={{transformStyle:"preserve-3d"}}`}>
                  <div className="absolute inset-0 bg-white border border-border-color rounded-2xl p-6 flex flex-col items-center justify-center text-center backface-hidden">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4"><Icon className="w-8 h-8 text-primary" /></div>
                    <h3 className="text-lg font-bold font-heading">{s.title}</h3>
                    <p className="text-sm text-foreground-muted mt-2">Click to flip</p>
                  </div>
                  <div className="absolute inset-0 bg-primary text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] backface-hidden">
                    <p className="text-sm leading-relaxed">{s.desc}</p>
                    <ArrowRight className="w-5 h-5 mt-4" />
                  </div>
                </div>
              </Motion>
            )
          })}
        </div>
      </div>
    </section>
  )
}
