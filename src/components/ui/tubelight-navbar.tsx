"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name)

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.url))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          const activeItem = items.find(
            (item) => item.url === `#${visible.target.id}`
          )

          if (activeItem) {
            setActiveTab(activeItem.name)
          }
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [items])

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    e.preventDefault()
    setActiveTab(item.name)

    const section = document.querySelector(item.url)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-3",
        className
      )}
    >
      <div className="flex items-center gap-2 rounded-full border border-[#ead7b7] bg-[#fffaf0]/85 px-2 py-2 shadow-[0_18px_60px_rgba(100,70,30,.18)] backdrop-blur-xl">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(e, item)}
              className={cn(
                "relative cursor-pointer rounded-full px-4 sm:px-6 py-3 text-sm font-black transition-colors",
                "text-[#6b5236] hover:text-[#ca761e]",
                isActive && "text-[#ca761e]"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>

              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 rounded-full bg-[#f6a21a]/10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-[#f6a21a]">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-[#f6a21a]/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-[#f6a21a]/20 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-[#f6a21a]/25 blur-sm" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}