import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  company: z.string().min(2, "Company name is required."),
  country: z.string().min(2, "Country is required."),
  productInterest: z.string().min(2, "Please select an interest."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      country: "",
      productInterest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Inquiry Submitted", {
      description: "Our export team will contact you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f7f5f2]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-[#c9a84c]"></div>
              <span className="text-[#0a0a0a]/60 uppercase tracking-[0.2em] text-xs font-semibold">Inquiries</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-8">Get in Touch</h2>
            
            <div className="space-y-8 text-[#0a0a0a]/80">
              <div>
                <h4 className="font-bold text-[#0a0a0a] uppercase tracking-wide text-sm mb-2">Corporate Office & Works</h4>
                <p>Industrial Estate, Phase II<br/>Mumbai, Maharashtra, India 400001</p>
              </div>
              
              <div>
                <h4 className="font-bold text-[#0a0a0a] uppercase tracking-wide text-sm mb-2">Direct Contact</h4>
                <p>exports@chromaindia.com<br/>+91 98765 43210</p>
              </div>

              <div className="pt-4 border-t border-[#0a0a0a]/10">
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-medium text-sm hover:bg-[#1ebe5d] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 border border-[#e5e5e5]"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0a0a0a]">Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="border-[#d5d5d5] focus-visible:ring-[#c9a84c] rounded-none bg-[#f7f5f2]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0a0a0a]">Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Global Foods Inc." {...field} className="border-[#d5d5d5] focus-visible:ring-[#c9a84c] rounded-none bg-[#f7f5f2]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0a0a0a]">Country</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. United Kingdom" {...field} className="border-[#d5d5d5] focus-visible:ring-[#c9a84c] rounded-none bg-[#f7f5f2]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#0a0a0a]">Product Interest</FormLabel>
                        <FormControl>
                          <select 
                            {...field} 
                            className="flex h-10 w-full border border-[#d5d5d5] bg-[#f7f5f2] px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c9a84c] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-none"
                          >
                            <option value="" disabled>Select a product...</option>
                            <option value="synthetic">Synthetic Food Colors</option>
                            <option value="lake">Lake Colors</option>
                            <option value="blended">Blended Colors</option>
                            <option value="custom">Custom Formulation</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#0a0a0a]">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide details about your volume requirements..." 
                          className="min-h-[120px] border-[#d5d5d5] focus-visible:ring-[#c9a84c] rounded-none bg-[#f7f5f2]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button 
                  type="submit" 
                  className="w-full bg-[#c9a84c] hover:bg-[#b09240] text-[#0a0a0a] font-bold uppercase tracking-wide text-sm py-4 transition-colors"
                  data-testid="button-submit-contact"
                >
                  Send Inquiry
                </button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
