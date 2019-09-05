import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TextInput, Colors} from 'react-native-paper';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Form,
  Item,
  Input,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/index';

class Login extends Component {
  componentDidMount() {
    Icon.loadFont();
  }

  state = {
    text: 'khalil',
  };
  render() {
    return (
      <Container style={styles.wrapper}>
        <Header style={{backgroundColor: colors.green}}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" size={24} color={colors.white} />
            </Button>
          </Left>

          <Right>
            <Body>
              <Title style={styles.headerText}>Forget password ?</Title>
            </Body>
          </Right>
        </Header>

        <View style={styles.formWrapper}>
          <Form style={styles.form}>
            <Title style={styles.formTitle}>LOG IN</Title>

            <TextInput
              style={styles.TextInputWrapper}
              label="Email Address"
              mode="outlined"
              textContentType="password"
              editable="true"
              value={this.state.text}
              onChangeText={text => this.setState({text: text})}
              theme={{
                colors: {text: colors.white},
              }}
            />
            <TextInput
              style={styles.TextInputWrapper}
              label="Password"
              mode="outlined"
              textContentType="password"
              editable="true"
              value={this.state.text}
              onChangeText={text => this.setState({text: text})}
              theme={{
                colors: {text: colors.white},
              }}
            />
            <Button style={styles.buttonWrapper}>
              <Text> LOGIN </Text>
            </Button>
          </Form>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '200',
    color: colors.white,
  },
  formWrapper: {
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: colors.green,
  },
  form: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formTitle: {
    color: colors.white,
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  TextInputWrapper: {
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: '800',
  },
  buttonWrapper: {
    backgroundColor: colors.white,
    width: '80%',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
