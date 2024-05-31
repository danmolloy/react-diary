import { render, screen } from "@testing-library/react";
import MonthCalendar from "../../src/components/monthCalendar";
import "@testing-library/jest-dom"
import { DateTime } from "luxon";


describe("<MonthCalendar", () => {
  const mockProps: MonthCalendarProps = {
    selectedDate: new Date("1986-10-13T01:43:00"),
    setSelectedDate: jest.fn()
  }
  beforeEach(() => {
    render(<MonthCalendar {...mockProps} />)
  })
  it("month-calendar is in the document", () => {
    const monthCalendar = screen.getByTestId("month-calendar")
    expect(monthCalendar).toBeInTheDocument()
  })
  it("month-header is in the document with expected month title", () => {
    const monthHeader = screen.getByTestId("month-header")
    expect(monthHeader).toBeInTheDocument()
    expect(monthHeader.textContent).toMatch("October 1986")
  })
  it("all expected weeks are in the document", () => {
    const startOfFirstWeek = DateTime.fromJSDate(mockProps.selectedDate).startOf('month').startOf('week')
    const startOfFinalWeek = DateTime.fromJSDate(mockProps.selectedDate).endOf('month').startOf('week')

    for (let i = 0; startOfFirstWeek.plus({weeks: i}) < startOfFinalWeek; i ++) {
      const weekRow = screen.getByTestId(`week-${startOfFirstWeek.plus({weeks: i}).weekNumber}-row`)
      expect(weekRow).toBeInTheDocument()
    }
  })
  it("all days of week column headers are in the document", () => {
    const daysHeader = screen.getByTestId("days-header")
    expect(daysHeader).toBeInTheDocument()
  })
  it("renders without events", () => {})
})

describe("<MonthCalendar />", () => {
  const mockProps: MonthCalendarProps = {
    selectedDate: new Date("1986-10-13T01:43:00"),
    setSelectedDate: jest.fn(),
    events: [
      {
        startTime: new Date("1986-10-13T01:43:00"),
        title: "CLM is born",
        id: "id-1",
      },
      {
        startTime: new Date("1986-10-03T10:40:00"),
        title: "Jerry Seinfeld does stand up",
        id: "id-2",
      },
    ]
  }

  beforeEach(() => {
    render(<MonthCalendar {...mockProps}/>)
  })

  it("events are filtered to correct days", () => {
    if (mockProps.events) {
      for (let i = 0; i < mockProps.events!.length; i ++) {
        const dayOfMonth = screen.getByTestId(`${mockProps.events[i]?.startTime.toLocaleString()}-tile`)
        expect(dayOfMonth.textContent).toMatch(mockProps.events[i]!.title)
      }
    }
  })
})