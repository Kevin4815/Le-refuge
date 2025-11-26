import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif mb-4">Le Refuge</h3>
            <p className="text-sm opacity-80">
              Gîte de charme au cœur de la nature. Hébergement authentique et confortable pour vos vacances.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/hebergements" className="opacity-80 hover:opacity-100 transition-opacity">
                  Hébergements
                </Link>
              </li>
              <li>
                <Link href="/equipements" className="opacity-80 hover:opacity-100 transition-opacity">
                  Équipements
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="opacity-80 hover:opacity-100 transition-opacity">
                  Réservation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>WiFi gratuit</li>
              <li>Parking privé</li>
              <li>Cuisine équipée</li>
              <li>Jardin & terrasse</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@lerefuge.fr" className="opacity-80 hover:opacity-100 transition-opacity">
                  contact@lerefuge.fr
                </a>
              </li>
              <li>
                <a href="tel:+33612345678" className="opacity-80 hover:opacity-100 transition-opacity">
                  +33 6 12 34 56 78
                </a>
              </li>
              <li className="opacity-80">Alpes-de-Haute-Provence, France</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="opacity-80">© {new Date().getFullYear()} Le Refuge de Montagne. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Instagram
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Facebook
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
              Airbnb
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
