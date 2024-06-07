import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DatePickerHeader from '../../components/datePicker/header';
import { DateTime } from 'luxon';


const meta: Meta = {
  title: "DatePicker/DatePickerHeader",
  component: DatePickerHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
} satisfies Meta<typeof DatePickerHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {
  args: {
    selectedDate: DateTime.fromJSDate(new Date("1986-10-13T01:43:00")),
    setSelectedDate: fn()
  }
}
