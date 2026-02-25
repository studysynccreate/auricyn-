import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--auricyn-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--auricyn-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--auricyn-elements-terminal-textColor'),
    background: cssVar('--auricyn-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--auricyn-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--auricyn-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--auricyn-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--auricyn-elements-terminal-color-black'),
    red: cssVar('--auricyn-elements-terminal-color-red'),
    green: cssVar('--auricyn-elements-terminal-color-green'),
    yellow: cssVar('--auricyn-elements-terminal-color-yellow'),
    blue: cssVar('--auricyn-elements-terminal-color-blue'),
    magenta: cssVar('--auricyn-elements-terminal-color-magenta'),
    cyan: cssVar('--auricyn-elements-terminal-color-cyan'),
    white: cssVar('--auricyn-elements-terminal-color-white'),
    brightBlack: cssVar('--auricyn-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--auricyn-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--auricyn-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--auricyn-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--auricyn-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--auricyn-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--auricyn-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--auricyn-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
