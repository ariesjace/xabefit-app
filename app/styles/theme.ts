import { StyleSheet } from 'react-native';

export const colors = {
  light: {
    primary: '#4A90E2',
    secondary: '#6C63FF',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#1A1A1A',
    textSecondary: '#757575',
    border: '#E0E0E0',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107'
  },
  dark: {
    primary: '#64B5F6',
    secondary: '#7C4DFF',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#333333',
    success: '#66BB6A',
    error: '#EF5350',
    warning: '#FFD54F'
  }
};

export const shadows = {
  light: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    }
  },
  dark: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    }
  }
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999
};

export const typography = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontFamily: 'Rubik_700Bold',
    letterSpacing: -1,
  },
  h2: {
    fontSize: 24,
    fontFamily: 'Rubik_600SemiBold',
    letterSpacing: -0.5,
  },
  h3: {
    fontSize: 20,
    fontFamily: 'Rubik_500Medium',
    letterSpacing: -0.25,
  },
  body: {
    fontSize: 16,
    fontFamily: 'Rubik_400Regular',
  },
  bodyBold: {
    fontSize: 16,
    fontFamily: 'Rubik_500Medium',
  },
  caption: {
    fontSize: 14,
    fontFamily: 'Rubik_400Regular',
  }
}); 