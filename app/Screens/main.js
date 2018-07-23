import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Switch, ToolbarAndroid, Alert, KeyboardAvoidingView } from 'react-native';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import logo from '../assets/code.png';
import avatar from '../assets/avatar3.png';
import flower from '../assets/flower.png';
import coffee from '../assets/coffee.png';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logoVisible: true,
            name: '',
            message: ''
        }
    }

    handleSwitch = (value) => {
        this.setState({ logoVisible: value });
    }

    submit = (name, message) => {
        if(name.length == 0){
            Alert.alert("Enter a valid name");
        } else if (message.length == 0) {
            Alert.alert("Enter a valid Message");
        }
        this.setState({ name, message }, function () {
            Alert.alert(`Hi ${this.state.name}, we got your message "${this.state.message}"`);
        });
        this.scrollview.scrollTo({x:0,y:0,animated:true});
    }

    render() {
        let img = <Text></Text>
        if (this.state.logoVisible) {
            img = <Image source={logo} style={{ width: 130, height: 130 }} />
        } else {
            img = <Text></Text>
        }

        return (
            <KeyboardAvoidingView keyboardVerticalOffset={50} behavior="position" style={{ flex: 1 }} enabled>
                <ToolbarAndroid
                    title="Business"
                    subtitle="Company info"
                    navIcon={flower}
                    style={{ height: 54, backgroundColor: "#e9eaed" }}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 4, marginBottom: 4 }}>
                    {img}
                    <Switch value={this.state.logoVisible} onValueChange={this.handleSwitch} />
                </View>
                <ScrollView ref={ref => this.scrollview = ref} style={{ height: 300 }}>
                    <Home />
                    <About />
                    <Contact submit={this.submit.bind(this)} />
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}