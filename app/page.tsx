import Image from "next/image";
import {
  Dot,
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
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

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

        <h1 className="text-white lg:text-6xl md:text-6xl text-3xl font-bold tracking-tight leading-[0.95] mt-4">
          Outbound is broken. We fix it.
        </h1>
        <h1 className="text-violet-700 text-2xl lg:text-6xl md:text-5xl font-bold tracking-tight leading-[0.95] mt-4">
          Lead Generation, Reimagined.
        </h1>

        <p className="text-gray-200 text-sm lg:text-1xl md:text-xl mt-12 leading-relaxed">
          Cold calls and emails are dead. Just like your pipeline.
        </p>
        <p className="text-gray-200 text-sm lg:text-1xl md:text-xl leading-relaxed">
          AI + social + creative to drive fresh, qualified leads.
        </p>

        <button className="mt-14 px-8 py-4 flex items-center justify-center gap-2 rounded-lg bg-violet-600 hover:bg-violet-800 w-sm transition-all duration-300 text-white font-bold shadow-lg shadow-violet-600/30 cursor-pointer">
          Whislist
          <ArrowRight className="ml-2" />
        </button>
        <div className="mt-4 flex items-center gap-2 text-gray-500 font-medium">
          <p>Setup in minutes</p>
          <Dot size={30} />
          <p>Cancel anytime</p>
        </div>

      </div>
    </main>
  );
}