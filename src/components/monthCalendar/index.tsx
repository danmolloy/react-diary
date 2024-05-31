import { DateTime } from "luxon"
import DaysHeader from "./daysHeader";
import MonthHeader from "./header";
import WeekRow from "./weekRow";

const getCalendarWeeks = (firstOfMonth: DateTime): DateTime[] => {
  const firstWeekMonday = firstOfMonth.startOf('week');
  const lastWeekMonday = firstOfMonth.endOf('month').startOf('week');
  let weekArr: DateTime[] = []
  let numWeeks: number = Math.ceil(lastWeekMonday.diff(firstWeekMonday, 'weeks').as('weeks'))

  for (let i = 0; i <= numWeeks; i ++) {
    weekArr = [...weekArr, firstWeekMonday.plus({weeks: i}).startOf("week")]
  }
  return weekArr
}

export default function MonthCalendar(props: MonthCalendarProps): JSX.Element {
  const { selectedDate, setSelectedDate, events } = props;
  //const [localDate, setLocalDate] = useState<DateTime>(DateTime.now())

  return (
    <table data-testid="month-calendar" className="w-full table-fixed ">
     <MonthHeader selectedDate={DateTime.fromJSDate(selectedDate)} setSelectedDate={(arg) => setSelectedDate(arg.toJSDate())} />
      <DaysHeader />
      <tbody className="">
        {getCalendarWeeks(DateTime.fromJSDate(selectedDate).startOf('month')).map((i: DateTime) => (
          <WeekRow 
            events={events?.filter(j => DateTime.fromJSDate(j.startTime).hasSame(i, 'week'))}
            key={i.toLocaleString()} 
            weekStartDate={i} 
            setSelectedDate={(arg) => setSelectedDate(arg.toJSDate())} 
            selectedDate={DateTime.fromJSDate(selectedDate)} />
        ))}
      </tbody>
    </table>
  )
}