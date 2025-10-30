import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import ExpenseItemCard from "../components/ExpenseItemCard";
import EmptyList from "../components/EmptyList ";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="px-5 pt-5 pb-3">
        <Text className="text-4xl font-bold text-black ">Hello 👋</Text>
        <Text className="text-gray-500 mt-2 text-xl">
          Start monitoring your expenses.
        </Text>
      </View>
      <View className="bg-black rounded-3xl p-6 my-5 items-center shadow-lg mx-5">
        <Text className="text-gray-300">Spend so far</Text>
        <Text className="text-white text-4xl mt-2 font-bold">$ 400</Text>
      </View>
      <FlatList
        data={[1, 2, 3]}
        renderItem={({ item }) => <ExpenseItemCard item={item} />}
        // keyExtractor={(item) => item}
        contentContainerStyle={{ paddingBottom: 20 }}
        ListEmptyComponent={<EmptyList />}
      />
    </SafeAreaView>
  );
};

export default Home;
