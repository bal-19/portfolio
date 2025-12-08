import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Github, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import FadeContent from "@/components/lib/FadeContent";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

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
            const res = await fetch("https://formspree.io/f/xzzjvjkq", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                toast({
                    title: "Message sent! 🎉",
                    description:
                        "Thank you for reaching out. I'll get back to you within 24 hours.",
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

    const copyEmail = () => {
        navigator.clipboard.writeText("iqbalhaidee19@gmail.com");
        setCopiedEmail(true);
        toast({
            title: "Email copied!",
            description: "Email address copied to clipboard.",
        });
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const socialLinks = [
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/in/iqbal-haidee-a4a9742a3",
            color: "hover:text-blue-500",
        },
        {
            name: "Instagram",
            icon: Instagram,
            href: "https://www.instagram.com/i.iqbal19/",
            color: "hover:text-pink-500",
        },
        {
            name: "GitHub",
            icon: Github,
            href: "#", // Ganti dengan GitHub URL Anda
            color: "hover:text-slate-400",
        },
    ];

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <FadeContent
                blur={false}
                duration={800}
                easing="ease-out"
                delay={120}
                threshold={0.1}
                initialOpacity={0}
            >
                <div className="container mx-auto max-w-6xl">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Let's <span className="text-primary">Connect</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
                        </p>
                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm text-green-500 font-medium">Available for projects</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        {/* Left Side - Contact Info */}
                        <div className="space-y-6">
                            {/* Main Contact Card */}
                            <div className="bg-gradient-to-br from-background to-secondary/50 border border-primary/20 rounded-2xl shadow-xl p-8 hover:border-primary/40 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="text-primary">Get In Touch</span>
                                </h3>

                                <div className="space-y-4">
                                    {/* Email */}
                                    <div className="group flex items-center justify-between gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-all duration-300">
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                                                <Mail className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-medium text-sm text-muted-foreground">Email</h4>
                                                <a
                                                    href="mailto:iqbalhaidee19@gmail.com"
                                                    className="text-foreground hover:text-primary transition-colors font-medium"
                                                >
                                                    iqbalhaidee19@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                        <button
                                            onClick={copyEmail}
                                            className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                                            title="Copy email"
                                        >
                                            {copiedEmail ? (
                                                <Check className="h-5 w-5 text-green-500" />
                                            ) : (
                                                <Copy className="h-5 w-5 text-muted-foreground" />
                                            )}
                                        </button>
                                    </div>

                                    {/* Phone */}
                                    <div className="group flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-all duration-300">
                                        <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-sm text-muted-foreground">Phone</h4>
                                            <a
                                                href="tel:+6287856754195"
                                                className="text-foreground hover:text-primary transition-colors font-medium"
                                            >
                                                (+62) 878-5675-4195
                                            </a>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="group flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-all duration-300">
                                        <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-sm text-muted-foreground">Location</h4>
                                            <span className="text-foreground font-medium">
                                                Pesanggrahan, Batu City, East Java
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Card */}
                            <div className="bg-gradient-to-br from-background to-secondary/50 border border-primary/20 rounded-2xl shadow-xl p-8 hover:border-primary/40 transition-all duration-300">
                                <h4 className="font-semibold mb-4 text-lg">Follow Me On</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={cn(
                                                "group relative p-4 rounded-xl bg-background/50 hover:bg-background transition-all duration-300 hover:scale-110",
                                                social.color
                                            )}
                                            title={social.name}
                                        >
                                            <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-inherit transition-colors" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Response Time Info */}
                            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-primary/20 rounded-xl p-4">
                                <p className="text-sm text-muted-foreground">
                                    ⚡ <span className="font-semibold text-foreground">Quick Response:</span> I typically reply within 24 hours
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="bg-gradient-to-br from-background to-secondary/50 border border-primary/30 rounded-2xl shadow-2xl p-8 sticky top-24">
                            <h3 className="text-2xl font-bold mb-6">
                                Send a <span className="text-primary">Message</span>
                            </h3>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={form.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Your Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-2"
                                    >
                                        Your Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all"
                                        placeholder="Tell me about your project or just say hi..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={cn(
                                        "cosmic-button w-full flex items-center justify-center gap-2 group",
                                        isSubmitting && "opacity-50 cursor-not-allowed"
                                    )}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </FadeContent>
        </section>
    );
};