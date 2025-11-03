import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PieChart } from "react-native-gifted-charts";
import { SafeAreaView } from "react-native-safe-area-context";
import { processDataForPieChart } from "../helper";
import { useExpenses } from "../context/ExpenseContext";

const Insights = () => {
  const { expenses } = useExpenses();
  const pieChartData = processDataForPieChart(expenses);
  const renderListItem = ({ item }) => {
    return (
      <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
        <View className="flex-row items-center">
          <View
            className="w-4 h-4 rounded-full mr-3"
            style={{ backgroundColor: item.color }}
          ></View>
          <Text className="text-lg font-bold">{item.name}</Text>
        </View>
        <View className="items-end">
          <Text className="text-lg font-bold">
            ₹{Number(item.amount).toFixed(2)}
          </Text>
          <Text>{item.value}%</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Text className="text-3xl font-bold text-center text-red-800 my-10">
        Spending Summary
      </Text>
      <View className="items-center">
        <PieChart
          donut
          data={pieChartData}
          innerCircleColor="#fff"
          showText
          textColor="#000"
          fontWeight="bold"
          innerRadius={50}
        />
      </View>
      <FlatList
        data={pieChartData}
        renderItem={renderListItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default Insights;

const styles = StyleSheet.create({});
