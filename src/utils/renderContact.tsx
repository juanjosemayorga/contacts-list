import React from "react";
import ContactListItem from "../components/ContactListItem";
import { Contact } from "../interfaces/interfaces";

export const renderContact = ({item}: {item: Contact}) => {
  const {name, avatar, phone} = item;

  return (
    <ContactListItem
      name={name}
      avatar={avatar}
      phone={phone}
      onPress={() => console.log('ContactListItem pressed')}
    />
  );
};
