import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, type ColorTokens } from '../lib/theme';
import { useColorScheme } from 'react-native';

// ---------------------------------------------------------------------------
// Props & State
// ---------------------------------------------------------------------------

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// ---------------------------------------------------------------------------
// Class component (error boundaries require class components in React)
// ---------------------------------------------------------------------------

class ErrorBoundaryInner extends Component<
  ErrorBoundaryProps & { theme: ColorTokens },
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps & { theme: ColorTokens }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, info.componentStack);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const t = this.props.theme;
      const s = makeStyles(t);

      return (
        <View style={s.container}>
          <Text style={s.emoji}>!</Text>
          <Text style={s.title}>Something went wrong</Text>
          <Text style={s.message}>
            An unexpected error occurred. Please try again.
          </Text>
          {__DEV__ && this.state.error && (
            <Text style={s.errorDetail} numberOfLines={4}>
              {this.state.error.message}
            </Text>
          )}
          <TouchableOpacity
            style={s.retryButton}
            onPress={this.handleRetry}
            activeOpacity={0.7}
          >
            <Text style={s.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

// ---------------------------------------------------------------------------
// Wrapper to inject theme via hook
// ---------------------------------------------------------------------------

export default function ErrorBoundary({
  children,
  fallback,
}: ErrorBoundaryProps) {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? colors.dark : colors.light;

  return (
    <ErrorBoundaryInner theme={theme} fallback={fallback}>
      {children}
    </ErrorBoundaryInner>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const makeStyles = (t: ColorTokens) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: t.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 32,
    },
    emoji: {
      fontSize: 48,
      fontWeight: '700',
      color: t.error,
      marginBottom: 16,
      width: 64,
      height: 64,
      borderRadius: 32,
      borderWidth: 3,
      borderColor: t.error,
      textAlign: 'center',
      lineHeight: 58,
      overflow: 'hidden',
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: t.text,
      marginBottom: 8,
      textAlign: 'center',
    },
    message: {
      fontSize: 15,
      color: t.textSecondary,
      textAlign: 'center',
      lineHeight: 22,
      marginBottom: 24,
    },
    errorDetail: {
      fontSize: 12,
      color: t.textTertiary,
      textAlign: 'center',
      fontFamily: 'monospace' as never,
      marginBottom: 24,
      paddingHorizontal: 16,
    },
    retryButton: {
      backgroundColor: t.primary,
      paddingHorizontal: 32,
      paddingVertical: 14,
      borderRadius: 12,
    },
    retryText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: '700',
    },
  });
