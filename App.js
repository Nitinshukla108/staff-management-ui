import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Platform, StatusBar } from 'react-native';

// Components Imports
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import Features from './src/components/Features';
import WhatWeDo from './src/components/WhatWeDo';
import Comparison from './src/components/Comparison';
import IndustrySolutions from './src/components/IndustrySolutions';
import Results from './src/components/Results';
import Pricing from './src/components/Pricing';
import FAQ from './src/components/FAQ';
import DownloadApp from './src/components/DownloadApp';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';
import AuthScreen from './src/screens/AuthScreen'; // Isse check karna ye path sahi ho

export default function App() {
  const [showAuth, setShowAuth] = useState(false);
  const scrollRef = useRef(null);

  // Sections Refs for Navigation
  const featuresRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  // Smooth Scroll Logic
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current && scrollRef.current) {
      sectionRef.current.measureLayout(
        scrollRef.current.getInnerViewNode(),
        (x, y) => {
          scrollRef.current.scrollTo({ y: y - 80, animated: true });
        },
        (error) => console.log("Scroll Error: ", error)
      );
    }
  };

  // Agar login press kiya toh AuthScreen dikhao
  if (showAuth) {
    return <AuthScreen onBack={() => setShowAuth(false)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      
      {/* Navbar with all connections fixed */}
      <Navbar 
        onFeaturesPress={() => scrollToSection(featuresRef)}
        onWhatWeDoPress={() => scrollToSection(whatWeDoRef)}
        onPricingPress={() => scrollToSection(pricingRef)}
        onContactPress={() => scrollToSection(contactRef)}
        onLoginPress={() => setShowAuth(true)} 
      />
      
      <ScrollView 
        ref={scrollRef} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.section}><Hero /></View>
        
        {/* Sections with Refs for Scrolling */}
        <View ref={featuresRef} style={styles.section}><Features /></View>
        <View ref={whatWeDoRef} style={styles.section}><WhatWeDo /></View>
        <View style={styles.section}><Comparison /></View>
        <View style={styles.section}><IndustrySolutions /></View>
        <View style={styles.section}><Results /></View>
        <View ref={pricingRef} style={styles.section}><Pricing /></View>
        <View style={styles.section}><FAQ /></View>
        <View style={styles.section}><DownloadApp /></View>
        <View ref={contactRef} style={styles.section}><Contact /></View>
        
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: {
    paddingTop: Platform.OS === 'web' ? 80 : 0,
    paddingBottom: 40,
  },
  section: { 
    width: '100%', 
    marginBottom: 40 
  }
});