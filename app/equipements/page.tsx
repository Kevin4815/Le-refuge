import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function EquipementsPage() {
  const categories = [
    {
      title: "Cuisine & Salle à manger",
      items: [
        "Cuisine entièrement équipée",
        "Four électrique",
        "Plaques de cuisson",
        "Micro-ondes",
        "Réfrigérateur-congélateur",
        "Lave-vaisselle",
        "Machine à café Nespresso",
        "Bouilloire électrique",
        "Grille-pain",
        "Vaisselle complète",
        "Ustensiles de cuisine",
        "Table à manger pour 6-8 personnes",
      ],
    },
    {
      title: "Salon & Détente",
      items: [
        "Canapé confortable",
        "Télévision écran plat",
        "Cheminée (bois fourni)",
        "Bibliothèque",
        "Jeux de société",
        "Wi-Fi haut débit gratuit",
        "Chaîne hi-fi",
      ],
    },
    {
      title: "Chambres",
      items: [
        "Literie de qualité",
        "Linge de lit fourni",
        "Placards de rangement",
        "Cintres",
        "Rideaux occultants",
        "Chauffage dans toutes les pièces",
      ],
    },
    {
      title: "Salles de bain",
      items: [
        "Douche à l'italienne",
        "Sèche-cheveux",
        "Serviettes de bain fournies",
        "Produits d'accueil",
        "Miroir éclairé",
      ],
    },
    {
      title: "Extérieur",
      items: [
        "Jardin privatif",
        "Terrasse avec mobilier",
        "Barbecue",
        "Transats",
        "Vue panoramique sur les montagnes",
        "Parking privé gratuit",
      ],
    },
    {
      title: "Services",
      items: [
        "Lave-linge",
        "Fer et table à repasser",
        "Aspirateur",
        "Lit bébé (sur demande)",
        "Chaise haute (sur demande)",
        "Animaux acceptés (supplément)",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rustic-living-room-with-fireplace-in-mountain-cha.jpg"
            alt="Équipements"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-balance">Équipements & Services</h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto leading-relaxed">
            Tout le confort nécessaire pour un séjour réussi
          </p>
        </div>
      </section>

      {/* Equipments Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-card p-8 rounded-lg">
              <h2 className="text-2xl font-serif mb-6 text-primary">{category.title}</h2>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-muted p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-serif mb-6">Informations pratiques</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-lg">Arrivée & Départ</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Arrivée : à partir de 16h00</li>
                <li>Départ : avant 11h00</li>
                <li>Arrivée tardive possible (nous prévenir)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Règlement intérieur</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Non-fumeur à l'intérieur</li>
                <li>Respect du voisinage</li>
                <li>Tri des déchets</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">À proximité</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Sentiers de randonnée (500m)</li>
                <li>Station de ski (15 km)</li>
                <li>Village avec commerces (3 km)</li>
                <li>Restaurant (2 km)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-lg">Services optionnels</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Petit-déjeuner : 12€/pers</li>
                <li>Ménage de fin de séjour : 60€</li>
                <li>Linge de maison supplémentaire : 15€</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-12 text-center text-balance">Découvrez nos espaces</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "/cozy-mountain-bedroom-with-wooden-beams.jpg",
              "/rustic-living-room-with-fireplace-in-mountain-cha.jpg",
              "/sunset-view-from-mountain-chalet-terrace.jpg",
              "/modern-studio-with-panoramic-mountain-view.jpg",
              "/spacious-family-suite-with-mountain-view.jpg",
              "/beautiful-mountain-chalet-surrounded-by-nature.jpg",
            ].map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Espace ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-balance">Prêt à réserver ?</h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Consultez notre calendrier de disponibilités et réservez votre séjour dès maintenant
          </p>
          <Button size="lg" asChild>
            <Link href="/reservation">Voir les disponibilités</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
