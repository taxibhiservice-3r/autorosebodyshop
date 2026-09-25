export interface Service {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string; // answer-first paragraph (2-3 sentences, direct/factual)
  body: string; // full HTML-safe MDX-style content (800-1500 words)
  faqs: { question: string; answer: string }[];
  relatedServices: string[]; // slugs
  icon: string; // emoji or icon key
}

export const SERVICES: Service[] = [
  {
    slug: "collision-repair",
    name: "Collision Repair",
    shortName: "Collision Repair",
    headline: "Expert Collision Repair in Eugene & Springfield, OR",
    metaTitle: "Collision Repair Eugene OR | Blue Rose Auto Body",
    metaDescription:
      "Professional collision repair in Eugene and Springfield, OR. Blue Rose Auto Body restores your vehicle to pre-accident condition. Call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision provides complete collision repair services in Springfield and Eugene, Oregon, restoring vehicles to pre-accident condition using precision repair techniques and factory-matched paint. Our technicians assess structural integrity, repair or replace damaged panels, and perform professional paint refinishing so your vehicle looks and drives as it did before the accident.",
    body: `## What Is Collision Repair?

Collision repair is the process of restoring a vehicle's body, structure, and finish after an accident. A proper repair addresses every layer of damage — from visible sheet metal and paint to underlying structural components — ensuring your vehicle is both safe to drive and visually restored.

At Blue Rose Auto Body & Collision, every collision repair begins with a thorough damage assessment. We inspect visible damage and use industry-standard diagnostic tools to identify any hidden structural or mechanical impact that may not be obvious at first glance.

## Our Collision Repair Process

**1. Initial Damage Assessment**
We document all damage with photos and detailed notes, then prepare a precise repair estimate. We work directly with your insurance company to streamline the claims process.

**2. Structural Repair**
When a collision affects the vehicle's frame or unibody structure, dimensional accuracy is critical for your safety. We use precision measuring systems to restore structural geometry to factory specifications.

**3. Panel Repair & Replacement**
Damaged panels are repaired using proven metalworking techniques or replaced with OEM-quality parts, depending on the extent of damage and your vehicle's requirements.

**4. Paint Refinishing**
Our technicians use computerized paint-mixing and matching technology to blend new paint seamlessly with your vehicle's existing finish. Every color-matched panel is finished in our controlled spray environment for a flawless result.

**5. Quality Inspection**
Before we return your vehicle, we perform a thorough quality inspection — checking panel alignment, paint match, structural integrity, and overall fit and finish.

## Insurance Claim Repairs

We work with all major insurance companies and can assist you through the claims process from start to finish. Bring your claim number and we handle the paperwork. See our [Insurance Claim Repair](/services/insurance-claim-repair/) page for details.

## Why Choose Blue Rose Auto Body & Collision?

- Serving Eugene, Springfield, and all of Lane County
- Precision paint-matching technology for seamless color blends
- Transparent repair estimates with no hidden fees
- Direct insurance billing support
- Convenient Springfield location serving all surrounding communities

## Frequently Asked Questions

See the FAQ section below for answers to common questions about our collision repair services.`,
    faqs: [
      {
        question: "How long does collision repair take?",
        answer:
          "Collision repair time depends on the extent of damage. Minor repairs may take 1–3 days, while significant structural damage can take 1–2 weeks. We provide a time estimate upfront after the initial damage assessment and keep you updated throughout the process.",
      },
      {
        question: "Do I need to use the repair shop my insurance recommends?",
        answer:
          "No. In Oregon, you have the legal right to choose any licensed auto body shop regardless of your insurance company's recommendation. You do not have to use an insurer's preferred shop.",
      },
      {
        question: "Will my repaired vehicle look exactly the same as before?",
        answer:
          "Our goal is a seamless repair that is indistinguishable from the original finish. We use computerized paint-matching technology to blend factory colors precisely. Minor variation can occur on older or sun-faded vehicles, but we discuss color-matching expectations with every customer before beginning.",
      },
      {
        question: "Do you work with all insurance companies?",
        answer:
          "Yes. Blue Rose Auto Body & Collision works with all major insurance providers. We communicate directly with your insurer and help guide you through the claims process.",
      },
    ],
    relatedServices: ["insurance-claim-repair", "panel-replacement", "paint-matching"],
    icon: "🚗",
  },
  {
    slug: "auto-body-repair",
    name: "Auto Body Repair",
    shortName: "Auto Body Repair",
    headline: "Auto Body Repair & Paint Services in Springfield & Eugene, OR",
    metaTitle: "Auto Body Repair Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Full auto body repair and paint services in Springfield & Eugene, OR. Dents, scratches, rust, panel damage — Blue Rose restores it all. Call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision offers comprehensive auto body repair services in Springfield and Eugene, Oregon, covering everything from dents and scratches to full panel replacement and paint refinishing. Whether your vehicle has minor surface damage or requires extensive bodywork, our team delivers precise repairs and color-matched paint to restore your car's appearance and value.",
    body: `## Auto Body Repair Services We Provide

Auto body repair encompasses any work that restores a vehicle's exterior panels, trim, and paint to their original condition. At Blue Rose Auto Body & Collision, we handle the full spectrum of body damage — from a single door ding to multi-panel collision damage.

## Common Auto Body Repairs

**Dent Repair**
Minor dents from parking lot incidents, hail, or road debris can often be repaired without paint using paintless dent repair (PDR) techniques. Larger or creased dents may require traditional panel reshaping or replacement.

**Scratch & Scuff Repair**
Surface scratches that haven't penetrated the primer layer can be polished out. Deeper scratches reaching bare metal require spot painting with factory-matched color to prevent rust and restore appearance.

**Panel Repair & Replacement**
Damaged doors, fenders, hoods, and quarter panels can be repaired or replaced depending on the severity of damage and cost-effectiveness of repair vs. replacement.

**Rust Repair**
Early-stage surface rust can be treated and refinished. Structural rust requires panel section replacement to maintain vehicle safety and prevent further deterioration.

**Bumper Repair**
Cracked, scuffed, or misaligned bumpers are repaired or replaced and painted to match. See our dedicated [Bumper Repair](/services/bumper-repair/) page.

## Paint & Refinishing

Every body repair at Blue Rose Auto Body & Collision is completed with a professional paint finish matched precisely to your vehicle's factory color code. We use computerized paint-mixing systems to ensure seamless color blending across repaired panels.

## Service Area

We serve customers from Eugene, Springfield, Santa Clara, Coburg, Junction City, Cottage Grove, and all surrounding Lane County communities. Drive to our conveniently located Springfield shop or call us to discuss your repair needs.`,
    faqs: [
      {
        question: "How do I know if a dent needs traditional repair or paintless dent repair (PDR)?",
        answer:
          "PDR works best on shallow dents where the paint is intact and the metal hasn't been creased or stretched. Our technicians assess each dent and recommend the most cost-effective method. We explain the options and let you decide.",
      },
      {
        question: "Can you match paint on an older vehicle with a faded finish?",
        answer:
          "Yes — our computerized paint-mixing system reads your vehicle's color code and can formulate a match. For significantly faded panels, we may blend adjacent panels to create a seamless transition. We discuss color-matching expectations before starting.",
      },
      {
        question: "What types of vehicles do you repair?",
        answer:
          "We repair domestic and foreign vehicles including cars, trucks, SUVs, and vans. Contact us to discuss your specific vehicle make and model.",
      },
    ],
    relatedServices: ["collision-repair", "dent-repair", "scratch-repair", "paint-matching"],
    icon: "🔧",
  },
  {
    slug: "custom-paint-refinishing",
    name: "Custom Paint & Refinishing",
    shortName: "Custom Paint",
    headline: "Custom Auto Paint & Refinishing in Eugene, OR",
    metaTitle: "Custom Auto Paint Eugene OR | Blue Rose Auto Body",
    metaDescription:
      "Custom auto paint and refinishing in Eugene & Springfield, OR. Color changes, graphics, show-quality finishes. Call Blue Rose at (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision offers professional custom auto paint and refinishing services in Springfield and Eugene, Oregon, from single-panel color matching to full vehicle color changes and specialty finishes. Our paint technicians use professional-grade products and a controlled spray environment to deliver durable, show-quality paint results.",
    body: `## Custom Auto Paint Services

A fresh paint job does more than restore your vehicle's looks — it protects the underlying metal from corrosion and significantly improves resale value. At Blue Rose Auto Body & Collision, we provide custom paint services for drivers who want more than a standard repair finish.

## What We Offer

**Full Vehicle Repaints**
A complete repaint strips or scuffs the existing finish, addresses any surface imperfections, and applies new primer, base coat, and clear coat throughout. Ideal for vehicles with faded, oxidized, or extensively damaged paint.

**Color Changes**
Want a different color? We can repaint your vehicle in any factory or custom color. We prep all panels and jambs for a consistent, professional result.

**Panel-by-Panel Refinishing**
Individual panels can be refinished and blended into adjacent areas for a seamless match — commonly needed after collision repairs or localized paint damage.

**Specialty Finishes**
We offer matte, satin, and pearl finishes in addition to standard gloss paint — ask about available options for your project.

## Our Paint Process

1. Surface preparation — cleaning, sanding, and priming
2. Color mixing using computerized formula matching
3. Application in a controlled spray environment for dust-free results
4. Clear coat application for durability and gloss
5. Finish buffing and quality inspection

## Paint Longevity

A professionally applied paint job from Blue Rose Auto Body & Collision is designed to last. Proper surface preparation is the key to paint adhesion and durability — we never cut corners on prep work.`,
    faqs: [
      {
        question: "How long does a full vehicle repaint take?",
        answer:
          "A full repaint typically takes 3–5 business days depending on vehicle size, surface prep requirements, and the complexity of the finish. We provide a timeline estimate before beginning.",
      },
      {
        question: "Can you match a custom or discontinued color?",
        answer:
          "Our computerized paint-mixing system can formulate thousands of colors, including discontinued factory colors and custom mixes. Bring your vehicle in and we will assess the best matching approach.",
      },
    ],
    relatedServices: ["paint-matching", "paint-correction", "scratch-repair"],
    icon: "🎨",
  },
  {
    slug: "paintless-dent-repair",
    name: "Paintless Dent Repair (PDR)",
    shortName: "PDR",
    headline: "Paintless Dent Repair (PDR) in Springfield & Eugene, OR",
    metaTitle: "Paintless Dent Repair Springfield OR | Blue Rose Auto",
    metaDescription:
      "Professional paintless dent repair (PDR) in Springfield & Eugene, OR. Fix dents without paint — fast, affordable, and paint-preserving. Call (541) 641-8877.",
    intro:
      "Paintless dent repair (PDR) is a technique that removes dents from a vehicle's body panels without disturbing the factory paint, preserving your vehicle's original finish and resale value. Blue Rose Auto Body & Collision performs professional PDR in Springfield and Eugene, Oregon for hail damage, door dings, and minor dents where the paint surface is intact.",
    body: `## What Is Paintless Dent Repair?

Paintless dent repair (PDR) uses specialized tools to carefully massage dented metal back to its original shape from behind the panel — no grinding, no body filler, no repainting. When performed correctly on the right type of dent, PDR results are indistinguishable from the original factory finish.

## When PDR Is the Right Choice

PDR is most effective when:
- The paint is not cracked, chipped, or creased at the dent
- The dent is not on a body line or sharp edge
- The metal hasn't been stretched beyond its elastic limit
- Access to the back of the panel is achievable

Common candidates: hail damage, parking lot door dings, minor hood dents, and small fender indentations.

## When Traditional Repair Is Needed

Some dents are not suitable for PDR — deeply creased dents, dents with paint damage, or dents in locations where the panel can't be accessed from behind require traditional body repair with filler and paint refinishing.

## Benefits of PDR Over Traditional Dent Repair

- **Preserves original factory paint** — no color-matching required
- **Faster turnaround** — many PDR repairs are completed same-day or next-day
- **Lower cost** — eliminates paint materials and booth time
- **Maintains vehicle value** — factory paint is worth more than repainted panels on resale

## Hail Damage Repair

Hail events in the Willamette Valley can leave dozens of small dents across hood, roof, and trunk panels. PDR is the most cost-effective and paint-preserving way to address hail damage. We can assess your hail damage and provide an estimate.`,
    faqs: [
      {
        question: "How long does PDR take?",
        answer:
          "Many PDR repairs are completed the same day or within 24 hours. Larger jobs like extensive hail damage may take 2–3 days. We provide a time estimate after assessing the damage.",
      },
      {
        question: "Will PDR leave any marks or signs of repair?",
        answer:
          "When performed correctly on suitable dents, PDR results are invisible to the naked eye. Our technicians only recommend PDR for dents where a complete restoration is achievable.",
      },
      {
        question: "Does insurance cover PDR for hail damage?",
        answer:
          "Hail damage is typically covered under the comprehensive portion of your auto insurance policy. We work with your insurer directly. See our insurance claim repair page for details.",
      },
    ],
    relatedServices: ["dent-repair", "collision-repair", "insurance-claim-repair"],
    icon: "✨",
  },
  {
    slug: "dent-repair",
    name: "Dent Repair",
    shortName: "Dent Repair",
    headline: "Dent Repair Services in Springfield & Eugene, OR",
    metaTitle: "Dent Repair Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Expert dent repair in Springfield & Eugene, OR. PDR and traditional dent removal. Blue Rose Auto Body restores your panels perfectly. Call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision repairs dents of all sizes in Springfield and Eugene, Oregon, using paintless dent repair (PDR) for paint-intact dents and traditional panel reshaping with color-matched refinishing for more severe damage. Our technicians assess every dent to recommend the most effective and cost-efficient repair method.",
    body: `## Dent Repair Options at Blue Rose Auto Body & Collision

Dents happen — from parking lot door dings and hail storms to minor collisions and falling branches. The right repair approach depends on the size, depth, and location of the dent, and whether the paint surface is still intact.

## Paintless Dent Repair (PDR)

For dents where the paint hasn't cracked or chipped, PDR is the preferred method. It's faster, more affordable, and preserves your factory paint finish. See our [PDR service page](/services/paintless-dent-repair/) for full details.

## Traditional Dent Repair

Larger or creased dents, and dents with paint damage, require traditional methods: reshaping or replacing the panel, applying body filler where needed, priming, and painting with factory-matched color. This approach ensures a perfect visual result even for complex damage.

## Panel-by-Panel Approach

Every panel is treated individually. We assess each damaged area and recommend the repair method that delivers the best visual result at the most reasonable cost. We explain our recommendation before any work begins.

## Dents We Repair

- Door dings
- Hail damage
- Hood and roof dents
- Fender dents
- Trunk lid dents
- Quarter panel damage

Contact us for a free dent repair estimate in Springfield, Eugene, or anywhere in Lane County.`,
    faqs: [
      {
        question: "How much does dent repair cost?",
        answer:
          "Dent repair cost varies widely based on dent size, location, depth, and whether paint is damaged. A small PDR repair may cost $75–$150, while traditional repairs on large panels can cost several hundred dollars. We provide a written estimate before any work begins.",
      },
      {
        question: "Can large dents be repaired without replacing the panel?",
        answer:
          "Often yes — metal is flexible and skilled technicians can reshape significantly dented panels. However, if a panel is too badly deformed or creased, replacement may be more cost-effective than repair. We give you honest guidance on both options.",
      },
    ],
    relatedServices: ["paintless-dent-repair", "collision-repair", "panel-replacement"],
    icon: "🔨",
  },
  {
    slug: "bumper-repair",
    name: "Bumper Repair",
    shortName: "Bumper Repair",
    headline: "Bumper Repair in Springfield & Eugene, OR",
    metaTitle: "Bumper Repair Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Professional bumper repair and replacement in Springfield & Eugene, OR. Cracks, scuffs, and misalignment fixed. Blue Rose Auto Body — call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision repairs and replaces damaged bumpers in Springfield and Eugene, Oregon, fixing cracks, scuffs, tears, and misalignment with factory-matched paint for a seamless finish. Bumper damage is among the most common auto body repairs — we restore both the appearance and the protective function of your bumper.",
    body: `## Bumper Repair & Replacement Services

Your vehicle's bumper is engineered to absorb low-speed impacts and protect more expensive components behind it. When a bumper is damaged, timely repair or replacement is important for both appearance and function.

## Types of Bumper Damage We Repair

**Scuffs and Surface Scratches**
Shallow scuffs on plastic bumper covers can often be repaired with plastic filler, sanding, and repainting — no replacement needed.

**Cracks and Splits**
Cracked bumper covers can be repaired from behind with adhesive backing and plastic welding, then refinished on the outside. Severely cracked or structurally compromised covers are replaced.

**Dents and Deformation**
Some bumper cover dents can be popped out with heat and pressure. Deformed or collapsed bumpers require replacement.

**Paint Damage**
Any bumper repair involving paint is finished with our computerized color-matching system to blend seamlessly with the vehicle's existing finish.

**Misalignment**
Bumpers that are crooked or don't sit flush can often be readjusted without replacement by addressing mounting hardware or damaged clips.

## OEM vs. Aftermarket Bumpers

When replacement is required, we discuss OEM (original manufacturer) and quality aftermarket options. OEM parts match your vehicle's original specifications exactly. Aftermarket parts may cost less — we explain the tradeoffs so you can decide.

## Insurance Coverage for Bumper Damage

Bumper damage from a collision is typically covered by your auto insurance. We work with all insurers and handle the paperwork.`,
    faqs: [
      {
        question: "Can a cracked bumper be repaired instead of replaced?",
        answer:
          "In many cases yes — plastic bumper covers can be repaired with plastic welding and adhesive backing for cracks that haven't compromised the structural integrity. We assess each case and recommend repair when it delivers results equivalent to replacement.",
      },
      {
        question: "How long does bumper repair take?",
        answer:
          "Minor bumper repairs (scuffs, small cracks) can be completed in 1–2 days. Full replacement and repainting typically takes 2–3 days to allow proper paint cure time.",
      },
    ],
    relatedServices: ["collision-repair", "panel-replacement", "paint-matching"],
    icon: "🛡️",
  },
  {
    slug: "panel-replacement",
    name: "Panel Replacement",
    shortName: "Panel Replacement",
    headline: "Auto Panel Replacement in Springfield & Eugene, OR",
    metaTitle: "Panel Replacement Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Expert auto panel replacement in Springfield & Eugene, OR. Doors, fenders, hoods, quarter panels. Blue Rose restores your vehicle perfectly. Call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision performs professional auto panel replacement in Springfield and Eugene, Oregon, replacing damaged doors, fenders, hoods, trunk lids, and quarter panels with OEM or quality replacement parts and factory-matched paint. Panel replacement is often the best approach when damage is too extensive for repair.",
    body: `## When Is Panel Replacement the Right Choice?

Sometimes a damaged panel is beyond cost-effective repair — when metal is too severely buckled, rust has compromised the structure, or repair cost approaches the cost of a quality replacement part. In these cases, panel replacement delivers a better result at a comparable or lower cost than attempting a complex repair.

## Panels We Replace

- **Doors** — front and rear, complete with glass, trim, and hardware transferred from the original
- **Fenders** — front fenders are bolt-on panels on most vehicles, making replacement straightforward
- **Hoods** — complete hood replacement when damage is too extensive for conventional repair
- **Trunk lids / hatch** — replaced and refinished with matching paint
- **Quarter panels** — structural panels requiring precise welding and alignment
- **Rocker panels** — lower body structural sections, often affected by rust or side impacts

## Our Replacement Process

1. Remove the damaged panel carefully to avoid disturbing adjacent undamaged areas
2. Source OEM or quality replacement panel
3. Fit and align the new panel to factory tolerances
4. Weld or fasten per manufacturer specifications
5. Prime, paint, and clear-coat with factory color match
6. Re-install trim, seals, and hardware

## Parts Quality

We source replacement panels from reputable suppliers and discuss OEM vs. quality aftermarket options with you before ordering. OEM panels provide the exact fit and finish of your original vehicle — we recommend them whenever the cost difference is justified.`,
    faqs: [
      {
        question: "Is panel replacement covered by insurance?",
        answer:
          "Yes — panel replacement resulting from a collision or covered event is typically covered by comprehensive or collision insurance. We work with your insurer directly on the estimate and repair authorization.",
      },
      {
        question: "Will a replaced panel be as strong as the original?",
        answer:
          "A properly fitted and welded replacement panel meets the same structural standards as the original. We follow manufacturer repair procedures and check alignment with precision measuring tools.",
      },
    ],
    relatedServices: ["collision-repair", "bumper-repair", "paint-matching"],
    icon: "🏗️",
  },
  {
    slug: "paint-matching",
    name: "Paint Matching",
    shortName: "Paint Matching",
    headline: "Precision Paint Matching in Springfield & Eugene, OR",
    metaTitle: "Auto Paint Matching Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Computerized paint matching in Springfield & Eugene, OR. Seamless color blends on any vehicle. Blue Rose Auto Body — call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision uses computerized paint-mixing and spectrophotometer technology to match your vehicle's factory color with precision, ensuring repaired panels blend seamlessly with the surrounding finish. Accurate paint matching is the difference between a repair that is invisible and one that is obvious.",
    body: `## How We Match Your Vehicle's Paint

Every vehicle leaves the factory with a specific color code — but that code is just the starting point. Paint weathers, fades, and oxidizes differently on every vehicle depending on age, sun exposure, and climate. Getting a true match requires more than looking up a formula.

## Our Color-Matching Process

**Step 1: Read the Color Code**
Every vehicle has a paint code on a label inside the door jamb or under the hood. This code identifies the original factory formula.

**Step 2: Measure the Actual Color**
We use a spectrophotometer — a precise color-reading instrument — to measure the actual current color of your vehicle's panels, accounting for any fade or weathering since the vehicle was new.

**Step 3: Mix the Formula**
Our computerized paint-mixing system formulates the exact blend needed to match your vehicle's current finish, not just the factory code.

**Step 4: Blend for Seamlessness**
On older or faded vehicles, we blend paint at panel edges to create a gradual transition that makes repaired areas indistinguishable from surrounding panels.

## Why Paint Matching Matters

A mismatched repair is immediately noticeable. Poor matching reduces your vehicle's visual appeal and resale value. Our investment in color-reading technology ensures that every paint repair we perform matches as precisely as possible.

## All Colors, All Makes

We match colors for all domestic and foreign vehicle makes and models, including metallic, pearl, tri-coat, and specialty finishes. Contact us with your vehicle's color and we will discuss the matching process.`,
    faqs: [
      {
        question: "Can you perfectly match a 10-year-old car's faded paint?",
        answer:
          "We can get very close using spectrophotometer measurement and careful blending. On heavily faded vehicles, blending adjacent panels creates a seamless transition. We discuss realistic expectations before beginning.",
      },
      {
        question: "What if my vehicle has a rare or custom color?",
        answer:
          "Our computerized paint system can formulate most colors, including rare factory variants and many custom colors. Bring your vehicle in for an assessment.",
      },
    ],
    relatedServices: ["custom-paint-refinishing", "paint-correction", "scratch-repair"],
    icon: "🎯",
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    shortName: "Paint Correction",
    headline: "Paint Correction Services in Springfield & Eugene, OR",
    metaTitle: "Paint Correction Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Professional paint correction in Springfield & Eugene, OR. Remove swirls, oxidation, and imperfections. Blue Rose Auto Body — call (541) 641-8877.",
    intro:
      "Paint correction is the process of removing surface imperfections — swirl marks, light scratches, oxidation, and water spots — from a vehicle's clear coat using machine polishing, restoring deep gloss and clarity to the finish without repainting. Blue Rose Auto Body & Collision offers paint correction in Springfield and Eugene, Oregon for vehicles with dull or blemished paint that is otherwise structurally sound.",
    body: `## What Is Paint Correction?

Your vehicle's paint consists of multiple layers: primer, base coat (color), and clear coat. Most surface imperfections — swirls, light scratches, haze, and oxidation — live in the clear coat layer. Paint correction uses machine polishing compounds and pads to level the clear coat surface, removing those defects and revealing the clear, glossy paint beneath.

## Common Paint Defects We Correct

- **Swirl marks** — circular fine scratches from improper washing
- **Buffer trails** — holograms left by improper machine polishing
- **Light scratches** — that haven't penetrated through the clear coat
- **Oxidation** — chalky, hazy surface from UV exposure
- **Water spots** — mineral deposits from hard water
- **Industrial fallout** — embedded surface contamination

## The Paint Correction Process

**Stage 1: Paint Decontamination**
We thoroughly wash and decontaminate the surface, removing embedded particles that would cause scratching during polishing.

**Stage 2: Paint Thickness Measurement**
We measure clear coat thickness across panels before polishing to ensure safe removal levels — overcorrecting can thin the clear coat to failure.

**Stage 3: Machine Polishing**
Using dual-action and rotary polishers with appropriate compounds and pads, we work section by section, progressively refining the surface.

**Stage 4: Final Polish & Inspection**
A final light polish maximizes gloss. We inspect results under high-intensity lighting to verify defect removal.

## Is Paint Correction Right for Your Vehicle?

Paint correction is ideal for vehicles with good paint structure but poor surface condition. It is not a substitute for a repaint on vehicles with deep scratches, chipping, peeling, or UV damage through the clear coat. We assess your vehicle and recommend the right approach.`,
    faqs: [
      {
        question: "How long does paint correction last?",
        answer:
          "Paint correction results are permanent — removed defects do not return unless new damage occurs. To protect the corrected finish, we recommend applying paint protection (wax, sealant, or ceramic coating) afterward.",
      },
      {
        question: "Will paint correction remove deep scratches?",
        answer:
          "Paint correction removes defects that are within the clear coat layer. Deep scratches that reach the base coat or primer require touch-up paint or spot refinishing, not polishing.",
      },
    ],
    relatedServices: ["scratch-repair", "paint-matching", "custom-paint-refinishing"],
    icon: "💎",
  },
  {
    slug: "scratch-repair",
    name: "Scratch Repair",
    shortName: "Scratch Repair",
    headline: "Auto Scratch Repair in Springfield & Eugene, OR",
    metaTitle: "Scratch Repair Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Professional scratch repair in Springfield & Eugene, OR. Surface scratches to deep paint damage — Blue Rose Auto Body fixes it right. Call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision repairs auto paint scratches of all depths in Springfield and Eugene, Oregon — from fine surface marks corrected by polishing to deep scratches requiring spot painting with factory-matched color. We assess every scratch individually and recommend the most effective repair method for your vehicle.",
    body: `## Scratch Repair: Understanding Your Options

Not all scratches are the same. A scratch that only affected the clear coat needs a very different repair than one that cut through to bare metal. Getting the right diagnosis determines whether your repair is a quick polish or a proper paint job.

## Types of Scratches

**Clear Coat Scratches**
The shallowest scratches affect only the top clear coat layer. These catch a fingernail lightly or not at all. Machine polishing typically removes or minimizes them significantly.

**Base Coat Scratches**
Deeper scratches that reveal the color layer (base coat) beneath the clear. The color is still there, but the clear coat is breached. These require spot painting: fine sanding, application of matching base coat and clear coat, and blending.

**Primer-Level Scratches**
Scratches that go through both color and clear, revealing the grey primer underneath. These need the same treatment as base coat scratches but typically cover more area.

**Metal-Exposed Scratches**
The deepest scratches that reach bare metal are an urgent repair priority — exposed metal begins to rust, especially in Oregon's wet climate. Prompt repair prevents a cosmetic issue from becoming a structural one.

## Keying and Vandalism Damage

Deliberate scratch damage (keying) typically runs deep across multiple panels. These repairs require full spot painting with precise color matching across the affected areas. Document damage with photos before filing an insurance claim.

## Touch-Up Paint for Minor Scratches

For very small chips and scratches, factory-matched touch-up paint can minimize the appearance of damage and protect against rust while a full repair is scheduled.`,
    faqs: [
      {
        question: "Can I fix a scratch myself with touch-up paint?",
        answer:
          "DIY touch-up paint works best on very small chips and scratches to stop rust progression. For larger or highly visible scratches, professional repair produces a much better visual result — we can blend the paint seamlessly so the repair is invisible.",
      },
      {
        question: "How do I know if my scratch needs paint or just polishing?",
        answer:
          "Run your fingernail across the scratch. If it catches significantly, the scratch likely penetrates the clear coat and needs paint. If it barely catches or your nail glides over it, machine polishing may correct it. Bring your vehicle in and we will give you an honest assessment.",
      },
    ],
    relatedServices: ["paint-correction", "paint-matching", "touch-up-paint"],
    icon: "🔍",
  },
  {
    slug: "bedliner",
    name: "Bedliner",
    shortName: "Bedliner",
    headline: "Spray-On & Drop-In Bedliner in Springfield, OR",
    metaTitle: "Truck Bedliner Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Professional truck bedliner application in Springfield & Eugene, OR. Spray-on and drop-in options. Blue Rose Auto Body — call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision applies professional bedliner coatings in Springfield and Eugene, Oregon, protecting your truck bed from scratches, dents, corrosion, and UV damage. A quality bedliner preserves your truck's resale value and keeps your cargo area looking good for years.",
    body: `## Bedliner Options

A truck bed takes constant abuse from cargo, tools, and Oregon's wet climate. An unprotected bed dents, scratches, and rusts — reducing your truck's resale value and making cargo management messy. A professional bedliner is one of the most practical investments for any pickup truck owner.

## Spray-On Bedliner

Spray-on bedliners are applied directly to the truck bed surface, creating a permanent, seamless coating that conforms to every contour of the bed. There are no gaps for water or debris to collect underneath. The textured surface provides excellent grip for cargo.

Spray-on bedliners are:
- Permanent and seamlessly bonded to the bed
- Resistant to UV fading, cracking, and peeling
- Available in standard texture and varying thicknesses
- Applicable to areas beyond the bed (wheel wells, rocker panels, undercarriage)

## Drop-In Bedliner

Drop-in liners are preformed plastic inserts that sit in the bed. They are removable and replaceable, making them a lower-cost initial option. However, water and debris can collect under the liner, potentially accelerating rust. We offer drop-in liners for customers who prefer the removable option.

## Beyond the Bed

Bedliner coating is also popular for:
- **Wheel wells** — protects against rock chips and rust
- **Rocker panels** — common rust-prone areas
- **Running boards** — adds grip and protection
- **Undercarriage coating** — full underseal protection

Talk to us about where bedliner coating makes sense for your vehicle beyond the bed.`,
    faqs: [
      {
        question: "How long does a spray-on bedliner last?",
        answer:
          "A professionally applied spray-on bedliner is designed to last the life of the truck. The coating bonds permanently to the bed surface and resists peeling, cracking, and UV fading with normal use.",
      },
      {
        question: "Can a bedliner be applied to a rusty bed?",
        answer:
          "Rust must be treated before bedliner application. We address surface rust, treat the metal, and then apply the coating. Structural rust may require more extensive repair before the bedliner can be applied.",
      },
    ],
    relatedServices: ["undercoating", "fabrication"],
    icon: "🛻",
  },
  {
    slug: "fabrication",
    name: "Fabrication",
    shortName: "Fabrication",
    headline: "Custom Auto Fabrication in Springfield & Eugene, OR",
    metaTitle: "Auto Fabrication Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Custom auto fabrication and metalwork in Springfield & Eugene, OR. Panels, brackets, custom work. Blue Rose Auto Body — call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision offers custom auto fabrication services in Springfield and Eugene, Oregon, including metal fabrication for custom panels, structural repairs requiring new metal sections, and specialty bodywork projects. Our fabrication capabilities support both collision repair work and custom vehicle projects.",
    body: `## Auto Fabrication Services

Fabrication refers to creating or modifying metal components for a vehicle — cutting, shaping, welding, and finishing custom metalwork. At Blue Rose Auto Body & Collision, our fabrication capabilities allow us to handle repair and custom projects that go beyond bolt-on part replacement.

## What We Fabricate

**Custom Panels**
When an original part is unavailable or a custom piece is needed, our technicians can fabricate replacement panels from sheet metal — matching the profile, gauge, and fit of the original.

**Structural Repair Sections**
Rust or collision damage sometimes affects areas where factory replacement panels aren't available as individual sections. We cut and weld custom repair sections to address localized damage without replacing entire assemblies.

**Brackets and Mounting Hardware**
Custom brackets for aftermarket accessories, lights, skid plates, and equipment mounts can be fabricated to your specifications.

**Rust Repair**
Severe rust often requires cutting out the affected metal and welding in fresh sections. Proper rust repair fabrication ensures the repair is structural, not just cosmetic.

## Our Fabrication Approach

All fabrication work at Blue Rose is performed with attention to structural integrity, fit, and finish. We use industry-standard welding techniques and verify structural repairs with measuring equipment before final finishing.

Contact us to discuss your fabrication project — we'll assess feasibility, provide an estimate, and walk you through our approach.`,
    faqs: [
      {
        question: "Can you fabricate a panel that's no longer available from the manufacturer?",
        answer:
          "In many cases yes — we can fabricate custom replacement sections from sheet metal when factory parts are discontinued or unavailable. Contact us with your vehicle details and we will assess the project.",
      },
    ],
    relatedServices: ["panel-replacement", "collision-repair", "bedliner"],
    icon: "⚙️",
  },
  {
    slug: "undercoating",
    name: "Undercoating",
    shortName: "Undercoating",
    headline: "Undercoating & Rust Protection in Springfield, OR",
    metaTitle: "Vehicle Undercoating Springfield OR | Blue Rose Auto Body",
    metaDescription:
      "Professional vehicle undercoating and rust protection in Springfield & Eugene, OR. Protect your vehicle from Oregon's wet climate. Call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision applies professional undercoating to protect vehicles from rust, corrosion, and road noise in Springfield and Eugene, Oregon. Oregon's wet winters and road conditions accelerate undercarriage rust — undercoating is one of the most effective ways to extend your vehicle's lifespan.",
    body: `## Why Undercoating Matters in Oregon

Oregon's climate means vehicles face sustained moisture exposure for much of the year. Even without road salt, the wet environment accelerates rust on unprotected metal undercarriage components. Undercoating creates a barrier between your vehicle's metal and moisture, dramatically slowing corrosion.

## Types of Undercoating We Apply

**Rubberized Undercoating**
A flexible, rubber-based spray coating that seals metal surfaces against moisture while absorbing road vibration for a quieter interior. Popular for general underbody protection.

**Acoustic Undercoating**
Heavier-bodied coatings applied to floor pans, wheel wells, and firewall areas that reduce road noise and vibration in addition to rust protection.

**Penetrating Oil-Based Undercoating**
Penetrating formulas work into existing surface rust and displace moisture — ideal for used vehicles being treated after some corrosion has already developed.

## What Undercoating Protects

- Frame rails and crossmembers
- Floor pans
- Wheel wells (inside and out)
- Suspension components
- Exhaust heat shields
- Fuel and brake lines (using appropriate materials)

## New vs. Used Vehicles

New vehicles benefit most from undercoating applied before corrosion begins. Used vehicles can still benefit — we treat existing surface rust and apply appropriate protection. We assess your vehicle's undercarriage condition before recommending a specific coating type.`,
    faqs: [
      {
        question: "How often does undercoating need to be reapplied?",
        answer:
          "A properly applied professional undercoating typically lasts 3–5 years or more depending on driving conditions and the product used. We recommend inspection every few years to assess the coating's condition.",
      },
      {
        question: "Can undercoating be applied to an older vehicle with existing rust?",
        answer:
          "Yes — we treat existing surface rust before applying coating. However, structural rust requires repair before coating, as covering damaged metal without addressing it accelerates hidden deterioration.",
      },
    ],
    relatedServices: ["bedliner", "fabrication"],
    icon: "🛡️",
  },
  {
    slug: "insurance-claim-repair",
    name: "Insurance Claim Repair",
    shortName: "Insurance Claims",
    headline: "Insurance Claim Auto Repair in Springfield & Eugene, OR",
    metaTitle: "Insurance Claim Repair Springfield OR | Blue Rose Auto",
    metaDescription:
      "Hassle-free insurance claim auto repair in Springfield & Eugene, OR. We work with all insurers. Blue Rose Auto Body — call (541) 641-8877.",
    intro:
      "Blue Rose Auto Body & Collision works directly with all major auto insurance companies to manage collision claim repairs in Springfield and Eugene, Oregon, handling the documentation, estimates, and communication so you can focus on getting back on the road. You have the right to choose your own repair shop — we make the process straightforward regardless of your insurance company.",
    body: `## Navigating Auto Insurance Claims

Dealing with insurance after an accident is stressful. At Blue Rose Auto Body & Collision, we've worked with every major insurance company and know exactly how to move your claim forward efficiently.

## Your Right to Choose Your Repair Shop

Oregon law protects your right to choose any licensed auto body shop for insurance-paid repairs — you are not required to use your insurer's "preferred" or "recommended" shop. Some insurance companies will try to steer you toward their network shops. You can politely decline and bring your vehicle to Blue Rose Auto Body & Collision.

## How the Insurance Repair Process Works at Blue Rose

**Step 1: Bring Your Vehicle In**
Bring your vehicle and your claim number. We document the damage thoroughly with photos and written notes.

**Step 2: We Prepare the Estimate**
We create a detailed repair estimate and submit it directly to your insurance company. We advocate for proper repair procedures and quality parts — not just the cheapest option.

**Step 3: Insurance Review & Approval**
Your insurer reviews our estimate. We handle any supplement negotiations if additional damage is discovered during repairs.

**Step 4: Repair**
We complete repairs using appropriate methods and quality parts. Your deductible is paid directly to us at pickup.

**Step 5: Final Inspection & Delivery**
We inspect the completed repair with you before delivery and address any questions.

## We Work with All Major Insurers

We have experience working with all major insurance companies. Our team handles the administrative side so you don't have to.

## Diminished Value Claims

If your vehicle has lost market value after an accident — even after a perfect repair — you may have a right to file a diminished value claim with the at-fault driver's insurance. We can provide documentation to support your claim.`,
    faqs: [
      {
        question: "Do I have to use the repair shop my insurance recommends?",
        answer:
          "No. Oregon law gives you the right to choose any licensed auto body shop for insurance-covered repairs. You are not obligated to use your insurer's preferred shop, and your coverage cannot be denied for choosing your own shop.",
      },
      {
        question: "What if more damage is found during repairs?",
        answer:
          "If we discover additional damage during repairs that wasn't visible in the initial estimate, we document it and submit a supplement to your insurance company. We do not begin additional work without authorization from you and your insurer.",
      },
      {
        question: "How do I pay my deductible?",
        answer:
          "Your deductible is paid directly to us when you pick up your vehicle. The insurance company pays the remaining covered repair cost directly to us or to you.",
      },
    ],
    relatedServices: ["collision-repair", "panel-replacement", "bumper-repair"],
    icon: "📋",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map((slug) => SERVICES.find((s) => s.slug === slug)).filter(Boolean) as Service[];
}
