import React, {JSX} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

import Header from '../../components/header';
import Banner from '../../components/banner';
import Input from '../../components/input';
import Button from '../../components/button';

import schema from '../../config/validation';

import useAppStore from '../../store/app';

import styles from './styles';

const Signup = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<string>>();
  const setLoadingState = useAppStore(state => state.setLoadingState);

  const navToProducts = () => {
    navigation.navigate('BottomTab');
  };

  const handleFormSubmit = () => {
    setLoadingState();
    setTimeout(() => {
      setLoadingState();
      navToProducts();
    }, 2000);
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <Header />
      <View style={styles.exploreContainer}>
        <TouchableOpacity onPress={navToProducts}>
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
        onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={styles.mt40}>
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
            <View style={styles.mt40} />
            <Button
              disabled={
                values.name === '' ||
                values.email === '' ||
                values.number === '' ||
                values.password === '' ||
                Object.keys(errors).length > 0
              }
              onPress={handleSubmit}
              name="Sign up"
            />
          </View>
        )}
      </Formik>
      <View>
        <View style={styles.mt20} />
        <Text style={styles.account}>
          Have an account? <Text style={styles.loginText}>Login</Text>
        </Text>
        <View style={styles.mt20} />
        <View style={styles.row}>
          <View style={styles.divider} />
          <Text style={styles.account}>or</Text>
          <View style={styles.divider} />
        </View>
        <View style={styles.mt40} />
        <Button onPress={navToProducts} name="Explore our app" />
        <View style={styles.mt20} />
        <Text style={[styles.termsRegular, styles.pb40]}>
          By sigining up you agree to our,{' '}
          <Text style={styles.termsBold}>Terms, Data Policy, </Text>
          and{'\n'}
          <Text style={styles.termsBold}>Cookies Policy</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Signup;
