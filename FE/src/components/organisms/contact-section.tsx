import ContactForm from "../molecules/contact-form";
import GoogleMap from "../molecules/location-map";

function ContactSection() {
  return (
    <div className="flex flex-col lg:flex-row w-full  bg-black lg:px-28 md:p-10 p-6 md:gap-14 items-end gap-6 pb-20">
      <div className="lg:w-2/5 w-full h-full mb-6 sm:mb-0">
        <ContactForm />
      </div>
      <div className="lg:w-3/5 w-full h-[588px]">
        <GoogleMap />
      </div>
    </div>
  );
}

export default ContactSection;
