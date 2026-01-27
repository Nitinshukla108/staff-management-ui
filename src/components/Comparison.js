import React from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native';
import { COLORS } from '../constants/Colors';

const { width } = Dimensions.get('window');

const ComparisonRow = ({ label, oldWay, newWay, isLast }) => (
  <View style={[styles.row, isLast && { borderBottomWidth: 0 }]}>
    <View style={styles.labelCol}>
      <Text style={styles.labelText}>{label}</Text>
    </View>
    <View style={styles.oldCol}>
      <Text style={styles.oldText}>✕ {oldWay}</Text>
    </View>
    <View style={styles.newCol}>
      <Text style={styles.newText}>✓ {newWay}</Text>
    </View>
  </View>
);

const Comparison = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionBadge}>OLD VS NEW</Text>
      <Text style={styles.sectionTitle}>Stop struggling with paperwork</Text>
      <Text style={styles.sectionSub}>See how StaffPe transforms your daily business operations.</Text>

      <View style={styles.tableCard}>
        {/* Table Header */}
        <View style={styles.headerRow}>
          <View style={styles.labelCol} />
          <View style={styles.oldColHeader}>
            <Text style={styles.headerText}>Manual Register</Text>
          </View>
          <View style={styles.newColHeader}>
            <Text style={styles.headerTextNew}>StaffPe Way</Text>
          </View>
        </View>

        {/* Comparison Data */}
        <ComparisonRow 
          label="Attendance" 
          oldWay="Manual diary entries" 
          newWay="1-tap digital tracking"
        />
        <ComparisonRow 
          label="Calculations" 
          oldWay="Prone to human errors"
          newWay="100% automated accuracy" 
        />
        <ComparisonRow 
          label="Data Safety" 
          oldWay="Risk of lost registers"
          newWay="Secure cloud backup"
        />
        <ComparisonRow 
          label="Salary" 
          oldWay="Hours of paperwork" 
          newWay="Instant auto-salary"
        />
        <ComparisonRow 
          label="Access" 
          oldWay="Must be in office" 
          newWay="Monitor from anywhere" 
          isLast={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { paddingVertical: 100, backgroundColor: '#F8FAFC', alignItems: 'center' },
  sectionBadge: { fontSize: 14, fontWeight: 'bold', color: COLORS.primary, letterSpacing: 2, marginBottom: 15 },
  sectionTitle: { fontSize: 36, fontWeight: '800', color: '#1e293b', textAlign: 'center' },
  sectionSub: { fontSize: 16, color: '#64748b', marginTop: 10, marginBottom: 60, textAlign: 'center' },
  
  tableCard: {
    width: '94%',
    maxWidth: 900,
    backgroundColor: '#FFF',
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
  },
  headerRow: { flexDirection: 'row', backgroundColor: '#F1F5F9', paddingVertical: 25 },
  labelCol: { flex: 0.8, paddingLeft: 25, justifyContent: 'center' },
  oldColHeader: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  newColHeader: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary, borderTopRightRadius: 20 },
  
  headerText: { fontWeight: '700', color: '#64748b', fontSize: 16 },
  headerTextNew: { fontWeight: '800', color: '#FFF', fontSize: 16 },

  row: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#F1F5F9', paddingVertical: 25 },
  labelText: { fontWeight: '700', color: '#1e293b', fontSize: 15 },
  oldCol: { flex: 1, alignItems: 'center', paddingHorizontal: 10 },
  newCol: { flex: 1, alignItems: 'center', paddingHorizontal: 10 },
  
  oldText: { color: '#94a3b8', fontSize: 14, textAlign: 'center' },
  newText: { color: COLORS.primary, fontWeight: '700', fontSize: 15, textAlign: 'center' },
});

export default Comparison;