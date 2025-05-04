
import { Package, Flask, Food } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mx-auto">Our Products</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          We offer premium quality Guar Gum products for various applications in food, pharmaceutical, 
          and industrial sectors, adhering to the highest quality standards.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Food Grade Guar Gum */}
          <Card className="border-t-4 border-t-guar-500">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-guar-50 flex items-center justify-center mb-4">
                <Food className="h-6 w-6 text-guar-600" />
              </div>
              <CardTitle className="text-2xl text-guar-700">Food Grade Guar Gum</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 mb-4">
                100% vegetarian natural guar powder produced by grinding the husk of the guar plant's pods. 
                Acts as a thickening, gelling, clouding, and binding agent to improve food texture.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-guar-100 flex items-center justify-center mr-2 shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-guar-600"></span>
                  </span>
                  <span className="text-gray-700">Highly soluble in hot and cold water</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-guar-100 flex items-center justify-center mr-2 shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-guar-600"></span>
                  </span>
                  <span className="text-gray-700">Stable at pH values 5 to 7</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-guar-100 flex items-center justify-center mr-2 shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-guar-600"></span>
                  </span>
                  <span className="text-gray-700">Excellent thickening and water binding properties</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-guar-600 hover:bg-guar-700">Enquire Now</Button>
            </CardFooter>
          </Card>

          {/* Industrial Grade Guar Gum */}
          <Card className="border-t-4 border-t-guar-500">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-guar-50 flex items-center justify-center mb-4">
                <Flask className="h-6 w-6 text-guar-600" />
              </div>
              <CardTitle className="text-2xl text-guar-700">Industrial Grade Guar Gum</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 mb-4">
                Cream-colored powder derived from ground endosperm of natural guar strains. Used as a thickener, 
                emulsifier, stabilizer, soil stabilizer, bonding agent, and flocculant.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-guar-100 flex items-center justify-center mr-2 shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-guar-600"></span>
                  </span>
                  <span className="text-gray-700">Effective in oil well drilling applications</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-guar-100 flex items-center justify-center mr-2 shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-guar-600"></span>
                  </span>
                  <span className="text-gray-700">Used in textiles, mining, and construction</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-guar-100 flex items-center justify-center mr-2 shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-guar-600"></span>
                  </span>
                  <span className="text-gray-700">Versatile across multiple industrial applications</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-guar-600 hover:bg-guar-700">Enquire Now</Button>
            </CardFooter>
          </Card>

          {/* Specialty Products */}
          <Card className="border-t-4 border-t-guar-500">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 rounded-full bg-guar-50 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-guar-600" />
              </div>
              <CardTitle className="text-2xl text-guar-700">Specialty Products</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-gray-700 mb-4">
                We also offer a range of specialized products including Guar Split, Guar Meal, 
                Guar High Protein, Specialty Chemicals, Sesbania Gum Powder, Cassia Gum, and more.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-guar-100 flex items-center justify-center mr-2 shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-guar-600"></span>
                  </span>
                  <span className="text-gray-700">Custom formulations available</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-guar-100 flex items-center justify-center mr-2 shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-guar-600"></span>
                  </span>
                  <span className="text-gray-700">High-protein derivatives</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-guar-100 flex items-center justify-center mr-2 shrink-0">
                    <span className="block w-2 h-2 rounded-full bg-guar-600"></span>
                  </span>
                  <span className="text-gray-700">Complementary gum products</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-guar-600 hover:bg-guar-700">Enquire Now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
