import React from "react";
import { ListRenderItemInfo } from "react-native";
import ContactListItem from "../components/ContactListItem";
import { Contact } from "../interfaces/interfaces";

export const RenderContact = (
  {item}: ListRenderItemInfo<Contact>,
  navigate: any
  ) => {
  const {name, avatar, phone} = item;

  return (
    <ContactListItem
      name={name}
      avatar={avatar}
      phone={phone}
      onPress={() => navigate('Profile', { contact: item })}
    />
  );
};
