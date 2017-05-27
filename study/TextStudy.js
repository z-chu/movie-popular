/**
 * Created by zchu on 2017/5/27.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class TextStudy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HeaderText>zchu.github.io</HeaderText>
            </View>
        );
    }
}
  class HeaderText extends Component {
    render(){
        return (
            <Text style={styles.itemText}>
                {this.props.children}
            </Text>
        )
    }
}
let styles = StyleSheet.create({
    itemText: {
        fontSize: 33,
        fontFamily: 'Helvetiva Neue',
        fontWeight: '200',
        color: '#6435c9',
        padding: 16,
    },

    item: {
        flex: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#6435c9',
        marginVertical: 4,
        marginHorizontal: 16,


    },

    container: {
        // justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        backgroundColor: '#eae7ff',
        flexDirection: 'row',
        flex: 1,
        paddingTop: 16,
    }
});



