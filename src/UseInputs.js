const useInputs = (setEventData) => {
    const setEventInputs = (value, key) => {
      setEventData((prev) => {
        return { ...prev, [key]: value }
      })
    }
    return { setEventInputs }
  }
  export default useInputs