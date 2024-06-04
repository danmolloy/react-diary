import { DateTime } from "luxon";

export type DayOfMonthProps = {
  selectedDate: DateTime
  setSelectedDate: (args: DateTime) => void
  dayOfMonthDate: DateTime
  events?: {
    startTime: DateTime
    title: string
    id: string
  }[]
};

export default function DayOfMonth(props: DayOfMonthProps) {
  const { setSelectedDate, selectedDate, dayOfMonthDate, events } = props;

  return (
    <td className="border h-32 w-20" >
      <button className={`${dayOfMonthDate.hasSame(selectedDate, 'month') ? "bg-white" : "bg-slate-50" } w-full h-full flex flex-col hover:bg-slate-100 hover:text-indigo-600`}  data-testid={`${dayOfMonthDate.toLocaleString()}-tile`} onClick={() => setSelectedDate(dayOfMonthDate)}>
        <h3 className={`${dayOfMonthDate.hasSame(DateTime.now(), 'day') && "border border-black"} ${dayOfMonthDate.hasSame(selectedDate, 'day') && 'bg-indigo-600 text-white'} p-1 rounded-full w-8 h-8 text-center overflow-visible`}>{dayOfMonthDate.toFormat('d')}</h3>
        <ol className="text-sm self-center w-[95%] h-full my-1">
          {events?.sort((a, b) => Number(a.startTime.toMillis()) - Number(b.startTime.toMillis())).map(i => (
            <li className="flex flex-row justify-center items-center flex-nowrap overflow-hidden text-xs" key={i.id}>
              <div className="h-2 w-2 rounded-full bg-indigo-600   mr-1" />
              <p className="mr-1 text-gray-500  hidden lg:block">{i.startTime.toFormat('t')}
              </p>
              <p className="text-nowrap hidden sm:block truncate">{i.title}</p>
           </li>
          ))}
        </ol>
      </button>
    </td>
  )
};