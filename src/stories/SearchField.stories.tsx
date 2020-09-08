import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { Story, Meta } from '@storybook/react/types-6-0'
import { SearchField, SearchFieldProps } from './SearchField'

export default {
  title: 'Example/SearchField',
  component: SearchField,
} as Meta

const Template: Story<SearchFieldProps> = (args) => <SearchField {...args} />

export const MainSearchField = Template.bind({})
MainSearchField.args = {}
