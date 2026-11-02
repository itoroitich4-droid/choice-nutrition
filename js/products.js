// Choice Nutrition Ltd product catalogue. No prices are displayed.
const products = [
  { name: "Chick & Duck Premix", pack: 25, group: "Premixes", description: "A vitamin and mineral premix for chick and duck feed formulations, helping provide key nutrients during early growth.", image: "images/products/chick.png" },
  { name: "Grower Premix", pack: 25, group: "Premixes", description: "A balanced premix for growing poultry, intended to complement the energy and protein ingredients in a complete ration.", image: "images/products/grower.png" },
  { name: "Layer Premix", pack: 25, group: "Premixes", description: "A vitamin and mineral blend for laying-hen diets, formulated to complement nutrients needed during the laying period.", image: "images/products/layers.png" },
  { name: "Dairy Premix", pack: 25, group: "Premixes", description: "A nutritional premix for dairy cattle rations, helping balance vitamins and minerals alongside the main feed ingredients.", image: "images/products/Dairy.png" },
  { name: "Sow & Weaner Premix", pack: 25, group: "Premixes", description: "A premix for sow and weaner feed formulations, intended to complement the nutritional needs of breeding and young pigs.", image: "images/products/sow&weaner.png" },
  { name: "Pig Finisher Premix", pack: 25, group: "Premixes", description: "A vitamin and mineral premix for pig-finisher diets, used as part of a properly balanced finishing ration.", image: "images/products/pig-finisher-premix.svg" },
  { name: "General Purpose Premix", pack: 25, group: "Premixes", description: "A general livestock-feed premix for use in suitable feed formulations. Select the ration and inclusion rate for the target animal.", image: "images/products/general-purpose-premix.svg" },
  { name: "DL-Methionine 99%", pack: 25, group: "Amino acids", description: "A concentrated source of methionine, an essential amino acid used to balance poultry and livestock diets.", image: "images/products/dl-methionine-99.svg" },
  { name: "Dicalcium Phosphate (DCP) Granular", pack: 25, group: "Minerals", description: "A feed-grade source of calcium and phosphorus, two minerals important in bone development and animal nutrition.", image: "images/products/dcp.png" },
  { name: "Toxin Binder", pack: 25, group: "Additives", description: "A feed additive designed to bind certain mycotoxins in feed. Selection and use should follow product guidance and professional advice.", image: "images/products/toxin-binder.svg" },
  { name: "Lysine 98.5% HCL", pack: 25, group: "Amino acids", description: "A concentrated source of lysine, an essential amino acid commonly used to balance protein in animal-feed formulations.", image: "images/products/lysine-98-5-hcl.svg" },
  { name: "Betra Sacc (Yeast)", pack: 25, group: "Additives", description: "A yeast-based feed additive used in livestock nutrition programmes to support digestive function and feed utilisation.", image: "images/products/betra-sacc-yeast.svg" },
  { name: "Cocci Diostat / Salinomycin", pack: 25, group: "Additives", description: "A coccidiostat feed additive used in poultry production programmes. Use only in accordance with veterinary guidance and applicable regulations.", image: "images/products/cocci-diostat-salinomycin.svg" },
  { name: "Myco Protein (65% CP Min)", pack: 40, group: "Additives", description: "A protein-rich feed ingredient for use in formulated animal diets, contributing to the overall protein content of the ration.", image: "images/products/myco-protein-65-cp-min.svg" },
  { name: "Energy Compound (Palm Oil)", pack: 25, group: "Additives", description: "A palm-oil-based energy ingredient used to increase the energy density of feed formulations.", image: "images/products/energy-compound-palm-oil.svg" },
  { name: "Threonine", pack: 25, group: "Amino acids", description: "An essential amino acid used to balance dietary protein and support the formulation of nutritionally complete feeds.", image: "images/products/threonine.svg" },
  { name: "Complex Enzyme (Pure)", pack: 25, group: "Enzymes", description: "A multi-enzyme feed additive intended to help break down selected feed components and improve nutrient availability.", image: "images/products/complex-enzyme-pure.svg" },
  { name: "Enerzyme (Phytase)", pack: 25, group: "Enzymes", description: "A phytase enzyme used to release some of the phosphorus bound in plant-based feed ingredients, supporting phosphorus utilisation.", image: "images/products/enerzyme-phytase.svg" },
  { name: "Egg Colour", pack: 25, group: "Additives", description: "A pigment-based feed additive used in layer diets to influence egg-yolk colour as part of a balanced feeding programme.", image: "images/products/egg-colour.svg" },
  { name: "MCP (Monocalcium Phosphate)", pack: null, group: "Minerals", description: "A feed-grade source of calcium and available phosphorus used in livestock and poultry feed formulations.", image: "images/products/mcp.png" }
];

function renderProducts(searchTerm = "") {
  const grid = document.querySelector("#product-grid");
  const count = document.querySelector("#product-count");
  const noResults = document.querySelector("#no-results");
  if (!grid) return;

  const term = searchTerm.toLowerCase();
  const filtered = products.filter(product =>
    `${product.name} ${product.group} ${product.description}`.toLowerCase().includes(term)
  );

  grid.innerHTML = filtered.map((product) => {
    const packText = product.pack ? `${product.pack} kg pack` : "Pack size on request";
    const message = encodeURIComponent(`Hello Choice Nutrition, I would like to know more about ${product.name}.`);
    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img class="product-image" src="${product.image}" alt="Illustration representing ${product.name}" loading="lazy">
          <span class="product-category">${product.group}</span>
        </div>
        <div class="product-card-body">
          <h3>${product.name}</h3>
          <p class="product-description">${product.description}</p>
          <div class="product-card-bottom">
            <span class="product-pack"><span class="pack-dot"></span>${packText}</span>
            <a class="product-enquire" href="https://wa.me/254720803547?text=${message}" target="_blank" rel="noopener" aria-label="Enquire about ${product.name} on WhatsApp">Enquire <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </article>`;
  }).join("");

  count.textContent = `${filtered.length} ${filtered.length === 1 ? "product" : "products"}`;
  noResults.hidden = filtered.length !== 0;
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  document.querySelector("#product-search")?.addEventListener("input", event => {
    renderProducts(event.target.value.trim());
  });
});
