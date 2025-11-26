"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/calendar"

export default function ReservationPage() {
  const [selectedDates, setSelectedDates] = useState<{ checkIn: Date | null; checkOut: Date | null }>({
    checkIn: null,
    checkOut: null,
  })
  const [guests, setGuests] = useState(2)
  const [accommodation, setAccommodation] = useState("")
  const [showBookingForm, setShowBookingForm] = useState(false)

  const accommodations = [
    { id: "montagne", name: "Chambre Montagne", capacity: 2, price: 85 },
    { id: "familiale", name: "Suite Familiale", capacity: 6, price: 150 },
    { id: "panoramique", name: "Studio Panoramique", capacity: 2, price: 95 },
  ]

  const calculateNights = () => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) return 0
    const diffTime = Math.abs(selectedDates.checkOut.getTime() - selectedDates.checkIn.getTime())
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  }

  const calculateTotal = () => {
    const nights = calculateNights()
    const selectedAccom = accommodations.find((a) => a.id === accommodation)
    if (!selectedAccom || nights === 0) return 0
    return nights * selectedAccom.price
  }

  const handleBooking = () => {
    if (!selectedDates.checkIn || !selectedDates.checkOut || !accommodation) {
      alert("Veuillez sélectionner toutes les informations nécessaires")
      return
    }
    setShowBookingForm(true)
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sunset-view-from-mountain-chalet-terrace.jpg"
            alt="Réservation"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-balance">Réservation</h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto leading-relaxed">
            Choisissez vos dates et réservez votre séjour en quelques clics
          </p>
        </div>
      </section>

      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Sélectionnez vos dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar selectedDates={selectedDates} onSelectDates={setSelectedDates} />
                </CardContent>
              </Card>

              {/* Accommodation Selection */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Choisissez votre hébergement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {accommodations.map((accom) => (
                    <div
                      key={accom.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        accommodation === accom.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setAccommodation(accom.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{accom.name}</h3>
                          <p className="text-sm text-muted-foreground">Jusqu'à {accom.capacity} personnes</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{accom.price}€</p>
                          <p className="text-sm text-muted-foreground">par nuit</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Guests */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Nombre de personnes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      disabled={guests <= 1}
                    >
                      -
                    </Button>
                    <span className="text-2xl font-semibold w-12 text-center">{guests}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                      disabled={guests >= 10}
                    >
                      +
                    </Button>
                    <span className="text-muted-foreground ml-4">{guests === 1 ? "personne" : "personnes"}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Récapitulatif</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Arrivée</span>
                      <span className="font-medium">
                        {selectedDates.checkIn ? selectedDates.checkIn.toLocaleDateString("fr-FR") : "-"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Départ</span>
                      <span className="font-medium">
                        {selectedDates.checkOut ? selectedDates.checkOut.toLocaleDateString("fr-FR") : "-"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Nuits</span>
                      <span className="font-medium">{calculateNights()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Personnes</span>
                      <span className="font-medium">{guests}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Hébergement</span>
                      <span className="font-medium">
                        {accommodation ? accommodations.find((a) => a.id === accommodation)?.name : "-"}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold">Total</span>
                      <span className="text-3xl font-bold text-primary">{calculateTotal()}€</span>
                    </div>
                    <Button className="w-full" size="lg" onClick={handleBooking}>
                      Réserver maintenant
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>✓ Annulation gratuite jusqu'à 7 jours avant l'arrivée</p>
                    <p>✓ Confirmation immédiate par email</p>
                    <p>✓ Paiement sécurisé</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking Form Modal */}
          {showBookingForm && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl font-serif">Finaliser la réservation</CardTitle>
                    <Button variant="ghost" size="icon" onClick={() => setShowBookingForm(false)}>
                      ✕
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Prénom *</label>
                        <Input placeholder="Jean" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Nom *</label>
                        <Input placeholder="Dupont" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input type="email" placeholder="jean.dupont@example.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Téléphone *</label>
                      <Input type="tel" placeholder="06 12 34 56 78" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Commentaires</label>
                      <Input placeholder="Heure d'arrivée prévue, demandes spéciales..." />
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Total à payer</h3>
                      <p className="text-3xl font-bold text-primary">{calculateTotal()}€</p>
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Confirmer et payer
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
