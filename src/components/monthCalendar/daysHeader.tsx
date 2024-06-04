const daysArr: {day: string, key: number}[] = [
  {
    day: 'Monday',
    key: 1,
  },
  {
    day: "Tuesday",
    key: 2
  },
  {
    day: "Wednesday",
    key: 3
  },
  {
    day: "Thursday",
    key: 4
  },
  {
    day: "Friday",
    key: 5
  },
  {
    day: "Saturday",
    key: 6
  },
  {
    day: "Sunday",
    key: 7
  }
] 

export default function DaysHeader() {
  return (
    <thead data-testid="days-header">
      <tr>
      {daysArr.map(i => (
        <th key={i.key} className="border ">
          {i.day.slice(0, 3)}
        </th>
      ))}
      </tr>
    </thead>
  )
}