import "@testing-library/jest-dom";
import DatePicker, { DatePickerProps } from "../../src/components/datePicker";
import { render, screen } from "@testing-library/react";
import { DateTime } from "luxon";

const mockProps: DatePickerProps = {
  selectedDate: new Date("1986-10-13T01:43:00"),
  setSelectedDate: jest.fn(),
  events: [
    {
      startTime: new Date("1986-10-13T01:43:00"),
      title: "CLM",
      id: "event-1"
    }
  ]
}

describe("<DatePicker />", () => {
  beforeEach(() => {
    render(<DatePicker {...mockProps} />);
  })
  it("date-picker is in the document", () => {
    const datePicker = screen.getByTestId("date-picker-component");
    expect(datePicker).toBeInTheDocument();
  })
  it("dp-header is in the document", () => {
    const dpHeader = screen.getByTestId("date-picker-header")
    expect(dpHeader).toBeInTheDocument()
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
})