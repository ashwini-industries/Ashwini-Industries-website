import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { toast } from "sonner";

export default function Products() {
  const products = [
    {
      id: "01",
      name: "Tartrazine",
      eNumber: "E102",
      swatch: "#F3E500",
      ciRef: "Food Yellow 4",
      ciNumber: "19140",
      ecNumber: "217-699-5",
      casNumber: "1934-21-0",
      fdcNumber: "Yellow No. 5",
      concentration: "≥ 85%",
    },
    {
      id: "02",
      name: "Carmoisine",
      eNumber: "E122",
      swatch: "#92003B",
      ciRef: "Food Red 3",
      ciNumber: "14720",
      ecNumber: "222-657-4",
      casNumber: "3567-69-9",
      fdcNumber: "—",
      concentration: "≥ 85%",
    },
    {
      id: "03",
      name: "Amaranth",
      eNumber: "E123",
      swatch: "#6E0D25",
      ciRef: "Food Red 9",
      ciNumber: "16185",
      ecNumber: "213-022-2",
      casNumber: "915-67-3",
      fdcNumber: "—",
      concentration: "≥ 85%",
    },
    {
      id: "04",
      name: "Ponceau 4R",
      eNumber: "E124",
      swatch: "#D0004B",
      ciRef: "Food Red 7",
      ciNumber: "16255",
      ecNumber: "220-036-2",
      casNumber: "2611-82-7",
      fdcNumber: "—",
      concentration: "≥ 85%",
    },
    {
      id: "05",
      name: "Sunset Yellow FCF",
      eNumber: "E110",
      swatch: "#FF9933",
      ciRef: "Food Yellow 3",
      ciNumber: "15985",
      ecNumber: "220-491-7",
      casNumber: "2783-94-0",
      fdcNumber: "Yellow No. 6",
      concentration: "≥ 85%",
    },
    {
      id: "06",
      name: "Allura Red",
      eNumber: "E129",
      swatch: "#E4002B",
      ciRef: "Food Red 17",
      ciNumber: "16035",
      ecNumber: "247-368-0",
      casNumber: "25956-17-6",
      fdcNumber: "Red No. 40",
      concentration: "≥ 85%",
    },
    {
      id: "07",
      name: "Brilliant Blue FCF",
      eNumber: "E133",
      swatch: "#1465B7",
      ciRef: "Food Blue 2",
      ciNumber: "42090",
      ecNumber: "223-339-8",
      casNumber: "3844-45-9",
      fdcNumber: "Blue No. 1",
      concentration: "≥ 85%",
    },
  ];

  function handleDownloadCatalogue() {
    toast.success("Downloading Catalogue", {
      description: "The full product catalogue PDF is downloading now.",
    });
  }

  return (
    <section id="products" className="pt-24 pb-28 md:pt-32 md:pb-36 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="font-sans uppercase tracking-[0.25em] text-[#9e9990] text-xs font-semibold mb-3">
              PRODUCT RANGE
            </div>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-[#1f2b21] tracking-tight">
              Certified Synthetic Food Colours
            </h2>
          </div>
          <a
            href={`${import.meta.env.BASE_URL}ashwini-food-colour-catalogue.pdf`}
            download="Ashwini-Industries-Food-Colour-Catalogue.pdf"
            onClick={handleDownloadCatalogue}
            data-testid="button-download-catalogue"
            className="flex items-center gap-2 font-sans font-semibold uppercase tracking-widest text-xs text-white bg-[#2d3d2d] px-6 py-3.5 hover:bg-[#1f2b21] transition-colors shrink-0 w-fit"
          >
            <Download className="w-4 h-4" />
            Download Full Catalogue (PDF)
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="border border-[#e8dcc8] bg-white hover:border-[#b8965a] transition-colors"
              data-testid={`card-product-${product.id}`}
            >
              <div className="flex gap-5 p-6">
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 rounded-sm border border-black/10"
                    style={{ backgroundColor: product.swatch }}
                    aria-label={`${product.name} colour swatch`}
                  />
                  <span className="font-sans font-bold text-[10px] text-[#9e9990] tracking-wider">
                    {product.eNumber}
                  </span>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-sans font-bold text-lg text-[#1f2b21] mb-3">
                    {product.name}
                  </h3>
                  <dl className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                    <dt className="font-sans font-medium text-[#9e9990]">CI Reference (Food)</dt>
                    <dd className="font-sans font-semibold text-[#3a3a35] text-right">{product.ciRef}</dd>

                    <dt className="font-sans font-medium text-[#9e9990]">CI Number</dt>
                    <dd className="font-sans font-semibold text-[#3a3a35] text-right tabular-nums">{product.ciNumber}</dd>

                    <dt className="font-sans font-medium text-[#9e9990]">EC Number</dt>
                    <dd className="font-sans font-semibold text-[#3a3a35] text-right tabular-nums">{product.ecNumber}</dd>

                    <dt className="font-sans font-medium text-[#9e9990]">CAS Number</dt>
                    <dd className="font-sans font-semibold text-[#3a3a35] text-right tabular-nums">{product.casNumber}</dd>

                    <dt className="font-sans font-medium text-[#9e9990]">FD&C Number</dt>
                    <dd className="font-sans font-semibold text-[#3a3a35] text-right">{product.fdcNumber}</dd>

                    <dt className="font-sans font-medium text-[#9e9990]">Total Dye Content</dt>
                    <dd className="font-sans font-semibold text-[#3a3a35] text-right">{product.concentration}</dd>
                  </dl>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
