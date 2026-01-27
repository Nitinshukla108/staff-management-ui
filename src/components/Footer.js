import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '../constants/Colors';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View style={styles.footerContainer}>
      <View style={styles.mainContent}>
        
        {/* Company Info */}
        <View style={styles.section}>
          <Text style={styles.brandLogo}>Staff<Text style={{color: COLORS.textMain}}>Pe</Text></Text>
          <Text style={styles.brandDesc}>
            Simplifying staff management and payroll automation for businesses across India. 
            We help you scale efficiently with smart, automated solutions.
          </Text>
        </View>

        {/* Quick Links */}
        <View style={styles.linksSection}>
          <Text style={styles.heading}>Quick Links</Text>
          <TouchableOpacity><Text style={styles.link}>About Us</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Our Features</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Request Demo</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Careers</Text></TouchableOpacity>
        </View>

        {/* Our Services */}
        <View style={styles.linksSection}>
          <Text style={styles.heading}>Our Services</Text>
          <TouchableOpacity><Text style={styles.link}>Attendance Tracking</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Automated Payroll</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Performance Analytics</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.link}>Staff Compliance</Text></TouchableOpacity>
        </View>

        {/* Contact Us */}
        <View style={styles.linksSection}>
          <Text style={styles.heading}>Contact Us</Text>
          <Text style={styles.contactText}>📍 606/607/608,A-Wing,River Palace,
Opp Ramji Mandir, Near Bahumali Bhavan,
Navdi Owara,Nanpura,
Surat-395001.</Text>
          <Text style={styles.contactText}>📧 info@iisdigital.com</Text>
          <Text style={styles.contactText}>📞 +91-99247 83883</Text>
        </View>

      </View>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.copyrightText}>
          © {currentYear} StaffPe. All rights reserved.
        </Text>
        <View style={styles.legalLinks}>
          <TouchableOpacity><Text style={styles.legalText}>Terms of Service</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.legalText}>Privacy Policy</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.legalText}>Cookie Policy</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 60,
    width: '100%',
  },
  mainContent: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    justifyContent: 'space-between',
    paddingHorizontal: Platform.OS === 'web' ? '8%' : 20,
    flexWrap: 'wrap',
    marginBottom: 40,
  },
  section: {
    width: Platform.OS === 'web' ? '25%' : '100%',
    marginBottom: 30,
  },
  linksSection: {
    width: Platform.OS === 'web' ? '20%' : '100%',
    marginBottom: 30,
  },
  brandLogo: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.primary,
    marginBottom: 20,
  },
  brandDesc: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textMain,
    marginBottom: 20,
  },
  link: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginBottom: 12,
  },
  contactText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginBottom: 12,
    lineHeight: 20,
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingVertical: 25,
    flexDirection: Platform.OS === 'web' ? 'row' : 'column-reverse',
    justifyContent: 'space-between',
    paddingHorizontal: Platform.OS === 'web' ? '8%' : 20,
    alignItems: 'center',
  },
  copyrightText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  legalLinks: {
    flexDirection: 'row',
    marginBottom: Platform.OS === 'web' ? 0 : 15,
  },
  legalText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginLeft: 20,
  },
});

export default Footer;