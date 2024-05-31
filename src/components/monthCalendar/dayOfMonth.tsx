import { DateTime } from "luxon";

export type DayOfMonthProps = {
  selectedDate: DateTime
  setSelectedDate: (args: DateTime) => void
  dayOfMonthDate: DateTime
  events?: EventObject[]
};

export default function DayOfMonth(props: DayOfMonthProps) {
  const { setSelectedDate, selectedDate, dayOfMonthDate, events } = props;

  return (
    <td className="border h-36 " >
      <button className=" w-full h-full flex flex-col " data-testid={`${dayOfMonthDate.toLocaleString()}-tile`} onClick={() => setSelectedDate(dayOfMonthDate)}>
        <h3 className={`${dayOfMonthDate.hasSame(selectedDate, 'day') && 'bg-blue-500 text-white'} p-1 rounded-full w-8 h-8 text-center `}>{dayOfMonthDate.toFormat('d')}</h3>
        <ol className="text-sm self-center w-[95%] h-full my-1">
          {events?.sort((a, b) => Number(DateTime.fromJSDate(a.startTime).toMillis()) - Number(DateTime.fromJSDate(b.startTime).toMillis())).map(i => (
            <li className="flex flex-row justify-center items-center flex-nowrap overflow-hidden text-xs" key={i.id}>
              <div className="h-2 w-2 rounded-full bg-blue-500   mr-1" />
              <p className="mr-1 text-gray-500  hidden lg:block">{DateTime.fromJSDate(i.startTime).toFormat('t')}
              </p>
              <p className="text-nowrap hidden sm:block truncate">{i.title}</p>
           </li>
          ))}
        </ol>
      </button>
    </td>
  )
};