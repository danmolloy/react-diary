import WeekRow, { WeekRowProps, weekArr } from "../../src/components/monthCalendar/weekRow";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { DateTime } from "luxon";



describe("<WeekRow />", () => {
  const mockProps: WeekRowProps = {
    weekStartDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")).startOf("week"),
    selectedDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    setSelectedDate: jest.fn(),
    events: []
  }
  beforeEach(() => {
    render(
      <table>
        <tbody>
          <WeekRow {...mockProps} />
        </tbody>
      </table>
    )
  })
  it("<WeekRow /> is in the document without events", () => {
    const weekRow = screen.getByTestId(`week-${mockProps.weekStartDate.weekNumber}-row`)
    expect(weekRow).toBeInTheDocument()
  })
  it("all days of the week are in the document", () => {
    const week = weekArr(mockProps.weekStartDate)
    for (let i = 0; i < week.length; i ++) {
      const weekDay = screen.getByTestId(`${week[i]?.toLocaleString()}-tile`)
      expect(weekDay).toBeInTheDocument()
    }
  })
})
describe("<WeekRow />", () => {
  const mockProps: WeekRowProps = {
    weekStartDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")).startOf("week"),
    selectedDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    setSelectedDate: jest.fn(),
    events: [
      {
        startTime: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
        title: "CLM is born",
        id: "id-1",
      },
      {
        startTime: DateTime.fromJSDate(new Date("1986-10-14T10:40:00")),
        title: "Jerry Seinfeld does stand up",
        id: "id-2",
      },
    ]
  }
  beforeEach(() => {
    render(
      <table>
        <tbody>
          <WeekRow {...mockProps} />
        </tbody>
      </table>
    )
  })
  it("events are filtered correctly", () => {
    if (mockProps.events) {
      for (let i = 0; i < mockProps.events!.length; i ++) {
        const dayOfMonth = screen.getByTestId(`${mockProps.events[i]?.startTime.toLocaleString()}-tile`)
        expect(dayOfMonth.textContent).toMatch(mockProps.events[i]!.title)
      }
    }
  })
})

describe("weekArr()", () => {
  it("returns array of expected dates", () => {
    const weekStart = DateTime.fromJSDate(new Date("1986-10-13T01:43:00")).startOf("week")
    expect(weekArr(weekStart)).toHaveLength(7)
    let week = weekArr(DateTime.fromJSDate(new Date("1986-10-13T01:43:00")).startOf("week"))
    for (let i = 0; i < 7; i ++) {
      expect(week[i]?.hasSame(weekStart.plus({days: i}), 'day')).toBeTruthy()
    }
  })
})