import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HebergementsPage() {
  const accommodations = [
    {
      id: 1,
      name: "Chambre Montagne",
      capacity: "2 personnes",
      surface: "25 m²",
      price: "85€",
      description:
        "Chambre cosy avec vue sur les montagnes. Lit double confortable, coin lecture et salle de bain privative.",
      features: ["Lit double 160x200", "Salle de bain privée", "Vue montagne", "Bureau", "Placard"],
      image: "/cozy-mountain-bedroom-with-wooden-beams.jpg",
    },
    {
      id: 2,
      name: "Suite Familiale",
      capacity: "4-6 personnes",
      surface: "65 m²",
      price: "150€",
      description:
        "Espace généreux parfait pour les familles. Deux chambres séparées, salon avec canapé-lit et kitchenette.",
      features: [
        "2 chambres séparées",
        "Salon avec canapé-lit",
        "Kitchenette équipée",
        "2 salles de bain",
        "Balcon privé",
      ],
      image: "/spacious-family-suite-with-mountain-view.jpg",
    },
    {
      id: 3,
      name: "Studio Panoramique",
      capacity: "2 personnes",
      surface: "35 m²",
      price: "95€",
      description:
        "Studio lumineux avec vue panoramique exceptionnelle. Espace ouvert avec coin nuit et salon, cuisine équipée.",
      features: ["Lit double", "Cuisine équipée", "Vue panoramique", "Terrasse privée", "Salle de bain moderne"],
      image: "/modern-studio-with-panoramic-mountain-view.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/beautiful-mountain-chalet-surrounded-by-nature.jpg"
            alt="Nos hébergements"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-balance">Nos Hébergements</h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto leading-relaxed">
            Découvrez nos espaces confortables et authentiques, conçus pour vous offrir un séjour inoubliable
          </p>
        </div>
      </section>

      {/* Accommodations List */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="space-y-16">
          {accommodations.map((accommodation, index) => (
            <Card key={accommodation.id} className="overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                <div className={`relative h-[400px] ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <Image
                    src={accommodation.image || "/placeholder.svg"}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm uppercase tracking-wider text-muted-foreground">
                        {accommodation.capacity}
                      </span>
                      <span className="text-sm text-muted-foreground">{accommodation.surface}</span>
                    </div>
                    <CardTitle className="text-3xl md:text-4xl font-serif mb-4">{accommodation.name}</CardTitle>
                    <p className="text-lg text-muted-foreground leading-relaxed">{accommodation.description}</p>
                  </CardHeader>

                  <CardContent className="p-0 mb-6">
                    <h3 className="font-semibold mb-3">Équipements inclus :</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {accommodation.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-bold text-primary">{accommodation.price}</span>
                      <span className="text-muted-foreground ml-2">/nuit</span>
                    </div>
                    <Button size="lg" asChild>
                      <Link href="/reservation">Réserver</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">Besoin d'aide pour choisir ?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Contactez-nous pour obtenir des conseils personnalisés sur l'hébergement qui vous convient le mieux
          </p>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
