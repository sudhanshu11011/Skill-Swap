const API_BASE_URL = "/api/auth";

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

export function loginUser({ email, password }) {
  return authRequest("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function signupUser({ fullName, email, password }) {
  return authRequest("/signup " );
}

export function completeOnboarding({
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

export function getCurrentUser() {
  return authRequest("/me");
}

export function logoutUser() {
  return authRequest("/logout", {
    method: "POST",
  });
}