import React, {JSX, useState, useRef} from 'react';
import {View, Text, TextInput, Animated, TouchableOpacity} from 'react-native';

// icons
import HideIcon from '../../assets/icons/Hide.svg';
import CloseIcon from '../../assets/icons/Close.svg';

import COLOURS from '../../assets/colors';

import styles from './styles';

interface Props {
  name: string;
  type: 'default' | 'numeric' | 'email-address';
  text: string;
  setText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
}

const Input = ({
  name,
  type,
  text,
  setText,
  error,
  secureTextEntry,
}: Props): JSX.Element => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(secureTextEntry);

  const animPosition = useRef(new Animated.Value(text ? 1 : 0)).current;

  const animate = (toValue: number) => {
    Animated.timing(animPosition, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const onFocus = () => {
    setFocus(true);
    animate(1);
  };

  const onBlur = () => {
    setFocus(false);
    if (!text) {
      animate(0);
    }
  };

  const onChangeText = (text: string) => {
    setText(text);
    if (text) {
      animate(1);
    } else {
      animate(focus ? 1 : 0);
    }
  };

  return (
    <View>
      <Animated.Text
        style={[
          styles.name,
          {
            color: COLOURS.OLIVE,
            fontFamily: 'Avenir',
            lineHeight: 20,
            top: animPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [30, 2],
            }),
            fontSize: animPosition.interpolate({
              inputRange: [0, 1],
              outputRange: [14, 12],
            }),
          },
        ]}>
        {name}
      </Animated.Text>
      <View style={styles.prefixContainer}>
        {type === 'numeric' && text && (
          <Text style={styles.prefix}>+ 27 |</Text>
        )}
        <TextInput
          keyboardType={type}
          style={styles.input}
          onFocus={onFocus}
          onBlur={onBlur}
          value={text}
          onChangeText={onChangeText}
          secureTextEntry={showPassword}
        />
        <Animated.View
          style={[styles.rightComponent, {opacity: text ? animPosition : 0}]}>
          <TouchableOpacity
            onPress={() => {
              secureTextEntry ? setShowPassword(prev => !prev) : setText('');
            }}>
            {secureTextEntry ? <HideIcon /> : <CloseIcon />}
          </TouchableOpacity>
        </Animated.View>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
