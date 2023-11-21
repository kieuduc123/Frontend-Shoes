import { useState } from "react";

export default function useToggleValue(initialValue = false) {
    const [value,setValue] = useState(initialValue);
    const handleTogglePassword = () => {
      setValue(!value);
    }
    return {
        value,
        handleTogglePassword,
    }
}
