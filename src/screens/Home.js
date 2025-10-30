import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-5 py-10 bg-white">
        <Text className="text-3xl font-bold text-gray-900">Hello👋</Text>
        <Text className="text-lg text-gray-600 mt-2">
          Track your expenses easily.
        </Text>
      </View>

      {/* Card */}
      <View className="mx-5 mt-5 p-5 bg-white rounded-xl shadow-lg">
        <Text className="text-xl font-semibold mb-3 text-gray-800">
          Recent Expenses
        </Text>
        <Text className="text-gray-500">No expenses yet</Text>
      </View>

      {/* Button */}
      <TouchableOpacity
        className="mx-5 mt-5 bg-blue-500 py-4 rounded-lg"
        onPress={() => navigation.navigate("Create")}
      >
        <Text className="text-white text-center font-semibold text-lg">
          Add Expense
        </Text>
      </TouchableOpacity>

      {/* Stats Row */}
      <View className="flex-row justify-between items-center px-5 mt-8 bg-white py-4 mx-5 rounded-lg">
        <Text className="text-gray-700 font-medium">Total Spent</Text>
        <Text className="text-2xl font-bold text-green-600">$0.00</Text>
      </View>
    </ScrollView>
  );
};

export default Home;
