const API_BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/auth`;

async function authRequest(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || data.error || "Request failed.");
  }

  return data;
}

export function loginApi({ email, password }) {
  return authRequest("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function signupApi({ fullName, email, password }) {
  return authRequest("/signup", {
    method: "POST",
    body: JSON.stringify({ fullName, email, password }),
  });
}

export function completeOnboardingApi({
  fullName,
  bio,
  skillYouHave,
  skillYouWant,
}) {
  return authRequest("/onboarding", {
    method: "POST",
    body: JSON.stringify({
      fullName,
      bio,
      skillYouHave,
      skillYouWant,
    }),
  });
}

export function getCurrentUserApi() {
  return authRequest("/me");
}

export function logoutApi() {
  return authRequest("/logout", {
    method: "POST",
  });
}