// hooks/useContactForm.ts

import { useState } from "react";
import type { ContactFormData, ContactResponse } from "../utils/interfaces";
import { submitContactForm } from "../api/contact-api";

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string> | null>(null);
  const [status, setStatus] = useState<ContactResponse | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrors(null);

    if (!formData.agree) {
      setStatus({ success: false, message: "You must agree to the terms." });
      setLoading(false);
      return;
    }

    try {
      const data = await submitContactForm(formData);

      if (!data.success) {
        const fieldErrors: Record<string, string> = {};

        data.errors?.forEach((err) => {
          const lower = err.toLowerCase();
          if (lower.includes("first name")) fieldErrors.firstName = err;
          else if (lower.includes("last name")) fieldErrors.lastName = err;
          else if (lower.includes("email")) fieldErrors.email = err;
          else if (lower.includes("comments")) fieldErrors.comments = err;
          else if (lower.includes("phone")) fieldErrors.phone = err;
          else fieldErrors.general = err;
        });

        setErrors(fieldErrors);
        setStatus({ success: false, message: "Please fix the errors above." });
      } else {
        setStatus({ success: true, message: data.message });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          comments: "",
          agree: false,
        });
      }
    } catch {
      setStatus({ success: false, message: "Submission failed." });
    }

    setLoading(false);
  };

  return { formData, handleChange, handleSubmit, loading, errors, status };
}
