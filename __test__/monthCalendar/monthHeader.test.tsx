import "@testing-library/jest-dom"
import { act, fireEvent, render, screen } from "@testing-library/react"
import { DateTime } from "luxon"
import MonthHeader, { MonthHeaderProps } from "../../src/components/monthCalendar/header"

const mockProps: MonthHeaderProps = {
  selectedDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
  setSelectedDate: jest.fn(),
}

describe("<MonthHeader />", () => {
  beforeEach(() => {
    render(
      <table>
        <MonthHeader {...mockProps} />
      </table>)
  })
  it("calendar-header is in the document", () => {
    const calendarHeader = screen.getByTestId("month-header")
    expect(calendarHeader).toBeInTheDocument()
  })
  it("name of month is in the document", () => {
    const calendarHeader = screen.getByTestId("month-header")
    expect(calendarHeader.textContent).toMatch(mockProps.selectedDate.toFormat("LLLL y"))
    expect(calendarHeader.textContent).toMatch("October 1986")
  })
  it("previous month btn is in the document and calls setSelectedDate with arg", () => {
    const previousMonthBtn = screen.getByTestId("previous-month-button")
    expect(previousMonthBtn).toHaveAttribute("value", "Previous Month")

    expect(previousMonthBtn).toBeInTheDocument()
    act(() => {
      fireEvent.click(previousMonthBtn)
    })
    expect(mockProps.setSelectedDate).toHaveBeenCalledWith(mockProps.selectedDate.minus({months: 1}).startOf("month"))
  })
  it("next month btn is in the document and calls setSelectedDate with arg", () => {
    const nextMonthBtn = screen.getByTestId("next-month-button")
    expect(nextMonthBtn).toHaveAttribute("value", "Next Month")
    expect(nextMonthBtn).toBeInTheDocument()
    act(() => {
      fireEvent.click(nextMonthBtn)
    })
    expect(mockProps.setSelectedDate).toHaveBeenCalledWith(mockProps.selectedDate.plus({months: 1}).startOf("month"))
  })
})