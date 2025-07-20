
export type ShowResult = {
  show: {
    name: string;
    summary: string;
    image?: { medium?: string };
  };
};

export type SavedShow = {
  name: string;
  summary: string;
  image: string;
};

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  comments: string;
  agree: boolean;
};

export type ContactResponse = {
  success: boolean;
  message?: string;
  errors?: string[];
};