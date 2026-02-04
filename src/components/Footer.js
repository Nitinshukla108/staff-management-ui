import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

const Footer = ({ scrollToSection }) => { 
  const currentYear = new Date().getFullYear();
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  return (
    <View style={styles.footerContainer}>
      <View style={styles.decorativeLine} />

      <View style={[
        styles.mainContent, 
        { flexDirection: isMobile ? 'column' : 'row' }
      ]}>
        
        {/* Company Info */}
        <View style={[styles.section, { width: isMobile ? '100%' : '30%' }]}>
          <Text style={styles.brandLogo}>Staff<Text style={{color: '#1E293B'}}>Pe</Text></Text>
          <Text style={styles.brandDesc}>
            Simplifying staff management and payroll automation for businesses across India. 
            We help you scale efficiently with smart, automated solutions.
          </Text>
        </View>

        {/* Links Wrapper for Mobile (to group links better) */}
        <View style={[
          styles.linksContainer, 
          { flexDirection: isMobile ? 'column' : 'row', width: isMobile ? '100%' : '65%' }
        ]}>
          
          {/* Quick Links */}
          <View style={[styles.linksSection, { width: isMobile ? '100%' : '33%' }]}>
            <Text style={styles.heading}>Quick Links</Text>
            <TouchableOpacity onPress={() => scrollToSection('features')}>
              <Text style={styles.link}>Our Features</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToSection('whatwedo')}>
              <Text style={styles.link}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => scrollToSection('pricing')}>
              <Text style={styles.link}>Pricing Plans</Text>
            </TouchableOpacity>
          </View>

          {/* Our Services */}
          <View style={[styles.linksSection, { width: isMobile ? '100%' : '33%' }]}>
            <Text style={styles.heading}>Our Services</Text>
            <TouchableOpacity><Text style={styles.link}>Attendance Tracking</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Automated Payroll</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.link}>Staff Compliance</Text></TouchableOpacity>
          </View>

          {/* Contact Us */}
          <View style={[styles.linksSection, { width: isMobile ? '100%' : '33%' }]}>
            <Text style={styles.heading}>Contact Us</Text>
            <Text style={styles.contactText}>📍 Surat, Gujarat-395001.</Text>
            <Text style={styles.contactText}>📧 info@iisdigital.com</Text>
            <Text style={styles.contactText}>📞 +91-99247 83883</Text>
          </View>

        </View>
      </View>

      {/* Bottom Bar */}
      <View style={[
        styles.bottomBar, 
        { flexDirection: isMobile ? 'column-reverse' : 'row', gap: isMobile ? 15 : 0 }
      ]}>
        <Text style={styles.copyrightText}>
          © {currentYear} StaffPe. All rights reserved.
        </Text>
        <View style={[styles.legalLinks]}>
          <TouchableOpacity><Text style={styles.legalText}>Terms</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.legalText}>Privacy</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.legalText}>Cookies</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: '#F8FAFC', 
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingTop: 60,
    width: '100%',
  },
  decorativeLine: {
    position: 'absolute',
    top: 0,
    left: '10%',
    right: '10%',
    height: 4,
    backgroundColor: COLORS.primary || '#3B82F6',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  mainContent: {
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    marginBottom: 40,
  },
  linksContainer: {
    justifyContent: 'space-between',
  },
  section: {
    marginBottom: 40,
  },
  linksSection: {
    marginBottom: 35,
  },
  brandLogo: {
    fontSize: 28,
    fontWeight: '900',
    color: COLORS.primary || '#3B82F6',
    marginBottom: 20,
  },
  brandDesc: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 24,
    maxWidth: 400,
  },
  heading: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E293B',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  link: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 14,
    fontWeight: '500',
  },
  contactText: {
    fontSize: 15,
    color: '#64748B',
    marginBottom: 12,
    lineHeight: 22,
  },
  bottomBar: {
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingVertical: 30,
    justifyContent: 'space-between',
    paddingHorizontal: '8%',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  copyrightText: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
  },
  legalLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  legalText: {
    fontSize: 14,
    color: '#94A3B8',
    marginHorizontal: 12,
  },
});

export default Footer;