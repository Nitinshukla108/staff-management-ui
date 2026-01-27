import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { COLORS } from '../constants/Colors';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity 
        activeOpacity={0.7} 
        onPress={() => setIsOpen(!isOpen)} 
        style={styles.questionRow}
      >
        <Text style={[styles.questionText, isOpen && {color: COLORS.primary}]}>
          {question}
        </Text>
        <Text style={styles.icon}>{isOpen ? '−' : '+'}</Text>
      </TouchableOpacity>
      
      {isOpen && (
        <View style={styles.answerBox}>
          <Text style={styles.answerText}>{answer}</Text>
        </View>
      )}
    </View>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "Do I need any extra hardware to use StaffPe?",
      answer: "No, you and your staff can use StaffPe on any standard Android or iOS smartphone. There is no need for expensive biometric machines."
    },
    {
      question: "Is my business data secure?",
      answer: "Absolutely. We use enterprise-grade encryption to ensure that your business and employee data remains 100% private and secure."
    },
    {
      question: "How does the Geo-fencing feature work?",
      answer: "You can set a specific radius for your office location. Staff members can only mark their attendance when they are physically present within that designated area."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a 14-day full-featured free trial for every new business so you can explore all the tools before subscribing."
    }
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionBadge}>HAVE QUESTIONS?</Text>
      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
      
      <View style={styles.faqContainer}>
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: { paddingVertical: 100, backgroundColor: '#FFF', alignItems: 'center' },
  sectionBadge: { fontSize: 14, fontWeight: 'bold', color: COLORS.primary, letterSpacing: 2, marginBottom: 10 },
  sectionTitle: { fontSize: 32, fontWeight: '800', textAlign: 'center', color: '#1e293b', marginBottom: 50 },
  faqContainer: { width: '90%', maxWidth: 800 },
  faqItem: { borderBottomWidth: 1, borderBottomColor: '#E2E8F0', marginBottom: 10 },
  questionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20 },
  questionText: { fontSize: 18, fontWeight: '600', color: '#334155', flex: 1 },
  icon: { fontSize: 24, color: '#94a3b8', marginLeft: 20 },
  answerBox: { paddingBottom: 20, paddingRight: 40 },
  answerText: { fontSize: 16, lineHeight: 24, color: '#64748b' }
});

export default FAQ;