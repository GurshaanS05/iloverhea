"use client"

import { motion } from "framer-motion"

const shapes = [
  { type: "circle", color: "bg-pink-300" },
  { type: "square", color: "bg-purple-300" },
  { type: "triangle", color: "bg-indigo-300" },
]

export default function ModernBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => {
        const shape = shapes[Math.floor(Math.random() * shapes.length)]
        return (
          <motion.div
            key={i}
            className={`absolute ${shape.color} opacity-30`}
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              borderRadius: shape.type === "circle" ? "50%" : shape.type === "square" ? "0%" : "0% 100% 0% 0%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              rotate: [0, Math.random() * 360],
              scale: [1, Math.random() * 0.5 + 0.75],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}

