import React,{Component} from 'react';
import { View, Text, TextInput,Button } from 'react-native';
import Styles from '../Styles';



export default class Contact extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:'',
            email:'',
            message:''
        }
    }
    render(){
        return (
            <View>
                <Text style={Styles.heading}>Contact</Text>
                <View style={{ paddingLeft: 8, paddingRight: 8 }}>
                    <TextInput returnKeyType={"next"}
                        onSubmitEditing={() => { this.email.focus(); }}
                        blurOnSubmit={false} 
                        onChangeText={(value)=>{this.setState({name:value})}} placeholder="Enter name" style={{ height: 40, margin: 4 }}>{this.state.name}</TextInput>
                    <TextInput 
                        ref={(input) => { this.email = input; }}
                        returnKeyType={"next"}
                        onSubmitEditing={() => { this.message.focus(); }}
                        blurOnSubmit={false}
                        onChangeText={(value) => { this.setState({ email: value }) }} placeholder="Enter email" style={{ height: 40, margin: 4 }}>{this.state.email}</TextInput>
                    <TextInput 
                        ref={(input) => { this.message = input; }}
                        returnKeyType={"go"}
                        blurOnSubmit={false}
                        onSubmitEditing={() => { this.props.submit(this.state.name, this.state.message)  }}
                        onChangeText={(value) => { this.setState({ message: value }) }} placeholder="Optional message" style={{ height: 40, margin: 4 }}>{this.state.message}</TextInput>
                    <Button
                        
                         onPress={() => { this.props.submit(this.state.name,this.state.message) }} title="Submit" style={{ backgroundColor: "#842853", margin: 4 }}
                    />

                </View>
            </View>
        );
    }
}