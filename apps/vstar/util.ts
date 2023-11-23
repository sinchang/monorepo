export const getSessionStorage = (key:string) => {
  if (!key) {
    return;
  }
  return JSON.parse(sessionStorage.getItem(key) || "{}");
}

export const setSessionStorage = (key:string, value:string) => {
  if (!key && !value) {
    return;
  }
  sessionStorage.setItem(key, JSON.stringify(value));
}