import React, {JSX} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import schema from '../../config/validation';

// components
import Header from '../../components/header';
import Banner from '../../components/banner';
import Input from '../../components/input';
import Button from '../../components/button';

import styles from './styles';

// clear input
// disabled button and show as greyed out
// refactor
// hide and show password icon
// validated the password (alphanumeric, special character, length)
// centralise text font

 const Signup = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <Header />
      <View style={styles.exploreContainer}>
        <TouchableOpacity>
          <Text style={styles.exploreText}>Explore app</Text>
        </TouchableOpacity>
      </View>
      <Banner
        header={
          <Text style={styles.bannerText}>
            Welcome to{'\n'}Pantry by Marble
          </Text>
        }
        withDescription
      />
      <Formik
        validationSchema={schema}
        initialValues={{name: '', email: '', number: '', password: ''}}
        onSubmit={() => navigation.navigate('BottomTab')}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={{marginTop: 40}}>
            <Input
              name="Full name"
              setText={handleChange('name')}
              text={values.name}
              type="default"
              error={errors.name}
            />
            <Input
              name="Email"
              setText={handleChange('email')}
              text={values.email}
              type="email-address"
              error={errors.email}
            />
            <Input
              name="Mobile number"
              setText={handleChange('number')}
              text={values.number}
              type="numeric"
              error={errors.number}
            />
            <Input
              name="Create password"
              setText={handleChange('password')}
              text={values.password}
              type="default"
              secureTextEntry
              error={errors.password}
            />
            <View style={{marginTop: 40}} />
            {console.log({values})}
            {console.log({error: Object.keys(errors).length > 0})}
            <Button
              disabled={
                (values.name === '' ||
                values.email  === '' ||
                values.number  === '' ||
                values.password === '') ||
                Object.keys(errors).length > 0
              }
              onPress={handleSubmit}
              name="Sign up"
            />
          </View>
        )}
      </Formik>
      <View>
        <View style={{marginTop: 20}} />
        <Text
          style={{
            color: '#54634B',
            fontFamily: 'Avenir',
            fontSize: 14,
            lineHeight: 20,
            textAlign: 'center',
          }}>
          Have an account?{' '}
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 14,
              lineHeight: 20,
              fontWeight: '800',
            }}>
            Login
          </Text>
        </Text>
        <View style={{marginTop: 20}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 1,
              borderWidth: 0.8,
              width: '40%',
              borderColor: '#54634B',
            }}
          />
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 14,
              lineHeight: 20,
            }}>
            or
          </Text>
          <View
            style={{
              height: 1,
              borderWidth: 0.8,
              width: '40%',
              borderColor: '#54634B',
            }}
          />
        </View>
        <View style={{marginTop: 40}} />
        <Button onPress={() => {}} name="Explore our app" />
        <View style={{marginTop: 20}} />
        <Text
          style={{
            color: '#54634B',
            fontFamily: 'Avenir',
            fontSize: 12,
            lineHeight: 16,
            textAlign: 'center',
            paddingBottom: 40
          }}>
          By sigining up you agree to our,{' '}
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 12,
              lineHeight: 16,
              fontWeight: '800',
            }}>
            Terms, Data Policy,{' '}
          </Text>
          and{'\n'}
          <Text
            style={{
              color: '#54634B',
              fontFamily: 'Avenir',
              fontSize: 12,
              lineHeight: 16,
              fontWeight: '800',
            }}>
            Cookies Policy
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

export default Signup;
