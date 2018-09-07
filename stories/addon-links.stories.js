import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo, hrefTo } from '@storybook/addon-links';
import LinkTo from '@storybook/addon-links/react';
import { action } from '@storybook/addon-actions';

storiesOf('Addons|Links.Link', module)
  .add('First', () => <LinkTo story="Second">Go to Second</LinkTo>)
  .add('Second', () => <LinkTo story="First">Go to First</LinkTo>);

storiesOf('Addons|Links.Button', module)
  .add('First', () => (
    <button onClick={linkTo('Addons|Links.Button', 'Second')}>Go to "Second"</button>
  ))
  .add('Second', () => (
    <button onClick={linkTo('Addons|Links.Button', 'First')}>Go to "First"</button>
  ));

storiesOf('Addons|Links.Select', module)
  .add('Index', () => (
    <select value="Index" onChange={linkTo('Addons|Links.Select', e => e.currentTarget.value)}>
      <option>Index</option>
      <option>First</option>
      <option>Second</option>
      <option>Third</option>
    </select>
  ))
  .add('First', () => <LinkTo story="Index">Go back</LinkTo>)
  .add('Second', () => <LinkTo story="Index">Go back</LinkTo>)
  .add('Third', () => <LinkTo story="Index">Go back</LinkTo>);

storiesOf('Addons|Links.Href', module).add('log', () => {
  hrefTo('Addons|Links.Href', 'log').then(href => action('URL of this story')({ href }));

  return <span>See action logger</span>;
});
