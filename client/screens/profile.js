import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    if (this.props.users) {
      return this.props.users.map(user => {
        return (
          <View style={styles.card} key={user.id}>
            <Text>{user.username}</Text>
          </View>
        );
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection:'row'}}>
            <View style= {{ flex: 1, alignItems: 'center' }}>
              <Image source= {{ uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HBg0SBw4QFhINEBYQFRUPDQ8NEA0SFhEWGBgRExMYHCggGBolGxMTITEhJSkrLi4uFx8zODM4NygtLisBCgoKDg0OGhAQFysdHxk0LTgrKzcrKy0rKzQrKy0tLSstKysrLSsrKysrLS0rNysrKysrLSstLSsrKysrKy0rLf/AABEIAJYAlgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAwYCB//EADUQAQABAgQCBQoHAQEAAAAAAAABAgMEBREhMVESE0FxkRQiMmFygaHB0eEjMzRCgqKxUiT/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgEDBP/EAB0RAQEAAgIDAQAAAAAAAAAAAAABAhEDMRJBUSH/2gAMAwEAAhEDEQA/APogD0uYAAAAD3asV3p/CpmeenDxB4FhRlFdXpzTHxlunJuOlz+n3T5RuqqROuZVdo9HSe6d0KuiaKpiuJiY57S2WVjADQAAAAAAAAAABmI6Uxp27AmZdgfKata/Rj4zyXtuiLdMRREREcnnD2osWaaaeyG1wyy3VyaAEtGjE4anE0aXI9/bHc3gOXxWHnDXppq74nnDUvc4sdZhdY40b+6eKid8buIs0AKYAAAAAAAAJGXUdPGW/a18N/kjpmUR/wC+n1RV/jMuh0IDzugAAADXeo6yzVHOmY8Ycs61ydcaVVd8unGnJgB1SAAAAAAAAJeV1dHHUa9useMSiPVqvoVxNPZMT4Mo6seLVyLlqKqeExq9vO6AAAAMTMRE69jk5nWZ9e7oM0vdThJ51+bHvc+68cTkAOiQAAAAAAAAAFrk2K0maLk8d6fouHJ01TTVE0zvE6++HS4O95Rh6aucb97jnPasa3gIUMMq7OMR1ViKaZ3r293a2TdLVbmOK8pxE6T5tO0fVFB3k05gDQAAAAAAAAAAXuS/ov5T8lHTTNdURTE6zydHgLHk+GimrjxnvlHJ02dpIDisUme/qKPZ+a7VmcYabtNNVEejtOnHRWF/WZdKUB3QAAAAAAAAERrOyxwmV1XNJv7Ry/dP0WtjC0WI/Cpjv4z4oucjZFHZy67d4U6e1t902zk8R+dXM+qnaFsIudV4xpsYajDx+FTEf63AhoAAACLiMDbvz51O/OnaUC9k8x+TXH8tvjC5FTKxmo5i9g7lj06J743jxaXWoeIy+3f4xpPOnZc5PrPFzwl4vAV4bfjTzj5oi5dpAGgusswHVxFd6POneIn9n3Qsqw3XYjWqNqN++ex0Dnnl6VIAOSgAAAAAAAAAAAGJjWJ17VFmeB8nnpWY82f6T9F88XKIuUTFXCY0bLplm3KjZiLM2b9VMxrpPjykd0LvKLfQwcT/ANTNSc1YenoWKI5UxHwbXC9ugAwAAAAAAAAAAAAAAU+d2+jcoqp7Y08BMzK11tmI5VfKRUrNJccIZBLQAAAAAAAAAAAAAAAGKgAf/9k='}}
              style= {{width: 75, height: 75, borderRadius: 37.5}}/>
            </View>
            <View style= {{ flex: 3}}>
              <View style= {{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style= {{alignItems: 'center'}}>
                  <Text>3</Text>
                  <Text style= {{fontSize: 10, color: 'grey'}}>posts</Text>
                </View>
                <View>
                  <Text>60</Text>
                  <Text style= {{fontSize: 10, color: 'grey'}}>followers</Text>
                </View>
                <View>
                  <Text>80</Text>
                  <Text style= {{fontSize: 10, color: 'grey'}}>followings</Text>
                </View>
              </View>
              <View style= {{flexDirection: 'row', paddingTop: 10}}>
                <Button bordered dark style= {{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30}}>
                  <Text>Edit Profile</Text>
                </Button>
                <Button bordered dark style= {{ flex: 1, height: 30, marginRight: 10, marginLeft: 5, justifyContent: 'center' }}>
                  <Ionicons name="ios-settings" style= {{ fontSize: 18 }}/>
                </Button>
              </View>
            </View>
          </View>
          <View style= {{paddingVertical: 10, paddingHorizontal: 10}}>
            {this.renderUsers()}
          </View>
          <View>
            <View style= {{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
              <Ionicons name="ios-apps-outline" style= {{ fontSize: 25 }}/>
              <Ionicons name="ios-list-outline" style= {{ fontSize: 25 }}/>
              <Ionicons name="ios-people-outline" style= {{ fontSize: 25 }}/>
              <Ionicons name="ios-bookmark-outline" style= {{ fontSize: 25 }}/>
            </View>
          </View>
        </View>
      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  //       <Text>Profile Screen</Text>
  //     </View>
  //   );
  // }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

function mapStateToProps(state) {
  return { users: state.users };
}
export default connect(mapStateToProps, { fetchUsers })(ProfileScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
