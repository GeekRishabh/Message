import React, { Component } from 'react';
import { TouchableHighlight, Text, View ,AppRegistry,StyleSheet,TextInput, Image ,Alert} from 'react-native';
import { Container, Header, Title, Content, Button, Footer,Input, List, ListItem, CardItem, Card,InputGroup } from 'native-base';
import {observer} from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Micon from 'react-native-vector-icons/MaterialIcons';

import store from './js/store/store'

@observer
export default class Message extends Component {

  constructor(props) {
    super(props);
    this.state ={
      mobile: ''
    };

  }


  sendMobile(){
    if(this.state.mobile.length < 10){
<<<<<<< HEAD
      alert("Invalid mobile number");
      this.setState({ mobile: '' });
      // msgStore.addMobileNumber(this.state.mobile);
      // msgStore.swipeScreen(two);
=======
      Alert.alert("Invalid mobile number");

      }
      else
      {
      store.getMobile(this.state.mobile);
      this.setState({
      mobile: ''
            })
>>>>>>> 90edf7270f26170a8cb544b07a79c8f4a8254788
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
<<<<<<< HEAD
                          <View style={{flexDirection: 'column', borderBottomWidth:1, borderBottomColor:'grey', justifyContent:'center',marginBottom:10}}>
                              <Text style={{textAlign:'center',lineHeight:30, fontWeight:'bold', alignItems:'center'}}>
                                India

                              </Text>
                              <Micon style={{fontSize: 10, color: 'grey', alignItems:'flex-start',textAlign:'right'}} name= 'network-cell'/>
                          </View>
                          <View style={{flexDirection: 'row', flexWrap:'wrap', justifyContent:'flex-start',alignItems:'center', alignSelf:'stretch'}}>
                              <Text style={{flex:0.5,
                                            fontWeight:'bold',
                                            alignItems:'flex-end',
                                            color:'grey',
                                            marginTop:4
                                          }}
                              > + </Text>
                              <Text style={{flex:1,
                                            fontWeight:'bold',
                                            alignSelf:'center',
                                            borderBottomWidth:1,
                                            borderBottomColor:'grey',
                                            justifyContent:'center',
                                            textAlign:'center',
                                            marginTop:16,
                                            paddingBottom: 10,
                                            marginRight:2,

                                          }}
                              > 91 </Text>
                              <TextInput
                                    autoCapitalize={'none'}
                                    maxLength={10}
                                    placeholder='Phone Number'
                                    value={this.state.mobile}
                                    onChangeText={(mobile) => this.onChanged(mobile)}
                                    style={{flex:6,alignItems:'center',alignSelf:'center',justifyContent:'center',textAlign:'center'}}
                              />
                              <Button primary
                                  onPress={() => this.onSubmit()}
                                  style={{flex:1.5,
                                          alignItems:'center',
                                          alignSelf:'center',
                                          justifyContent:'center',
                                          backgroundColor:'#D1D1D1'
                                        }}
                              > Ok </Button>

                          </View>


=======
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
>>>>>>> 90edf7270f26170a8cb544b07a79c8f4a8254788

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
