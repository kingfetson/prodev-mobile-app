// app/signin.tsx
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { useAuth } from '@/hooks/useAuth'; // Adjust the import path as necessary
// import spacing from a different file or define it locally if needed

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      await signIn(email, password);
      router.replace('/');
    } catch (error) {
      const errorMessage = (error instanceof Error && error.message) ? error.message : 'An unknown error occurred';
      Alert.alert('Sign In Failed', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    // Implement Google sign-in logic
    Alert.alert('Coming Soon', 'Google sign-in will be available soon');
  };

  const handleFacebookSignIn = async () => {
    // Implement Facebook sign-in logic
    Alert.alert('Coming Soon', 'Facebook sign-in will be available soon');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/images/Logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={Colors.gray}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={Colors.gray}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={handleSignIn}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Signing In...' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        <View style={styles.socialButtons}>
          <TouchableOpacity 
            style={[styles.socialButton, styles.googleButton]}
            onPress={handleGoogleSignIn}
          >
            <Image 
              source={require('../assets/images/google.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.socialButton, styles.facebookButton]}
            onPress={handleFacebookSignIn}
          >
            <Image 
              source={require('../assets/images/facebook.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account?</Text>
        <Link href="/join" asChild>
          <TouchableOpacity>
            <Text style={styles.footerLink}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: spacing.large,
    backgroundColor: Colors.background,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xxlarge,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: spacing.medium,
  },
  title: {
    ...typography.heading2,
    color: Colors.primary,
    marginBottom: spacing.small,
  },
  subtitle: {
    ...typography.body,
    color: Colors.gray,
  },
  form: {
    width: '100%',
  },
  input: {
    ...typography.body,
    backgroundColor: Colors.white,
    padding: spacing.medium,
    borderRadius: spacing.small,
    marginBottom: spacing.medium,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: spacing.large,
  },
  forgotPasswordText: {
    ...typography.small,
    color: Colors.primary,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: spacing.medium,
    borderRadius: spacing.small,
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    ...typography.button,
    color: Colors.white,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.large,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.lightGray,
  },
  dividerText: {
    ...typography.small,
    color: colors.gray,
    paddingHorizontal: spacing.small,
  },
  socialButtons: {
    gap: spacing.medium,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.medium,
    borderRadius: spacing.small,
  },
  googleButton: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  facebookButton: {
    backgroundColor: '#1877F2',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: spacing.small,
  },
  socialButtonText: {
    ...typography.button,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xxlarge,
  },
  footerText: {
    ...typography.body,
    color: Colors.gray,
  },
  footerLink: {
    ...typography.body,
    color: Colors.primary,
    marginLeft: spacing.small,
    fontWeight: 'bold',
  },
});

function useAuth(): { signIn: any; } {
    throw new Error('Function not implemented.');
}
