import store from "../store";

export const SET_NORMAL_FORM = (data) => {
  const { FORM } = store.getState();
  return {
    type: "SET_NORMAL_FORM",
    payload: { ...FORM, normal: { ...FORM.normal, ...data } },
  };
};

export const SET_PUBLIC_FORM = (data) => {
  const { FORM } = store.getState();
  return {
    type: "SET_PUBLIC_FORM",
    payload: { ...FORM, public: { ...FORM.public, ...data } },
  };
};

export const CLEAR_FORM = (data) => {
  return {
    type: "CLEAR_FORM",
  };
};
