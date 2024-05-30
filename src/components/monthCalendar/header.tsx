import { DateTime } from "luxon"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export type MonthHeaderProps = {
  selectedDate: DateTime
  setSelectedDate: (arg: DateTime) => void
}

export default function MonthHeader(props: MonthHeaderProps) {
  const { selectedDate, setSelectedDate} = props;

  return (
    <thead data-testid="month-header" className="w-full">
      <tr className="w-full">
      <th colSpan={2} className="">
        <button className="" onClick={() => setSelectedDate(selectedDate.minus({month: 1}).startOf("month"))} data-testid="previous-month-button">
          <p className="hidden">Previous Month</p>
          <BsChevronLeft />

        </button>
      </th>
      <th colSpan={3}>
        <h1>{selectedDate.toFormat("LLLL y")}</h1>
      </th>
      <th colSpan={2}>
        <button onClick={() => setSelectedDate(selectedDate.plus({month: 1}).startOf("month"))} data-testid="next-month-button">
          <p className="hidden">Next Month</p>
          <BsChevronRight />

        </button>
      </th>
      </tr>
    </thead>
    
  )
}

