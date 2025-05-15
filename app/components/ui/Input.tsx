import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
    useColorScheme,
    View,
    ViewStyle,
} from 'react-native';
import { borderRadius, colors, shadows, spacing, typography } from '../../styles/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  labelStyle?: TextStyle;
}

export const Input = ({
  label,
  error,
  containerStyle,
  inputStyle,
  labelStyle,
  ...props
}: InputProps) => {
  const colorScheme = useColorScheme() || 'light';
  const theme = colors[colorScheme];

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: spacing.md,
    },
    label: {
      ...typography.bodyBold,
      color: theme.text,
      marginBottom: spacing.xs,
    },
    input: {
      backgroundColor: theme.surface,
      borderRadius: borderRadius.md,
      borderWidth: 1,
      borderColor: error ? theme.error : theme.border,
      padding: spacing.md,
      color: theme.text,
      ...typography.body,
      ...shadows[colorScheme].small,
    },
    error: {
      color: theme.error,
      ...typography.caption,
      marginTop: spacing.xs,
    },
  });

  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label}
        </Text>
      )}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholderTextColor={theme.textSecondary}
        {...props}
      />
      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}
    </View>
  );
}; 