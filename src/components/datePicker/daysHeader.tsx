import { daysArr } from "../monthCalendar/daysHeader";

export default function DaysHeader() {
  return (
    <thead data-testid="days-header">
      <tr>
      {daysArr.map(i => (
        <th data-testid={`${i.day}-column`} key={i.key} className="border">
          {i.day[0]}
        </th>
      ))}
      </tr>
    </thead>
  )
}