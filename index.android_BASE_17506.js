import React, { Component } from 'react';
import { TouchableHighlight, Text, View ,AppRegistry,StyleSheet,TextInput, Image } from 'react-native';
import { Container, Header, Title, Content, Button, Footer,Input, List, ListItem, CardItem, Card,InputGroup } from 'native-base';
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
  //<Image source={require('./Images/l1.png')} style={styles.logoImage}>
  //</Image>

  render() {
    return (

        <Container>

                <Header style={{backgroundColor:'#1E4544'}}>

                    <Button transparent>
                        <Icon name='whatsapp' style={{fontSize:25, color:'white'}}/>
                    </Button>
                    <Title style={{color: 'white'}}>Verify your phone number</Title>

                </Header>

                <Content style={{backgroundColor: '#fff',width:400, height: 400}}>
                <Card>
                      <CardItem>
                          <Text>
                              A one time SMS will be sent to verify your mobile number. Carrier SMS charges may apply.
                          </Text>
                      </CardItem>
                      <CardItem>
                          <Text>
                              Please confirm your country code and enter your phone number.
                          </Text>
                          <InputGroup borderType='underline' >

                            <Text>India</Text>
                          </InputGroup>
                          <TextInput
                            autoCapitalize={'none'}
                            maxLength={10}
                            placeholder='Phone Number'
                            value={this.state.mobile}
                            onChangeText={(mobile) => this.onChanged(mobile)}

                          />
                          <Button primary
                          onPress={() => this.onSubmit()}
                          style={{marginTop:10 ,marginBottom:10 ,marginLeft:100 ,padding:5,justifyContent:'flex-end', backgroundColor:'#D1D1D1'}}>
                            Ok
                          </Button>

                      </CardItem>
                  </Card>






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
