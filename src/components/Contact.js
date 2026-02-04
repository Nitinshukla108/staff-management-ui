import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

const Contact = () => {
  // Real-time window width detection
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  return (
    <View style={[styles.section, { paddingVertical: isMobile ? 60 : 100 }]}>
      <Text style={styles.badge}>CONTACT US</Text>
      <Text style={[styles.mainHeading, { fontSize: isMobile ? 28 : 42 }]}>
        Transform Your Workforce.{"\n"}Let's Get Started!
      </Text>

      {/* Main Container Card */}
      <View style={[
        styles.container, 
        { flexDirection: isMobile ? 'column' : 'row' }
      ]}>
        
        {/* Left Side: Form Area */}
        <View style={[
          styles.formContainer, 
          { width: isMobile ? '100%' : '60%', padding: isMobile ? 25 : 50 }
        ]}>
          
          {/* First & Last Name Row */}
          <View style={[
            styles.inputRow, 
            { flexDirection: isMobile ? 'column' : 'row' }
          ]}>
            <View style={[styles.inputGroup, { width: isMobile ? '100%' : '48%' }]}>
              <Text style={styles.label}>First Name *</Text>
              <TextInput style={styles.input} placeholder="Ex. Nitin" placeholderTextColor="#94a3b8" />
            </View>
            <View style={[styles.inputGroup, { width: isMobile ? '100%' : '48%' }]}>
              <Text style={styles.label}>Last Name *</Text>
              <TextInput style={styles.input} placeholder="Ex. Shukla" placeholderTextColor="#94a3b8" />
            </View>
          </View>

          {/* Email & Phone Row */}
          <View style={[
            styles.inputRow, 
            { flexDirection: isMobile ? 'column' : 'row' }
          ]}>
            <View style={[styles.inputGroup, { width: isMobile ? '100%' : '48%' }]}>
              <Text style={styles.label}>Business Email *</Text>
              <TextInput 
                style={styles.input} 
                placeholder="example@gmail.com" 
                keyboardType="email-address" 
                placeholderTextColor="#94a3b8" 
              />
            </View>
            <View style={[styles.inputGroup, { width: isMobile ? '100%' : '48%' }]}>
              <Text style={styles.label}>Phone Number *</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Enter Phone Number" 
                keyboardType="phone-pad" 
                placeholderTextColor="#94a3b8" 
              />
            </View>
          </View>

          <View style={styles.inputGroupFull}>
            <Text style={styles.label}>Your Message *</Text>
            <TextInput 
              style={[styles.input, styles.textArea]} 
              placeholder="Tell us about your business needs..." 
              multiline 
              numberOfLines={4}
              placeholderTextColor="#94a3b8" 
            />
          </View>

          <TouchableOpacity style={styles.sendBtn}>
            <Text style={styles.sendBtnText}>Request a Quote / Demo</Text>
          </TouchableOpacity>
        </View>

        {/* Right Side: Info Card (Dark Blue) */}
        <View style={[
          styles.infoCard, 
          { width: isMobile ? '100%' : '40%', padding: isMobile ? 30 : 50 }
        ]}>
          <Text style={styles.infoTitle}>StaffPe Office</Text>
          <Text style={styles.infoText}>
            606/607/608, A-Wing, River Palace,{"\n"}
            Nanpura, Surat-395001.
          </Text>

          <Text style={styles.infoLabel}>Contact</Text>
          <Text style={styles.infoText}>
            Phone: +91-99247 83883{"\n"}
            Email: info@iisdigital.com
          </Text>

          <Text style={styles.infoLabel}>Business Hours</Text>
          <Text style={styles.infoText}>
            Monday - Friday : 10:00 - 18:00
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { 
    backgroundColor: '#F8FAFC', 
    alignItems: 'center', 
    paddingHorizontal: 20,
    width: '100%' 
  },
  badge: { fontSize: 13, fontWeight: 'bold', color: '#3B82F6', letterSpacing: 2, marginBottom: 15 },
  mainHeading: { 
    fontWeight: '900', 
    textAlign: 'center', 
    color: '#1E293B', 
    marginBottom: 50,
    width: '100%',
    lineHeight: Platform.OS === 'web' ? 52 : 36
  },
  container: { 
    width: '100%', 
    maxWidth: 1100, 
    backgroundColor: '#FFF', 
    borderRadius: 30, 
    overflow: 'hidden', 
    borderWidth: 1, 
    borderColor: '#E2E8F0',
    ...Platform.select({
      ios: { shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 20 },
      android: { elevation: 10 },
      web: { boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }
    })
  },
  formContainer: {
    backgroundColor: '#FFF'
  },
  inputRow: { 
    justifyContent: 'space-between', 
    width: '100%',
    flexWrap: 'wrap' // Prevents overflow
  },
  inputGroup: { 
    marginBottom: 20,
    flexShrink: 0
  },
  inputGroupFull: { width: '100%', marginBottom: 25 },
  label: { fontSize: 14, fontWeight: '700', color: '#1E293B', marginBottom: 8 },
  input: { 
    borderWidth: 1.5, 
    borderColor: '#E2E8F0', 
    borderRadius: 12, 
    padding: 15, 
    fontSize: 16, 
    backgroundColor: '#fcfdff', 
    color: '#1E293B',
    width: '100%'
  },
  textArea: { height: 120, textAlignVertical: 'top' },
  sendBtn: { 
    backgroundColor: '#3B82F6', 
    paddingVertical: 18, 
    borderRadius: 12, 
    alignItems: 'center',
    shadowColor: '#3B82F6',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5
  },
  sendBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  
  infoCard: { 
    backgroundColor: '#002E5D', 
    justifyContent: 'center',
    minHeight: 350
  },
  infoTitle: { color: '#FFF', fontSize: 26, fontWeight: '900', marginBottom: 20 },
  infoLabel: { color: '#3B82F6', fontSize: 16, fontWeight: '800', marginTop: 30, marginBottom: 8, textTransform: 'uppercase' },
  infoText: { color: '#cbd5e1', fontSize: 16, lineHeight: 26 },
});

export default Contact;