import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import MonthHeader from '../../components/monthCalendar/header';
import { DateTime } from 'luxon';


const meta: Meta = {
  title: "MonthCalendar/MonthHeader",
  component: MonthHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
} satisfies Meta<typeof MonthHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    setSelectedDate: fn()
  }
}
