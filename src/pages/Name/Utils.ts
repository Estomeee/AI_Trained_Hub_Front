export const VALUEFLAG = "button";

export const check = (file: boolean, model: string) => {
  if (file && Boolean(model) && model != VALUEFLAG) return true;
  return false;
};

