import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '../constants/Colors';

const Contact = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.badge}>CONTACT US</Text>
      <Text style={styles.mainHeading}>Transform Your Workforce.{"\n"}Let's Get Started!</Text>

      <View style={styles.container}>
        {/* Left Side: Form */}
        <View style={styles.formContainer}>
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>First Name *</Text>
              <TextInput style={styles.input} placeholder="Ex. Nitin" placeholderTextColor="#94a3b8" />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Last Name *</Text>
              <TextInput style={styles.input} placeholder="Ex. Shukla" placeholderTextColor="#94a3b8" />
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Business Email *</Text>
              <TextInput style={styles.input} placeholder="example@gmail.com" keyboardType="email-address" placeholderTextColor="#94a3b8" />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Phone Number *</Text>
              <TextInput style={styles.input} placeholder="Enter Phone Number" keyboardType="phone-pad" placeholderTextColor="#94a3b8" />
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

        {/* Right Side: Contact Info (Dark Blue Card) */}
        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>StaffPe Office</Text>
          <Text style={styles.infoText}>606/607/608,A-Wing,River Palace,
Opp Ramji Mandir, Near Bahumali Bhavan,{"\n"}
Navdi Owara,Nanpura,{"\n"}Surat-395001.</Text>

          <Text style={styles.infoLabel}>Contact</Text>
          <Text style={styles.infoText}>Phone: +91-99247 83883{"\n"}Email: info@iisdigital.com</Text>

          <Text style={styles.infoLabel}>Business Hours</Text>
          <Text style={styles.infoText}>Monday - Friday : 10:00 - 18:00{"\n"}Saturday - Sunday : Closed</Text>
          
          {/* Social Icons Removed as requested */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { paddingVertical: 80, backgroundColor: COLORS.background, alignItems: 'center', paddingHorizontal: 20 },
  badge: { fontSize: 14, fontWeight: 'bold', color: COLORS.primary, letterSpacing: 2, marginBottom: 15 },
  mainHeading: { fontSize: Platform.OS === 'web' ? 42 : 28, fontWeight: '800', textAlign: 'center', color: COLORS.textMain, marginBottom: 50 },
  container: { width: '100%', maxWidth: 1100, flexDirection: Platform.OS === 'web' ? 'row' : 'column', backgroundColor: COLORS.white, borderRadius: 30, overflow: 'hidden', borderWidth: 1, borderColor: COLORS.border },
  formContainer: { flex: 1.5, padding: Platform.OS === 'web' ? 50 : 25 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap' },
  inputGroup: { width: Platform.OS === 'web' ? '48%' : '100%', marginBottom: 15 },
  inputGroupFull: { width: '100%', marginBottom: 25 },
  label: { fontSize: 14, fontWeight: 'bold', color: COLORS.textMain, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: COLORS.border, borderRadius: 10, padding: 15, fontSize: 16, backgroundColor: '#fcfdff', color: COLORS.textMain },
  textArea: { height: 120, textAlignVertical: 'top' },
  sendBtn: { backgroundColor: COLORS.primary, paddingVertical: 18, borderRadius: 12, alignItems: 'center' },
  sendBtnText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
  infoCard: { flex: 1, backgroundColor: '#002E5D', padding: 40, justifyContent: 'center' }, // Clean dark blue
  infoTitle: { color: COLORS.white, fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  infoLabel: { color: COLORS.primary, fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 10 },
  infoText: { color: '#cbd5e1', fontSize: 16, lineHeight: 24 },
});

export default Contact;