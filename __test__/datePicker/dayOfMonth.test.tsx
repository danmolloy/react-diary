import "@testing-library/jest-dom"
import { act, fireEvent, render, screen } from "@testing-library/react"
import { DateTime } from "luxon"
import DatePickerDay, { DPDayProps } from "../../src/components/datePicker/dayOfMonth"



describe("<DatePickerDay />", () => {
  const mockProps: DPDayProps = {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-12T01:43:00")),
    setSelectedDate: jest.fn(),
    dayOfMonthDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    events: [
      {
        startTime: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
        title: "CLM",
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
            <DatePickerDay {...mockProps} />
          </tr>
        </tbody>
      </table>)
  })
  it("[X]-tile is in the document", () => {
    const dayTile = screen.getByTestId(`${mockProps.dayOfMonthDate.toLocaleString()}-tile`)
    expect(dayTile).toBeInTheDocument()
  })
  it("calls selectDay onClick", () => {
    const dayTile = screen.getByTestId(`${mockProps.dayOfMonthDate.toLocaleString()}-tile`)
    act(() => {
      fireEvent.click(dayTile)
    })
    expect(mockProps.setSelectedDate).toHaveBeenCalledWith(mockProps.dayOfMonthDate)
  })
  it("day text is in the document", () => {
    const dayText = screen.getByText(mockProps.dayOfMonthDate.day)
    expect(dayText).toBeInTheDocument()
  })
  it("indicates if call(s) are on that day", () => {
    if (mockProps.events.length > 0) {
      let dotIndicator = screen.getByTestId('dot-indicator')
      expect(dotIndicator).toBeInTheDocument()
    }
  })
})

