import React, { Component } from 'react';
import { TouchableHighlight, Text, View ,AppRegistry,StyleSheet,TextInput } from 'react-native';
import { Container, Header, Title, Content, Button, Footer,Input, List, ListItem } from 'native-base';
import {observer} from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Message extends Component {

  constructor(props) {
    super(props);
    this.state ={
      mobile: ''
    };

  }


  componentDidMount() {
  }

  onChanged(text){
     var newText = '';
     var numbers = '0123456789';
     if(text.length < 1){

       this.setState({ mobile: '' });
     }
     for (var i=0; i < text.length; i++) {
          if(numbers.indexOf(text[i]) > -1 ) {
               newText = newText + text[i];
          }
          this.setState({ mobile: newText });
      }
  }

  onSubmit(){
    if(this.state.mobile.length < 10){
      alert("Invalid mobile number");
      this.setState({ mobile: '' });
      msgStore.addMobileNumber(this.state.mobile);
      msgStore.swipeScreen(two);
    }
  }


  render() {
    return (

        <Container>

                <Header>
                    <Button transparent>
                        <Icon name="home" style={{fontSize:25, color:'white'}}/>
                    </Button>
                    <Title style={{color: 'white'}}>MyChatApp</Title>
                </Header>
                <Content style={{backgroundColor: '#fff',width:400, height: 400}}>
                  <Text> Enter Your Mobile Number: </Text>


                  <TextInput
                    autoCapitalize={'none'}
                    maxLength={10}
                    placeholder='Mobile Number'
                    value={this.state.mobile}
                    onChangeText={(mobile) => this.onChanged(mobile)}

                  />
                  <Button primary
                  onPress={() => this.onSubmit()}
                  style={{marginTop:10 ,marginBottom:10 ,marginLeft:100 ,padding:5,justifyContent:'flex-end'}}>
                      Enter
                  </Button>


                </Content>


            </Container>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('Message', () => Message);
