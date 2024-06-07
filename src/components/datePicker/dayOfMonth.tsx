
import { DateTime } from "luxon";
import { BsDot } from "react-icons/bs";

export type DPDayProps = {
  selectedDate: DateTime
  setSelectedDate: (args: DateTime) => void
  dayOfMonthDate: DateTime
  events: {
    startTime: DateTime
    title: string
    id: string
  }[]
};

export default function DatePickerDay(props: DPDayProps) {
  const { setSelectedDate, selectedDate, dayOfMonthDate, events } = props;

  return (
<td className={`${dayOfMonthDate.hasSame(selectedDate, 'month') ? "bg-white" : "bg-slate-50" } border w-12 h-12 `}>
      <button className={`${dayOfMonthDate.hasSame(selectedDate, 'day') ? "bg-indigo-500 text-white" : "hover:bg-indigo-50 hover:text-black"} ${dayOfMonthDate.hasSame(DateTime.now(), 'day') && " border-black border-2"} w-full h-full flex flex-col items-center font-thin`}  data-testid={`${dayOfMonthDate.toLocaleString()}-tile`} onClick={() => setSelectedDate(dayOfMonthDate)}>
        <p className={`${dayOfMonthDate.hasSame(selectedDate, 'day') && 'bg-indigo-500 text-white'} p-1 rounded-full w-6 h-6 flex items-center justify-center overflow-visible`}>
          {dayOfMonthDate.toFormat('d')}
        </p>
          {events.length > 0 
          && <div data-testid="dot-indicator" className={`text-xl`}>
              <BsDot />
            </div>}
      </button>
    </td>
  )
}