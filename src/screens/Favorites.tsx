import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';

import { fetchContacts } from '../utils/api';

import ContactThumbnail from '../components/ContactThumbnail';
import { Contact } from '../interfaces/interfaces';
import { StackScreenProps } from '@react-navigation/stack';

interface FavoritesProps extends StackScreenProps<any, any> {}

interface IFavoritesState {
  contacts: Contact[];
  loading: boolean;
  error: boolean;
}

const initialState: IFavoritesState = {
  contacts: [],
  loading: true,
  error: false
}

export const Favorites = ({ navigation: { navigate } }: FavoritesProps) => {

  const [state, setState] = useState<IFavoritesState>(initialState);
  const { loading, contacts, error } = state;
  const favorites: Contact[] = contacts.filter(contact => contact.favorite);

  useEffect(() => {
    const fetchContactsData = async () => {
      try {
        const fetchedContacts: Contact[] = await fetchContacts()

        setState({
          contacts: fetchedContacts,
          loading: false,
          error: false
        })
      } catch (err) {
        setState({
          ...state,
          loading: false,
          error: true
        })
      }
    }
    fetchContactsData()

    return () => {
      setState(initialState)
    }
  }, [])

  const renderFavoriteThumbnail = ({ item }: ListRenderItemInfo<Contact>) => {
    const { avatar } = item;

    return (
      <ContactThumbnail
        avatar={avatar}
        onPress={() => navigate('Profile', { contact: item })}
      />
    )
  }

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error fetching contacts</Text>}

      {!loading && !error && (
        <FlatList
          data={favorites}
          keyExtractor={(item: Contact) => item.id}
          renderItem={renderFavoriteThumbnail}
          numColumns={3}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
  list: {
    alignItems: 'center',
  },
});
