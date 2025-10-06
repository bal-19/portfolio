import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import FadeContent from "@/components/lib/FadeContent";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            // Ganti endpoint berikut dengan endpoint Formspree milikmu
            const res = await fetch("https://formspree.io/f/xzzjvjkq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                toast({
                    title: "Message sent!",
                    description:
                        "Thank you for your message. I'll get back to you soon.",
                });
                setForm({ name: "", email: "", message: "" });
            } else {
                toast({
                    title: "Failed to send",
                    description: "Please try again later.",
                    variant: "destructive",
                });
            }
        } catch {
            toast({
                title: "Network error",
                description: "Please check your connection.",
                variant: "destructive",
            });
        }
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <FadeContent
                blur={false}
                duration={800}
                easing="ease-out"
                delay={120}
                threshold={0.3}
                initialOpacity={0}
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Let's <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Interested in working together or just want to say hi?
                        Drop me a message or reach out via social media!
                    </p>
                    <div className="flex flex-col md:flex-row gap-12 items-stretch">
                        {/* Contact Info Card */}
                        <div className="flex-1 bg-background/80 border-2 border-transparent bg-clip-padding rounded-xl shadow-lg p-8 flex flex-col justify-between backdrop-blur-md hover:border-primary transition-all duration-300">
                            <h3 className="text-2xl font-semibold mb-6 text-primary">
                                Contact Info
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-4 rounded-full bg-primary/20 shadow-md">
                                        <Mail className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <a
                                            href="mailto:iqbalhaidee19@gmail.com"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            iqbalhaidee19@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-4 rounded-full bg-primary/20 shadow-md">
                                        <Phone className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Phone</h4>
                                        <a
                                            href="tel:+6287856754195"
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            (+62) 878-5675-4195
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-4 rounded-full bg-primary/20 shadow-md">
                                        <MapPin className="h-8 w-8 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">
                                            Location
                                        </h4>
                                        <span className="text-muted-foreground">
                                            Pesanggrahan, Batu City, East Java
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8">
                                <h4 className="font-medium mb-4">
                                    Connect With Me
                                </h4>
                                <div className="flex space-x-6">
                                    <a
                                        href="https://www.linkedin.com/in/iqbal-haidee-a4a9742a3"
                                        target="_blank"
                                        className="hover:scale-110 transition-transform"
                                    >
                                        <Linkedin className="h-7 w-7 text-primary" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/i.iqbal19/"
                                        target="_blank"
                                        className="hover:scale-110 transition-transform"
                                    >
                                        <Instagram className="h-7 w-7 text-primary" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Contact Form Card */}
                        <div className="flex-1 bg-card/90 border-2 border-primary/30 rounded-xl shadow-lg p-8 flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold mb-6 text-primary">
                                Send a Message
                            </h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="Your Name..."
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                        placeholder="example@gmail.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                        placeholder="Hello, I'd like to talk about..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={cn(
                                        "cosmic-button w-full flex items-center justify-center gap-2"
                                    )}
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </FadeContent>
        </section>
    );
};
