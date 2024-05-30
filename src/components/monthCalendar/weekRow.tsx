import { DateTime } from "luxon"
import DayOfMonth from "./dayOfMonth";
import { EventObj } from ".";

export type WeekRowProps = {
  weekStartDate: DateTime
  selectedDate: DateTime
  setSelectedDate: (arg: DateTime) => void
  events?: EventObj[]
};

export const weekArr = (weekStartDate: DateTime): DateTime[] => {
  let weekDays: DateTime[] = [];
  for (let i = 0; i < 7; i++) {
    weekDays = [...weekDays, weekStartDate.plus({days: i})]
  }
  return weekDays
}

export default function WeekRow(props: WeekRowProps) {
  const { weekStartDate, selectedDate, setSelectedDate, events } = props;

  return (
    <tr data-testid={`week-${weekStartDate.weekNumber}-row`}>
      {weekArr(weekStartDate).map(i => (
        <DayOfMonth events={events?.filter(j => j.startTime.hasSame(i, 'day'))} key={i.toLocaleString()} selectedDate={selectedDate} setSelectedDate={setSelectedDate} dayOfMonthDate={i} />
      ))}
    </tr>
  )
};