import { DateTime } from "luxon";
import { weekArr } from "../monthCalendar/weekRow";
import DatePickerDay from "./dayOfMonth";

export type DPWeekProps = {
  weekStartDate: DateTime
  selectedDate: DateTime
  setSelectedDate: (arg: DateTime) => void
  events: {
    startTime: DateTime
    title: string
    id: string
  }[]
};

export default function WeekRow(props: DPWeekProps) {
  const { weekStartDate, selectedDate, setSelectedDate, events } = props;

  return (
    <tr data-testid={`week-${weekStartDate.weekNumber}-row`}>
      {weekArr(weekStartDate).map(i => (
        <DatePickerDay events={events.filter(j => j.startTime.hasSame(i, 'day'))} key={i.toLocaleString()} selectedDate={selectedDate} setSelectedDate={setSelectedDate} dayOfMonthDate={i} />
      ))}
    </tr>
  );
}