const base = "http://localhost:3000";
export const getUserDataByEmail = async (email: string) => {
  try {
    const response = await fetch(
      `${base}/api/users?email=${encodeURIComponent(email)}`,
      {
        method: "GET",
      }
    );

    if (response.ok) {
      return await response.json();
    } else {
      console.error("Failed to fetch user data:", response.statusText);
      return null;
    }
  } catch (error) {
    console.error("Error during fetching user data:", error);
    return null;
  }
};
