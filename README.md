# @ontech/shortcut-key-sensor

[![NPM](https://img.shields.io/npm/v/shortcut-key-sensor.svg)](https://www.npmjs.com/package/shortcut-key-sensor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save shortcut-key-sensor
```

## Usage

```tsx
import React, { Component } from 'react';

import ShortcutKeySensor from 'shortcut-key-sensor';

const Example = () => {
  const actions = {
    'CTRL+A': () => alert('Clicked in CTRL+A'),
    'CTRL+SHIFT+A': () => alert('Clicked in CTRL+SHIFT+A'),
    'SHIFT+A': () => alert('Clicked in SHIFT+A'),
    'A': () => alert('Clicked in A'),
  }
  return (
    <ShortcutKeySensor actions={actions}>
      <h1>Example ShortcutKeySensor</h1>
    </ShortcutKeySensor>
  );
}
```
