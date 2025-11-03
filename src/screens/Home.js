import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import ExpenseItemCard from "../components/ExpenseItemCard";
import EmptyList from "../components/EmptyList ";
import { SafeAreaView } from "react-native-safe-area-context";
import { useExpenses } from "../context/ExpenseContext";

const ExpenseData = [
  {
    id: 1,
    icon: "🛒",
    title: "Grocery Shopping",
    category: "Food",
    amount: 260,
    date: "2-09-2025",
    color: "#FFD700",
  },
  {
    id: 2,
    icon: "🚗",
    title: "Uber to office",
    category: "Transporation",
    amount: 300,
    date: "2-09-2025",
    color: "#FFA07A",
  },
  {
    id: 3,
    icon: "✈️",
    title: "Flight ticket",
    category: "Transporation",
    amount: 9000,
    date: "3-09-2025",
    color: "#0a9396",
  },
  {
    id: 4,
    icon: "🍔",
    title: "Lunch",
    category: "Food",
    amount: 300,
    date: "2-09-2025",
    color: "#8ac926",
  },
  {
    id: 5,
    icon: " 🎬",
    title: "Movie",
    category: "Entertainment",
    amount: 500,
    date: "3-09-2025",
    color: "#eb5e28",
  },
  {
    id: 6,
    icon: "🏠",
    title: "Painted Home",
    category: "Renovation",
    amount: 20000,
    date: "5-09-2025",
    color: "#231942",
  },
];

const Home = ({ navigation }) => {
  const { expenses } = useExpenses();
  const totalSpend = (expenses || []).reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" />
      <View className="px-5 pt-5 pb-3">
        <Text className="text-4xl font-bold text-black ">Hello 👋</Text>
        <Text className="text-gray-500 mt-2 text-xl">
          Start monitoring your expenses.
        </Text>
      </View>
      <View className="bg-black rounded-3xl p-6 my-5 items-center shadow-lg mx-5">
        <Text className="text-gray-300">Spend so far</Text>
        <Text className="text-white text-4xl mt-2 font-bold">
          ₹{totalSpend.toFixed(1)}
        </Text>
      </View>
      <FlatList
        data={expenses}
        renderItem={({ item, index }) => (
          <ExpenseItemCard item={item} index={index} />
        )}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<EmptyList />}
      />
    </SafeAreaView>
  );
};

export default Home;
