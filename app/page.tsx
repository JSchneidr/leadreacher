import Image from "next/image";
import {
  ArrowRight
} from 'lucide-react'

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px]" />

      <div className="absolute top-0 left-0 w-full z-20 flex justify-center pt-8">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={180}
          height={60}
          className="drop-shadow-[0_0_25px_rgba(139,92,246,0.35)]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl">

        <h1 className="text-gray-900 lg:text-6xl md:text-6xl text-3xl font-bold tracking-tight leading-[0.95] mt-4">
          Outbound is broken. We fix it.
        </h1>
        <h1 className="text-violet-800 text-2xl lg:text-5xl md:text-5xl font-bold tracking-tight leading-[0.95] mt-4">
          Lead Generation, Reimagined.
        </h1>

        <div className="text-gray-500 text-xs lg:text-xl md:text-lg mt-12 leading-relaxed">
          <p>Cold calls and emails are dead. Just like your pipeline.</p>
          <p>AI + social + creative to drive fresh, qualified leads.</p>
        </div>
        
        <button className="mt-14 px-20 py-5 flex items-center justify-center gap-2 rounded-lg bg-violet-800 hover:bg-violet-900 w-sm transition-all duration-300 text-gray-50 font-bold shadow-lg shadow-violet-600/30 cursor-pointer">
          Whislist
          <ArrowRight className="ml-2" />
        </button>
      </div>
    </main>
  );
}