// We create a “template” of how args map to rendering
import React from 'react';
import SVGDrawer from './SVGDrawer';

export default {
    title: "SVGDrawer",
    component: SVGDrawer,
  };


const Template = () => <SVGDrawer />;

// Each story then reuses that template
export const Primary = Template.bind({});
