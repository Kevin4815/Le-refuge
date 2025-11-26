"use client"

import Image from "next/image"
import { useState } from "react"

export default function PortfolioPage() {
  const categories = ["Tous", "Portraits", "Mariages", "Événements", "Nature"]

  const portfolioItems = [
    {
      id: 1,
      category: "Portraits",
      image: "/professional-portrait-photography-natural-light.jpg",
    },
    {
      id: 2,
      category: "Mariages",
      image: "/elegant-wedding-ceremony-photography.jpg",
    },
    {
      id: 3,
      category: "Nature",
      image: "/mountain-landscape-golden-hour-photography.jpg",
    },
    {
      id: 4,
      category: "Portraits",
      image: "/business-professional-headshot-photography.jpg",
    },
    {
      id: 5,
      category: "Événements",
      image: "/corporate-event-networking.png",
    },
    {
      id: 6,
      category: "Mariages",
      image: "/wedding-reception-dance-photography.jpg",
    },
    {
      id: 7,
      category: "Nature",
      image: "/forest-path-atmospheric-photography.jpg",
    },
    {
      id: 8,
      category: "Portraits",
      image: "/family-portrait-outdoor-photography.jpg",
    },
    {
      id: 9,
      category: "Événements",
      image: "/conference-speaker-photography.jpg",
    },
  ]

  const [activeCategory, setActiveCategory] = useState("Tous")

  const filteredItems =
    activeCategory === "Tous" ? portfolioItems : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-6 text-balance">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Une sélection de mes travaux photographiques à travers différents univers
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 border transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative h-[400px] overflow-hidden bg-card cursor-pointer">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`${item.category} ${item.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-serif">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
