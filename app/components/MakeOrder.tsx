'use client'

import React, { useState } from 'react'

export default function MakeOrder() {
  const [signalUsername, setSignalUsername] = useState('')
  const [sessionPublicKey, setSessionPublicKey] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ signalUsername, sessionPublicKey })
    // TODO: wire up to your order submission logic
  }

  return (
    <section id="make-order" className="w-full py-16 px-4 md:px-8">
      <div className="max-w-md mx-auto">
        {/* Spinning border wrapper */}
        <div className="relative rounded-[20px] p-[3px] overflow-hidden">
          <div
            className="absolute -inset-1/2 animate-spin [animation-duration:6s]"
            style={{
              backgroundColor: '#059669', // swap per your accent color
              maskImage:
                'conic-gradient(from 0deg, transparent 0%, black 15%, transparent 60%)',
              WebkitMaskImage:
                'conic-gradient(from 0deg, transparent 0%, black 15%, transparent 60%)',
            }}
          />

          {/* Card content */}
          <div className="relative z-10 rounded-[18px] bg-[#090b0f] px-6 py-8 md:px-8 md:py-10">
            <h2 className="font-vt323 text-3xl md:text-4xl text-white mb-2 tracking-wide">
              Make Order
            </h2>
            <p className="font-vt323 text-gray-400 text-base mb-6 tracking-wide">
              Enter your Signal details so we can deliver your anonymous eSIM.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="signalUsername"
                  className="block font-vt323 text-lg text-gray-300 mb-1"
                >
                  My Signal Username
                </label>
                <input
                  id="signalUsername"
                  type="text"
                  required
                  value={signalUsername}
                  onChange={(e) => setSignalUsername(e.target.value)}
                  placeholder="e.g. yourname.01"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white font-vt323 text-lg placeholder:text-gray-600 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="sessionPublicKey"
                  className="block font-vt323 text-lg text-gray-300 mb-1"
                >
                  Session Public Key
                </label>
                <input
                  id="sessionPublicKey"
                  type="text"
                  required
                  value={sessionPublicKey}
                  onChange={(e) => setSessionPublicKey(e.target.value)}
                  placeholder="05xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx..."
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white font-vt323 text-lg placeholder:text-gray-600 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-primary text-black font-vt323 text-lg py-3 tracking-wide hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}