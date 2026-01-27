import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Linking } from 'react-native'; // Linking add kiya
import { COLORS } from '../constants/Colors';

const Hero = () => {
  
  // Yahan apna APK link daaliye
  const apkDownloadUrl = 'https://your-website.com/staffpe.apk'; 

  const handleDownload = () => {
    Linking.openURL(apkDownloadUrl).catch((err) => 
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View style={styles.heroContainer}>
      <View style={styles.heroContent}>
        <Text style={styles.mainTitle}>
          All-in-One Staff Software {"\n"} 
          <Text style={{color: COLORS.primary}}>Powering Business Growth</Text> {"\n"}
          At Every Step
        </Text>

        <Text style={styles.subTitle}>
          Automate your attendance, salary, and staff management with StaffPe. 
          The most powerful tool built for SME businesses.
        </Text>

        {/* Updated Button */}
        <TouchableOpacity style={styles.ctaButton} onPress={handleDownload}>
          <Text style={styles.ctaButtonText}>Download Our App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles wahi rahenge jo pehle the...
const styles = StyleSheet.create({
  heroContainer: { width: '100%', paddingVertical: 80, alignItems: 'center', justifyContent: 'center' },
  heroContent: { width: '90%', maxWidth: 1100, alignItems: 'center' },
  mainTitle: { fontSize: Platform.OS === 'web' ? 56 : 30, fontWeight: '900', color: COLORS.textMain, textAlign: 'center', lineHeight: Platform.OS === 'web' ? 70 : 40, marginBottom: 25 },
  subTitle: { fontSize: 18, color: COLORS.textSecondary, textAlign: 'center', marginBottom: 40, maxWidth: 800 },
  ctaButton: { backgroundColor: COLORS.primary, paddingVertical: 18, paddingHorizontal: 40, borderRadius: 12, elevation: 8, shadowColor: COLORS.primary, shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.3, shadowRadius: 15 },
  ctaButtonText: { color: COLORS.white, fontSize: 18, fontWeight: 'bold' },
});

export default Hero;