import React from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import {Image, Text} from 'react-native-ui-lib';
import Assets from './assets';


class SettingsScreen extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={Assets.logo.light}
          resizeMode="contain"
          style={styles.logo}
        />
        <Text>Hello CocoaHeads</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    height: 200,
    width: 200,
  },
})

export default SettingsScreen;
