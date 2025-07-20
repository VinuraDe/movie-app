import { BASE_URL } from "../constants";
import type { ContactFormData, ContactResponse } from "../utils/interfaces";

export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactResponse> {
  const response = await fetch(`${BASE_URL}/contact_form.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  return await response.json();
}
