
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartBar, FileText } from "lucide-react";

const FoodApplications = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Bakery</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Improves texture</li>
        <li>• Increases dough yield</li>
        <li>• Increases shelf life</li>
        <li>• Improves crumb structure</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Processed Cheese</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Improves texture and flavour</li>
        <li>• Acts as stabiliser</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Soups</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Thickener</li>
        <li>• Stabiliser</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Pastry Ices</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Absorbs free water</li>
        <li>• Prevents excessive stickiness</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Noodles</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Improves texture and form</li>
        <li>• Improves moisture retention</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Meat</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Binder in sausages</li>
        <li>• Absorbs free water</li>
        <li>• Improves flow rate</li>
        <li>• Prevents separation</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Dressings and Sauces</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Thickener</li>
        <li>• Emulsion stabiliser</li>
        <li>• Improves flow properties</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Beverages</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Controls viscosity</li>
        <li>• Improves body and mouth feel</li>
        <li>• Improves shelf life</li>
      </ul>
    </div>
  </div>
);

const IndustrialApplications = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Textiles</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• For Printing with Acid dyes on silk and Polyamide</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Oil Well Drilling</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Fluid-loss controlling agent</li>
        <li>• Additives in fracturing fluids</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Mining</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Concentration of ores</li>
        <li>• Flocculation and better recovery</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Construction</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Mortar Retarder</li>
        <li>• Improves mortar flowability</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Explosives</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Water binding agent for aqueous slurry explosives</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Cosmetics & Pharmaceuticals</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Conditioner and viscosifier</li>
        <li>• Thickener in toothpastes and shampoos</li>
        <li>• Binder in tablets</li>
        <li>• Mild laxative and soluble dietary fiber</li>
      </ul>
    </div>
    <div className="application-card">
      <h4 className="text-lg font-semibold text-guar-700 mb-2">Paper</h4>
      <ul className="space-y-2 text-gray-700">
        <li>• Improved sheet formation</li>
        <li>• Increased bursting strength</li>
        <li>• Increased fold strength</li>
        <li>• Denser surface for printing</li>
      </ul>
    </div>
  </div>
);

const ApplicationsSection = () => {
  return (
    <section id="applications" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Applications</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Guar Gum is versatile with applications across numerous industries, from food to industrial use.
        </p>
        
        <Tabs defaultValue="food" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="food" className="flex items-center gap-2">
                <Food className="h-4 w-4" />
                <span>Food Grade</span>
              </TabsTrigger>
              <TabsTrigger value="industrial" className="flex items-center gap-2">
                <Flask className="h-4 w-4" />
                <span>Industrial Grade</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="food" className="mt-6">
            <div className="bg-guar-50 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <ChartBar className="h-6 w-6 text-guar-600" />
                <h3 className="text-xl font-bold text-guar-700">Food Grade Applications</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our food grade guar gum is a purely natural and 100% vegetarian guar powder, produced by grinding 
                the husk of the guar plant's pods into a fine powder. It serves as a natural thickening agent 
                to improve the consistency, texture, and shelf life of various food products.
              </p>
              <FoodApplications />
            </div>
          </TabsContent>
          
          <TabsContent value="industrial" className="mt-6">
            <div className="bg-guar-50 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-6 w-6 text-guar-600" />
                <h3 className="text-xl font-bold text-guar-700">Industrial Grade Applications</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our high-quality industrial grade guar gum powder is a cream-colored powder derived from the 
                ground endosperm of the seeds of natural guar strains. It serves as a thickener, emulsifier,
                stabilizer, and bonding agent across numerous industrial applications.
              </p>
              <IndustrialApplications />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ApplicationsSection;
