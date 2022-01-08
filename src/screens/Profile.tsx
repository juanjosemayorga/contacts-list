import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import ContactThumbnail from '../components/ContactThumbnail'
import DetailListItem from '../components/DetailListItem'

import { fetchRandomContact } from '../utils/api'

import colors from '../utils/colors'

import { Contact } from '../interfaces/interfaces'

interface ProfileState {
  contact: Contact;
}

const initialState: ProfileState = {
  contact: {} as Contact,
}

export const Profile = () => {

  const [state, setState] = useState(initialState)
  const { contact: { avatar, name, email, phone, cell } } = state

  useEffect(() => {
    fetchRandomContact()
      .then(contact => setState({ contact }))
      .catch(err => console.log(err))

    return () => {
      setState(initialState)
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail
          avatar={avatar || 'https://picsum.photos/200'}
          name={name}
          phone={phone}
        />
      </View>
      <View style={styles.detailsSection}>
        <DetailListItem icon="mail" title="Email" subtitle={email} />
        <DetailListItem icon="phone" title="Work" subtitle={phone} />
        <DetailListItem icon="smartphone" title="Personal" subtitle={cell} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.blue,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: 'white',
  },
});