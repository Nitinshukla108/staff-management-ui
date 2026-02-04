import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, Text, View, TextInput, TouchableOpacity, 
  Platform, KeyboardAvoidingView, ScrollView, useWindowDimensions 
} from 'react-native';
import { Eye, EyeOff, ChevronLeft, ArrowRight } from 'lucide-react-native';
import { COLORS } from '../constants/Colors';

const AuthScreen = ({ onBack }) => {
  const [loginMethod, setLoginMethod] = useState('email');
  const [showPassword, setShowPassword] = useState(false);
  const { width: windowWidth } = useWindowDimensions();

  const isMobile = windowWidth < 768;

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.circle, styles.circle1]} />
      <View style={[styles.circle, styles.circle2]} />

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* BACK BUTTON: Dynamic alignment */}
          <View style={[styles.backButtonWrapper, isMobile && { paddingLeft: 10 }]}>
            <TouchableOpacity style={styles.backBtnAction} onPress={onBack}>
              <ChevronLeft color={COLORS.primary || '#3B82F6'} size={24} />
              <Text style={styles.backBtnText}>Back to Home</Text>
            </TouchableOpacity>
          </View>

          {/* Main Container Card */}
          <View style={[
            styles.mainCard, 
            { flexDirection: isMobile ? 'column' : 'row' }
          ]}>
            
            {/* Left/Top Branding Section */}
            <View style={[
              styles.infoSection, 
              { 
                padding: isMobile ? 25 : 45,
                width: isMobile ? '100%' : '40%' 
              }
            ]}>
              <Text style={styles.infoTag}>STAFFPE CORE</Text>
              <Text style={[
                styles.infoTitle, 
                { 
                  fontSize: isMobile ? 24 : 32,
                  lineHeight: isMobile ? 32 : 42,
                  marginBottom: isMobile ? 5 : 15 
                }
              ]}>
                Manage your team like a Pro
              </Text>
              {!isMobile && (
                <Text style={styles.infoSub}>Everything you need to automate your workforce, now in one place.</Text>
              )}
            </View>

            {/* Right/Bottom Form Section */}
            <View style={[
              styles.formSection, 
              { 
                padding: isMobile ? 25 : 45,
                width: isMobile ? '100%' : '60%' 
              }
            ]}>
              <Text style={[styles.welcomeText, { fontSize: isMobile ? 22 : 26 }]}>Welcome Back</Text>
              <Text style={styles.subText}>Login using your registered details</Text>

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
                    placeholder="Enter password"
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
  scrollContent: { 
    flexGrow: 1, 
    paddingHorizontal: 15, 
    paddingVertical: 40, 
    alignItems: 'center' 
  },
  backButtonWrapper: {
    width: '100%',
    maxWidth: 900,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  backBtnAction: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  backBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary || '#3B82F6',
    marginLeft: 5,
  },
  circle: { position: 'absolute', borderRadius: 999, zIndex: -1 },
  circle1: { width: 400, height: 400, top: -100, right: -50, backgroundColor: 'rgba(59, 130, 246, 0.08)' },
  circle2: { width: 300, height: 300, bottom: -50, left: -50, backgroundColor: 'rgba(168, 85, 247, 0.05)' },
  mainCard: { 
    width: '100%', 
    maxWidth: 1000, 
    backgroundColor: '#FFF', 
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    ...Platform.select({
      web: { boxShadow: '0 20px 50px rgba(0,0,0,0.1)' },
      default: { elevation: 10 }
    })
  },
  infoSection: { backgroundColor: '#F1F5F9', justifyContent: 'center' },
  infoTag: { fontSize: 11, fontWeight: '800', color: COLORS.primary || '#3B82F6', letterSpacing: 1.5, marginBottom: 12 },
  infoTitle: { fontWeight: '900', color: '#1E293B' },
  infoSub: { fontSize: 15, color: '#64748B', lineHeight: 22 },
  formSection: { backgroundColor: '#FFF' },
  welcomeText: { fontWeight: '800', color: '#1E293B' },
  subText: { color: '#94A3B8', marginTop: 5, marginBottom: 35 },
  methodToggle: { flexDirection: 'row', backgroundColor: '#F1F5F9', borderRadius: 12, padding: 4, marginBottom: 30 },
  mBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 10 },
  mBtnActive: { backgroundColor: COLORS.primary || '#3B82F6' },
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