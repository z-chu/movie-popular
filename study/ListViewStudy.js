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
    ListView
} from 'react-native';

const REQUEST_URL = "http://api.douban.com/v2/movie/top250?start=0&count=15";
export default class ListViewStudy extends Component {

    constructor(props) {
        super(props)
        let movies = [
            {title: '肖申克的救赎'},
            {title: '泰坦尼克号'},
            {title: '这个杀手不太冷'},
            {title: '阿甘正传'},
            {title: '辛德勒的名单'},

        ];
        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

        this.state = {
            movies: dataSource.cloneWithRows(movies)
        }
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then(function (response) {
                return response.json();
            })
           /* .then(function (responseData) {
                this.setState({
                    movies: this.state.movies.cloneWithRows(responseData.subjects)
                });
            })*/
            .then(responseData => {
                this.setState({
                    movies: this.state.movies.cloneWithRows(responseData.subjects)
                });
            })
            .done();

    }

    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.movies} renderRow={
                    movie => <Text style={styles.itemText}>{movie.title}</Text>
                }/>
            </View>
        );
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

    container: {
        // justifyContent: 'flex-start',
        // alignItems: 'flex-end',
        backgroundColor: '#eae7ff',
        flexDirection: 'row',
        flex: 1,
    }

});




