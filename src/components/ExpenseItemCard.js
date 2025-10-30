import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ExpenseItemCard = ({ item }) => {
  return (
    <View className="bg-white rounded-2xl p-4 mx-5 mb-5 flex-row justify-between items-center shadow-sm">
      <View className="flex-row w-12 h-12 rounded-xl bg-gray-100 justify-center items-center mr-4">
        <Text>🍔</Text>
      </View>
      <View className="flex-1 items-start">
        <Text className="font-bold">Food</Text>
        {/* category  */}
        <View className="mt-1 px-4 py-1 rounded-xl self-start bg-orange-400 ">
          <Text className="text-white italic font-bold text-xs">
            {"Food & Drinks"}
          </Text>
        </View>
      </View>
      <View className="items-end">
        <Text className="font-bold">{"$300"}</Text>
        <Text className="italic text-md text-gray-400">{"20-09-2025"}</Text>
      </View>
    </View>
  );
};

export default ExpenseItemCard;

const styles = StyleSheet.create({});
