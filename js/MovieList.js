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
    ActivityIndicator
} from 'react-native';
import MovieItem from "../js/MovieItem";

const REQUEST_URL = "http://api.douban.com/v2/movie/top250?start=0&count=15";
export default class MovieList extends Component {

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




    render() {
        if (this.state.isLoadFinish === true) {
            return (
                <View style={styles.container}>
                    <ListView dataSource={this.state.movies} renderRow={
                        movie =>(<MovieItem itemData={movie}/>)
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
    }

});




