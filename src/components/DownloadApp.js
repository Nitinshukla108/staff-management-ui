import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

const { width } = Dimensions.get('window');

const DownloadApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentCard}>
        
        {/* LEFT SIDE: Phone Mockup (Visible only on Web/Large Screens) */}
        {width > 800 && (
          <View style={styles.mockupContainer}>
            <View style={styles.phoneFrame}>
               <View style={styles.innerScreen}>
                  {/* Internal App Content Idea */}
                  <View style={styles.appHeader}>
                    <Text style={styles.appTitle}>StaffPe</Text>
                  </View>
                  <View style={styles.appStats}>
                    <Text style={styles.statsText}>Attendance: 98%</Text>
                    <View style={styles.progressBar} />
                    <Text style={styles.statsText}>Payroll: Processed</Text>
                  </View>
                  <Text style={styles.mockupFooter}>Smart Dashboard</Text>
               </View>
            </View>
          </View>
        )}

        {/* RIGHT SIDE: Content & Buttons */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Ready to transform your workforce?</Text>
          <Text style={styles.subTitle}>
            Join thousands of businesses already using StaffPe to automate attendance and payroll. Download now to start your journey.
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.downloadBtn}>
               <View style={styles.btnContent}>
                  <Text style={styles.btnSmallText}>Get it on</Text>
                  <Text style={styles.btnLargeText}>Google Play</Text>
               </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.downloadBtn}>
               <View style={styles.btnContent}>
                  <Text style={styles.btnSmallText}>Download on</Text>
                  <Text style={styles.btnLargeText}>App Store</Text>
               </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    paddingVertical: 80, 
    backgroundColor: '#FFF', 
    alignItems: 'center', 
    width: '100%' 
  },
  contentCard: {
    width: '90%',
    maxWidth: 1100,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    flexDirection: 'row',
    padding: Platform.OS === 'web' ? 60 : 30,
    alignItems: 'center',
    overflow: 'hidden',
  },
  mockupContainer: { flex: 1, alignItems: 'center' },
  phoneFrame: {
    width: 220,
    height: 440,
    backgroundColor: '#1e293b',
    borderRadius: 35,
    borderWidth: 8,
    borderColor: '#334155',
    padding: 10,
    transform: [{ rotate: '-6deg' }], // Premium Tilt
  },
  innerScreen: { 
    flex: 1, 
    backgroundColor: '#F8FAFC', 
    borderRadius: 22, 
    padding: 15,
    alignItems: 'center' 
  },
  appHeader: { width: '100%', height: 30, backgroundColor: COLORS.primary, borderRadius: 5, marginBottom: 20, justifyContent: 'center', paddingLeft: 10 },
  appTitle: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  appStats: { width: '100%', gap: 10 },
  statsText: { fontSize: 10, color: '#475569', fontWeight: '600' },
  progressBar: { width: '80%', height: 6, backgroundColor: '#E2E8F0', borderRadius: 3, overflow: 'hidden' },
  mockupFooter: { position: 'absolute', bottom: 20, fontSize: 9, color: '#94a3b8', fontWeight: 'bold' },
  
  textContainer: { flex: 1.2, paddingLeft: Platform.OS === 'web' ? 40 : 0 },
  title: { fontSize: Platform.OS === 'web' ? 38 : 26, fontWeight: '800', color: '#FFF', marginBottom: 20 },
  subTitle: { fontSize: 16, color: 'rgba(255, 255, 255, 0.8)', marginBottom: 40, lineHeight: 26 },
  buttonRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 15 },
  downloadBtn: { backgroundColor: '#000', paddingVertical: 10, paddingHorizontal: 18, borderRadius: 12, flexDirection: 'row', alignItems: 'center', minWidth: 150 },
  btnContent: { marginLeft: 5 },
  btnSmallText: { color: '#FFF', fontSize: 9 },
  btnLargeText: { color: '#FFF', fontSize: 14, fontWeight: 'bold' },
});

export default DownloadApp;