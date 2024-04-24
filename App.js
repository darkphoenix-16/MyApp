import { Text, View } from 'react-native';
import { Oldui } from './Screens/oldui';
import { Login } from './Screens/login';

export default function App() {
  return (
    <View style={{flex :1}}>
      {/* <Oldui/> */}
      <Login/>
    </View>
  );
}

