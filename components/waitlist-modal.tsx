"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess(true);
        setEmail("");
      }

    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <>
      {/* CTA Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-14 px-20 py-5 flex items-center justify-center gap-2 rounded-lg bg-violet-800 hover:bg-violet-900 w-full md:w-md transition-all duration-300 text-gray-50 font-bold shadow-lg shadow-violet-600/30 cursor-pointer"
      >
        Waitlist
        
        <ArrowRight className="ml-2" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
          
          <div className="w-full max-w-md rounded-3xl border border-violet-500/10 bg-gray-50 p-8 shadow-2xl">
            
            {!success ? (
              <>
                <h2 className="text-xl font-bold text-gray-600">
                  Join the waitlist and be among the first to experience the platform.
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col gap-4"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border border-white/10 bg-gray-100 px-5 py-4 text-gray-700 placeholder:text-gray-400 outline-none focus:border-violet-500"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="p-4 rounded-lg bg-violet-800 hover:bg-violet-900 w-full transition-all duration-300 text-gray-50 font-bold shadow-lg shadow-violet-600/30 cursor-pointer"
                  >
                    {loading ? "Joining..." : "Join Waitlist"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-700">
                  You&apos;re on the list
                </h2>

                <p className="text-gray-400 mt-3">
                  We&apos;ll let you know when early access launches.
                </p>
              </div>
            )}

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-8 text-sm text-bold text-gray-500 hover:text-gray-800 transition cursor-pointer"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}