import 'react-native-gesture-handler'; 
import React, { useState, useRef } from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  StyleSheet, 
  View, 
  Platform, 
  StatusBar,
  Dimensions
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Components
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

// Screens
import AuthScreen from './src/screens/AuthScreen';
import DrawerNavigator from './src/navigation/DrawerNavigator';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const scrollRef = useRef(null);

  const featuresRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current && scrollRef.current) {
      sectionRef.current.measureLayout(
        scrollRef.current.getInnerViewNode(),
        (x, y) => {
          scrollRef.current.scrollTo({ y: y - 80, animated: true });
        }
      );
    }
  };

  // --- RENDER CONTROLLER ---

  // Dashboard logic
  if (isLoggedIn) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </GestureHandlerRootView>
    );
  }

  // Auth logic
  if (showAuth) {
    return (
      <View style={{ flex: 1 }}>
        <AuthScreen 
          onBack={() => setShowAuth(false)} 
          onLoginSuccess={() => setIsLoggedIn(true)} 
        />
      </View>
    );
  }

  // Home Page logic
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Navbar 
          onFeaturesPress={() => scrollToSection(featuresRef)}
          onWhatWeDoPress={() => scrollToSection(whatWeDoRef)}
          onPricingPress={() => scrollToSection(pricingRef)}
          onContactPress={() => scrollToSection(contactRef)}
          onLoginPress={() => setShowAuth(true)} 
        />
        <ScrollView ref={scrollRef} style={{ flex: 1 }} contentContainerStyle={styles.scrollContent}>
          <View style={styles.section}><Hero /></View>
          <View ref={featuresRef} style={styles.section}><Features /></View>
          <View ref={whatWeDoRef} style={styles.section}><WhatWeDo /></View>
          <View style={styles.section}><Comparison /></View>
          <View style={styles.section}><IndustrySolutions /></View>
          <View ref={pricingRef} style={styles.section}><Pricing /></View>
          <View style={styles.section}><FAQ /></View>
          <View style={styles.section}><DownloadApp /></View>
          <View ref={contactRef} style={styles.section}><Contact /></View>
          <Footer scrollToSection={() => {}} />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { flexGrow: 1, paddingTop: Platform.OS === 'web' ? 80 : 0, paddingBottom: 50 },
  section: { width: '100%', marginBottom: 40 }
});