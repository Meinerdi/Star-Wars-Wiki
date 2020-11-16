import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0'
import { Sidebar, SidebarProps } from './Sidebar'

export default {
  title: 'Example/Sidebar',
  component: Sidebar,
} as Meta

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />

export const MainSidebar = Template.bind({})
MainSidebar.args = {}
