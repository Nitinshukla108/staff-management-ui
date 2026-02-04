import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Linking, useWindowDimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

const Hero = () => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;

  const apkDownloadUrl = 'https://your-website.com/staffpe.apk'; 

  const handleDownload = () => {
    Linking.openURL(apkDownloadUrl).catch((err) => 
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View style={[styles.heroContainer, { paddingVertical: isMobile ? 60 : 100 }]}>
      <View style={styles.heroContent}>
        {/* Overlap Fix: Dynamic fontSize and lineHeight */}
        <Text style={[
          styles.mainTitle, 
          { 
            fontSize: isMobile ? 32 : 56, 
            lineHeight: isMobile ? 42 : 72,
            marginBottom: isMobile ? 20 : 30 
          }
        ]}>
          All-in-One Staff Software {"\n"} 
          <Text style={{color: COLORS.primary || '#3B82F6'}}>Powering Business Growth</Text> {"\n"}
          At Every Step
        </Text>

        <Text style={[
          styles.subTitle, 
          { 
            fontSize: isMobile ? 16 : 18, 
            lineHeight: isMobile ? 24 : 28,
            paddingHorizontal: isMobile ? 10 : 0 
          }
        ]}>
          Automate your attendance, salary, and staff management with StaffPe. 
          The most powerful tool built for SME businesses.
        </Text>

        {/* CTA Button Fix: Full width on very small screens */}
        <TouchableOpacity 
          activeOpacity={0.8}
          style={[
            styles.ctaButton, 
            { width: isMobile ? '100%' : 'auto', maxWidth: 300 }
          ]} 
          onPress={handleDownload}
        >
          <Text style={styles.ctaButtonText}>Download Our App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroContainer: { 
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#FFF' 
  },
  heroContent: { 
    width: '90%', 
    maxWidth: 1100, 
    alignItems: 'center' 
  },
  mainTitle: { 
    fontWeight: '900', 
    color: '#1E293B', 
    textAlign: 'center' 
  },
  subTitle: { 
    color: '#64748B', 
    textAlign: 'center', 
    marginBottom: 40, 
    maxWidth: 800 
  },
  ctaButton: { 
    backgroundColor: COLORS.primary || '#3B82F6', 
    paddingVertical: 18, 
    paddingHorizontal: 45, 
    borderRadius: 15, 
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      web: {
        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
      },
      default: {
        elevation: 8,
        shadowColor: '#3B82F6',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
      }
    })
  },
  ctaButtonText: { 
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold',
    letterSpacing: 0.5 
  },
});

export default Hero;