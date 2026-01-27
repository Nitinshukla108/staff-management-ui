import React, { useState, useEffect, useRef } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  Dimensions, Platform, Animated 
} from 'react-native';
import { COLORS } from '../constants/Colors';

const { width } = Dimensions.get('window');

const THOUGHTS = [
  "Effortless Staff Management at your fingertips.",
  "Automate Payroll and focus on growing your business.",
  "Real-time attendance tracking with 99.9% accuracy.",
  "Simplify your workspace with StaffPe's smart tools.",
  "Performance insights that drive better decisions."
];

const AuthScreen = ({ onBack }) => {
  const [index, setIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 0, duration: 500, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 500, delay: 100, useNativeDriver: true }),
      ]).start(() => setIndex((prev) => (prev + 1) % THOUGHTS.length));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.mainWrapper}>
      {/* Back Button - Fixed for Mobile & Web */}
      <TouchableOpacity style={styles.fixedBackBtn} onPress={onBack}>
        <Text style={styles.backText}>← Back to Website</Text>
      </TouchableOpacity>

      <View style={styles.centerContainer}>
        {/* Floating Auth Card */}
        <View style={styles.authModal}>
          
          {/* Left Side: Thoughts (Hidden on small mobile screens for better fit) */}
          {width > 768 && (
            <View style={styles.leftPanel}>
              <Text style={styles.brandTitle}>StaffPe</Text>
              <View style={styles.thoughtBox}>
                <Animated.Text style={[styles.thoughtText, { opacity: fadeAnim }]}>
                  {THOUGHTS[index]}
                </Animated.Text>
              </View>
            </View>
          )}

          {/* Right Side: Form */}
          <View style={styles.rightPanel}>
            <Text style={styles.formTitle}>Create an account</Text>
            <Text style={styles.formSub}>Already have an account? <Text style={styles.link}>Sign in</Text></Text>

            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="#94a3b8" />
              <TextInput style={styles.input} placeholder="E-mail address" placeholderTextColor="#94a3b8" />
              <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#94a3b8" />
            </View>

            <TouchableOpacity style={styles.primaryBtn}>
              <Text style={styles.primaryBtnText}>Sign Up</Text>
            </TouchableOpacity>

            <View style={styles.orSection}>
              <View style={styles.line} /><Text style={styles.orLabel}>or</Text><View style={styles.line} />
            </View>

            <View style={styles.socialGrid}>
              <TouchableOpacity style={styles.socialTab}><Text style={styles.socialLabel}>Github</Text></TouchableOpacity>
              <TouchableOpacity style={styles.socialTab}><Text style={styles.socialLabel}>Google</Text></TouchableOpacity>
            </View>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#E2E8F0', // Light gray background to make the center card pop
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixedBackBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 100,
    backgroundColor: COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  backText: { color: '#fff', fontWeight: 'bold', fontSize: 14 },
  centerContainer: {
    width: '95%',
    maxWidth: 1000,
    height: Platform.OS === 'web' ? 600 : 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  authModal: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    overflow: 'hidden',
    width: '100%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.15,
    shadowRadius: 30,
    elevation: 20,
  },
  leftPanel: {
    flex: 1,
    backgroundColor: COLORS.primary,
    padding: 50,
    justifyContent: 'center',
  },
  brandTitle: { fontSize: 22, fontWeight: 'bold', color: '#fff', position: 'absolute', top: 40, left: 40 },
  thoughtBox: { marginTop: 20 },
  thoughtText: { fontSize: 36, fontWeight: '800', color: '#fff', lineHeight: 48 },
  
  rightPanel: {
    flex: 1,
    padding: Platform.OS === 'web' ? 50 : 30,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  formTitle: { fontSize: 26, fontWeight: 'bold', color: '#1e293b', marginBottom: 8 },
  formSub: { fontSize: 14, color: '#64748b', marginBottom: 30 },
  link: { color: COLORS.primary, fontWeight: 'bold' },
  inputContainer: { marginBottom: 20 },
  input: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#000'
  },
  primaryBtn: {
    backgroundColor: '#10B981',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  primaryBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  orSection: { flexDirection: 'row', alignItems: 'center', marginVertical: 25 },
  line: { flex: 1, height: 1, backgroundColor: '#E2E8F0' },
  orLabel: { marginHorizontal: 10, color: '#94a3b8', fontSize: 12 },
  socialGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  socialTab: {
    flex: 0.48,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  socialLabel: { fontWeight: '600', color: '#1e293b' }
});

export default AuthScreen;