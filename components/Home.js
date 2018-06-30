import React from 'react'
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
export default class Home extends React.Component{
    render(){     
        return(
           <View style={style.container}>
               <Text>Hi</Text>
           </View>
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
  