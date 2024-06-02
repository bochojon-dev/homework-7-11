export const INC = "INC";
export const DEC = "DEC";
export const RESET = "RESET";

export const incCounter = (payload) => {
  return {
    type: INC,
    payload,
  };
};
export const resetCounter = () => {
  return {
    type: RESET,
  };
};
