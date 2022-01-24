import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import ContactThumbnail from '../components/ContactThumbnail';

import colors from '../utils/colors';
import { fetchUserContact } from '../utils/api';
import { Contact } from '../interfaces/interfaces';

interface IUserState {
  user: Contact;
  loading: boolean;
  error: boolean;
}

const initialState: IUserState = {
  user: {} as Contact,
  loading: true,
  error: false
}

export const User = () => {

  const [state, setState] = useState<IUserState>(initialState);
  const { user, loading, error } = state;
  const { avatar, name, phone } = user;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const fetchedUser: Contact = await fetchUserContact()

        setState({
          user: fetchedUser,
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
    fetchUserData()

    return () => {
      setState(initialState)
    }
  }, [])

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error fetching user</Text>}

      {!loading && (
        <ContactThumbnail
          name={name}
          avatar={avatar}
          phone={phone}
        />
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
});