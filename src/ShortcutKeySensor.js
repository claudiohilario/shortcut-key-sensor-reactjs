import React from "react";
import PropTypes from "prop-types";

/**
 * This function convert pressed keys in formatted string.
 *
 * @param {Object} event - The event.
 *
 * @returns {string} Returns string formated.
 * E.g.: "CTRL+A"
 */
const convertToStringPressedKeys = event => {
  const specialKeys = [
    {
      key: "ctrlKey",
      original: "CONTROL",
      value: "CTRL"
    },
    {
      key: "altKey",
      original: "ALT",
      value: "ALT"
    },
    {
      key: "shiftKey",
      original: "SHIFT",
      value: "SHIFT"
    }
  ];

  const pressedKey = specialKeys
    .filter(specialKey => event[specialKey.key])
    .map(specialKey => specialKey.value);

  const keyPressed = event.key.toUpperCase();

  const kepPressedIsSpecial = specialKeys.find(
    key => key.original === keyPressed
  );

  !kepPressedIsSpecial && pressedKey.push(keyPressed);

  return pressedKey.join("+");
};

/**
 * @class
 * This class represents the component ShortcutKeySensor
 *
 * @example
 * const actions = {
 *  'CTRL+A': (event) => console.log('Clicked in Control + A');
 * }
 * <ShortcutKeySensor actions={actions}>
 * ...
 * </ShortcutKeySensor>
 */
class ShortcutKeySensor extends React.Component {
  constructor() {
    super();
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
  }

  /**
   * This method is executed after clicking a key.
   * Detects if exists action associate a key pressed and execute action.
   *
   * @param {Object} event - The event
   */
  handleOnKeyDown(event) {
    const combinationKeys = convertToStringPressedKeys(event);
    const { actions } = this.props;

    const matchWithPressedKey = Object.prototype.hasOwnProperty.call(
      actions,
      combinationKeys
    );
    matchWithPressedKey && actions[combinationKeys](event);
  }

  render() {
    return (
      <div tabIndex="0" onKeyDown={this.handleOnKeyDown}>
        {this.props.children}
      </div>
    );
  }
}

ShortcutKeySensor.defaultProps = {
  actions: {}
};

ShortcutKeySensor.propTypes = {
  actions: PropTypes.object
};

export default ShortcutKeySensor;
