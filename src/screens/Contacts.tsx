import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'

import ContactListItem from '../components/ContactListItem'
import { fetchContacts } from '../utils/api'

interface ContactsState {
  contacts: any[];
  loading: boolean;
  error: boolean;
}

const initialState = {
  contacts: [],
  loading: true,
  error: false
}

export const Contacts = () => {

  const [state, setState] = useState(initialState)

  useEffect(() => {

    const fetchContactsData = async () => {
      try {
        const contacts = await fetchContacts()

        setState({
          contacts,
          loading: false,
          error: false
        })
      } catch (error) {
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
    <View>
      <Text> textInComponent </Text>
    </View>
  )
}

const styles = StyleSheet.create({})
