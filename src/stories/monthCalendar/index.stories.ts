import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { DateTime } from 'luxon';
import MonthCalendar from '../../components/monthCalendar';

const meta: Meta = {
  title: "MonthCalendar/Index",
  component: MonthCalendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
} satisfies Meta<typeof MonthCalendar>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Events: Story = {
  args: {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-12T01:43:00")),
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


export const NoEvents: Story = {
  args: {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    setSelectedDate: fn(),
  }
}
