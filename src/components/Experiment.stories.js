// We create a “template” of how args map to rendering
import React from 'react';
import Experiment from './Experiment';
import { action } from '@storybook/addon-actions';

export default {
    title: "Experiment",
    component: Experiment,
  };


export const Template1 = () => <Experiment onClick={action('clicked')}>Hello Experiment!</Experiment>;

export const Template2 = () => (
    <Experiment onClick={action('clicked')}>
        <span role="img" aria-label="oh yeah!">
            😁🤖🤘🧠
        </span>
    </Experiment>
);