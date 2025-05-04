
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-guar-50 to-guar-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-guar-800 mb-6">
            Leading <span className="text-guar-600">Guar Gum</span> Manufacturer & Exporter
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Premium quality Guar Gum powder with 35 years of legacy. Trusted supplier for food, 
            pharmaceutical, and industrial applications worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-guar-600 hover:bg-guar-700 text-white px-8 py-6 text-lg">
              Explore Our Products
            </Button>
            <Button variant="outline" className="border-guar-500 text-guar-700 hover:bg-guar-50 px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-guar-100 rounded-tl-full opacity-50 hidden lg:block" />
    </div>
  );
};

export default Hero;
