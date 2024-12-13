import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useTheme } from '../context/ThemeContext';
import { loginScreenStyles as styles } from '../styles/components/loginScreen.styles';
import { colors } from '../theme/colors';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export const LoginScreen: React.FC = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      // TODO: Implement actual Garmin authentication
      // For now, just simulate a delay and navigate
      await new Promise(resolve => setTimeout(resolve, 1500));
      navigation.replace('Home');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles(theme).container}
    >
      <View style={styles(theme).content}>
        <Text style={styles(theme).title}>Activity Tracker</Text>
        <Text style={styles(theme).subtitle}>Sign in with your Garmin account</Text>

        <View style={styles(theme).form}>
          <TextInput
            style={styles(theme).input}
            placeholder="Email"
            placeholderTextColor={colors[theme].text.secondary}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            style={styles(theme).input}
            placeholder="Password"
            placeholderTextColor={colors[theme].text.secondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {error && <Text style={styles(theme).errorText}>{error}</Text>}

          <TouchableOpacity 
            style={styles(theme).button}
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles(theme).buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};