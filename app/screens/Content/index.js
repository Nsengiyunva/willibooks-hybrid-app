import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

class Content extends React.Component {
    renderItem = (label, index) => (
        <View key={index} style={{ width, padding: 10, paddingVertical: 25  }}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>
                <Text style={{ fontSize: 25, lineHeight: 28, marginRight: 5, fontWeight: 'bold'}}>
                    {`${index+1}.`}</Text>{`${label}`}
                </Text>
        </View>
    )
    render(){
        const data = this.props.navigation.state.params.data;
        const bookTitle = this.props.navigation.state.params.bookTitle;
        const chapter = this.props.navigation.state.params.chapter;
        const subchapter = this.props.navigation.state.params.subchapter;
        
        return (
            <View style={{ flex: 1, backgroundColor: 'white', paddingVertical: 50 }}>
                <>
                    {/* <Text style={{ fontSize: 24, textAlign: 'center' }}></Text> */}
                    <View style={{ flexDirection: 'row',justifyContent: 'center', backgroundColor: 'green',padding: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 20, color:'white' }}>{`Your Mind/`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 20,color:'white' }}>{`Chapter ${chapter}/`}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={{ fontSize: 20, color:'white' }}>{`${bookTitle}`}</Text>
                        </TouchableOpacity>
                    </View>
                </>
                <ScrollView horizontal>
                    {data.map( (value, index) => {
                        return this.renderItem( value,index )
                    })}
                </ScrollView>
            </View>
        )
    }
}


export default Content;