/**
 * Created by Chu on 2017/5/27.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ToastAndroid,

    TouchableNativeFeedback,
} from 'react-native';
export  default class MovieItem extends Component {

    render() {
        let movie = this.props.itemData;
        return (
            <TouchableNativeFeedback
                onPress={()=>{
                 //   Alert.alert(movie.movieTitle);
                    ToastAndroid.showWithGravity(movie.title,ToastAndroid.SHORT,ToastAndroid.CENTER)
                }}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.movieItem}>
                    <Image
                        style={styles.movieImage}
                        source={{uri: movie.images.large}}/>
                    <View style={{flexDirection: 'column', marginLeft: 10}}>
                        <Text style={styles.movieTitle}>{movie.title}</Text>
                        <Text style={{fontSize: 16, marginTop: 8, color: '#212121'}}>{movie.original_title}<Text
                            style={{color: '#888888'}}>({movie.year})</Text></Text>
                        <Text style={{fontSize: 14, marginTop: 2, color: '#212121'}}>{movie.directors[0].name}</Text>
                        <Text style={{fontSize: 12, marginTop: 2, color: '#212121'}}>类型: {movie.genres[0]}</Text>
                        <Text style={{fontSize: 12, marginTop: 2, color: '#212121'}}>评分: <Text
                            style={{color: '#673AB7'}}>{movie.rating.average}</Text></Text>

                    </View>

                </View>
            </TouchableNativeFeedback>
        )
    };
}

let styles = StyleSheet.create({
    movieTitle: {
        fontSize: 18,
        color: '#6435c9',

    },
    movieImage: {
        width: 108,
        height: 168,
    },

    movieItem: {
        flexDirection: 'row',
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'

    },


});
