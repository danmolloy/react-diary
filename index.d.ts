import { DateTime } from "luxon"

declare global {
  type EventObject = {
    startTime: DateTime
    title: string
    id: string
  }

  type MonthCalendarProps = {
    selectedDate: DateTime
    setSelectedDate: (arg: DateTime) => void
    events?: EventObject[]
  }
}


export { EventObject as Event };
