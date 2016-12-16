import React, { Component } from 'react';
import { TouchableHighlight, Text, View ,AppRegistry,StyleSheet,TextInput, Image ,Alert} from 'react-native';
import { Container, Header, Title, Content, Button, Footer,Input, List, ListItem, CardItem, Card,InputGroup } from 'native-base';
import {observer} from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import store from './js/store/store'

export default class Message extends Component {

  constructor(props) {
    super(props);
    this.state ={
      mobile: ''
    };

  }

  
  sendMobile(){
    if(this.state.mobile.length < 10){
      Alert.alert("Invalid mobile number");
      
      }
      else
      {
      store.getMobile(this.state.mobile);
      this.setState({
      mobile: '' 
            })    
    }
  }
  
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
                            style={{width:150,margin:10, alignItems:'stretch', borderWidth:1}} 
                            onChangeText={(text) => this.setState({mobile: text})}
                            value={this.state.mobile}
                             onSubmitEditing={() => this.sendMobile()}
                                  blurOnSubmit={false}

                          />
                          <Button primary
                          onPress={() => this.sendMobile()}
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
