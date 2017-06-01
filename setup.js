/**
 * Created by zchu on 2017/5/27.
 */

import React, {Component} from 'react';

import MovieList from "./js/MovieList";
import Top250 from "./js/Top250";
import {ToolbarAndroid, View,StyleSheet} from "react-native";


export default class setup extends Component {
    constructor(props) {
        super(props);
    /*    this.state = {
            actionText: 'Example app with toolbar component',
            toolbarSwitch: false,
            colorProps: {
                titleColor: '#3b5998',
                subtitleColor: '#6a7180',
            },
        }*/

    }


    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    titleColor='#ffffff'
                    style={styles.toolbar}
                    title="电影精选"/>
                <Top250/>
            </View>

        );
    }


}


const styles = StyleSheet.create({
    container: {
        // justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        backgroundColor: '#eae7ff',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
    toolbar: {
        backgroundColor: '#9c27b0',
        height: 56,
    },
});

