import React from 'react'

import ShortcutKeySensor from '@ontech/shortcut-key-sensor'

const actions = {
  'CTRL+A': () => alert('Clicked in CTRL+A'),
  'CTRL+SHIFT+A': () => alert('Clicked in CTRL+SHIFT+A'),
  'SHIFT+A': () => alert('Clicked in SHIFT+A'),
  'A': () => alert('Clicked in A'),
}
const App = () => {
  return (
    <ShortcutKeySensor actions={actions}>
      <h1>Example ShortcutKeySensor</h1>
    </ShortcutKeySensor>
  );
}

export default App
