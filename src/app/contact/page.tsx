
import ContactDetails from "./ContactDetails";
import Skills from "./Skills";

export default function Contact() {
  return (
    <div className="px-4 py-4 font-serif">
      <ContactDetails />
      <div className="divider divider-primary" />
      <Skills />
    </div>
  );
}
