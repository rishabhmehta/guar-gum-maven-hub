
import { Leaf } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="section-heading">About Guar Gum</h2>
            <p className="text-gray-700 mb-6">
              Guar Gum, also termed as guaran, is derived from guar seeds, which have a high low-shear 
              viscosity compared to other hydrocolloids. It is a highly significant natural agricultural product 
              because it is a rich source of high-grade galactomannan polysaccharides.
            </p>
            <p className="text-gray-700 mb-6">
              The guar seeds are dehusked, milled, and screened to obtain the guar gum. It is typically a 
              free-flowing, pale, off-white-colored, coarse to fine ground powder and is easily soluble in water, 
              and has a natural ability to bind with water molecules.
            </p>
            <div className="bg-guar-50 p-6 rounded-lg border-l-4 border-guar-500">
              <div className="flex items-center mb-3">
                <Leaf className="h-5 w-5 mr-2 text-guar-600" />
                <h3 className="font-semibold text-guar-700">Natural Thickening Agent</h3>
              </div>
              <p className="text-gray-700">
                These guar seeds produce greater thickness than hydrocolloids like locust bean gum, 
                carboxymethyl cellulose, and cellulose gum. The low-shear viscosity of guar gum is six times 
                higher than the high-shear viscosity.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-guar-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-guar-700 mb-4">Industry Leader from Rajasthan</h3>
              <p className="text-gray-700 mb-6">
                Guar Gum is primarily grown in Rajasthan, contributing to over 65% of Guar production in India, 
                and is majorly exported to the USA and European countries.
              </p>
              <p className="text-gray-700 mb-6">
                Shree Ram India Gum has been the Most Trusted and Leading company with a legacy of 35 years 
                from Rajasthan (India) as a Manufacturer, Exporter, and Supplier of Guar Gum Powder and Guar Gum 
                Derivatives.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold text-guar-600 mb-2">35+ Years</h4>
                  <p className="text-sm text-gray-600">Industry Experience</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold text-guar-600 mb-2">Global</h4>
                  <p className="text-sm text-gray-600">Export Network</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold text-guar-600 mb-2">Premium</h4>
                  <p className="text-sm text-gray-600">Quality Standards</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-bold text-guar-600 mb-2">Diverse</h4>
                  <p className="text-sm text-gray-600">Applications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
