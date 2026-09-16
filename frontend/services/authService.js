import {
  loginApi,
  signupApi,
  completeOnboardingApi,
  getCurrentUserApi,
  logoutApi,
} from "../apis/authApi";

export function loginUser(credentials) {
  return loginApi(credentials);
}

export function signupUser(userData) {
  return signupApi(userData);
}

export function completeOnboarding(profileData) {
  return completeOnboardingApi(profileData);
}

export function getCurrentUser() {
  return getCurrentUserApi();
}

export function logoutUser() {
  return logoutApi();
}