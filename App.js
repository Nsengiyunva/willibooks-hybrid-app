// import React from 'react';
// import Realm from 'realm';
// import Navigator from './app/navigation'
// import { TextInput, View, Text, TouchableOpacity } from 'react-native'
// import TodoService  from './app/_services/TodoService'
// import TodoModel  from './app/models/TodoModel';
// import Utils from './app/_utils'
// import HomeScreen from './app/screens/HomeScreen'

// let items = TodoService.findAll();

// export default class App extends React.Component {
//   // state = {
//   //   newValue: '',
//   //   firstName: '',

//   // }
//   constructor( props ){
//     super( props );
//     this.unsubscribe = null;
//     this.state = {
//       user: null,
//       message: '',
//       codeInput: '',
//       phoneNumber: '+44',
//       confirmResult: null
//     }
//   }
//   componentDidMount(){
//     this.unsubscribe = firebase.auth().onAuthStateChanged( user => {
//       if( user ){
//         this.setState({ user: user.toJSON() })
//       }
//     })
//   }
//   onChange = (event) => {
//     this.setState({ newValue: event.nativeEvent.text })
//   }
//   _updateMasterState = (attrName, value) => {
//     this.setState({ [ attrName ]: value })
//   }
//   onPress = () => {
//       let newdataItem= new TodoModel(this.state.newValue);
//       var dataItem = Utils.findTodo( newdataItem, [] );

//       TodoService.save( newdataItem );
//       this.setState({ newValue: '' })
//   }
//   render(){
//    let renderItems =  Array.from(items);
//     return (
//       // <Navigator />
//       // <>
//       //   <TextInput 
//       //     placeholder='Add a item in the database'
//       //     blurOnSubmit={false}
//       //     value={this.state.newValue}
//       //     onChange={this.onChange}
//       //     style={{ borderWidth: 1, width: '90%', margin: '5%',fontSize: 18, paddingTop: 10 }}
//       // />
//       // <TouchableOpacity 
//       //   onPress={() => this.onPress()}
//       //   style={{ marginLeft: 10, borderWidth: 1, width: 150,padding: 4, justifyContent:'center', alignItems: 'center'}}>
//       //   <Text>Submit</Text>
//       // </TouchableOpacity> 
//       // <View>
//       //   {renderItems.map( item => {
//       //     return (
//       //       <Text key={item.id}>{item.title}</Text>
//       //     )
//       //   })}
//       // </View>
//      // </>
//     //  <HomeScreen 
//     //   attrName='firstName'
//     //   title='First Name'
//     //   value={this.state.firstName}
//     //   updateMasterState={this._updateMasterState}
//     //   textInputStyles={{
//     //     color: 'green',
//     //     fontSize: 15
//     //   }}
//     //   otherTextInputProps = {{
//     //     maxLength: 12
//     //   }}
//     //  />
//     <View>

//     </View>
//     )
//   }
// }
import React, { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, Button } from 'react-native';

export default function App(){
  const [ count, setCount ] = useState(0);

  useEffect ( () => {
    sendConfirm()
  })
  sendConfirm = async() => {
    const confirmation = await auth().signInWithPhoneNumber('+256773917523')
    try {
      let resp = await confirmation.confirm('205914');
      console.log( 'success', resp)
    } catch( e ){
      console.error( e );
    }
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'teal'}}>
      <Text>You clicked {count} number of times</Text>
      <Button 
        onPress={() => setCount( count + 1 )}
        title='Click Me'
        color='yellow'
        accessibilityLabel='Click this button to increase count'
      />
    </View>
  )
}