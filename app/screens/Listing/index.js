import React from 'react';
import { View, Text, StyleSheet,FlatList,TouchableHighlight } from 'react-native';

class Listing extends React.Component {
    seperator = () => {
        return <View style={{ borderBottom: 1 }} />
    }
    onPress = () => {
        alert('pressed')
    }
    render(){
        const books = [ 
            {title: 'Title Text', key: 'item1'},
            {title: 'Title Jolene', key: 'item2'}, 
            {title: 'Title Keryne', key: 'item3'},
            {title: 'Tail', key: 'item4'} ,
            {title: 'Confession', key: 'item5'}  
        ];
        return (
            <View style={styles.container}>
                <Text>Select from the book Categories</Text>
                <FlatList
                    ItemSeperatorComponent={this.seperator()}
                    data={books}
                    renderItem={({item, index, separators}) => (
                        <TouchableHighlight
                            style
                            onPress={() => this.onPress(item)}
                        >
                            <Text>{item.title}</Text>
                        </TouchableHighlight> 
                    )}
                />
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