import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import DaysHeader from "../../src/components/datePicker/daysHeader"
import { daysArr } from "../../src/components/monthCalendar/daysHeader"

describe("<DaysRow />", () => {
  beforeEach(() => {
    render(
      <table>
        <DaysHeader />
      </table>)
  })
  it("All days are in the document and just show first letter i.e. M, T, W", () => {
    for (let i = 0; i < daysArr.length; i ++) {
      const dayOfWeek = screen.getByTestId(`${daysArr[i]?.day}-column`)
      expect(dayOfWeek).toBeInTheDocument()
      expect(dayOfWeek.textContent).toMatch(String(daysArr[i]?.day[0]))
    }
  })
})