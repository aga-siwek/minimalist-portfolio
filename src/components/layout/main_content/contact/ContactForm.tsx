import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
    return (
        <section id="contact" className="w-full max-w-2xl mx-auto p-6 scroll-mt-20">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold tracking-tight">Contact Form</h2>
            </div>

            <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-destructive">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-destructive">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                </div>

                {/* Company - Full Width on Mobile, Half on Desktop */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="company" className="text-sm font-medium">
                        Company
                    </label>
                    <input
                        type="text"
                        id="company"
                        placeholder="Your Company Inc."
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                </div>

                {/* Message - Full Width */}
                <div className="flex flex-col gap-2 md:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium">
                        Message <span className="text-destructive">*</span>
                    </label>
                    <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project..."
                        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[120px]"
                    />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                    <Button className="w-full md:w-max px-8 gap-2" type="submit">
                        Send Message
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </form>
        </section>
    );
}