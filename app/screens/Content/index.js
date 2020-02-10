import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

class Content extends React.Component {
    renderItem = label => (
        <View style={{ width, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
            <Text>{label}</Text>
        </View>
    )
    render(){
        return (
            <View style={{ flex: 1 }}>
                <ScrollView horizontal>
                    <View style={{ width, borderWidth: 1, backgroundColor: 'red' }}>
                        <Text>Child 1</Text>
                    </View>
                    <View style={{ width, borderWidth: 1, backgroundColor: 'green' }}>
                        <Text>Child 2</Text>
                    </View>
                    <View style={{ width, borderWidth: 1, backgroundColor: 'orange' }}>
                        <Text>Child 5</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


export default Content;