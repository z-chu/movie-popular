/**
 * Created by zchu on 2017/5/27.
 */
/**
 * Created by zchu on 2017/5/27.
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ActivityIndicator,
    TouchableNativeFeedback,
    ToastAndroid,
} from 'react-native';


const REQUEST_URL = "http://api.douban.com/v2/movie/us_box";
export default class Top250 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: null,
            isLoadFinish: false
        }
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then(response => response.json())
            .then(responseData => {
                let dataSource = new ListView.DataSource({
                    rowHasChanged: (row1, row2) => row1 !== row2
                });

                this.setState({
                    movies: dataSource.cloneWithRows(responseData.subjects),
                    isLoadFinish: true

                });
            })
            .done();

    }

    renderListItem(movie) {
        return (
            <TouchableNativeFeedback
                onPress={() => {
                    ToastAndroid.showWithGravity(movie.subject.title, ToastAndroid.SHORT, ToastAndroid.CENTER)
                }}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.movieItem}>
                    <Image
                        style={styles.movieImage}
                        source={{uri: movie.subject.images.large}}/>
                    <View style={{flexDirection: 'column', marginLeft: 10}}>
                        <Text style={styles.movieTitle}>{movie.subject.title}</Text>
                        <Text
                            style={[styles.movieContentText, {fontSize: 18, marginTop: 8}]}>
                            {movie.subject.original_title}<Text style={{color: '#888888'}}>({movie.subject.year})</Text>
                        </Text>
                        <Text style={[styles.movieContentText, {fontSize: 14}]}>{movie.subject.directors[0].name}</Text>
                        <Text style={styles.movieContentText}>类型: {movie.subject.genres[0]}</Text>
                        <Text style={styles.movieContentText}>
                            评分: <Text style={{color: '#673AB7'}}>{movie.subject.rating.average}</Text>
                        </Text>

                    </View>

                </View>
            </TouchableNativeFeedback>
        );
    }

    render() {
        if (this.state.isLoadFinish === true) {
            return (
                <View style={styles.container}>
                    <ListView dataSource={this.state.movies} renderRow={
                        movie => this.renderListItem(movie)
                    }/>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <ActivityIndicator
                        style={{
                            alignSelf: 'center'
                        }}
                        animating={!this.state.isLoadFinish}/>
                </View>

            );
        }

    }
}

let styles = StyleSheet.create({


    container: {
        // justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        backgroundColor: '#eae7ff',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
    movieTitle: {
        fontSize: 18,
        color: '#9c27b0',

    },
    movieContentText: {
        fontSize: 14,
        color: '#212121',
        marginTop: 2,
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

    }


});




