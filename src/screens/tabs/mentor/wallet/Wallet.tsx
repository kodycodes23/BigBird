import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WithdrawIcon from '@/assets/svg/withdraw.svg';
import DepositIcon from '@/assets/svg/deposit.svg';
import WalletSettingIcon from '@/assets/svg/walletsetting.svg';
import YellowFilterIcon from '@/assets/svg/yellowfilter.svg';
import OutIcon from '@/assets/svg/out.svg';
import ReceiveIcon from '@/assets/svg/receive.svg';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type Transaction = {
  id: string;
  name: string;
  date: string;
  amount: string;
  type: 'in' | 'out';
};

const transactionsData: Transaction[] = [
  { id: '1', name: 'Janet Doe', date: '23-10-2024', amount: '$400.00', type: 'out' },
  { id: '2', name: 'Janet Doe', date: '14-11-2024', amount: '$20.00', type: 'in' },
  { id: '3', name: 'Janet Doe', date: '23-10-2024', amount: '$400.00', type: 'out' },
  { id: '4', name: 'Janet Doe', date: '13-11-2024', amount: '$200.00', type: 'in' },
  // Add more transactions as needed
];

const WalletScreen: React.FC = () => {
  const renderTransaction = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionCard}>
      <View style={styles.transactionInfo}>
        {/* Use SVG as component */}
        {item.type === 'in' ? (
          <ReceiveIcon width={20} height={20} style={styles.transactionIcon} />
        ) : (
          <OutIcon width={20} height={20} style={styles.transactionIcon} />
        )}
        <View>
          <Text style={styles.transactionName}>{item.name}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.transactionAmountContainer}>
        <Text style={styles.transactionAmount}>{item.amount}</Text>
        <Text style={[styles.transactionStatus, item.type === 'in' ? styles.receiveText : styles.outText]}>
          {item.type === 'in' ? 'Receive' : 'Out'}
        </Text>
      </View>
    </View>
  );

  const { navigate: navigateWallet } = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topNav}>
        <Ionicons name="chevron-back" size={24} color="green" />
        <Text style={styles.headerTitle}>My Wallet</Text>
      </View>

      {/* Wallet Balance Section */}
      <View style={styles.walletBalanceContainer}>
        <Text style={styles.walletBalanceTitle}>Wallet Balance</Text>
        <TouchableOpacity style={styles.currencyDropdown}>
          <Text style={styles.currencyText}>USD</Text>
          <Ionicons name="chevron-down" size={16} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.walletAmount}>$8,540.00</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.withdrawButton} onPress={() => navigateWallet('Withdraw')}>
            <WithdrawIcon width={20} height={20} />
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.depositButton} onPress={() => navigateWallet('Deposit')}>
            <DepositIcon width={20} height={20} />
            <Text style={styles.buttonText}>Deposit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Transaction History Section */}
      <View style={styles.transactionHeader}>
        <Text style={styles.transactionTitle}>Transaction History</Text>
        <View style={styles.transactionIcons}>
          <WalletSettingIcon width={24} height={24} />
          <YellowFilterIcon width={24} height={24} style={styles.filterIcon} />
        </View>
      </View>

      {/* Transactions List */}
      <FlatList
        data={transactionsData}
        renderItem={renderTransaction}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.transactionsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
  topNav: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 },
  headerTitle: { flex: 1, textAlign: 'center', fontSize: 18, fontWeight: 'bold', color: '#000' },

  walletBalanceContainer: { backgroundColor: '#1a1a1a', borderRadius: 15, padding: 20, margin: 15 },
  walletBalanceTitle: { color: '#ccc', fontSize: 14 },
  currencyDropdown: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#555', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8, position: 'absolute', top: 20, right: 20 },
  currencyText: { color: '#fff', fontSize: 14, marginRight: 5 },
  walletAmount: { color: '#fff', fontSize: 36, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },

  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  withdrawButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#28a745', padding: 10, borderRadius: 8, flex: 1, marginRight: 10, justifyContent: 'center' },
  depositButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#333', padding: 10, borderRadius: 8, flex: 1, marginLeft: 10, justifyContent: 'center' },
  buttonText: { color: '#fff', fontSize: 16, marginLeft: 5 },

  transactionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 15 },
  transactionTitle: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  transactionIcons: { flexDirection: 'row', alignItems: 'center' },
  filterIcon: { marginLeft: 10 },

  transactionsList: { paddingHorizontal: 15 },
  transactionCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#f9f9f9', borderRadius: 10, marginVertical: 5 },
  transactionInfo: { flexDirection: 'row', alignItems: 'center' },
  transactionIcon: { marginRight: 10 },
  transactionName: { fontSize: 16, fontWeight: '600', color: '#000' },
  transactionDate: { fontSize: 14, color: '#888' },
  transactionAmountContainer: { alignItems: 'flex-end' },
  transactionAmount: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  transactionStatus: { fontSize: 14 },
  receiveText: { color: '#28a745' },
  outText: { color: '#d9534f' },
});

export default WalletScreen;
