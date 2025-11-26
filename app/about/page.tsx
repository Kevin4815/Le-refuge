import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif mb-8 text-balance text-center">À Propos</h1>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative h-[600px]">
              <Image src="/photographer-portrait-in-studio-professional.jpg" alt="Portrait du photographe" fill className="object-cover" />
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-6">Bonjour, je suis Alexandre Dubois</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Photographe professionnel depuis plus de 10 ans, ma passion pour l'image est née lors d'un voyage en
                  Asie où j'ai découvert le pouvoir de la photographie pour capturer l'âme d'un instant.
                </p>
                <p>
                  Formé aux Beaux-Arts de Paris, j'ai développé une approche qui allie rigueur technique et sensibilité
                  artistique. Chaque projet est pour moi une opportunité de raconter une histoire unique à travers mes
                  images.
                </p>
                <p>
                  Mon travail a été exposé dans plusieurs galeries parisiennes et j'ai eu le privilège de collaborer
                  avec des clients du monde entier, des particuliers aux grandes entreprises.
                </p>
                <p>
                  Au-delà de la technique, je crois que la photographie est avant tout une question de connexion
                  humaine. C'est cette relation authentique avec mes sujets qui donne toute sa force à mon travail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 md:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-8">Ma Philosophie</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            "La photographie n'est pas seulement une question de technique, mais de vision. Mon objectif est de capturer
            l'essence même de chaque moment, de révéler la beauté dans l'ordinaire et de créer des images qui résonnent
            émotionnellement."
          </p>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-center">Expertise & Équipement</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-serif mb-4">Matériel</h3>
              <p className="text-muted-foreground leading-relaxed">
                Canon EOS R5, Sony A7R IV, optiques professionnelles L-series, éclairage studio Profoto
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-serif mb-4">Post-Production</h3>
              <p className="text-muted-foreground leading-relaxed">
                Adobe Lightroom, Photoshop, Capture One Pro pour un rendu professionnel et soigné
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-serif mb-4">Spécialisations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Portraits, mariages, événements corporatifs, photographie de produits
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif mb-6 text-balance">Travaillons Ensemble</h2>
          <p className="text-xl mb-8">Je serais ravi d'échanger avec vous sur votre projet</p>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="/contact">Contactez-moi</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
