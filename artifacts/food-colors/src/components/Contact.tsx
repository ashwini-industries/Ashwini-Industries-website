import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";

const PRODUCTS = [
  "Tartrazine",
  "Carmoisine",
  "Amaranth",
  "Ponceau 4R",
  "Sunset Yellow FCF",
  "Allura Red",
  "Brilliant Blue FCF",
];

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().min(2, "Company name is required."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().optional(),
  country: z.string().min(2, "Country is required."),
  quantity: z.string().optional(),
  products: z.array(z.string()).min(1, "Select at least one product."),
  message: z.string().optional(),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      country: "",
      quantity: "",
      products: [],
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        toast.success("Inquiry Sent!", {
          description: "Our export team will be in touch within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error("server error");
      }
    } catch {
      toast.error("Something went wrong", {
        description: "Please email us directly at export@ashwini-industries.com",
      });
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#2d3d2d] relative">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-10 mb-16 pb-10 border-b border-[#f5f0e8]/10"
        >
          <a
            href="tel:+919898045966"
            data-testid="link-phone"
            className="flex items-center gap-3 text-[#f5f0e8] hover:text-[#b8965a] transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-[#f5f0e8]/10 flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </span>
            <span>
              <span className="block font-sans uppercase tracking-widest text-[10px] text-[#9e9990]">Phone</span>
              <span className="font-sans font-semibold text-sm">+91 98980 45966</span>
            </span>
          </a>

          <a
            href="https://wa.me/919898045966"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-whatsapp"
            className="flex items-center gap-3 text-[#f5f0e8] hover:text-[#b8965a] transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-[#f5f0e8]/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4" />
            </span>
            <span>
              <span className="block font-sans uppercase tracking-widest text-[10px] text-[#9e9990]">WhatsApp</span>
              <span className="font-sans font-semibold text-sm">+91 98980 45966</span>
            </span>
          </a>

          <a
            href="mailto:export@ashwini-industries.com"
            data-testid="link-email"
            className="flex items-center gap-3 text-[#f5f0e8] hover:text-[#b8965a] transition-colors"
          >
            <span className="w-10 h-10 rounded-full bg-[#f5f0e8]/10 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </span>
            <span>
              <span className="block font-sans uppercase tracking-widest text-[10px] text-[#9e9990]">Email</span>
              <span className="font-sans font-semibold text-sm">export@ashwini-industries.com</span>
            </span>
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <div className="font-sans uppercase tracking-[0.25em] text-[#b8965a] text-xs font-semibold mb-3">
              EXPORT INQUIRY
            </div>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#f5f0e8] mb-4 tracking-tight">
              Request a Quote
            </h2>
            <p className="font-sans text-[#9e9990] text-sm mb-12">
              Our export team responds within 24 hours.
            </p>

            <div className="space-y-8 mt-auto">
              <div>
                <h4 className="font-sans uppercase tracking-widest text-[#b8965a] text-xs mb-2 font-semibold">Works &amp; Office</h4>
                <p className="font-sans text-[#f5f0e8] text-sm leading-relaxed">
                  Ashwini Industries<br/>
                  203+204/2, Near Jain Dairy<br/>
                  Phase 2, GIDC, Naroda<br/>
                  Ahmedabad — 382330, Gujarat
                </p>
              </div>

              <div>
                <h4 className="font-sans uppercase tracking-widest text-[#b8965a] text-xs mb-2 font-semibold">Proprietor</h4>
                <p className="font-sans text-[#f5f0e8] text-sm leading-relaxed">
                  Jagdish Agrawal
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">

                <div className="grid md:grid-cols-2 gap-x-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="mb-8 relative">
                        <FormControl>
                          <input
                            placeholder="Name"
                            {...field}
                            className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans py-3 transition-colors rounded-none"
                          />
                        </FormControl>
                        <FormMessage className="absolute -bottom-5" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="mb-8 relative">
                        <FormControl>
                          <input
                            placeholder="Company"
                            {...field}
                            className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans py-3 transition-colors rounded-none"
                          />
                        </FormControl>
                        <FormMessage className="absolute -bottom-5" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-x-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="mb-8 relative">
                        <FormControl>
                          <input
                            placeholder="Email"
                            type="email"
                            {...field}
                            className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans py-3 transition-colors rounded-none"
                          />
                        </FormControl>
                        <FormMessage className="absolute -bottom-5" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem className="mb-8 relative">
                        <FormControl>
                          <input
                            placeholder="Phone / WhatsApp"
                            type="tel"
                            {...field}
                            className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans py-3 transition-colors rounded-none"
                          />
                        </FormControl>
                        <FormMessage className="absolute -bottom-5" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-x-8">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="mb-8 relative">
                        <FormControl>
                          <input
                            placeholder="Country"
                            {...field}
                            className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans py-3 transition-colors rounded-none"
                          />
                        </FormControl>
                        <FormMessage className="absolute -bottom-5" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem className="mb-8 relative">
                        <FormControl>
                          <input
                            placeholder="Quantity Required (e.g. 500 kg)"
                            {...field}
                            className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans py-3 transition-colors rounded-none"
                          />
                        </FormControl>
                        <FormMessage className="absolute -bottom-5" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="products"
                  render={() => (
                    <FormItem className="mb-8 relative">
                      <span className="block font-sans uppercase tracking-widest text-[10px] text-[#9e9990] mb-3">
                        Product(s) of Interest
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
                        {PRODUCTS.map((product) => (
                          <FormField
                            key={product}
                            control={form.control}
                            name="products"
                            render={({ field }) => {
                              const checked = field.value?.includes(product);
                              return (
                                <FormItem className="flex items-center gap-2 space-y-0">
                                  <FormControl>
                                    <Checkbox
                                      checked={checked}
                                      onCheckedChange={(isChecked) => {
                                        const value = field.value || [];
                                        field.onChange(
                                          isChecked
                                            ? [...value, product]
                                            : value.filter((v: string) => v !== product)
                                        );
                                      }}
                                      className="border-[#b8965a]/50 data-[state=checked]:bg-[#b8965a] data-[state=checked]:border-[#b8965a]"
                                      data-testid={`checkbox-product-${product.toLowerCase().replace(/\s+/g, "-")}`}
                                    />
                                  </FormControl>
                                  <span className="font-sans text-xs text-[#f5f0e8]">{product}</span>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage className="mt-2" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-12 relative">
                      <FormControl>
                        <textarea
                          placeholder="Message"
                          rows={4}
                          {...field}
                          className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans py-3 transition-colors resize-none rounded-none"
                        />
                      </FormControl>
                      <FormMessage className="absolute -bottom-5" />
                    </FormItem>
                  )}
                />

                <div className="mt-4">
                  <button
                    type="submit"
                    className="font-sans font-semibold uppercase tracking-widest text-xs text-[#1f2b21] bg-[#f5f0e8] px-7 py-3.5 hover:bg-[#b8965a] hover:text-[#f5f0e8] transition-colors"
                    data-testid="button-submit-contact"
                  >
                    SUBMIT INQUIRY
                  </button>
                </div>

              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
