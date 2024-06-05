import "@testing-library/jest-dom"
import DayOfMonth, { DayOfMonthProps } from "../../src/components/monthCalendar/dayOfMonth"
import { render, screen, fireEvent, act } from "@testing-library/react"
import { DateTime } from "luxon"


describe("<DayOfMonth />", () => {
  const mockProps: DayOfMonthProps = {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-12T01:43:00")),
    setSelectedDate: jest.fn(),
    dayOfMonthDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    events: []
  }
  beforeEach(() => {
    render(
      <table>
        <tbody>
          <tr>
            <DayOfMonth {...mockProps} />
          </tr>
        </tbody>
      </table>
    )
  })
  it("<DayOfMonth /> is in the document and renders without events", () => {
    const dayOfMonth = screen.getByTestId(`${mockProps.dayOfMonthDate.toLocaleString()}-tile`)
    expect(dayOfMonth).toBeInTheDocument()
  })
  it("Date is in the document with format 'd' (i.e. 13)", () => {
    const dayOfMonth = screen.getByTestId(`${mockProps.dayOfMonthDate.toLocaleString()}-tile`)
    expect(dayOfMonth.textContent).toMatch("13")
    expect(dayOfMonth.textContent).toMatch(mockProps.dayOfMonthDate.toFormat('d'))
  })
  it("calls setSelectedDate(dayOfMonthDate) on click", () => {
    const dayOfMonth = screen.getByTestId(`${mockProps.dayOfMonthDate.toLocaleString()}-tile`)
    act(() => {
      fireEvent.click(dayOfMonth)
    })
    expect(mockProps.setSelectedDate).toHaveBeenCalledWith(mockProps.dayOfMonthDate)
  })
  it("renders without events", () => {})
})

describe("<DayOfMonth />", () => {
  const mockProps: DayOfMonthProps = {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-12T01:43:00")),
    setSelectedDate: jest.fn(),
    dayOfMonthDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    events: [
      {
        startTime: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
        title: "CLM is born",
        id: "id-1",
      },
      {
        startTime: DateTime.fromJSDate(new Date("1986-10-13T02:42:00")),
        title: "Dad goes to the toilet",
        id: "id-2",
      },
      {
        startTime: DateTime.fromJSDate(new Date("1986-10-13T03:42:00")),
        title: "Dad returns from toilet",
        id: "id-3",
        
      },
      {
        startTime: DateTime.fromJSDate(new Date("1986-10-13T04:42:00")),
        title: "Another event",
        id: "id-2",
      },
    ]
  }
  beforeEach(() => {
    render(
      <table>
        <tbody>
          <tr>
            <DayOfMonth {...mockProps} />
          </tr>
        </tbody>
      </table>
    )
  })
  it("<DayOfMonth /> is in the document", () => {
    const dayOfMonth = screen.getByTestId(`${mockProps.dayOfMonthDate.toLocaleString()}-tile`)
    expect(dayOfMonth).toBeInTheDocument()
  })
  it("Date is in the document with format 'd' (i.e. 13)", () => {
    const dayOfMonth = screen.getByTestId(`${mockProps.dayOfMonthDate.toLocaleString()}-tile`)
    expect(dayOfMonth.textContent).toMatch("13")
    expect(dayOfMonth.textContent).toMatch(mockProps.dayOfMonthDate.toFormat('d'))
  })
  it("calls setSelectedDate(dayOfMonthDate) on click", () => {
    const dayOfMonth = screen.getByTestId(`${mockProps.dayOfMonthDate.toLocaleString()}-tile`)
    act(() => {
      fireEvent.click(dayOfMonth)
    })
    expect(mockProps.setSelectedDate).toHaveBeenCalledWith(mockProps.dayOfMonthDate)
  })
  it("events are sorted in correct order, only first three are shown with indication of others", () => {
    const dayOfMonth = screen.getByTestId(`${mockProps.dayOfMonthDate.toLocaleString()}-tile`)
    expect(dayOfMonth.textContent).toMatch(/^131:43 AMCLM is born2:42 AMDad goes to the toilet3:42 AMDad returns from toilet& 1 more$/)
  })
})