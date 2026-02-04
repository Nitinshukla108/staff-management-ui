import React, { useEffect, useRef, useState } from 'react';
import { 
  StyleSheet, Text, View, ScrollView, Platform, 
  TouchableOpacity, Modal, SafeAreaView, useWindowDimensions 
} from 'react-native';
import { COLORS } from '../constants/Colors';
import { X, CheckCircle2, MapPin } from 'lucide-react-native';

const DATA = [
  { id: '1', title: 'Custom Staff Management', desc: 'A comprehensive suite of tools that helps businesses optimize and grow by providing insights into staff behavior and tracking.', icon: '🏢' },
  { id: '2', title: 'Automated Payroll Systems', desc: 'Streamline your financial operations with automated salary calculations and secure payout distributions.', icon: '💸' },
  { id: '3', title: 'Digital Attendance Records', desc: 'Eliminate manual registers. Manage daily attendance and leave requests with our cloud-based tracking system.', icon: '📱' },
  { id: '4', title: 'Real-time Data Analytics', desc: 'Gain valuable insights into your workforce productivity with visual reports and performance metrics.', icon: '📊' },
  { id: '5', title: 'Compliance & Legal Security', desc: 'Stay ahead of regulations with built-in tools designed for modern labor laws.', icon: '⚖️' },
  { id: '6', title: 'Seamless Team Collaboration', desc: 'Connect your management and staff on a single platform to improve communication and task management.', icon: '🤝' },
];

const WhatWeDo = () => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth < 768;
  
  // Responsive Card Sizing
  const CARD_WIDTH = isMobile ? windowWidth * 0.85 : 320;
  const CARD_MARGIN = isMobile ? 15 : 25;
  const TOTAL_WIDTH = CARD_WIDTH + CARD_MARGIN;

  const scrollRef = useRef(null);
  const scrollX = useRef(0);
  const [showAbout, setShowAbout] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current && !isUserInteracting) {
        scrollX.current += 1; 
        const maxScroll = (DATA.length * TOTAL_WIDTH) - (windowWidth * 0.5);
        if (scrollX.current >= maxScroll) scrollX.current = 0;
        scrollRef.current.scrollTo({ x: scrollX.current, animated: false });
      }
    }, 30);

    return () => {
      clearInterval(scrollInterval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isUserInteracting, windowWidth, TOTAL_WIDTH]);

  const handleManualInteraction = (event) => {
    scrollX.current = event.nativeEvent.contentOffset.x;
    setIsUserInteracting(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsUserInteracting(false), 3000);
  };

  return (
    <View style={[styles.container, { paddingVertical: isMobile ? 60 : 100 }]}>
      <View style={styles.header}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, { fontSize: isMobile ? 32 : 56, lineHeight: isMobile ? 40 : 64 }]}>
            What We Do ↴
          </Text>
          <TouchableOpacity style={styles.aboutBtn} onPress={() => setShowAbout(true)}>
            <Text style={styles.aboutText}>About Us  ↗</Text>
          </TouchableOpacity>
        </View>
        {!isMobile && (
          <Text style={styles.sideDesc}>Design, Develop And Run{"\n"}Any Business Software{"\n"}You Need.</Text>
        )}
      </View>

      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={true}
        onScroll={handleManualInteraction}
        scrollEventThrottle={16}
        {...(Platform.OS === 'web' ? { className: 'staffpe-scrollbar' } : {})}
        contentContainerStyle={[
          styles.scrollContent, 
          { 
            paddingLeft: windowWidth * 0.08, 
            minWidth: DATA.length * TOTAL_WIDTH + 100 
          }
        ]}
      >
        {DATA.map((item) => (
          <View key={item.id} style={[styles.card, { width: CARD_WIDTH, marginRight: CARD_MARGIN }]}>
            <Text style={styles.cardIcon}>{item.icon}</Text>
            <Text style={[styles.cardTitle, { fontSize: isMobile ? 20 : 24 }]}>{item.title}</Text>
            <View style={styles.divider} />
            <Text style={[styles.cardDesc, { fontSize: isMobile ? 14 : 16 }]}>{item.desc}</Text>
          </View>
        ))}
      </ScrollView>

      {/* --- ABOUT US MODAL --- */}
      <Modal visible={showAbout} animationType="slide" transparent={false}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalBrand}>
              <Text style={{color: COLORS.primary || '#3B82F6'}}>Staff</Text>Pe
            </Text>
            <TouchableOpacity onPress={() => setShowAbout(false)} style={styles.closeBtn}>
              <X color="#FFF" size={24} />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={[styles.modalBody, { padding: isMobile ? 20 : '8%' }]}>
            <View style={[styles.splitContent, { flexDirection: isMobile ? 'column' : 'row' }]}>
              <View style={styles.leftInfo}>
                <Text style={[styles.heroTitle, { fontSize: isMobile ? 32 : 42 }]}>Empowering Businesses Simply.</Text>
                
                <View style={styles.infoBlock}>
                  <Text style={styles.infoHeading}>Our Story</Text>
                  <Text style={styles.infoText}>Founded in Surat, StaffPe was built to fix the mess of manual staff tracking.</Text>
                </View>

                <View style={styles.infoBlock}>
                  <Text style={styles.infoHeading}>Key Features</Text>
                  {['Live GPS Tracking', 'One-Tap Payroll', 'Cloud Storage', 'Real-time Analytics'].map((item, i) => (
                    <View key={i} style={styles.listRow}>
                      <CheckCircle2 size={18} color={COLORS.primary || '#3B82F6'} />
                      <Text style={styles.listText}>{item}</Text>
                    </View>
                  ))}
                </View>

                <View style={styles.addressBox}>
                  <MapPin size={20} color={COLORS.primary || '#3B82F6'} />
                  <Text style={styles.addressText}>606/607/608, A-Wing, River Palace, Nanpura, Surat-395001.</Text>
                </View>
              </View>

              {Platform.OS === 'web' && windowWidth > 900 && (
                <View style={styles.phoneContainer}>
                  <View style={styles.iphoneFrame}>
                    <View style={styles.iphoneScreen}>
                      <View style={[styles.appHeader, {backgroundColor: COLORS.primary || '#3B82F6'}]}>
                        <Text style={styles.appTitle}>StaffPe Admin</Text>
                      </View>
                      <View style={styles.appContent}>
                        <View style={styles.mockHeroCard} />
                        <View style={styles.mockListItem} />
                        <View style={styles.mockListItem} />
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      {/* Stylish Scrollbar CSS */}
      {Platform.OS === 'web' && (
        <style dangerouslySetInnerHTML={{ __html: `
          .staffpe-scrollbar::-webkit-scrollbar { height: 8px; cursor: pointer; }
          .staffpe-scrollbar::-webkit-scrollbar-track { background: #F8FAFC; border-radius: 20px; margin-inline: 8%; }
          .staffpe-scrollbar::-webkit-scrollbar-thumb { background: ${COLORS.primary || '#3B82F6'}; border-radius: 20px; }
        `}} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFF', width: '100%' },
  header: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '8%', marginBottom: 40, alignItems: 'flex-end' },
  title: { fontWeight: '900', color: '#1E293B' },
  aboutBtn: { borderWidth: 1, borderColor: '#1E293B', borderRadius: 25, paddingVertical: 10, paddingHorizontal: 25, marginTop: 20, alignSelf: 'flex-start' },
  aboutText: { fontWeight: '700', fontSize: 14, textTransform: 'uppercase' },
  sideDesc: { color: '#64748B', textAlign: 'right', fontSize: 15, lineHeight: 22 },
  scrollContent: { paddingRight: 50, paddingBottom: 25 }, 
  card: { backgroundColor: '#FFF', borderRadius: 30, padding: 30, borderWidth: 1, borderColor: '#E2E8F0', flexShrink: 0 },
  cardIcon: { fontSize: 40, marginBottom: 20 },
  cardTitle: { fontWeight: '900', color: COLORS.primary || '#3B82F6', marginBottom: 15 },
  divider: { width: 40, height: 3, backgroundColor: '#1E293B', marginBottom: 20 },
  cardDesc: { color: '#64748B', lineHeight: 22 },
  modalContainer: { flex: 1, backgroundColor: '#FFF' },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '8%', paddingVertical: 20, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#F1F5F9' },
  modalBrand: { fontSize: 26, fontWeight: '900' },
  closeBtn: { backgroundColor: '#000', padding: 10, borderRadius: 50 },
  splitContent: { gap: 40 },
  leftInfo: { flex: 1.2 },
  heroTitle: { fontWeight: '900', color: '#111827', marginBottom: 25 },
  infoBlock: { marginBottom: 25 },
  infoHeading: { fontSize: 20, fontWeight: '800', color: COLORS.primary || '#3B82F6', marginBottom: 10 },
  infoText: { fontSize: 16, color: '#4B5563', lineHeight: 26 },
  listRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 },
  listText: { fontSize: 16, color: '#1F2937', fontWeight: '600' },
  addressBox: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 15 },
  addressText: { fontSize: 15, color: '#374151', fontWeight: '600' },
  phoneContainer: { flex: 0.8, alignItems: 'center' },
  iphoneFrame: { width: 280, height: 550, backgroundColor: '#000', borderRadius: 40, padding: 8 },
  iphoneScreen: { flex: 1, backgroundColor: '#F3F4F6', borderRadius: 32, overflow: 'hidden' },
  appHeader: { height: 50, justifyContent: 'center', alignItems: 'center' },
  appTitle: { color: '#FFF', fontWeight: 'bold' },
  appContent: { padding: 12 },
  mockHeroCard: { height: 70, backgroundColor: '#FFF', borderRadius: 12, marginBottom: 12 },
  mockListItem: { height: 45, backgroundColor: '#FFF', borderRadius: 10, marginBottom: 8 }
});

export default WhatWeDo;