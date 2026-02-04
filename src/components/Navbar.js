import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

const Navbar = ({ onLoginPress, onFeaturesPress, onWhatWeDoPress, onPricingPress, onContactPress }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  // Real-time window track karne ke liye hook
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  const navLinks = [
    { name: 'Features', press: onFeaturesPress },
    { name: 'About', press: onWhatWeDoPress },
    { name: 'Pricing', press: onPricingPress },
    { name: 'Contact', press: onContactPress }
  ];

  return (
    <View style={[styles.navWrapper, Platform.OS === 'web' && { position: 'fixed' }]}>
      <View style={[
        styles.navbarContainer, 
        { 
          width: isMobile ? '92%' : '85%',
          // Mobile par padding kam ki hai taaki logo/button overlap na ho
          paddingHorizontal: isMobile ? 15 : 30,
        }
      ]}>
        
        {/* Logo Section - Responsive Font Size */}
        <TouchableOpacity activeOpacity={0.8} style={styles.logoSection}>
          <Text style={[styles.logoText, { fontSize: isMobile ? 22 : 26 }]}>
            <Text style={{color: COLORS.primary || '#3B82F6'}}>Staff</Text>Pe
          </Text>
        </TouchableOpacity>

        {/* Desktop Links: Mobile par hidden */}
        {!isMobile && (
          <View style={styles.navLinks}>
            {navLinks.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                onPress={item.press}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={styles.linkWrapper}
              >
                <Text style={[
                  styles.linkText, 
                  hoveredIndex === index && { color: COLORS.primary || '#3B82F6' }
                ]}>
                  {item.name}
                </Text>
                <View style={[
                  styles.hoverLine, 
                  { width: hoveredIndex === index ? '100%' : '0%' }
                ]} />
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Login Button: Responsive sizing to stop squeeze */}
        <TouchableOpacity 
          style={[
            styles.loginBtn, 
            { 
              paddingHorizontal: isMobile ? 20 : 30,
              paddingVertical: isMobile ? 10 : 12 
            }
          ]} 
          onPress={onLoginPress}
        >
          <Text style={[styles.loginBtnText, { fontSize: isMobile ? 12 : 14 }]}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navWrapper: {
    top: 25,
    width: '100%',
    alignItems: 'center',
    zIndex: 9999,
  },
  navbarContainer: {
    flexDirection: 'row',
    height: 65, // Thoda kam height for cleaner look
    backgroundColor: 'rgba(255, 255, 255, 0.96)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(226, 232, 240, 0.8)',
    ...Platform.select({
      web: { 
        backdropFilter: 'blur(15px)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.06)' 
      },
      default: {
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
      }
    })
  },
  logoText: {
    fontWeight: '900',
    color: '#000',
  },
  navLinks: {
    flexDirection: 'row',
    gap: 30, // Balanced gap
  },
  linkWrapper: {
    paddingVertical: 5,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#334155',
  },
  hoverLine: {
    height: 3,
    backgroundColor: '#3B82F6',
    borderRadius: 10,
    marginTop: 4,
  },
  loginBtn: {
    backgroundColor: '#000',
    borderRadius: 30,
  },
  loginBtnText: {
    color: '#FFF',
    fontWeight: '800',
    textTransform: 'uppercase',
  },
});

export default Navbar;