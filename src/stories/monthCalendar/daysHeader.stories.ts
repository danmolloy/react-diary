import type { Meta, StoryObj } from '@storybook/react';
import DaysHeader from '../../components/monthCalendar/daysHeader';


const meta: Meta = {
  title: "MonthCalendar/DaysHeader",
  component: DaysHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
} satisfies Meta<typeof DaysHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Index: Story = {}
