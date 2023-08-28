export type authState = {
  signinData: any;
  signinSucess: boolean | null;
  signinFailed: boolean | null;
  signupSucess: boolean | null;
  signupFailed: boolean | null;
  message: string | null;
  loading: boolean;
};

export type signinPayload = {
  email: string;
  password: string;
};

export type signupPayload = {
  fullname: string;
  email: string;
  password: string;
};
