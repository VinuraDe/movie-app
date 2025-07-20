import Heading from "../atoms/headings";
import Input from "../atoms/input";
import Paragraph from "../atoms/text";
import { useContactForm } from "../../hooks/useContactForm";

function ContactForm() {
  const { formData, handleChange, handleSubmit, loading, errors, status } =
    useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Heading text="How to reach us" className="text-3xl font-bold mb-3" />
      <Paragraph
        text="Lorem ipsum dolor sit amet, consetetur."
        className="mb-6 text-[#B7B7B7]"
      />

      <div className="flex flex-col md:flex-row space-x-6 pt-6">
        <div className="flex flex-col w-full">
          <label className="text-[#B7B7B7] mb-2 block">First Name *</label>
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
          <label className="text-[#B7B7B7] mb-2 block">Last Name *</label>
          <Input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mb-1 p-3 bg-[#3C3C3C] text-white rounded-md"
          />
          {errors?.lastName && (
            <p className="text-red-500 text-xs">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label className="text-[#B7B7B7] mb-2 block">Email *</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-1 w-full p-3 bg-[#3C3C3C] text-white rounded-md"
        />
        {errors?.email && (
          <p className="text-red-500 text-xs">{errors.email}</p>
        )}
      </div>

      <div className="flex flex-col w-full">
        <label className="text-[#B7B7B7] mb-2 block">Telephone</label>
        <Input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mb-4 w-full p-3 bg-[#3C3C3C] text-white rounded-md"
        />
        {errors?.phone && (
          <p className="text-red-500 text-xs">{errors.phone}</p>
        )}
      </div>

      <label className="text-[#B7B7B7] mb-2 block">Message</label>
      <textarea
        name="comments"
        value={formData.comments}
        onChange={handleChange}
        className="mb-2 w-full p-3 bg-[#3C3C3C] text-white rounded-md max-h-[125px]"
        rows={4}
      />
      {errors?.comments && (
        <p className="text-red-500 text-xs">{errors.comments}</p>
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
          className="bg-[#CC9601] w-60 text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              ></path>
            </svg>
          )}
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
