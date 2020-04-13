import { useEffect } from 'react'
import { ShortcutProps } from './types';
import { specialKeys } from './constants'

/**
 * This function convert pressed keys in formatted string.
 *
 * @param {Object} event - The event.
 *
 * @returns {string} Returns string formated.
 * E.g.: "CTRL+A"
 */
function convertToStringPressedKeys(event: any) {
  const pressedKey = specialKeys
    .filter(specialKey => event[specialKey.key])
    .map(specialKey => specialKey.value);

  const keyPressed = event.key.toUpperCase();
  const keyPressedIsSpecial = specialKeys.find(key => key.original === keyPressed);

  !keyPressedIsSpecial && pressedKey.push(keyPressed);

  return pressedKey.join("+");
};

export default function ShortcutKeySensor({ actions, children }: ShortcutProps) {
  const handleKeyDown = (event: any) => {
    const combinationKeys = convertToStringPressedKeys(event);
    const matchWithPressedKey = Object.prototype.hasOwnProperty.call(
      actions,
      combinationKeys
    );
    matchWithPressedKey && actions[combinationKeys](event);
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
  return children;
}
