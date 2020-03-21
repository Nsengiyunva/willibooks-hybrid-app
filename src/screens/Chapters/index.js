import React from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { books } from '../_fixtures'

const { height, width } = Dimensions.get('screen');

//this.props.navigation.navigate('SubChapters', { bookId: 1, chapterId: 1, name: label, isChapter: chapter })};


const DisplayChapter = ({ label, chapter, onPress }) => (
    <TouchableOpacity onPress={() => alert(label)} style={{ width: width/ 1.2, margin: 3, backgroundColor: chapter ? 'green' : 'black', borderRadius: 8, height: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ color: chapter ? 'white' : 'red'}}>{label}</Text>
    </TouchableOpacity>
)
class Chapters extends React.Component {
    render(){
        return (
            <View style={{ flex: 1, padding: 10, backgroundColor:'white' }}>
                <Text style={{ alignSelf: 'center', fontSize: 24}}>Your Mind</Text>
                <Text style={{ alignSelf: 'center'}}>Chapters and Content</Text>
                <ScrollView>
                  <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                      {books.map( item => {
                            return (
                                    <View>
                                        {item.chapters.map( ({ title, subchapters }) => {
                                            return (
                                                <View>
                                                    <DisplayChapter key={title} label={`${title}`} chapter={true} />
                                                    {subchapters.map( ({ name }) => {
                                                        return <DisplayChapter key={ name } label={`${name}`} chapter={false}  />
                                                    })}
                                                </View>
                                            )
                                        })}
                                    </View>
                                )
                         })}
                   </View>
                </ScrollView>
            </View>
        )
    }
}


export default Chapters;
