const FormReducers = (state = {}, action) => {
  switch (action.type) {
    case "SET_NORMAL_FORM":
      return (state = {
        ...action.payload,
      });
    case "SET_PUBLIC_FORM":
      return (state = {
        ...action.payload,
      });
    case "CLEAR_FORM":
      return (state = {});
    default:
      return state;
  }
};
export default FormReducers;
