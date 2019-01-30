# Usage Example

```js
const actions = {
  'CTRL+A': (event) => console.log('Clicked in CTRL+A'),
  'CTRL+B': (event) => console.log('Clicked in CTRL+B'),
  'CTRL+C': (event) => console.log('Clicked in CTRL+C'),
}

<ShortcutKeySensor actions={actions}>
  {this.props.childrens}
</ShortcutKeySensor>
```
