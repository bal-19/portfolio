import { CONTACT } from "../constants";

const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                Contact <span className="text-neutral-500">Me</span>
            </h2>
            <div className="text-center tracking-tighter">
                <p className="my-4">{CONTACT.address}</p>
                <p className="my-4">{CONTACT.phoneNo}</p>
                <a
                    href={`mailto:${CONTACT.email}`}
                    target="_blank"
                    rel="noreferrer"
                    className="border-b"
                >
                    {CONTACT.email}
                </a>
            </div>
        </div>
    );
};

export default Contact;
