import { DateTime } from "luxon"

declare global {
  type EventObject = {
    startTime: Date
    title: string
    id: string
  }

  type MonthCalendarProps = {
    selectedDate: Date
    setSelectedDate: (arg: Date) => void
    events?: EventObject[]
  }
}


export { EventObject as Event, MonthCalendarProps };
