/**
 * Created by zchu on 2017/5/27.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class FlexStudy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={
                    [styles.item, styles.itemOne]
                }>
                    <Text style={styles.itemText}>1</Text>
                </View>
                <View style={
                    [styles.item, styles.itemTwo]
                }>
                    <Text style={styles.itemText}>2</Text>
                </View>
                <View style={
                    [styles.item, styles.itemThree]
                }>
                    <Text style={styles.itemText}>3</Text>
                </View>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    itemThree: {
        alignSelf: 'center',
    },

    itemTwo: {
        alignSelf:'flex-end'
    },

    itemOne: {
        alignSelf: 'flex-start'
    },

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


/*
 margin: 30,
 borderWidth: 1,//描边的线条宽度
 borderColor: '#6435c9',//描边的颜色
 borderRadius: 16,//描边的圆角半径
 shadowColor: '#6435c9',//阴影的颜色 -IOS
 shadowOpacity: 0.6,//阴影的不透明度 -IOS
 shadowRadius: 2,//阴影的扩散程度 -IOS
 shadowOffset: { //阴影的偏移
 height: 1, //竖直方向的偏移
 width: 0,//水平方向的偏移
 }
 */

