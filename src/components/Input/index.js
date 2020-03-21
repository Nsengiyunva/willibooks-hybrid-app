import React from 'react';

import { View, Text, StyleSheet, Animated, TextInput } from 'react-native';
import { string, func, object, number } from 'prop-types'


class Input extends React.Component {
    static propTypes = {
        attrName: string.isRequired,
        title: string.isRequired,
        value: string.isRequired,
        updateMasterState: func.isRequired,
        keyboardType: string,
        titleActiveSize: number,
        titleInActiveColor: string,
        titleInactiveColor: string,
        textInputStyles: object,
        otherTextInputProps: object
    }
    static defaultProps = {
        keyboardType: 'default',
        titleActiveSize: 11.5,
        titleInActiveSize: 15,
        titleActiveColor: 'black',
        titleInactiveColor: 'dimgrey',
        textInputStyles: {},
        otherTextInputAttributes: {}
    }
    constructor(props){
        super(props);
        const { value } = this.props
        this.position = new Animated.Value( value ? 1 : 0 );
        this.state = {
            isFieldActive: false
        }
    }
    _handleFocus = () => {
        if(!this.state.isFieldActive){
            this.setState({ isFieldActive: true });
            Animated.timing( this.position, {
                toValue: 1,
                duration: 150
            }).start();
        }
    }
    _handleBlur = () => {
        if(this.state.isFieldActive && !this.props.value){
            this.setState({ isFieldActive: false })
            Animated.timing( this.position, {
                toValue: 0,
                duration: 150
            }).start();
        }
    }
    _onChangeText = updatedValue => {
        const { attrName, updateMasterState } = this.props;
        updateMasterState( attrName, updatedValue )
    }
    _returnAnimatedTitleStyles = () => {
        const { isFieldActive } = this.state;
        const { titleActiveColor, titleInactiveColor, titleActiveSize, titleInActiveState } = this.props;
        return {
            top:  this.position.interpolate({
                inputRange: [0,1],
                outputRange:[14,0]
            }),
            fontSize: isFieldActive ? titleActiveSize: titleInActiveState,
            color: isFieldActive ? titleActiveColor: titleInactiveColor
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Animated.Text style={[styles.titleStyles, this._returnAnimatedTitleStyles()]}>
                    {this.props.title}
                </Animated.Text>
                <TextInput 
                    value={this.props.value}
                    style={[styles.textInput, this.props.textInputStyles]}
                    underlineColorAndroid={'transparent'}
                    onFocus={this._handleFocus}
                    onBlur={this._handleBlur}
                    onChangeText={this._onChangeText}
                    keyboardType={this.props.keyboardType}
                    {...this.props.otherTextInputProps}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 3,
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        height: 50,
        marginVertical: 4
    },
    textInput: {
        fontSize: 15,
        marginTop: 5,
        fontFamily: 'Avenir-Medium',
        color: '#000'
    },
    titleStyles: {
        position: 'absolute',
        fontFamily: 'Avenir-Medium',
        left: 3,
        right: 4
    },
    headerText: {
        fontSize: 17,
        color: 'black'
    }
})

export default Input;