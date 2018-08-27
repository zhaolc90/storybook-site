/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import { configure } from '@storybook/react';
// import 'react-chromatic/storybook-addon';
import addHeadWarning from './head-warning';

addHeadWarning('Preview');

function loadStories() {
  let req;

  req = require.context('./stories', true, /index\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
