// Function to reload the session, for example when the user logs in or logs out.
export const reloadSession = () => {
  const event = new Event("visibilitychange");
  document.dispatchEvent(event);
};
