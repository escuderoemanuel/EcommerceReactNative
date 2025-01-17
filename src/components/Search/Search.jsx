import { StyleSheet, View, TextInput, Pressable, Text, Image } from 'react-native'
import { useState } from 'react'
import { colors } from '../../global/colors'
import trash from '../../../assets/img/trash2.png'
import search from '../../../assets/img/search.png'

const Search = ({ onSearchHandlerEvent }) => {
  const [searchInput, setSearchInput] = useState('')
  const [error, setError] = useState('')

  const onSearchHandler = () => {
    const regEx = /[^\w\s]/
    if ((regEx.test(searchInput) || searchInput === '')) {
      setError('Only letters and numbers are allowed!')
      setSearchInput('')
    } else {
      setError('')
      onSearchHandlerEvent(searchInput)
      setSearchInput('')
    }
  }

  const onResetSearchHandler = () => {
    setSearchInput('')
    setError('')
    onSearchHandlerEvent(searchInput)
  }

  return (
    <View style={styles.searchContainerGlobal}>
      <View style={styles.searchContainer}>

        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor={styles.searchInput.color}
          onChangeText={setSearchInput}
          value={searchInput}
        />

        <View style={styles.searchIcons}>

          <Pressable onPress={onResetSearchHandler}>
            <Image style={styles.trashCart} source={trash} />
          </Pressable>
          <Pressable onPress={() => { onSearchHandler(searchInput) }}>
            <Image style={styles.searchCart} source={search} />
          </Pressable>

        </View>
      </View >
      {
        error &&
        <View style={styles.errorMessageContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>

      }
    </View>
  )
}


export default Search

const styles = StyleSheet.create({
  searchContainerGlobal: {
    width: '100%',
    padding: 10,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: colors.darkBlue,
    borderWidth: 1,
    borderColor: colors.textLight,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchInput: {
    width: '80%',
    color: colors.textLight,
  },
  searchIcons: {
    flexDirection: 'row',
  },
  errorMessageContainer: {
    padding: 10,
    backgroundColor: colors.redLabel,
    borderRadius: 7,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.greyLabel,
  },
  trashCart: {
    width: 40,
    height: 30,
  },
  searchCart: {
    width: 25,
    height: 30,
  }
}
)