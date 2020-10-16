export interface SettingsState {
  darkMode: boolean
  fontSize: number
}
export type SettingsActionType = 'SET_DARK_MODE' | 'SET_FONT_SIZE'
export interface SettingsAction {
  type: SettingsActionType
  darkMode?: boolean
  fontSize?: number
}

export const initialState: SettingsState = {
  darkMode: false,
  fontSize: 17,
}

export default function reduce(state: SettingsState = initialState, action: SettingsAction) {
  switch (action.type) {
    case 'SET_DARK_MODE':
      return setDarkMode(state, action)
    case 'SET_FONT_SIZE':
      return setFontSize(state, action)
    default:
      return state
  }
}

function setDarkMode(state: SettingsState, action: SettingsAction): SettingsState {
  return {
    ...state,
    darkMode: action.darkMode || false,
  }
}

function setFontSize(state: SettingsState, action: SettingsAction): SettingsState {
  return {
    ...state,
    fontSize: action.fontSize || 17,
  }
}
