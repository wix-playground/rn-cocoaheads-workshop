import {AppRegistry} from 'react-native'

import WrappedStoreComponent from './src/WrappedStoreComponent';
import SettingsScreen from './src/SettingsScreen';
import {store} from './src/modules/store';

// Module name
AppRegistry.registerComponent('CocoaHeads', WrappedStoreComponent(store, () => SettingsScreen))