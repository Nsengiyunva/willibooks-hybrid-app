import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Rave from 'react-native-rave-webview';

const { width } = Dimensions.get('screen')

class Content extends React.Component {
    renderItem = (label, index) => (
        <View key={index} style={{ width, padding: 10, paddingVertical: 25  }}>
            <Text style={{ textAlign: 'center', fontSize: 17 }}>
                <Text style={{ fontSize: 25, lineHeight: 28, marginRight: 5, fontWeight: 'bold'}}>
                    {`${index+1}.`}</Text>{`${label}`}
                </Text>
        </View>
    )
    onSuccess = data => {
        console.log(data, 'was successful')
    }
    onCancel = () => {
        console.log('this was cancelled')
    }
    // render(){
    //     return (
    //         <View style={{ flex: 1, backgroundColor: 'green'}}>
    //             <Text>Test</Text>
    //             <Rave 
    //                 buttonText={`Pay Now`}
    //                 raveKey='FLWPUBK_TEST-2b2c8a593d5736bf58002312659004d4-X'
    //                 amount={5000}
    //                 billingEmail="kingbecks07@gmail.com"
    //                 billingMobile="256703019014"
    //                 billingName="King Isaac"
    //                 ActivityIndicatorColor="green"
    //                 onCancel={()=>this.onCancel()}
    //                 onSuccess={(transactionRef)=>this.onSuccess(transactionRef)}
    //                 btnStyles={{ backgroundColor: 'white'}}
    //                 textStyles={{ color: 'green '}}
    //                 onError={()=>{alert('something went wrong')}}
    //                 txref="1234"
    //             />
    //         </View>
    //     )
    // }
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