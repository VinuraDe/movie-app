import { useState } from "react";
import Heading from "../atoms/headings";
import Input from "../atoms/input";
import Paragraph from "../atoms/text";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string> | null>(null);
  const [status, setStatus] = useState<{
    success: boolean;
    message?: string;
    errors?: string[];
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setErrors(null);

    if (!formData.agree) {
      setStatus({ success: false, message: "You must agree to the terms." });
      return;
    }

    try {
      const res = await fetch("https://textmovieapp.rf.gd/contact_form.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        const fieldErrors: Record<string, string> = {};

        data.errors?.forEach((err: string) => {
          if (err.toLowerCase().includes("first name"))
            fieldErrors.firstName = err;
          else if (err.toLowerCase().includes("last name"))
            fieldErrors.lastName = err;
          else if (err.toLowerCase().includes("email")) fieldErrors.email = err;
          else if (err.toLowerCase().includes("comments"))
            fieldErrors.comments = err;
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
    } catch (error) {
      setStatus({ success: false, message: "Submission failed." });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className=" space-y-2">
      <Heading text="How to reach us" className="text-3xl font-bold mb-3" />
      <Paragraph
        text="Lorem ipsum dolor sit amet, consetetur."
        className="mb-6 text-[#B7B7B7]"
      />
      <div className="flex flex-col md:flex-row space-x-6 pt-6">
        <div className="flex flex-col w-full">
          <label className="text-[#B7B7B7] mb-2 block w-fit">
            First Name *
          </label>
          <Input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mb-1 p-3 bg-[#3C3C3C] text-white rounded-md"
          />
          {errors?.firstName && (
            <p className="text-red-500 text-xs">{errors.firstName}</p>
          )}
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[#B7B7B7] mb-2 block w-fit">Last Name *</label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mb-1 p-3 bg-[#3C3C3C] text-white rounded-md"
          />
          {errors?.firstName && (
            <p className="text-red-500 text-xs">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label className="text-[#B7B7B7] mb-2 block w-fit">Email *</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-1 w-full p-3 bg-[#3C3C3C] text-white rounded-md"
        />
        {errors?.firstName && (
          <p className="text-red-500 text-xs">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col w-full">
        <label className="text-[#B7B7B7] mb-2 block w-fit">Telephone</label>
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mb-4 w-full p-3 bg-[#3C3C3C] text-white rounded-md"
        />
      </div>

      <label className="text-[#B7B7B7] mb-2 block w-fit">Message</label>
      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleChange}
        className="mb-2 w-full p-3 bg-[#3C3C3C] text-white rounded-md max-h-[125px]"
        rows={4}
      />
      {errors?.firstName && (
        <p className="text-red-500 text-xs">{errors.message}</p>
      )}

      <Paragraph text="*required ﬁelds" className="text-sm mb-4" />

      <label className="text-[#B7B7B7] sm:mb-2 mb-6 text-xs w-fit gap-3 flex">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="w-5"
        />
        I agree to the Terms & Conditions
      </label>

      <div className="w-full flex justify-end">
        <button
          type="submit"
          className="bg-[#CC9601] w-60 text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>

      {status && (
        <div
          className={`mt-4 font-bold text-base ${
            status.success ? "text-green-500" : "text-red-500"
          }`}
        >
          {status.message && <p>{status.message}</p>}
        </div>
      )}
    </form>
  );
}

export default ContactForm;
