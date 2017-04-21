/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    WebView
} from 'react-native'

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = { url: 'http://johncheesman.org.uk' }
    }
    render() {
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                navigator={this.props.navigator} />
        )
    }
    renderScene() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Enter a URL to launch in WebView</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => this.setState({ url: value })}
                    value={this.state.url} />
                <Button
                    onPress={this.launchWebView.bind(this)}
                    title="Launch WebView" />
                <Text>{this.state.url}</Text>
            </View >
        )
    }
    launchWebView() {
        this.props.navigator.push({
            id: 'BrowserPage',
            name: 'Browser',
            passProps: {
                url: this.state.url
            }
        })
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
})
