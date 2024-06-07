import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import WeekRow from '../../components/datePicker/weekRow';
import { DateTime } from 'luxon';


const meta: Meta = {
  title: "DatePicker/WeekRow",
  component: WeekRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
} satisfies Meta<typeof WeekRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoEvents: Story = {
  args: {
    weekStartDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")).startOf("week"),
    selectedDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    setSelectedDate: fn(),
    events: []
  }
}
