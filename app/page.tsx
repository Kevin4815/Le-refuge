import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const accommodations = [
    {
      id: 1,
      name: "Chambre Montagne",
      capacity: "2 personnes",
      price: "85€",
      image: "/cozy-mountain-bedroom-with-wooden-beams.jpg",
    },
    {
      id: 2,
      name: "Suite Familiale",
      capacity: "4-6 personnes",
      price: "150€",
      image: "/spacious-family-suite-with-mountain-view.jpg",
    },
    {
      id: 3,
      name: "Studio Panoramique",
      capacity: "2 personnes",
      price: "95€",
      image: "/modern-studio-with-panoramic-mountain-view.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/beautiful-mountain-chalet-surrounded-by-nature.jpg"
            alt="Le Refuge de Montagne"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-balance">Bienvenue au Refuge de Montagne</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance leading-relaxed">
            Votre havre de paix au cœur des Alpes. Découvrez un hébergement authentique où confort et nature se
            rencontrent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/reservation">Réserver maintenant</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground"
            >
              <Link href="/hebergements">Découvrir nos hébergements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <Image
              src="/rustic-living-room-with-fireplace-in-mountain-cha.jpg"
              alt="Intérieur du gîte"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">Un Refuge Authentique</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Le Refuge de Montagne vous accueille dans un cadre exceptionnel, au cœur des Alpes-de-Haute-Provence.
              Notre gîte de charme allie le cachet de l'architecture traditionnelle au confort moderne.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Que vous cherchiez une escapade romantique, des vacances en famille ou un séjour entre amis, notre gîte
              offre l'hébergement idéal pour vous ressourcer en pleine nature.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Cadre naturel préservé",
                "Vue panoramique sur les montagnes",
                "Proximité des sentiers de randonnée",
                "Ambiance chaleureuse et conviviale",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button asChild>
              <Link href="/equipements">Découvrir les équipements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-balance">Nos Hébergements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez l'hébergement qui correspond à vos besoins. Tous nos espaces sont équipés et décorés avec soin.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <Card key={accommodation.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={accommodation.image || "/placeholder.svg"}
                    alt={accommodation.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{accommodation.name}</h3>
                  <p className="text-muted-foreground mb-4">{accommodation.capacity}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {accommodation.price}
                      <span className="text-sm font-normal text-muted-foreground">/nuit</span>
                    </span>
                    <Button variant="outline" asChild>
                      <Link href="/reservation">Réserver</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/hebergements">Voir tous les hébergements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-balance">Équipements & Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profitez de tous les équipements nécessaires pour un séjour confortable
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: "🏡", title: "Cuisine équipée", description: "Four, micro-ondes, lave-vaisselle" },
            { icon: "🌐", title: "WiFi gratuit", description: "Connexion haut débit" },
            { icon: "🚗", title: "Parking privé", description: "Stationnement gratuit" },
            { icon: "🌳", title: "Jardin & terrasse", description: "Espace extérieur aménagé" },
            { icon: "🔥", title: "Cheminée", description: "Ambiance chaleureuse" },
            { icon: "🍳", title: "Petit-déjeuner", description: "Option disponible" },
            { icon: "🐕", title: "Animaux acceptés", description: "Sur demande" },
            { icon: "🧺", title: "Lave-linge", description: "À disposition" },
          ].map((amenity, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg">
              <div className="text-4xl mb-3">{amenity.icon}</div>
              <h3 className="font-semibold mb-2">{amenity.title}</h3>
              <p className="text-sm text-muted-foreground">{amenity.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/equipements">Voir tous les équipements</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 md:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sunset-view-from-mountain-chalet-terrace.jpg"
            alt="Vue du gîte"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">Prêt pour votre séjour en montagne ?</h2>
          <p className="text-xl mb-8 text-balance leading-relaxed">
            Réservez dès maintenant et profitez de notre calendrier en temps réel pour choisir vos dates
          </p>
          <Button size="lg" asChild>
            <Link href="/reservation">Consulter les disponibilités</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
