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
  FormMessage,
} from "@/components/ui/form";

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
    toast.success("Inquiry Received", {
      description: "Our export team will be in touch.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-32 bg-[#2d3d2d] relative">
      <div className="grain-overlay" aria-hidden="true" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="font-serif italic font-bold text-5xl md:text-6xl text-[#f5f0e8] mb-4 leading-tight">
              Begin a Conversation
            </h2>
            <p className="font-sans font-light text-[#9e9990] text-sm mb-12">
              Our export team responds within 24 hours.
            </p>
            
            <div className="space-y-8 mt-auto">
              <div>
                <h4 className="font-sans uppercase tracking-widest text-[#b8965a] text-xs mb-2">Works & Office</h4>
                <p className="font-sans font-light text-[#f5f0e8] text-sm leading-relaxed">
                  Ashwini Industries<br/>
                  203+204/2, Near Jain Dairy<br/>
                  Phase 2, GIDC, Naroda<br/>
                  Ahmedabad — 382330, Gujarat
                </p>
              </div>
              
              <div>
                <h4 className="font-sans uppercase tracking-widest text-[#b8965a] text-xs mb-2">Proprietor</h4>
                <p className="font-sans font-light text-[#f5f0e8] text-sm leading-relaxed">
                  Jagdish Agrawal<br/>
                  +91 98980 45966
                </p>
              </div>

              <div>
                <h4 className="font-sans uppercase tracking-widest text-[#b8965a] text-xs mb-2">WhatsApp</h4>
                <a 
                  href="https://wa.me/919898045966" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans font-light text-[#f5f0e8] text-sm hover:text-[#b8965a] transition-colors mt-1"
                  data-testid="link-whatsapp"
                >
                  <MessageCircle className="w-5 h-5" />
                  +91 98980 45966
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                            className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans font-light py-3 transition-colors rounded-none" 
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
                            className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans font-light py-3 transition-colors rounded-none" 
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
                            className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans font-light py-3 transition-colors rounded-none" 
                          />
                        </FormControl>
                        <FormMessage className="absolute -bottom-5" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="productInterest"
                    render={({ field }) => (
                      <FormItem className="mb-8 relative">
                        <FormControl>
                          <select 
                            {...field} 
                            className={`w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none font-sans font-light py-3 transition-colors rounded-none appearance-none ${field.value ? 'text-[#f5f0e8]' : 'text-[#9e9990]/60'}`}
                          >
                            <option value="" disabled className="bg-[#2d3d2d] text-[#9e9990]/60">Product Interest</option>
                            <option value="tartrazine" className="bg-[#2d3d2d] text-[#f5f0e8]">Tartrazine</option>
                            <option value="carmosine" className="bg-[#2d3d2d] text-[#f5f0e8]">Carmosine</option>
                            <option value="amaranth" className="bg-[#2d3d2d] text-[#f5f0e8]">Amaranth</option>
                            <option value="ponceau" className="bg-[#2d3d2d] text-[#f5f0e8]">Ponceau 4R</option>
                            <option value="sunset" className="bg-[#2d3d2d] text-[#f5f0e8]">Sunset Yellow FCF</option>
                            <option value="allura" className="bg-[#2d3d2d] text-[#f5f0e8]">Allura Red</option>
                            <option value="brilliant" className="bg-[#2d3d2d] text-[#f5f0e8]">Brilliant Blue FCF</option>
                          </select>
                        </FormControl>
                        <FormMessage className="absolute -bottom-5" />
                      </FormItem>
                    )}
                  />
                </div>

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
                          className="w-full bg-transparent border-b border-[#b8965a]/40 focus:border-[#b8965a] outline-none text-[#f5f0e8] placeholder:text-[#9e9990]/60 font-sans font-light py-3 transition-colors resize-none rounded-none" 
                        />
                      </FormControl>
                      <FormMessage className="absolute -bottom-5" />
                    </FormItem>
                  )}
                />

                <div className="mt-4">
                  <button 
                    type="submit" 
                    className="group relative font-sans font-medium uppercase tracking-widest text-[#b8965a] text-sm pb-2 border-b border-transparent overflow-hidden inline-block"
                    data-testid="button-submit-contact"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b8965a] origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
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