import React from 'react';

import { View, Text, StyleSheet, Dimensions,ScrollView, TouchableOpacity } from 'react-native';
import { precontent, books } from '../_fixtures';

const { width, height } = Dimensions.get('screen')

const SubChapterItem  = (numberListing, label, data,navigation, title, chapter ) => (
    <TouchableOpacity onPress={() => navigation.navigate('Content', { data, bookTitle: title, chapter, subchapter: numberListing  })} key={label} style={{ flexDirection: 'row', justifyContent:'center', alignItems: 'center', width: (width /2.5), height:45, margin: 5, backgroundColor: 'black', opacity: 0.6, }}>
        <Text style={{ color: 'white' , fontSize: 14, fontWeight:'bold' }}>{numberListing}</Text>
        <Text style={{ color: 'white' , fontSize: 14, fontWeight:'bold', marginLeft: 5 }}>{label}</Text>
    </TouchableOpacity>
)
class SubChapters extends React.Component {
    renderPreface = () => {
        let name = this.props.navigation.state.params.name;
        let filtered = precontent.filter( item => {
            return item.name.toLowerCase() === name.toLowerCase();
        })[0];

        return (
            <ScrollView>
                <Text style={{ textAlign:'center', fontSize: 24 }}>{name}</Text>
                <Text style={{ textAlign:'center', fontSize: 17 }}>{`Data`}</Text>
            </ScrollView>
         )
}
    renderSubChapters = () => {
       let chapterId = this.props.navigation.state.params.chapterId;
       let filteredBook = books.filter( value => value.id === this.props.navigation.state.params.bookId)[0];
       let data = filteredBook.chapters.filter( chapter => parseInt(chapter.label) === this.props.navigation.state.params.chapterId )
       
       return (
            <>
                <Text style={{ textAlign: 'center', fontSize: 20}}>{`${filteredBook.title}/${data[0].title}/`}SubChapters</Text>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                        {data[0].subchapters.map( (item) => {
                            return SubChapterItem(item.label, item.name, item.body, this.props.navigation, item.name, chapterId)
                        })}
                    </View>
                </ScrollView>
            </>
         )
    }
    render(){
       let isChapter = this.props.navigation.state.params.isChapter;
        return(
            <View style={{ flex: 1, paddingHorizontal: 10, paddingVertical: 20 }}>
                {!isChapter ? this.renderPreface(): this.renderSubChapters()}
            </View>
        )
    }
}

export default SubChapters;