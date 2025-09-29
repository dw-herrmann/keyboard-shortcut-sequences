export interface Sequence {
  name: string;
  description: string;
  icon: string;
  shortcuts: Shortcut[];
}

export const specialKeys = {
  Delete: "key code 51",
  ForwardDelete: "key code 117",
  Return: "key code 36",
  Enter: "key code 76",
  Tab: "key code 48",
  Space: "key code 49",
  Escape: "key code 53",
  UpArrow: "key code 126",
  DownArrow: "key code 125",
  LeftArrow: "key code 123",
  RightArrow: "key code 124",
  Home: "key code 115",
  End: "key code 119",
  PageUp: "key code 116",
  PageDown: "key code 121",
  F1: "key code 122",
  F2: "key code 120",
  F3: "key code 99",
  F4: "key code 118",
  F5: "key code 96",
  F6: "key code 97",
  F7: "key code 98",
  F8: "key code 100",
  F9: "key code 101",
  F10: "key code 109",
  F11: "key code 103",
  F12: "key code 111",
  F13: "key code 105",
  F14: "key code 107",
  F15: "key code 113",
  F16: "key code 106",
  F17: "key code 64",
  F18: "key code 79",
  F19: "key code 80",
  F20: "key code 90",
  VolumeUp: "key code 72",
  VolumeDown: "key code 73",
  Mute: "key code 74",
  Help: "key code 114",
  Power: "key code 96",
  Eject: "key code 14",
  CapsLock: "key code 57",
  NumLock: "key code 71",
  BrightnessUp: "key code 113",
  BrightnessDown: "key code 107",
  PrintScreen: "key code 105",
  Insert: "key code 114",
};

export interface Shortcut {
  keystrokes: string;
  modifiers: ("command down" | "control down" | "option down" | "shift down")[];
  specials: (keyof typeof specialKeys)[];
  delay: number | undefined;
}
