import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import colors from '../styles/index';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class LoggedOut extends Component {
  componentDidMount() {
    Icon.loadFont();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Welcome to Airbnb.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            color={colors.white}
            style={styles.button}
            icon="person"
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Continue with Facebook
          </Button>
          <Button
            color={colors.white}
            style={styles.button}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Create account
          </Button>
        </View>

        <View style={styles.OptionContainer}>
          <Button mode="text" style={styles.option}>
            More options:
          </Button>
          <Text style={styles.optionDetail}>
            By tapping Continue,Create Account or More options,I agree to
            AirBnb's Terms of service ,Payement Terms of service ,Privacy Policy
            ,and Nondiscrimination Policy.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: `${colors.green}`,
  },
  headerContainer: {
    display: 'flex',
    marginTop: 180,
    padding: 20,
    width: '100%',
  },
  header: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.white,
    letterSpacing: 3,
    marginTop: 30,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
    display: 'flex',
    width: '80%',
  },
  button: {
    color: `${colors.green}`,
    borderRadius: 30,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: `${colors.black}`,
  },
  OptionContainer: {
    display: 'flex',
    width: '100%',
    padding: 20,
  },
  option: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.white,
    letterSpacing: 1,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  optionDetail: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.white,
    letterSpacing: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
export default LoggedOut;
