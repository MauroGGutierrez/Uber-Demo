import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const NavFavourites = () => {
  const data = [
    {
      id: "123",
      icon: "home",
      location: "Home",
      destination: "Ricardo Vilca, Jujuy, AR",
    },
    {
      id: "456",
      icon: "briefcase",
      location: "Work",
      destination: "Fares Bootcamp, Jujuy, AR",
    },
  ];

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-4`}>
          <Icon
            style={styles.btnicon}
            name={icon}
            type="ionicon"
            color="black"
            size={20}
          />
          <View style={styles.buttons}>
            <Text style={tw`font-semibold text-lg text-black`}>{location}</Text>
            <Text style={tw`text-gray-800 text-base`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({
  buttons: {
    backgroundColor: "#84a98c",
    paddingRight: 40,
    paddingLeft: 20,
    marginLeft: 10,
    borderRadius: 10,
  },
  btnicon: {
    borderRadius: 20,
    padding: 14,
    backgroundColor: "#84a98c",
  },
});
