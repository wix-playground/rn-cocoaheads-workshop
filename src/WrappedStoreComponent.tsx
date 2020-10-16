import React, {ComponentType} from 'react'

const wrappedComponent = (store: object, generator: () => ComponentType) => {
  return () => {
    const InternalComponent = generator()
    const React = require('react')
    const {Provider} = require('react-redux')
    const WrappedComponent = class extends React.Component {
      render() {
        return (
          <Provider store={store}>
            <InternalComponent {...this.props} />
          </Provider>
        )
      }
    }
    return WrappedComponent
  }
}

export default wrappedComponent
