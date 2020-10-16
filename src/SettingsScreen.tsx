import React from 'react'
import {ScrollView, StatusBar, StyleSheet, NativeModules} from 'react-native'
import {connect} from 'react-redux'
import {LoaderScreen, View, Image, Text, Button, Slider, Switch} from 'react-native-ui-lib'
import {Settings, SettingsService} from './services/settings'
import {lightModeTheme, darkModeTheme} from './configs/theme'
import Assets from './assets'
import {State as StoreState} from './modules/store'

type Dispatch = (action: object) => void

interface Props {
  fontSize: number
  darkMode: boolean
  actions: {
    setDarkMode: (darkMode: boolean) => void
    setFontSize: (fontSize: number) => void
  }
}

interface State {
  isLoading: boolean
}

class SettingsScreen extends React.Component<Props, State> {
  private settingsService: SettingsService

  private defaultSettings: Settings = {
    fontSize: 17,
    darkMode: false,
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      isLoading: false,
    }

    this.settingsService = new SettingsService()
  }

  onLoadSettingsPress = async () => {
    this.setState({
      isLoading: true,
    })

    try {
      const settings = (await this.settingsService.fetchSettings()) ?? this.defaultSettings

      this.setState(
        {
          ...settings,
          isLoading: false,
        },
        this.onApplySettingsPress,
      )
    } catch (error) {
      console.log('Error', error)
    }
  }

  onApplySettingsPress = () => {
    const {fontSize, darkMode} = this.props
    NativeModules.SettingsNativeManager.setSettings({font_size: fontSize, dark_mode: darkMode})
  }

  onFontSizeChange = (fontSize: number) => {
    if (Math.round(fontSize) !== this.props.fontSize) {
      this.props.actions.setFontSize(Math.round(fontSize))
    }
  }

  onDarkModeChange = (darkMode: boolean) => {
    this.props.actions.setDarkMode(darkMode)

    StatusBar.setBarStyle(darkMode ? 'light-content' : 'dark-content')
  }

  render() {
    const {isLoading} = this.state
    const {fontSize, darkMode} = this.props
    const isApplyDisabled = fontSize === 0

    return (
      <ScrollView
        style={darkMode ? styles.darkModeBg : styles.lightModeBg}
        contentContainerStyle={styles.container}
      >
        <View style={styles.sectionCenter}>
          <Image
            source={darkMode ? Assets.logo.dark : Assets.logo.light}
            resizeMode="contain"
            style={styles.logo}
          />
        </View>

        <View style={styles.sectionCenter}>
          <Text style={[styles.title]} darkMode={darkMode}>
            {'Settings'}
          </Text>
        </View>

        <View style={styles.sectionSpread}>
          <View style={styles.sectionItem}>
            <Text darkMode={darkMode}>{'Font Size'}</Text>
          </View>
          <View style={styles.sectionItem}>
            <Slider
              // @ts-ignore
              darkMode={darkMode}
              value={fontSize}
              minimumValue={0}
              maximumValue={40}
              onValueChange={this.onFontSizeChange}
            />
          </View>
        </View>

        <View style={styles.sectionSpread}>
          <Text darkMode={darkMode}>{'Dark Mode'}</Text>
          <Switch
            darkMode={darkMode}
            disabled={isLoading}
            value={darkMode}
            onValueChange={this.onDarkModeChange}
          />
        </View>

        {isLoading ? (
          <View style={[styles.sectionCenter]}>
            <LoaderScreen />
          </View>
        ) : (
          <View style={styles.sectionSpread}>
            <Button
              label={'Load defaults'}
              onPress={this.onLoadSettingsPress}
              darkMode={darkMode}
            />

            <Button
              label={'Apply'}
              onPress={this.onApplySettingsPress}
              disabled={isApplyDisabled}
              darkMode={darkMode}
            />
          </View>
        )}

        <View style={[styles.demo, styles.sectionCenter]}>
          <Text darkMode={darkMode} style={{fontSize}}>
            {'Demo Content'}
          </Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  lightModeBg: {
    backgroundColor: lightModeTheme.backgroundColor,
  },
  darkModeBg: {
    backgroundColor: darkModeTheme.backgroundColor,
  },
  sectionCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  sectionSpread: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  sectionItem: {
    flex: 1,
  },
  container: {
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    height: 200,
    width: 200,
  },
  title: {
    fontSize: 30,
  },
  demo: {
    paddingTop: 50,
  },
})

function mapStateToProps(state: StoreState) {
  const {darkMode, fontSize} = state.settings
  return {
    darkMode,
    fontSize,
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    actions: {
      setDarkMode: (darkMode: boolean) => dispatch({type: 'SET_DARK_MODE', darkMode}),
      setFontSize: (fontSize: number) => dispatch({type: 'SET_FONT_SIZE', fontSize}),
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen)
