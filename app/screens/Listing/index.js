import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet,ScrollView, TouchableHighlight, Image, TouchableOpacity, Dimensions } from 'react-native';
import picture from './logo.png'


const { height, width } = Dimensions.get('screen')
class Listing extends React.Component {
    seperator = () => {
        return <View style={{ borderBottom: 1 }} />
    }
    onPress = () => alert('pressed')
    renderListItems = ({item, index, separators}) => {
        return (
            <TouchableHighlight style={{}} onPress={() => this.onPress(item)}>
                <Image source={picture} resizeMode='cover' style={{ width: 50,  height: 50 }} />
            </TouchableHighlight> 
        )
    }
    bookCover = (title, locked) => (
        <>
        <TouchableOpacity onPress={ !locked ? () => this.props.navigation.navigate('Chapters', { title }): () => alert('this book content is not available yet')} style={{ position: 'relative', borderRadius: 100,width: width/3, height: width/ 3, marginVertical: 20,
            justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' }}>
            <Text>{title}</Text>
            {locked && <View style={{ position: 'absolute', top:0,  opacity: 0.5, borderRadius: 100,backgroundColor: '#ddd', justifyContent:'center', alignItems:'center', width: width/3, height: width/ 3 }}>
                {/* <Text>Locked</Text> */}
            </View> }
        </TouchableOpacity>
        </>
    )
    render(){
        return (
            <View style={styles.container}>
                <Text>Available Books</Text>
                <ScrollView>
                   <View style={{ flexWrap: 'wrap', flexDirection: 'row',justifyContent: 'space-between'}}>
                    {this.bookCover('Your Mind')}
                    {this.bookCover('Confession', true)}
                    {this.bookCover('The Boss', true )}
                    {this.bookCover('Knowledge', true )}
                    {this.bookCover('Your Mind', true )}
                    {this.bookCover('Your Mind', true )}
                    {this.bookCover('Your Mind', true )}
                    {this.bookCover('Your Mind', true )}
                   </View>
                </ScrollView>
                {/* <FlatList
                    ItemSeperatorComponent={this.seperator()}
                    data={books}
                    renderItem={(item, index, separators) => this.renderListItems({item, index, separators})}                /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%'
    }
})

export default Listing;