import { base } from "../constants";

export const createUser = async (user: { name: string; email: string }) => {
  try {
    const response = await fetch(`${base}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    });

    if (!response.ok) {
      console.error("Failed to create or fetch user:", response.statusText);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error during user creation/fetching:", error);
    return null;
  }
};
