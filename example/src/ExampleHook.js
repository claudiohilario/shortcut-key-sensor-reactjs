import React from 'react';
import { useShortcutKeySensor } from 'shortcut-key-sensor';

export default function ExampleHook() {
  useShortcutKeySensor('CTRL+A', (event) => alert('Clicked in CTRL+A'));
  useShortcutKeySensor('CTRL+SHIFT+A', (event) => alert('Clicked in CTRL+SHIFT+A'));
  useShortcutKeySensor('SHIFT+A', (event) => alert('Clicked in SHIFT+A'));
  useShortcutKeySensor('A', (event) => alert('Clicked in A'));
  return <h1>Example useShortcutKeySensor</h1>;
}
