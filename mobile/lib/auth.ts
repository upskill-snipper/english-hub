import * as SecureStore from 'expo-secure-store';

const AUTH_TOKEN_KEY = 'eh_auth_token';
const USER_ID_KEY = 'eh_user_id';

export async function getAuthToken(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(AUTH_TOKEN_KEY);
  } catch (err) {
    console.warn('Failed to read auth token', err);
    return null;
  }
}

export async function setAuthToken(token: string | null): Promise<void> {
  try {
    if (token === null) {
      await SecureStore.deleteItemAsync(AUTH_TOKEN_KEY);
    } else {
      await SecureStore.setItemAsync(AUTH_TOKEN_KEY, token, {
        keychainAccessible: SecureStore.WHEN_UNLOCKED,
      });
    }
  } catch (err) {
    console.warn('Failed to write auth token', err);
  }
}

export async function getUserId(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(USER_ID_KEY);
  } catch {
    return null;
  }
}

export async function setUserId(userId: string | null): Promise<void> {
  try {
    if (userId === null) {
      await SecureStore.deleteItemAsync(USER_ID_KEY);
    } else {
      await SecureStore.setItemAsync(USER_ID_KEY, userId);
    }
  } catch (err) {
    console.warn('Failed to write user id', err);
  }
}

export async function isAuthenticated(): Promise<boolean> {
  const token = await getAuthToken();
  return token !== null && token.length > 0;
}
