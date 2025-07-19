import Heading from "../atoms/headings";
import Input from "../atoms/input";
import Paragraph from "../atoms/text";

function ContactForm() {
  return (
    <div>
      <Heading
        text="How to reach us"
        className="text-3xl font-bold text-white mb-3"
      />
      <Paragraph
        text={"Lorem ipsum dolor sit amet, consetetur."}
        className="mb-6 text-[#B7B7B7]"
      />
      <div className="flex flex-col md:flex-row space-x-6 pt-6">
        <div className="flex flex-col w-full">
          <label className="text-[#B7B7B7]  mb-2 block w-fit">
            First Name *
          </label>
          <Input
            type="text"
            className="mb-4 p-3 bg-[#3C3C3C] text-white rounded-md"
          />
        </div>

        <div className="flex flex-col w-full">
          <label className="text-[#B7B7B7]  mb-2 block w-fit">
            Last Name *
          </label>
          <Input
            type="text"
            className="mb-4 p-3 bg-[#3C3C3C] text-white rounded-md"
          />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <label className="text-[#B7B7B7]  mb-2 block w-fit">Email *</label>
        <Input
          type="email"
          className="mb-4 w-full p-3 bg-[#3C3C3C] text-white rounded-md"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="text-[#B7B7B7]  mb-2 block w-fit">Telephone</label>
        <Input
          type="number"
          className="mb-4 w-full p-3 bg-[#3C3C3C] text-white rounded-md"
        />
      </div>
      <label className="text-[#B7B7B7]  mb-2 block w-fit">Message</label>
      <textarea
        className="mb-2 w-full p-3 bg-[#3C3C3C] text-white rounded-md max-h-[125px]"
        rows={4}
      />
      <Paragraph text={"*required ﬁelds"} className="text-sm mb-4" />
      <label className="text-[#B7B7B7] sm:mb-2 mb-6 text-xs w-fit gap-3 flex">
        <input type="checkbox" name="agree" className="w-5" />I agree to the
        Terms & Conditions
      </label>
      <div className="w-full flex justify-end">
        <button className="bg-[#CC9601] w-60 text-white px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactForm;
