import React, { Component } from 'react'
import {
    Navigator,
    WebView
} from 'react-native'

export default class BrowserPage extends Component {
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator} />
        )
    }
    renderScene() {
        return (
            <WebView source={{ uri: this.props.url }} />
        )
    }
}
