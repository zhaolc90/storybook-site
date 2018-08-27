import React from 'react';
import { storiesOf } from '@storybook/react';

// eslint-disable-next-line import/named
import { withNotes, WithNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import BaseButton from '../components/BaseButton';
import markdownNotes from './notes/notes.md';

storiesOf('Addon Notes', module)
  .add(
    'withNotes',
    withNotes(
      'This is the notes for a button. This is helpful for adding details about a story in a separate panel.'
    )(() => <BaseButton label="Button with notes - check the notes panel for details" />)
  )
  .add(
    'withNotes rendering imported markdown',
    withNotes(markdownNotes)(() => (
      <BaseButton label="Button with notes - check the notes panel for details" />
    ))
  )
  .add('using deprecated API', () => (
    <WithNotes notes="Hello">
      <BaseButton onClick={action('clicked')} label="😀 😎 👍 💯" />
    </WithNotes>
  ));
