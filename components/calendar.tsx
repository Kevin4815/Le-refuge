"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface CalendarProps {
  selectedDates: { checkIn: Date | null; checkOut: Date | null }
  onSelectDates: (dates: { checkIn: Date | null; checkOut: Date | null }) => void
}

export function Calendar({ selectedDates, onSelectDates }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectingCheckIn, setSelectingCheckIn] = useState(true)

  // Dates indisponibles (exemple)
  const bookedDates = [
    new Date(2025, 11, 15),
    new Date(2025, 11, 16),
    new Date(2025, 11, 17),
    new Date(2026, 0, 1),
    new Date(2026, 0, 2),
  ]

  const isDateBooked = (date: Date) => {
    return bookedDates.some(
      (bookedDate) =>
        bookedDate.getDate() === date.getDate() &&
        bookedDate.getMonth() === date.getMonth() &&
        bookedDate.getFullYear() === date.getFullYear(),
    )
  }

  const isDateInRange = (date: Date) => {
    if (!selectedDates.checkIn || !selectedDates.checkOut) return false
    return date >= selectedDates.checkIn && date <= selectedDates.checkOut
  }

  const handleDateClick = (date: Date) => {
    if (isDateBooked(date) || date < new Date(new Date().setHours(0, 0, 0, 0))) return

    if (selectingCheckIn) {
      onSelectDates({ checkIn: date, checkOut: null })
      setSelectingCheckIn(false)
    } else {
      if (date > selectedDates.checkIn!) {
        onSelectDates({ ...selectedDates, checkOut: date })
        setSelectingCheckIn(true)
      }
    }
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    return { daysInMonth, startingDayOfWeek }
  }

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth)

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ]

  return (
    <div className="space-y-4">
      {/* Month Navigation */}
      <div className="flex items-center justify-between">
        <Button variant="outline" size="icon" onClick={previousMonth}>
          ←
        </Button>
        <h3 className="text-xl font-semibold">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <Button variant="outline" size="icon" onClick={nextMonth}>
          →
        </Button>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-muted-foreground">
        <div>Dim</div>
        <div>Lun</div>
        <div>Mar</div>
        <div>Mer</div>
        <div>Jeu</div>
        <div>Ven</div>
        <div>Sam</div>
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {/* Empty cells for days before month starts */}
        {Array.from({ length: startingDayOfWeek }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {/* Days of the month */}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1
          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
          const isBooked = isDateBooked(date)
          const isPast = date < new Date(new Date().setHours(0, 0, 0, 0))
          const isCheckIn = selectedDates.checkIn?.toDateString() === date.toDateString()
          const isCheckOut = selectedDates.checkOut?.toDateString() === date.toDateString()
          const isInRange = isDateInRange(date)

          return (
            <button
              key={day}
              onClick={() => handleDateClick(date)}
              disabled={isBooked || isPast}
              className={`
                aspect-square rounded-lg text-sm font-medium transition-all
                ${isBooked || isPast ? "bg-muted text-muted-foreground cursor-not-allowed line-through" : ""}
                ${isCheckIn || isCheckOut ? "bg-primary text-primary-foreground" : ""}
                ${isInRange && !isCheckIn && !isCheckOut ? "bg-primary/20" : ""}
                ${!isBooked && !isPast && !isCheckIn && !isCheckOut && !isInRange ? "hover:bg-accent" : ""}
              `}
            >
              {day}
            </button>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-sm pt-4 border-t">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary rounded" />
          <span className="text-muted-foreground">Sélectionné</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-primary/20 rounded" />
          <span className="text-muted-foreground">Dans la période</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-muted rounded line-through" />
          <span className="text-muted-foreground">Indisponible</span>
        </div>
      </div>
    </div>
  )
}
