import {ThemeManager} from 'react-native-ui-lib';

export const lightModeTheme = {
  backgroundColor: '#FFF',
  textColor: '#000',
  primaryColor: '#72c8fc',
}

export const darkModeTheme = {
  backgroundColor: '#000',
  textColor: '#FFF',
  primaryColor: '#004bff',
}

interface DarkModeProps {
  darkMode: boolean;
}

ThemeManager.setComponentTheme('Text', (props: DarkModeProps) => ({
  color: props.darkMode ? darkModeTheme.textColor : lightModeTheme.textColor,
}));
ThemeManager.setComponentTheme('Button', (props: DarkModeProps) => ({
  backgroundColor: props.darkMode ? darkModeTheme.primaryColor : lightModeTheme.primaryColor,
}));
ThemeManager.setComponentTheme('Switch', (props: DarkModeProps) => ({
  onColor: props.darkMode ? darkModeTheme.primaryColor : lightModeTheme.primaryColor,
}));
ThemeManager.setComponentTheme('Slider', (props: DarkModeProps) => ({
  thumbTintColor: props.darkMode ? darkModeTheme.primaryColor : lightModeTheme.primaryColor,
  minimumTrackTintColor: props.darkMode ? darkModeTheme.primaryColor : lightModeTheme.primaryColor,
}));
