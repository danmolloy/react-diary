import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
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
    selectedDate: new Date("1986-10-12T01:43:00"),
    setSelectedDate: fn(),
  events: [
    {
      startTime: new Date("1986-10-13T01:43:00"), 
      title: "CLM is born",
      id: "sb-1"
    }
  ]
  }
}


export const NoEvents: Story = {
  args: {
    selectedDate: new Date("1986-10-13T01:43:00"),
    setSelectedDate: fn(),
    events: []
  }
}

export const LoadsOfEvents: Story = {
  args: {
    selectedDate: new Date("1986-10-13T01:43:00"),
    setSelectedDate: fn(),
    events: [
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-1"
      },
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-2"
      },
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-3"
      },
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-4"
      },
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-5"
      },
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-6"
      },
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-7"
      },
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-8"
      },
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-9"
      },
      {
        startTime: new Date("1986-10-13T01:43:00"), 
        title: "CLM is born",
        id: "sb-10"
      }
    ]
  }
}
