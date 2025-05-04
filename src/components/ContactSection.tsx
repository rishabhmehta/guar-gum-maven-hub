
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="section-heading">Contact Us</h2>
            <p className="text-gray-700 mb-8">
              Reach out to us for inquiries, quotes, or any additional information about our guar gum products.
              Our team is ready to assist you with your specific requirements.
            </p>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-guar-700 mb-4">Company Address</h3>
                <p className="text-gray-700">
                  E 261, 262, 263, RIICO Agrofood Park,<br />
                  Boranada, Jodhpur 342001,<br />
                  Rajasthan, India
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-guar-700 mb-4">Contact Information</h3>
                <p className="text-gray-700 mb-3">
                  <span className="font-medium">Email:</span> info@sriguargum.com
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Phone:</span> +91 XXXXXXXXXX
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-guar-700 mb-4">Our Ventures</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-gray-700 p-2 bg-guar-50 rounded text-center text-sm">Hospitality</div>
                  <div className="text-gray-700 p-2 bg-guar-50 rounded text-center text-sm">Revolutionary Wellness</div>
                  <div className="text-gray-700 p-2 bg-guar-50 rounded text-center text-sm">Sustainable Energy</div>
                  <div className="text-gray-700 p-2 bg-guar-50 rounded text-center text-sm">Quartz Stone</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-guar-700 mb-6">Send us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <Input id="name" placeholder="Your name" className="focus:ring-guar-500 focus:border-guar-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company Name
                    </label>
                    <Input id="company" placeholder="Your company" className="focus:ring-guar-500 focus:border-guar-500" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" className="focus:ring-guar-500 focus:border-guar-500" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Your phone number" className="focus:ring-guar-500 focus:border-guar-500" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What's this regarding?" className="focus:ring-guar-500 focus:border-guar-500" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your inquiry or message..." className="focus:ring-guar-500 focus:border-guar-500 h-32" />
                </div>
                
                <Button type="submit" className="w-full bg-guar-600 hover:bg-guar-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
