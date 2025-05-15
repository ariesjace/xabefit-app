import React from 'react';
import { ActivityIndicator, Text, TextStyle, TouchableOpacity, useColorScheme, ViewStyle } from 'react-native';
import { borderRadius, colors, shadows, spacing, typography } from '../../styles/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button = ({
  onPress,
  title,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}: ButtonProps) => {
  const colorScheme = useColorScheme() || 'light';
  const theme = colors[colorScheme];

  const getButtonStyles = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      borderRadius: borderRadius.md,
      alignItems: 'center',
      justifyContent: 'center',
      opacity: disabled ? 0.6 : 1,
      ...shadows[colorScheme].small,
    };

    const sizeStyles: Record<ButtonSize, ViewStyle> = {
      small: { paddingVertical: spacing.xs, paddingHorizontal: spacing.sm },
      medium: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md },
      large: { paddingVertical: spacing.md, paddingHorizontal: spacing.lg },
    };

    const variantStyles: Record<ButtonVariant, ViewStyle> = {
      primary: {
        backgroundColor: theme.primary,
      },
      secondary: {
        backgroundColor: theme.secondary,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.primary,
      },
      ghost: {
        backgroundColor: 'transparent',
        ...shadows[colorScheme].small,
      },
    };

    return {
      ...baseStyle,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  const getTextColor = (): string => {
    if (variant === 'outline' || variant === 'ghost') {
      return theme.primary;
    }
    return theme.background;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      style={[getButtonStyles(), style]}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} size="small" />
      ) : (
        <Text
          style={[
            typography.bodyBold,
            { color: getTextColor() },
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}; 