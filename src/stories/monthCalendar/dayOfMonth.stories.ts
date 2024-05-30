import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DayOfMonth from '../../components/monthCalendar/dayOfMonth';
import { DateTime } from 'luxon';


const meta: Meta = {
  title: "MonthCalendar/DayOfMonth",
  component: DayOfMonth,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
} satisfies Meta<typeof DayOfMonth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoEvents: Story = {
  args: {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    dayOfMonthDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    setSelectedDate: fn(),
  }
}

export const SelectedDay: Story = {
  args: {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
  dayOfMonthDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
  setSelectedDate: fn(),
  events: [
    {
      startTime: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")), 
      title: "CLM is born",
      id: "sb-1"
    }
  ]
  }
}

export const NotSelectedDay: Story = {
  args: {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-12T01:43:00")),
  dayOfMonthDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
  setSelectedDate: fn(),
  events: [
    {
      startTime: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")), 
      title: "CLM is born",
      id: "sb-1"
    }
  ]
  }
}