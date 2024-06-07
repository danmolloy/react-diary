import { DateTime } from "luxon"
import { Event, getCalendarWeeks } from "../monthCalendar"
import DatePickerHeader from "./header"
import DaysHeader from "./daysHeader"
import WeekRow from "./weekRow"

export type DatePickerProps = {
  selectedDate: Date
  setSelectedDate: (arg: Date) => void
  events: Event[]
}

/**
 * DatePicker Component
 *
 * @param {Date} selectedDate - The currently selected date.
 * @param {Function} setSelectedDate - Function to set the selected date.
 * @param {EventObject[]} [events] - Array of events. Ensure each event has a unique ID. If no events, pass an empty array.
 *
*/

export default function DatePicker(props: DatePickerProps) {
  const { selectedDate, setSelectedDate, events} = props;

  const formattedDate = DateTime.fromJSDate(selectedDate)

  return (
    <div data-testid="date-picker-component">
      <table data-testid="date-picker" className="border-collapse">
      <DatePickerHeader selectedDate={formattedDate} setSelectedDate={(date) => setSelectedDate(date.toJSDate())}/>
      <DaysHeader />
      <tbody className="shadow-sm ">
        {getCalendarWeeks(formattedDate.startOf('month')).map(i => (
          <WeekRow
          events={events.map(event => ({...event, startTime: DateTime.fromJSDate(event.startTime)})).filter(j => j.startTime.hasSame(i, 'week'))}
          key={i.toLocaleString()} 
          weekStartDate={i} 
          setSelectedDate={(arg) => setSelectedDate(arg.toJSDate())} 
          selectedDate={DateTime.fromJSDate(selectedDate)} />
        ))}
      </tbody>
    </table>
    </div>
  )
}