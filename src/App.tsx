import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Image as ImageIcon, 
  SlidersHorizontal, 
  Sparkles, 
  Users, 
  Briefcase, 
  Palette,
  Award,
  Cpu,
  X
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
          
            <span className="font-semibold tracking-tight text-lg">KOL Studio Gen by GenStudio</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
            <a href="#how-it-works" className="hover:text-zinc-900 transition-colors">How it works</a>
            <a href="#variation" className="hover:text-zinc-900 transition-colors">Variation Mode</a>
            <a href="#demo" className="hover:text-zinc-900 transition-colors">Demo</a>
          </div>
          <button className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors">
            Coming Soon
          </button>
        </div>
      </nav>

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(0,0,0,0.03)_0%,_transparent_50%)]" />
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              
              {/* Credibility Badges */}
        

              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
                  Create consistent, studio-quality KOL visuals
                </h1>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                  Use visual controls first, then add prompts only when needed.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="text-base text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                 KOL Studio Gen is an AI image generation product designed to create consistent, studio-quality visuals from a single reference.
               </p>
             </FadeIn>

              <FadeIn delay={0.3} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button onClick={() => setIsVideoModalOpen(true)} className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-zinc-800 transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                  Watch Demo
                </button>
                <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-medium hover:bg-zinc-50 transition-colors">
                  Contact Us
                </a>
              </FadeIn>
            </div>

            {/* Hero Visual */}
            <FadeIn delay={0.4} className="mt-20 relative rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
              <div className="aspect-[16/9] md:aspect-[21/9] bg-zinc-100 relative">
                <img 
                  src="https://i.postimg.cc/3Nwssp2d/kol-generated-1-(7).jpg" 
                  alt="Studio quality AI generated portrait" 
                  className="w-full h-full object-cover object-[center_25%] opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. WHY THIS PRODUCT EXISTS / PROBLEM SECTION */}
        <section id="how-it-works" className="py-24 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                  The problem with AI generation today.
                </h2>
                <div className="space-y-6 text-zinc-600 leading-relaxed">
                  <p>
                    Creating beautiful AI images usually requires long, repeated, and highly technical prompts. Users are forced to manually think through every detail: background, outfit, lighting, camera angle, and mood.
                  </p>
                  <p>
                    Most people are not prompt experts. While advanced AI workflows are powerful, they remain far too complex and unpredictable for normal users.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2} className="bg-white border border-zinc-200 rounded-2xl p-8 md:p-12 shadow-sm">
                <SlidersHorizontal className="w-8 h-8 text-zinc-900 mb-6" />
                <h3 className="text-2xl font-medium mb-4">The Visual Control Solution</h3>
                <p className="text-zinc-600 leading-relaxed mb-8">
                  KOL Studio Gen replaces manual prompting with structured visual controls. Prompting becomes optional, not the main job.
                </p>
                <ul className="space-y-4">
                  {[
                    "Upload a single reference image",
                    "Select visual settings (outfit, style, framing)",
                    "Generate studio-quality results instantly"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-zinc-700">
                      <CheckCircle2 className="w-5 h-5 text-zinc-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 3. APP SCREENSHOT SECTION */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                A real working app, not just a prompt concept.
              </h2>
              <p className="text-lg text-zinc-600">
                Upload one reference image, choose outfit, background, style, framing, accessories, pose, and more, then generate polished AI visuals through a structured workflow.
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8">
              <FadeIn delay={0.1} className="rounded-2xl overflow-hidden border border-zinc-200 bg-[#0a0a0a] shadow-xl group">
                <div className="p-6 border-b border-white/10 bg-[#111] flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="ml-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Input & Output View</span>
                </div>
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://i.postimg.cc/fRJBGskt/z7666770775858-66138a24333d9ee11cf1879bc5e3bc17.jpg" 
                    alt="App UI showing input image and output result" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} className="rounded-2xl overflow-hidden border border-zinc-200 bg-[#0a0a0a] shadow-xl group">
                <div className="p-6 border-b border-white/10 bg-[#111] flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <span className="ml-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">Settings & Controls</span>
                </div>
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://i.postimg.cc/7hKnRtkR/z7666769850953-0ee566b807ea867e2d0d85b68ebd7c54.jpg" 
                    alt="App UI showing settings and features area" 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 4. VARIATION PROOF SECTION */}
        <section id="variation" className="py-24 md:py-32 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-center">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                  One reference in.<br />
                  <span className="text-zinc-500">Four consistent outputs out.</span>
                </h2>
                <p className="text-lg text-zinc-600 mb-10">
                  Variation mode is our strongest proof of concept. It generates multiple polished outputs while keeping the exact same face and identity consistent across the entire set.
                </p>
                
                <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm">
                  <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Reference Input</div>
                  <img 
                    src="https://i.postimg.cc/G2vVTR1N/Generated-Image-March-16-2026-9-25PM.jpg" 
                    alt="Reference input image" 
                    className="w-full aspect-[4/5] object-cover rounded-xl border border-zinc-200"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Variation Outputs</div>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {[
                    "https://i.postimg.cc/gj8z0QMv/kol-generated-1-(18).jpg",
                    "https://i.postimg.cc/HLNd9dRg/kol-generated-1-(17).jpg",
                    "https://i.postimg.cc/bNRPFQWB/kol-generated-1-(16).jpg",
                    "https://i.postimg.cc/qBsHzsJc/kol-generated-1-(15).jpg"
                  ].map((src, i) => (
                    <div key={i} className="relative group rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[4/5] shadow-sm">
                      <img 
                        src={src} 
                        alt={`Variation output ${i + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-sm font-medium text-white">Variation 0{i + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 5. VIDEO DEMO SECTION */}
        <section id="demo" className="py-24 md:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                See the workflow in action
              </h2>
              <p className="text-lg text-zinc-600 mb-12 max-w-2xl mx-auto">
                Watch how one reference image becomes polished AI visuals through a simple, guided workflow.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-900 aspect-video shadow-2xl flex items-center justify-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/G9aX85boiAo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full absolute inset-0"
              ></iframe>
            </FadeIn>
          </div>
        </section>

        {/* 6. WHO IT IS FOR SECTION */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Built for scale.</h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Everyday users",
                  desc: "Anyone who wants beautiful, professional photos of themselves without learning how to write complex AI prompts."
                },
                {
                  icon: Palette,
                  title: "Creators & freelancers",
                  desc: "Streamline your visual content creation. Generate consistent assets for social media, portfolios, and personal branding instantly."
                },
                {
                  icon: Briefcase,
                  title: "Teams & businesses",
                  desc: "Scale your visual production. Create high-quality, on-brand imagery for marketing campaigns without expensive studio shoots."
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-zinc-900 mb-6" />
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 7. BUILT WITH GOOGLE AI SECTION */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                Powered by Google AI models
              </h2>
              <p className="text-lg text-zinc-600 mb-16 max-w-2xl mx-auto">
                Powered by Gemini 3.1 Pro and Nano Banana Pro to generate consistent, production-ready KOL visuals.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm">
                <Cpu className="w-6 h-6 text-zinc-900" />
                <span className="font-medium text-lg text-zinc-900">Gemini 3.1 Pro</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm">
                <ImageIcon className="w-6 h-6 text-zinc-900" />
                <span className="font-medium text-lg text-zinc-900">Nano Banana Pro</span>
              </div>
              
            </FadeIn>
          </div>
        </section>

        {/* 8. REAL-WORLD TESTING SECTION */}
        <section className="py-24 bg-zinc-50 border-y border-zinc-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn className="order-2 md:order-1">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-200 bg-[#0a0a0a] aspect-video w-full shadow-2xl">
                  <img 
                    src="https://i.postimg.cc/bvqsBxz5/IMG-2360.jpg" 
                    alt="Real world testing in short-form content" 
                    className="w-full h-full object-contain object-center opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  {/* Mockup UI overlay to simulate social feed */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                </div>
              </FadeIn>
              
              <FadeIn delay={0.2} className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">
                  Tested in real content use.
                </h2>
                <p className="text-lg text-zinc-600 leading-relaxed">
                  We don't just generate images; we validate them. Generated visuals have already been used in live short-form content experiments, proving their quality holds up in real-world motion and media environments.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* 9. FINAL SHOWCASE GALLERY */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Selected outputs from the current MVP
              </h2>
              <p className="text-zinc-600">High-fidelity results generated entirely through the UI controls.</p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                "https://i.postimg.cc/8PjvDmg5/kol-generated-1-(20).jpg",
                "https://i.postimg.cc/3J60rTWy/generated-image-2-(3).jpg",
                "https://i.postimg.cc/Qx9FvNcx/kol-generated-1-(30).jpg",
                "https://i.postimg.cc/rFrpQnLf/kol-generated-1-(1)-2.jpg",
                "https://i.postimg.cc/Zn3CBVbd/kol-generated-1-(3)-3.jpg",
                "https://i.postimg.cc/rmrM9BMW/generated-image-1-(2).jpg"
              ].map((src, i) => (
                <FadeIn key={i} delay={i * 0.1} className="relative group rounded-xl overflow-hidden border border-zinc-200 bg-zinc-100 aspect-[4/5] shadow-sm">
                  <img 
                    src={src} 
                    alt={`Gallery output ${i + 1}`} 
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FINAL CTA SECTION */}
     <section id="contact" className="py-24 md:py-28 bg-zinc-50 border-t border-zinc-200">
  <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2">
    <FadeIn>
      <div>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-zinc-900">
          About GenStudio
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed mb-4">
          GenStudio is an early-stage AI product studio focused on building practical tools for visual generation and content workflows.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Our current product, KOL Studio Gen, is designed to create consistent, studio-quality images with strong identity preservation.
        </p>
      </div>
    </FadeIn>

    <FadeIn delay={0.1}>
      <div>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-zinc-900">
          Founder
        </h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Nguyen Binh — Founder & Lead AI Developer
        </p>
        <a
          href="https://www.linkedin.com/in/nguyen-binh-064a80307/"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-4 text-zinc-900 font-medium underline underline-offset-4"
        >
          LinkedIn
        </a>

        <h3 className="text-xl font-medium tracking-tight mt-10 mb-3 text-zinc-900">
          Contact
        </h3>
        <div className="space-y-2 text-lg text-zinc-600">
       <p>hi@genstudioapp.com</p>
       <p>+84 395 051 840</p>
        <p> Ho Chi Minh City, Vietnam</p>
      </div>
      </div>
    </FadeIn>
  </div>
</section>
      </main>

      {/* Footer */}
     <footer className="border-t border-zinc-200 bg-white">
  <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-sm text-zinc-500">
    <div>
      <div className="font-medium text-zinc-900">GenStudio</div>
      <div>KOL Studio Gen</div>
      <div>hi@genstudioapp.com</div>
    </div>
    <div>© 2026 GenStudio. All rights reserved.</div>
  </div>
</footer>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="aspect-video w-full">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/G9aX85boiAo?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
