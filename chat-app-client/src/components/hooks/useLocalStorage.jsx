import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
	const PREFIX = "chat-app-";
  const prefixedKey = PREFIX + key;

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey);
    if (jsonValue != null) {
      return JSON.parse(jsonValue);
    } else {
			return initialValue;
		}
  });

	useEffect(() => {
		localStorage.getItem(prefixedKey, JSON.stringify(value));
	}, [prefixedKey, value]);

	return [value, setValue];
};
export default useLocalStorage;
