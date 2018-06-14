import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { Left, Right } from 'native-base';
import { write } from '../actions';
import {  Entypo } from '@expo/vector-icons';


class WriteScreen extends React.Component {
  static navigationOptions = {
    title: 'Write',
  };

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        <TextInput placeholder="Write a caption..." style={styles.input}
          onChangeText={(content) => this.setState({ content })}
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize='none'
          value={this.state.content}
          />
        <View style={{padding: 20, borderBottomWidth: 1, borderTopColor: '#eae5e5', flexDirection: 'row'}}>
          <Left>
            <Text style={{paddingBottom: 10, fontSize: 15}}>Tag People</Text>
          </Left>
          <Right>
            <Entypo name="chevron-small-right" style={{fontSize: 25}}/>
          </Right>
        </View>
        <View style={{padding: 20, borderBottomWidth: 1, borderTopColor: '#eae5e5', flexDirection: 'row'}}>
          <Left>
            <Text style={{fontSize: 15}}>Add Location</Text>
          </Left>
          <Right>
            <Entypo name="chevron-small-right" style={{fontSize: 25}}/>
          </Right>
        </View>       
      
        <View style={{padding: 10}}>
          <Button title="Share" onPress={() => {
            this.props.write(this.state.content);
          }} disabled={!this.state.content }
            style={styles.button}/>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    alignSelf: "stretch",
    height: 100,
    margin: 20,
    marginBottom: 5,
    marginTop: 5,
    fontSize: 20,
  },
  button: {
    alignSelf: "stretch",
  },
});

export default connect(null, { write })(WriteScreen);