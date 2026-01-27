import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '../constants/Colors';

const Navbar = ({ onFeaturesPress, onWhatWeDoPress, onPricingPress, onContactPress, onLoginPress }) => {
  return (
    <View style={styles.navContainer}>
      {/* Brand Logo */}
      <TouchableOpacity activeOpacity={0.7} style={styles.logoContainer}>
        <Text style={styles.logoText}>Staff<Text style={{color: '#000'}}>Pe</Text></Text>
      </TouchableOpacity>

      {/* Navigation Links - Hidden on Mobile, Visible on Web */}
      <View style={styles.navLinks}>
        <TouchableOpacity style={styles.linkItem} onPress={onFeaturesPress}>
          <Text style={styles.linkText}>Features</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem} onPress={onWhatWeDoPress}>
          <Text style={styles.linkText}>What We Do</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem} onPress={onPricingPress}>
          <Text style={styles.linkText}>Pricing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkItem} onPress={onContactPress}>
          <Text style={styles.linkText}>Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={onLoginPress}
        activeOpacity={0.8}
      >
        <Text style={styles.loginButtonText}>Login / Sign-in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    height: 80,
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Platform.OS === 'web' ? '8%' : 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    zIndex: 9999,
    // Web par top par chipka rahega
    position: Platform.OS === 'web' ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    right: 0,
  },
  logoContainer: {
    justifyContent: 'center',
  },
  logoText: { 
    fontSize: 26, 
    fontWeight: '900', 
    color: COLORS.primary || '#3B82F6' 
  },
  navLinks: { 
    flexDirection: 'row', 
    display: Platform.OS === 'web' ? 'flex' : 'none', // Mobile par links hide kiye hain simplify karne ke liye
  },
  linkItem: { 
    marginHorizontal: 15 
  },
  linkText: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: '#475569',
  },
  loginButton: { 
    backgroundColor: COLORS.primary || '#3B82F6', 
    paddingVertical: 12, 
    paddingHorizontal: 22, 
    borderRadius: 10,
    // Thoda sa shadow premium look ke liye
    shadowColor: COLORS.primary || '#3B82F6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3,
  },
  loginButtonText: { 
    color: '#FFF', 
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Navbar;