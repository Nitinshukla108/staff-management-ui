import React, { useState, useRef } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, Platform, StatusBar, Dimensions } from 'react-native';

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
import AuthScreen from './src/screens/AuthScreen';

const { height: screenHeight } = Dimensions.get('window');

export default function App() {
  const [showAuth, setShowAuth] = useState(false);
  const scrollRef = useRef(null);

  const featuresRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);
  const resultsRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current && scrollRef.current) {
      sectionRef.current.measureLayout(
        scrollRef.current.getInnerViewNode(),
        (x, y) => {
          scrollRef.current.scrollTo({ y: y - 80, animated: true });
        },
        (error) => console.log("Scroll Error: ", error)
      );
    }
  };

  if (showAuth) {
    return <AuthScreen onBack={() => setShowAuth(false)} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      
      <Navbar 
        onFeaturesPress={() => scrollToSection(featuresRef)}
        onWhatWeDoPress={() => scrollToSection(whatWeDoRef)}
        onPricingPress={() => scrollToSection(pricingRef)}
        onContactPress={() => scrollToSection(contactRef)}
        onLoginPress={() => setShowAuth(true)} 
      />
      
      <ScrollView 
        ref={scrollRef} 
        showsVerticalScrollIndicator={true} // Changed to true to help debug scrollability
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollViewStyle}
      >
        <View style={styles.section}><Hero /></View>
        <View ref={featuresRef} style={styles.section}><Features /></View>
        <View ref={whatWeDoRef} style={styles.section}><WhatWeDo /></View>
        <View style={styles.section}><Comparison /></View>
        <View style={styles.section}><IndustrySolutions /></View>
        <View ref={resultsRef} style={styles.section}><Results /></View>
        <View ref={pricingRef} style={styles.section}><Pricing /></View>
        <View style={styles.section}><FAQ /></View>
        
        {/* Force these sections to occupy space */}
        <View style={styles.bottomSection}><DownloadApp /></View>
        <View ref={contactRef} style={styles.bottomSection}><Contact /></View>
        
        <Footer 
          scrollToSection={(id) => {
            if (id === 'features') scrollToSection(featuresRef);
            if (id === 'whatwedo') scrollToSection(whatWeDoRef);
            if (id === 'pricing') scrollToSection(pricingRef);
            if (id === 'results') scrollToSection(resultsRef);
            if (id === 'contact') scrollToSection(contactRef);
          }} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#FFF',
    height: Platform.OS === 'web' ? '100vh' : '100%', // Critical for Web-Mobile height
  },
  scrollViewStyle: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1, 
    paddingTop: Platform.OS === 'web' ? 80 : 0,
    paddingBottom: 100, // Extra space to ensure footer isn't cut off
  },
  section: { 
    width: '100%', 
    marginBottom: 40 
  },
  bottomSection: {
    width: '100%',
    minHeight: 100, // Force the engine to recognize there is content
  }
});