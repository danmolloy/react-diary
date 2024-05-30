import { IndexComponent } from "../src"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
describe("index test", () => {
  beforeEach(() => {
    render(<IndexComponent />)
  })
  it("<IndexComponent /> is in the document", () => {
    const index = screen.getByTestId("index")
    expect(index).toBeInTheDocument()
  })

})