import React, { useState } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  Platform, KeyboardAvoidingView, ScrollView 
} from 'react-native';
import { Mail, Phone, Lock, Eye, EyeOff, ChevronLeft, ArrowRight } from 'lucide-react-native';
import { COLORS } from '../constants/Colors'; // Using your official brand colors

const AuthScreen = ({ onBack }) => {
  const [loginMethod, setLoginMethod] = useState('email');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.mainContainer}>
      {/* Brand Decor - Background Circles */}
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <TouchableOpacity style={styles.backBtn} onPress={onBack}>
            <ChevronLeft color={COLORS.primary || '#3B82F6'} size={22} />
            <Text style={styles.backText}>Back to Home</Text>
          </TouchableOpacity>

          {/* Container with Blue Highlight Outline */}
          <View style={styles.mainCard}>
            
            {/* Left Side: Theme-Based Branding */}
            {Platform.OS === 'web' && (
              <View style={styles.infoSection}>
                <Text style={styles.infoTag}>STAFFPE CORE</Text>
                <Text style={styles.infoTitle}>Manage your team like a Pro</Text>
                <Text style={styles.infoSub}>Everything you need to automate your workforce, now in one place.</Text>
                
                <View style={styles.featureList}>
                  <Text style={styles.fItem}>✓ Secure & Encrypted</Text>
                  <Text style={styles.fItem}>✓ Cloud Sync Enabled</Text>
                </View>
              </View>
            )}

            {/* Right Side: Login Form */}
            <View style={styles.formSection}>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.subText}>Login using your registered details</Text>

              {/* Toggle Switch - Now in Brand Blue */}
              <View style={styles.methodToggle}>
                <TouchableOpacity 
                  onPress={() => setLoginMethod('email')}
                  style={[styles.mBtn, loginMethod === 'email' && styles.mBtnActive]}
                >
                  <Text style={[styles.mText, loginMethod === 'email' && styles.mTextActive]}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => setLoginMethod('phone')}
                  style={[styles.mBtn, loginMethod === 'phone' && styles.mBtnActive]}
                >
                  <Text style={[styles.mText, loginMethod === 'phone' && styles.mTextActive]}>Phone</Text>
                </TouchableOpacity>
              </View>

              {/* Input Fields with Theme Outline */}
              <View style={styles.inputGroup}>
                <Text style={styles.fieldLabel}>{loginMethod === 'email' ? 'Work Email' : 'Phone Number'}</Text>
                <View style={styles.fieldBox}>
                  <TextInput 
                    placeholder={loginMethod === 'email' ? "name@company.com" : "10-digit number"}
                    style={styles.inputStyle}
                    placeholderTextColor="#94A3B8"
                  />
                </View>
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.fieldLabel}>Security Password</Text>
                <View style={styles.fieldBox}>
                  <TextInput 
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    style={styles.inputStyle}
                    placeholderTextColor="#94A3B8"
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={18} color="#64748B" /> : <Eye size={18} color="#64748B" />}
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.forgotLink}>
                <Text style={styles.forgotLabel}>Forgot Password?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionBtn}>
                <Text style={styles.actionBtnText}>Login Now</Text>
                <ArrowRight size={18} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#F8FAFC' },
  scrollContent: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  
  // Decorative Circles in Brand Colors
  circle: { position: 'absolute', borderRadius: 999, zIndex: -1 },
  circle1: { width: 400, height: 400, top: -100, right: -50, backgroundColor: 'rgba(59, 130, 246, 0.08)' },
  circle2: { width: 300, height: 300, bottom: -50, left: -50, backgroundColor: 'rgba(168, 85, 247, 0.05)' },

  backBtn: { position: 'absolute', top: 40, left: 20, flexDirection: 'row', alignItems: 'center' },
  backText: { fontWeight: '700', color: COLORS.primary || '#3B82F6', marginLeft: 5 },

  // Container with Highlight Blue Outline
  mainCard: { 
    width: '100%', 
    maxWidth: 900, 
    backgroundColor: '#FFF', 
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.primary || '#3B82F6', // Blue highlight as per theme
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 15
  },

  infoSection: { flex: 1, padding: 45, backgroundColor: '#F1F5F9', justifyContent: 'center' },
  infoTag: { fontSize: 11, fontWeight: '800', color: COLORS.primary || '#3B82F6', letterSpacing: 1.5, marginBottom: 12 },
  infoTitle: { fontSize: 28, fontWeight: '900', color: '#1E293B', marginBottom: 15 },
  infoSub: { fontSize: 15, color: '#64748B', lineHeight: 22 },
  featureList: { marginTop: 25, gap: 10 },
  fItem: { fontWeight: '700', color: '#475569', fontSize: 14 },

  formSection: { flex: 1.2, padding: 45, backgroundColor: '#FFF' },
  welcomeText: { fontSize: 24, fontWeight: '800', color: '#1E293B' },
  subText: { color: '#94A3B8', marginTop: 5, marginBottom: 35 },

  // Theme-Sync Toggle
  methodToggle: { flexDirection: 'row', backgroundColor: '#F1F5F9', borderRadius: 12, padding: 4, marginBottom: 30 },
  mBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  mBtnActive: { backgroundColor: COLORS.primary || '#3B82F6' }, // Blue instead of Black
  mText: { fontWeight: '700', color: '#64748B' },
  mTextActive: { color: '#FFF' },

  inputGroup: { marginBottom: 20 },
  fieldLabel: { fontSize: 13, fontWeight: '700', color: '#1E293B', marginBottom: 8 },
  fieldBox: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#E2E8F0', borderRadius: 12, paddingHorizontal: 15, height: 52 },
  inputStyle: { flex: 1, fontSize: 14, color: '#1E293B' },

  forgotLink: { alignSelf: 'flex-end', marginBottom: 30 },
  forgotLabel: { color: COLORS.primary || '#3B82F6', fontWeight: '800' },

  actionBtn: { backgroundColor: COLORS.primary || '#3B82F6', height: 56, borderRadius: 12, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  actionBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});

export default AuthScreen;