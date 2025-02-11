"use client"

import { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeartIcon } from "lucide-react"
import ReactCanvasConfetti from "react-canvas-confetti"

export default function ValentinePage() {
  const [answer, setAnswer] = useState<string | null>(null)
  const [yesButtonSize, setYesButtonSize] = useState(1)
  const [noButtonSize, setNoButtonSize] = useState(1)
  const confettiRef = useRef<any>(null)

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setYesButtonSize((prev) => Math.min(prev + 0.1, 1.5))
    setNoButtonSize((prev) => Math.max(prev - 0.1, 0.5))
  }

  const handleYesClick = () => {
    setAnswer("yes")
    if (confettiRef.current) {
      confettiRef.current({
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

  const getInstance = useCallback((instance: any) => {
    confettiRef.current = instance
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-red-100 to-purple-100 flex items-center justify-center p-4">
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="heart-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5z"
                fill="rgba(255, 182, 193, 0.2)"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heart-pattern)" />
        </svg>
      </div>
      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-lg z-10">
        <CardContent className="p-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">Will you be my valentine Rhea?</h1>
            <AnimatePresence mode="wait">
              {answer === null ? (
                <motion.div
                  key="buttons"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <motion.div
                    style={{ scale: yesButtonSize }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white" onClick={handleYesClick}>
                      Yes
                    </Button>
                  </motion.div>
                  <motion.div
                    style={{ scale: noButtonSize }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-pink-300 text-pink-600 hover:bg-pink-50"
                      onClick={handleNoClick}
                    >
                      No
                    </Button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="text-center"
                >
                  <p className="text-2xl font-semibold text-pink-600 mb-4">Yay! ❤️</p>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                  >
                    <HeartIcon className="w-16 h-16 text-pink-500 mx-auto" />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </CardContent>
      </Card>
      <ReactCanvasConfetti
        refConfetti={getInstance}
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
}

