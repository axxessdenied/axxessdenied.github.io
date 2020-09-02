import React from 'react';
import ButtonGroup from './ButtonGroup';
import * as ButtonStories from './Button.stories';

export default {
  title: 'ButtonGroup',
  component: ButtonGroup,
};

const Template = () => <ButtonGroup />//{...args} />

export const Pair = Template.bind({});
// Pair.args = {
//   buttons: [ ...ButtonStories.Primary.args, ...ButtonStories.Secondary.args ],
//   orientation: 'horizontal',
// };