import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'

import { fetchContacts } from '../utils/api'

import { Contact } from '../interfaces/interfaces';
import { renderContact } from '../utils/renderContact';

interface ContactsState {
  contacts: Contact[];
  loading: boolean;
  error: boolean;
}

const initialState = {
  contacts: [],
  loading: true,
  error: false
}

export const Contacts = () => {

  const [state, setState] = useState<ContactsState>(initialState)
  const { loading, contacts, error } = state

  const contactsSorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name))

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

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size="large" />}
      {error && <Text>Error fetching contacts</Text>}
      {!loading &&
        !error && (
          <FlatList
            data={contactsSorted}
            renderItem={renderContact}
            keyExtractor={(item: Contact) => item.id}
          />
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  }
})
