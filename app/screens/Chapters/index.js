import React from 'react';
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('screen')


class Chapters extends React.Component {
    showChapter = (label, chapter) => (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SubChapters', { bookId: 1, chapterId: 1, name: label, isChapter: chapter })} style={{ width: width/ 1.2, margin: 3, backgroundColor: chapter ? 'green' : 'orange', borderRadius: 8, height: 50, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ color: chapter ? 'white' : 'black'}}>{label}</Text>
        </TouchableOpacity>
    )
    render(){
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <Text style={{ alignSelf: 'center', fontSize: 24}}>Your Mind</Text>
                <Text style={{ alignSelf: 'center'}}>Chapters and Content</Text>
                <ScrollView>
                  <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    {this.showChapter('Advice',false)}
                    {this.showChapter('Dedication',false)}
                    {this.showChapter('Acknowledgement',false)}
                    {this.showChapter('The Mind', true )}
                    {this.showChapter('Mind Classifications', true )}
                    {this.showChapter('The powers of your mind', true )}
                    {this.showChapter('The importance of your mind', true )}
                    {this.showChapter('The influential powers of your mind', true )}
                    {this.showChapter('Wrong uses of your mind', true )}
                    {this.showChapter('Correct uses of your mind', true )}
                    {this.showChapter('Enriching your mind', true )}
                    {this.showChapter('Activitating your mind', true )}
                    {this.showChapter('Mind Management', true )}
                   </View>
                </ScrollView>
            </View>
        )
    }
}


export default Chapters;