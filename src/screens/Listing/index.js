import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, Text, StyleSheet,ScrollView, TouchableHighlight, Image, TouchableOpacity, Dimensions } from 'react-native';
import picture from './logo.png'
import picture1 from '../../images/satire.png'

const { width } = Dimensions.get('screen');

const LinkBtn = ({ label,style, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[{ borderBottomWidth: 1, borderBottomColor: 'red'}, style]}>
        <Text style={{ fontSize: 12 }}>{label}</Text>
    </TouchableOpacity>
)

const BookCoverListing = ({ img, navigation, title,locked = false }) => (
    <View style={{ width:'100%', flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
        <TouchableOpacity onPress={ !locked ? () => navigation.navigate('Chapters', { title }): () => alert('This book content is not available yet')} style={{ width: width/2, height: width/3, marginVertical: 20,
                    justifyContent: 'center', alignItems: 'center' }}>
            <Image source={img} style={{ width: '100%' }} resizeMode='contain' />
        </TouchableOpacity>
        <View style={{ paddingHorizontal: 10,width: width / 2 }}>
            <Text style={{ fontSize: 14 }}><Text style={{ fontWeight: 'bold'}}>Price: </Text> $ 1</Text>
            <Text style={{ fontSize: 14 }}><Text style={{ fontWeight: 'bold'}}>Duration: </Text>Now until 31st/December/2020</Text>
            <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                <LinkBtn  onPress={() =>alert('regain access')} label={`Regain Access`} />
                <LinkBtn  onPress={() =>alert('subscribe')} style={{ marginHorizontal: 15 }} label={`Subscribe`} />
            </View>
        </View>
    </View>
)



class Listing extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center', fontSize:24, fontWeight: 'bold', textDecorationColor:'green' }}>Available Books</Text>
                <ScrollView>
                   <View style={{ flexDirection: 'column',justifyContent: 'space-between'}}>
                    <BookCoverListing img={picture1} navigation={this.props.navigation}/>
                   </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: '5%',
        backgroundColor: 'white'
    }
})

export default Listing;
