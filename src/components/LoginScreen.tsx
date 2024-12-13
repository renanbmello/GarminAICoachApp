import { useState } from 'react';
import { View, Text, TextInput, Button,  } from 'react-native';
import { loginScreenStyles as styles } from '../styles/components/loginScreen.styles';


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}