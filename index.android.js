import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native'
import MainPage from './main-page'
import BrowserPage from './browser-page'

export default class WebViewTest extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'MainPage', name: 'Main' }}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                    if (route.sceneConfig) {
                        return route.sceneConfig
                    }

                    return Navigator.SceneConfigs.FloatFromRight
                } } />
        )
    }
    renderScene(route, navigator) {
        let routeId = route.id

        if (routeId === 'MainPage') {
            return (
                <MainPage navigator={navigator} />
            )
        }

        if (routeId === 'BrowserPage') {
            return (
                <BrowserPage {...route.passProps} navigator={navigator} />
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20,

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    input: {
        alignSelf: 'stretch'
    },
    webView: {
        alignSelf: 'stretch',
        height: 500,
        backgroundColor: '#333'
    }
});

AppRegistry.registerComponent('WebViewTest', () => WebViewTest);
