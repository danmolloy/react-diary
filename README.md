# React Diary

Simplifying scheduling and diary maintainance in React. Currently, it exports an event-integrated month-view calendar component.

Check out the [live example](https://react-diary-example.vercel.app/).

## Installation
Install via npm:
`npm install react-diary`

Alternatively, install via yarn:
`yarn add react-diary`

Ensure you have a recent version of `react` and `react-dom` installed in your project.

## Usage Example
```
'use client' // Required if using NextJS 14 or higher
import { useState } from "react";
import { MonthCalendar } from "react-diary";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date("1986-10-12T03:24:00"));

  return (
    <MonthCalendar
      selectedDate={selectedDate}
      setSelectedDate={(date: Date) => setSelectedDate(date)} 
      events={[
        {
          startTime: new Date("1986-10-13T03:24:00"),
          title: "CLM is born",
          id: "event-1"
        }
      ]} /> 
  );
}
```

## Props
`<MonthCalendar /> Props:`
|Prop	                      |Type	                                           |Description                                      |
|--------------------------|-------------------------------------------------|-------------------------------------------------|
|selectedDate (Required)	 |Date	                                           |The currently selected date in the calendar.     |
|setSelectedDate (Required)|(date: Date) => void                             |Callback function to update the selected date.   |
|events (Required)	       |{ startTime: Date; title: string; id: string; }[]|An array of event objects to display in the calendar. Each event requires a start time, title, and unique ID. If there are no events, pass an empty array.                 |

## Contributing
All contributions, big or small, are welcome. Either raise an issue or open a pull request via GitHub.

## License
This project is licensed under the ISC License.
