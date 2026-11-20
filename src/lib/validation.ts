export type ContactValues = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  company: string; // honeypot
};

export const emptyContact: ContactValues = {
  name: "",
  email: "",
  service: "",
  budget: "",
  message: "",
  company: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(values: ContactValues): Partial<Record<keyof ContactValues, string>> {
  const errors: Partial<Record<keyof ContactValues, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.service) errors.service = "Choose a service.";
  if (values.message.trim().length < 12) errors.message = "Tell us a little more (at least 12 characters).";
  return errors;
}
