/**
 * Created by zchu on 2017/5/27.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class ImageStudy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundImage}
                    source={{uri: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p457760035.webp'}}>
                    <View style={styles.overlay}>
                        <Text style={styles.overlayHeader}>
                            泰坦尼克号
                        </Text>
                        <Text  style={styles.overlaySubHeader}>
                            Titanic (1997)
                        </Text>
                    </View>
                </Image>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    overlaySubHeader:{
        fontSize:16,
        fontFamily: 'Helvetiva Neue',
        fontWeight:'200',
        color:'#eae7ff',
        padding:10,
        paddingTop:0,
    },

    overlayHeader:{
        fontSize:33,
        color:'#eae7ff',
        fontFamily: 'Helvetiva Neue',
        fontWeight:'200',
        padding:10,

    },

    overlay: {
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center'
    },

    image: {
        height: 500,
        width: 500,
    },

    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    container: {
        // justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        backgroundColor: '#eae7ff',
        flexDirection: 'row',
        flex: 1,
    }
});



