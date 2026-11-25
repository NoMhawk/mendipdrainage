// Service (money) pages. One main keyword per page: see seo/keyword-map.md.
// Every rule stated here must match research/regulations.md.
const { gbp, cfg } = require('../layout');
const p = cfg.prices;

module.exports = [
  {
    slug: 'septic-tank-replacement',
    keyword: 'septic tank replacement',
    title: 'Septic Tank Replacement in Somerset & Dorset | ' + cfg.brand,
    description: `Old septic tank discharging to a stream, or failing? We replace it with a modern treatment plant, from survey to sign-off. Wells-based, fixed quotes.`,
    h1: 'Septic tank replacement',
    lead: 'We take out old, failing or non-compliant septic tanks and put in a modern sewage treatment plant or a new drainage field. One local team, from the first survey to building control sign-off.',
    glance: [
      ['Typical cost', `${gbp(p.replacementTypicalLow)} to ${gbp(p.replacementTypicalHigh)} for a normal house`],
      ['Time on site', 'Usually 3 to 5 working days'],
      ['Paperwork', 'Building control, design notes, maintenance pack'],
      ['Area', 'Wells and about an hour around'],
    ],
    sections: [
      { h2: 'When does a septic tank need replacing?', fig: { src: 'before-after.svg', alt: 'Before: an old septic tank sending dirty liquid into a ditch, marked not allowed. After: a new treatment plant sending clean water to a flowing stream, marked allowed.', caption: 'The most common upgrade: old septic tank to ditch, replaced by a treatment plant to a flowing stream.' }, html: `
<p>There are three common reasons, and they often overlap.</p>
<ul>
<li><strong>It goes to a stream, river or ditch.</strong> Under the Environment Agency's general binding rules, a septic tank must not discharge straight to a watercourse. If yours does, GOV.UK says you must replace or upgrade it as soon as possible, with plans in place, usually within 12 months.</li>
<li><strong>You are selling or buying.</strong> The buyer's survey or solicitor will ask where the tank discharges. If it is not compliant, the buyer and seller need to agree who will put it right, as a condition of sale.</li>
<li><strong>It has failed.</strong> Cracks, leaks, smells, sewage backing up, boggy ground over the soakaway, or a tank that fills far too fast.</li>
</ul>
<p>Not sure which applies to you? Read <a href="/guides/signs-your-septic-tank-is-failing/">signs your septic tank is failing</a> or <a href="/guides/general-binding-rules/">the general binding rules in plain English</a>.</p>` },
      { h2: 'Your options', html: `
<p>GOV.UK gives three ways to sort out a septic tank that discharges to a watercourse. We look at all three on the first visit and tell you which one makes sense.</p>
<ol>
<li><strong>Connect to the mains sewer.</strong> If a public sewer is close and it is reasonable to connect, this is usually the first choice. We will tell you if this is the case rather than sell you a plant you don't need.</li>
<li><strong>Replace the tank with a sewage treatment plant.</strong> A treatment plant cleans the waste water much more thoroughly than a septic tank, so it can discharge to a flowing watercourse under the rules. This is the most common fix, especially where the ground drains poorly. See <a href="/sewage-treatment-plant-installation/">sewage treatment plant installation</a>.</li>
<li><strong>Keep a septic tank and add a drainage field.</strong> If the ground drains well, a septic tank can discharge to a properly designed drainage field instead of the stream. This needs a percolation test and enough space. See <a href="/drainage-field-installation/">drainage field installation</a>.</li>
</ol>` },
      { h2: 'How a replacement works', add: 'journey', html: `<p>Here is what happens from your first call to the day we hand over. You deal with one team throughout.</p>` }, { h2: 'The detail, for those who want it', html: `
<ol class="steps">
<li><strong>Free site visit.</strong> We find the tank, the outfall and the pipe runs, ask how many bedrooms and people, and look at access for a digger.</li>
<li><strong>Survey and tests.</strong> Where a drainage field is an option, we dig trial holes and run a percolation test to Approved Document H. We check the sewer distance and any protected sites nearby.</li>
<li><strong>Fixed written quote.</strong> Plant size and make, where it goes, where the clean water goes, the electrics, reinstatement, building control. No vague "provisional sums" for the main work.</li>
<li><strong>Building control.</strong> A new treatment plant or septic tank needs building regulations approval. We prepare the drawings and submit the application with you.</li>
<li><strong>Install.</strong> The old tank is emptied by a registered waste carrier, then removed or filled. The new plant goes in, pipes are connected, power is run, and the ground is backfilled.</li>
<li><strong>Commission and hand over.</strong> We start the plant, test it, fix the maintenance notice inside your home, and give you a pack: what was fitted, where everything is, how to look after it. You need this when you sell.</li>
</ol>` },
      { h2: 'What it costs', html: `
<p>For a normal three or four bedroom house, a full septic tank to treatment plant replacement typically costs <strong>${gbp(p.replacementTypicalLow)} to ${gbp(p.replacementTypicalHigh)}</strong>. The biggest things that change the price are the size of plant, where the treated water goes, and the ground. See the full <a href="/septic-tank-replacement-cost/">septic tank replacement cost guide</a>.</p>` },
      { h2: 'Why people around Wells choose a local firm', html: `
<ul>
<li>We know the ground here, from the clay and peat of the Levels to the fissured limestone of the Mendips, and what it means for drainage fields.</li>
<li>We know the councils, building control teams and the Somerset phosphate schemes. If a funded upgrade might suit you better, we will say so. See <a href="/phosphate-credits-somerset/">phosphate credits in Somerset</a>.</li>
<li>One firm does the survey, design, digging, electrics coordination and paperwork. You are not left to chase three trades.</li>
</ul>` },
    ],
    faqs: [
      { q: 'Is it illegal to have a septic tank?', a: 'No. Septic tanks are still allowed in England if they meet the general binding rules, which means discharging to ground through a proper drainage field, not to a stream, river or ditch.' },
      { q: 'Do I have to replace my septic tank when I sell my house?', a: 'If it discharges to a watercourse, it is already non-compliant and must be upgraded. GOV.UK says the buyer and seller should agree who will do the work, as a condition of sale. It does not have to be the seller, but it does have to be agreed.' },
      { q: 'How long does a replacement take?', a: 'Most domestic jobs take 3 to 5 working days on site. Building control approval and booking add time before that, so allow a few weeks from first visit to finish.' },
      { q: 'Will my garden be dug up?', a: 'Part of it, yes. We plan the route to keep disruption down, protect lawns and drives where we can, and reinstate the ground when we finish. Your quote says exactly what reinstatement is included.' },
      { q: 'Do I need planning permission?', a: 'Building regulations approval is always needed for a new septic tank or treatment plant. Planning permission is sometimes needed too. We check this for your property during the survey.' },
    ],
    related: ['sewage-treatment-plant-installation', 'septic-tank-to-treatment-plant', 'selling-a-house-with-a-septic-tank', 'septic-tank-replacement-cost'],
  },

  {
    slug: 'sewage-treatment-plant-installation',
    keyword: 'sewage treatment plant installation',
    title: 'Sewage Treatment Plant Installation | Somerset & Dorset',
    description: 'Sewage treatment plant installation across Wells, the Mendips and Somerset. Correctly sized BS EN 12566 plants from leading makers, installed and signed off.',
    h1: 'Sewage treatment plant installation',
    lead: 'A sewage treatment plant cleans your waste water to a standard that can go to a flowing stream or a drainage field. We size it properly, install it, wire it up through a registered electrician, and hand you the paperwork.',
    glance: [
      ['Plant only', `about ${gbp(p.plantOnlyLow)} to ${gbp(p.plantOnlyHigh)} for a house-sized unit`],
      ['Installed', `typically ${gbp(p.replacementTypicalLow)} to ${gbp(p.replacementTypicalHigh)}`],
      ['Standard', 'BS EN 12566-3 plants'],
      ['Upkeep', 'Yearly service and emptying, booked by you'],
    ],
    sections: [
      { h2: 'What a treatment plant does', fig: { src: 'treatment-plant-diagram.svg', alt: 'Cutaway of a sewage treatment plant: solids settle, an air pump feeds bacteria that clean the water, it settles again and clean water flows out.', caption: 'A treatment plant cleans the water itself using air and natural bacteria.' }, html: `
<p>A septic tank only lets solids settle out. The liquid that leaves it is still dirty, which is why it must go into a drainage field to be cleaned by the soil.</p>
<p>A sewage treatment plant goes further. It settles the solids, then pumps air through the liquid so bacteria can break down the waste, then settles it again. The water that comes out is far cleaner. That is why a treatment plant can discharge to a flowing watercourse under the general binding rules, where a septic tank cannot.</p>
<p>The trade-off: a plant needs electricity, a yearly service, and regular emptying. Read <a href="/guides/septic-tank-vs-treatment-plant/">septic tank vs treatment plant</a> for the full comparison.</p>` },
      { h2: 'Getting the size right', html: `
<p>Plants are sized by "population equivalent" (PE), roughly how many people they can serve. The general binding rules say new systems must be sized to British Water's <em>Flows and Loads</em> guidance, which is based on bedrooms, not on how many people live there today. A typical three bedroom house needs about a 5 or 6 PE plant.</p>
<p>Undersized plants are one of the most common faults we see. They work for a while, then struggle when the house is full or a new owner moves in.</p>` },
      { h2: 'Brands we can fit', html: `
<p>We are not tied to one manufacturer. We choose the plant to suit your site, budget and running costs. Makes commonly fitted in the UK include Kingspan Klargester, Marsh, Tricel, Graf, WPL and Premier Tech. Every plant we fit meets BS EN 12566-3. See <a href="/guides/choosing-a-treatment-plant/">how to choose a treatment plant</a>.</p>` },
      { h2: 'Where the treated water goes', html: `
<ul>
<li><strong>To a flowing watercourse.</strong> Allowed for a treatment plant (not a septic tank) if the stream flows all year round, the volume is under 5,000 litres a day, and it is not in or near certain protected sites.</li>
<li><strong>To a drainage field.</strong> Needed if there is no suitable watercourse. The ground must pass a percolation test. See <a href="/drainage-field-installation/">drainage fields</a>.</li>
<li><strong>Pumped.</strong> If the outfall is uphill, the plant can include a pump chamber.</li>
</ul>` },
      { h2: 'What is included', html: `
<ul>
<li>Site survey, design and plant sizing</li>
<li>Building regulations application and inspections</li>
<li>Emptying and removing or filling the old tank (by a registered waste carrier)</li>
<li>Excavation, installation, backfill and connections</li>
<li>Power supply and control panel, by a Part P registered electrician</li>
<li>Commissioning and testing</li>
<li>Maintenance notice and a handover pack for your records and any future sale</li>
</ul>` },
    ],
    faqs: [
      { q: 'How much electricity does a treatment plant use?', a: 'It depends on the make and process. Most domestic plants run an air pump or motor all the time, so ask for the running cost of each option. We include this when we compare plants for you.' },
      { q: 'What happens in a power cut?', a: 'Approved Document H says a plant that needs power should be able to work without it for up to 6 hours, or have a backup supply. Plants still hold the waste in a power cut. Tell us if your area has long outages and we will factor it in.' },
      { q: 'Do you service treatment plants?', a: 'No. We install and replace systems. After handover, your plant needs a yearly service by a competent engineer, for example a British Water accredited service engineer. We install, we do not service, but the plant maker can recommend someone local. Your handover pack says what the maker requires.' },
      { q: 'How often does a treatment plant need emptying?', a: 'The general binding rules say at least once a year, or as the manufacturer says. See our guide on how often to empty a treatment plant.' },
      { q: 'Can I install a treatment plant myself?', a: 'It is possible but not something we would recommend. It needs building regulations approval, correct sizing, safe deep excavation, and electrical work by a registered electrician.' },
    ],
    related: ['septic-tank-replacement', 'drainage-field-installation', 'septic-tank-replacement-cost'],
  },

  {
    slug: 'septic-tank-to-treatment-plant',
    keyword: 'septic tank to treatment plant conversion',
    title: 'Septic Tank to Treatment Plant Conversion | ' + cfg.brand,
    description: 'Can you convert your septic tank to a treatment plant? When a conversion unit works, when it does not, and when full replacement is the better choice.',
    h1: 'Converting a septic tank to a treatment plant',
    lead: 'Conversion units fit inside an existing septic tank and turn it into a treatment plant. They suit some sites. But the rules on watercourse discharges are strict, so check before you buy one.',
    glance: [
      ['Good for', 'Sound tanks discharging to ground'],
      ['Watch out', 'Watercourse discharges'],
      ['Alternative', 'Full replacement with a new plant'],
      ['First step', 'A survey of the existing tank'],
    ],
    sections: [
      { h2: 'What is a conversion unit?', html: `<p>A conversion (or retrofit) unit is a kit that sits inside an old septic tank and adds air and extra treatment, turning it into something close to a treatment plant. It means less digging than a full replacement.</p>` },
      { h2: 'The rule you need to know', fig: { src: 'before-after.svg', alt: 'Before: an old septic tank sending dirty liquid into a ditch, marked not allowed. After: a new treatment plant sending clean water to a flowing stream, marked allowed.', caption: 'The most common upgrade: old septic tank to ditch, replaced by a treatment plant to a flowing stream.' }, html: `
<p>The general binding rules for discharges to surface water say a retrofit system inside an existing septic tank is only acceptable if it was installed <strong>before 2007</strong>. Any reedbed or secondary treatment unit fitted after a septic tank must meet the relevant British Standard. If it doesn't, you have to upgrade to a treatment plant or apply for a permit.</p>
<p>In practice, if your tank discharges to a stream or ditch, a new conversion unit is unlikely to be the answer unless it is a certified system that meets the standard. Check with the maker and the Environment Agency before you pay for one.</p>` },
      { h2: 'When conversion can make sense', html: `
<ul>
<li>The tank is structurally sound, watertight and the right size.</li>
<li>The unit is certified to the relevant British Standard for the use you need.</li>
<li>Access is very tight and replacing the tank would be very costly.</li>
</ul>` },
      { h2: 'When full replacement is better', html: `
<ul>
<li>The tank is old brick or concrete, cracked, or leaking.</li>
<li>It discharges to a watercourse.</li>
<li>It is undersized for the house.</li>
<li>You are selling and want a clear, certified system on paper.</li>
</ul>
<p>We will look at your tank and tell you honestly which route is right. See <a href="/septic-tank-replacement/">septic tank replacement</a>.</p>` },
    ],
    faqs: [
      { q: 'Is a conversion unit cheaper than a new plant?', a: 'Often the unit is cheaper and there is less digging. But if the tank is in poor condition or the unit does not meet the rules for your discharge, it can cost more in the end.' },
      { q: 'Will a buyer accept a converted tank?', a: 'Buyers and their solicitors want proof the system meets the rules. Certified equipment, building control records and a service history help. Without them, expect questions.' },
    ],
    related: ['septic-tank-replacement', 'sewage-treatment-plant-installation', 'septic-tank-survey'],
  },

  {
    slug: 'selling-a-house-with-a-septic-tank',
    keyword: 'selling a house with a septic tank',
    title: 'Selling a House with a Septic Tank | Somerset & Dorset',
    description: 'Selling a house with a septic tank in Somerset or Dorset? What the rules say, what buyers ask, the written notice you must give, and how to avoid delays.',
    h1: 'Selling a house with a septic tank',
    lead: 'A septic tank should not stop a sale. But a non-compliant one, or one with no paperwork, can slow it down or knock the price. Here is what the rules say and how we help sellers, buyers and agents.',
    glance: [
      ['Buyer will ask', 'Where it discharges, and is it compliant?'],
      ['You must give', 'A written description of the system'],
      ['Survey', `from ${gbp(p.surveyFrom)}`],
      ['Fast route', 'Survey, quote and plan within days'],
    ],
    sections: [
      { h2: 'What the rules say about selling', html: `
<p>Under the general binding rules, when you sell a property with a septic tank or treatment plant you <strong>must tell the buyer in writing</strong> that a sewage discharge is in place. The written note must include:</p>
<ul>
<li>a description of the treatment system and drainage system</li>
<li>where the main parts and the discharge point are</li>
<li>details of any changes made to the system</li>
<li>how it should be maintained, and the maintenance manual if you have one</li>
<li>maintenance records, if you have them</li>
</ul>
<p>If the septic tank discharges to a watercourse, it has to be replaced or upgraded. GOV.UK says the buyer and seller should agree who will be responsible for the work, as a condition of sale.</p>` },
      { h2: 'What the buyer and their solicitor will ask', html: `
<ul>
<li>Is it a septic tank, a treatment plant or a cesspit?</li>
<li>Where does it discharge: a drainage field, a soakaway, or a stream or ditch?</li>
<li>Is it shared with neighbours? Is there a written agreement?</li>
<li>Does it have building regulations approval?</li>
<li>When was it last emptied and serviced?</li>
<li>Is it inside your boundary? If not, are there rights to access and maintain it?</li>
</ul>
<p>Mortgage lenders may also want answers. Having them ready avoids weeks of back and forth.</p>` },
      { h2: 'How we help sellers', add: 'checker', html: `
<ol class="steps">
<li><strong>Pre-sale survey.</strong> We find and inspect the system, check where it discharges, and write a clear report you can hand to your agent and solicitor. See <a href="/septic-tank-survey/">septic tank surveys</a>.</li>
<li><strong>Fixed quote if work is needed.</strong> So you and the buyer can agree who pays, or agree a price reduction based on a real figure, not a guess.</li>
<li><strong>Work done fast.</strong> Where the timing allows, we can do the replacement before completion and hand over a full pack.</li>
<li><strong>The written notice.</strong> We give you the information the rules require you to pass on.</li>
</ol>` },
      { h2: 'How we help buyers', html: `
<p>Buying a house with a septic tank? Get it checked before you exchange. A survey tells you what you are taking on, and a written quote gives you a real figure to negotiate with. Read <a href="/guides/buying-a-house-with-a-septic-tank/">buying a house with a septic tank</a>.</p>` },
      { h2: 'Estate agents and conveyancers', html: `<p>We work across Wells, Glastonbury, Shepton Mallet, Cheddar and the surrounding area. If you have a sale held up by a septic tank question, <a href="/contact/">get in touch</a>. We aim to give clear, written answers your clients can rely on.</p>` },
    ],
    faqs: [
      { q: 'Who pays to replace a septic tank when a house is sold?', a: 'There is no fixed rule. GOV.UK says the buyer and seller should agree who is responsible, as a condition of sale. Often the seller pays or the price is reduced by the cost of the work.' },
      { q: 'Can I sell a house with a non-compliant septic tank?', a: 'Yes, but the buyer must be told and the upgrade has to be agreed as part of the sale. Expect the buyer to ask for a quote and a price reduction, or for the work to be done before completion.' },
      { q: 'Is there a septic tank compliance certificate?', a: 'There is no single official certificate. What buyers look for is evidence: building regulations approval, product certification (such as BS EN 12566), service and emptying records, and the written description the rules require. A survey report brings this together.' },
      { q: 'How long does it take?', a: 'A survey can usually be booked within days. Replacement takes 3 to 5 days on site once building control is in place. Tell us your completion date and we will say honestly whether it can be done in time.' },
    ],
    related: ['septic-tank-survey', 'septic-tank-replacement', 'septic-tank-replacement-cost'],
  },

  {
    slug: 'septic-tank-survey',
    keyword: 'septic tank survey',
    title: 'Septic Tank Survey for House Sales | Wells & Somerset',
    description: `Septic tank surveys for buyers and sellers in Somerset and Dorset: where it discharges, its condition and whether it meets the rules. From ${gbp(p.surveyFrom)}.`,
    h1: 'Septic tank surveys',
    lead: 'A clear written report on your septic tank, treatment plant or cesspit: what it is, where it goes, its condition, and whether it meets the general binding rules. For buyers, sellers and anyone who wants peace of mind.',
    glance: [
      ['Price', `from ${gbp(p.surveyFrom)}`],
      ['Report', 'Written, with photos and a plan'],
      ['Turnaround', 'Agreed when you book, to fit your sale'],
      ['Includes', 'Discharge point, condition, compliance view'],
    ],
    sections: [
      { h2: 'What we check', fig: { src: 'septic-tank-diagram.svg', alt: 'Cutaway of a septic tank: waste in, scum floats, sludge sinks, liquid flows out to a drainage field where the soil cleans it.', caption: 'A septic tank separates solids. The soil does the cleaning.' }, html: `
<ul>
<li>Type of system: septic tank, treatment plant or cesspit, and the make and model if known</li>
<li>Size compared with the number of bedrooms</li>
<li>Condition of the tank, lids, baffles and pipes (with the tank emptied where needed)</li>
<li>Where it discharges: drainage field, soakaway, stream or ditch</li>
<li>Signs of failure: smells, ponding, lush or boggy ground, backing up</li>
<li>Rough distance to the nearest public sewer, and nearby protected sites</li>
<li>Paperwork: building regulations approval, service and emptying records</li>
</ul>` },
      { h2: 'What you get', html: `<p>A plain-English report with photos, a sketch plan of where everything is, our view on whether it meets the general binding rules, and what (if anything) needs doing. If work is needed, we can give you a fixed quote.</p>` },
      { h2: 'When to get one', html: `
<ul>
<li><strong>Before you list a house for sale.</strong> No surprises when the buyer's solicitor asks.</li>
<li><strong>Before you exchange on a purchase.</strong> Know the cost before you commit.</li>
<li><strong>If you think something is wrong.</strong> Smells, slow drains, wet ground.</li>
</ul>` },
      { h2: 'CCTV and emptying', html: `<p>Some problems can only be seen inside the pipes or with the tank empty. If we think a CCTV drain survey or emptying is needed, we will tell you the extra cost before we do it.</p>` },
    ],
    faqs: [
      { q: 'Does a normal house survey cover the septic tank?', a: 'Usually not in any detail. A building survey or homebuyer report will note there is private drainage, but it will not normally tell you where it discharges or whether it meets the rules.' },
      { q: 'Should the buyer or seller pay for the survey?', a: 'Either. Buyers often pay for their own, but sellers who get one done before listing can answer questions quickly and keep a sale on track.' },
    ],
    related: ['selling-a-house-with-a-septic-tank', 'septic-tank-replacement'],
  },

  {
    slug: 'drainage-field-installation',
    keyword: 'drainage field installation',
    title: 'Drainage Field & Septic Tank Soakaway Installation',
    description: 'New drainage fields for septic tanks and treatment plants, designed to BS 6297 with proper percolation tests. Replacing failed soakaways across Somerset and Dorset.',
    h1: 'Drainage field installation',
    lead: 'A drainage field spreads the liquid from your septic tank or treatment plant into the soil, where it is cleaned naturally. Many people call it a soakaway. Done properly, it is designed from a percolation test and built to BS 6297.',
    glance: [
      ['Typical cost', `${gbp(p.drainageFieldLow)} to ${gbp(p.drainageFieldHigh)} on its own`],
      ['Standard', 'BS 6297:2007 and Approved Document H'],
      ['Test first', 'Percolation test and trial hole'],
      ['Distance', 'At least 15m from any building'],
    ],
    sections: [
      { h2: 'Drainage field or soakaway?', html: `<p>People often say "soakaway" for any hole that takes waste water away. For sewage, the rules are clear: a septic tank must discharge to ground through a <strong>drainage field</strong> built to BS 6297:2007. A rainwater-style soakaway installed after December 2007 is not allowed for sewage. Read <a href="/guides/drainage-field-vs-soakaway/">drainage field vs soakaway</a>.</p>` },
      { h2: 'How we design one', fig: { src: 'drainage-field-plan.svg', alt: 'Plan of a garden with a drainage field of perforated pipes in gravel trenches, at least 15 metres from the house and 10 metres from a stream, tank within 30 metres of tanker access.', caption: 'Key distances from Approved Document H.' }, html: `
<ol class="steps">
<li><strong>Trial hole.</strong> At least 2m deep, to find the winter water table. It must not come within 1m of the pipes.</li>
<li><strong>Percolation test.</strong> We time how fast water soaks away, at least three times in at least two holes, as Approved Document H sets out. The result (Vp) needs to be between 12 and 100.</li>
<li><strong>Sizing.</strong> The area of the field is worked out from the Vp result and the number of people.</li>
<li><strong>Siting.</strong> At least 10m from any watercourse, 15m from any building, 50m from any water supply borehole or spring, and away from driveways and services.</li>
</ol>
<p>More on the test: <a href="/guides/percolation-test/">percolation tests explained</a>.</p>` },
      { h2: 'Signs your drainage field has failed', html: `
<ul>
<li>Wet, boggy or very green grass over the field</li>
<li>Sewage smells in the garden</li>
<li>The septic tank fills up quickly or drains back up</li>
<li>Water pooling near the tank outlet</li>
</ul>` },
      { h2: 'If your ground does not drain', html: `<p>Heavy clay is common in parts of Somerset. If your percolation test fails, a drainage field may not work. Options include a treatment plant discharging to a flowing watercourse, or a drainage mound. We will tell you what the test shows and what it means.</p>` },
    ],
    faqs: [
      { q: 'How big does a drainage field need to be?', a: 'It depends on the soil and the number of people. Approved Document H gives a formula based on the percolation result. A typical house field is tens of square metres of trenches.' },
      { q: 'Can I drive over a drainage field?', a: 'No. Approved Document H says no access roads, driveways or paved areas should be in the disposal area.' },
    ],
    related: ['septic-tank-replacement', 'sewage-treatment-plant-installation', 'septic-tank-replacement-cost'],
  },

  {
    slug: 'cesspit-replacement',
    keyword: 'cesspit replacement',
    title: 'Cesspit Replacement with a Treatment Plant | Somerset',
    description: 'Tired of paying to empty a cesspit every few weeks? We replace cesspits and cesspools with sewage treatment plants across Wells, the Mendips and Somerset.',
    h1: 'Cesspit replacement',
    lead: 'A cesspit (or cesspool) is a sealed tank that holds everything until it is pumped out. It has no outlet, so it can need emptying every few weeks. Replacing it with a treatment plant can cut those bills for good.',
    glance: [
      ['Problem', 'Frequent, costly emptying'],
      ['Fix', 'Treatment plant with a legal outlet'],
      ['Needs', 'A watercourse or ground that drains'],
      ['Check', 'Sewer distance first'],
    ],
    sections: [
      { h2: 'Why people replace cesspits', html: `<p>Cesspits have to hold every drop of waste water from the house. A family can fill one in weeks, and each tanker visit costs money. A treatment plant cleans the water so it can leave the site legally, so it only needs emptying about once a year.</p>` },
      { h2: 'What we need to check', html: `
<ul>
<li>Is there a public sewer close enough that connecting is reasonable? If a sewer is within 30m of your boundary, a new discharge cannot use the general binding rules.</li>
<li>Is there a stream that flows all year, or ground that passes a percolation test?</li>
<li>Is the site near a protected area that needs a permit?</li>
</ul>
<p>Replacing a cesspit creates a new discharge, so the rules for new discharges apply. We check them all on the survey.</p>` },
    ],
    faqs: [
      { q: 'Why was a cesspit fitted in the first place?', a: 'Usually because there was no suitable outlet: no watercourse, poor ground, or rules at the time. Check this first, because the same limits may still apply.' },
    ],
    related: ['sewage-treatment-plant-installation', 'drainage-field-installation'],
  },

  {
    slug: 'new-build-off-mains-drainage',
    keyword: 'off mains drainage for new builds',
    title: 'Off-Mains Drainage for New Builds & Conversions',
    description: 'Off-mains drainage for self-builds, barn conversions and small developments in Somerset and Dorset. Treatment plant design, building control and phosphate advice.',
    h1: 'Off-mains drainage for new builds and conversions',
    lead: 'Building a house, converting a barn or adding a holiday let away from the mains sewer? We design and install the treatment system, and help with the drainage details building control and planning need.',
    glance: [
      ['For', 'Self-builders, small developers, conversions'],
      ['Includes', 'Design, sizing, building control drawings'],
      ['Somerset', 'Phosphate rules may apply to new homes'],
      ['First check', 'Can you reasonably connect to the sewer?'],
    ],
    sections: [
      { h2: 'Sewer first', html: `<p>For new discharges, the general binding rules do not apply if a public foul sewer is within 30m of the property boundary (or 30m times the number of homes for a development). Natural England and the Environment Agency also say new development should connect to the sewer where reasonable. We check this first.</p>` },
      { h2: 'Phosphates and new homes in Somerset', html: `<p>Much of Somerset, including Wells, drains to the Somerset Levels and Moors Ramsar site. New homes in that catchment need to show they will not add phosphorus (nutrient neutrality). That can affect your choice of treatment system and whether you need mitigation. See <a href="/phosphate-credits-somerset/">phosphate credits in Somerset</a>, and talk to the council planning team early.</p>` },
      { h2: 'What we provide', html: `
<ul>
<li>Flow calculations to British Water <em>Flows and Loads</em></li>
<li>Percolation tests and drainage field design to BS 6297</li>
<li>Plant selection and layout drawings for building control</li>
<li>Installation timed with your groundworks</li>
<li>Commissioning and handover pack</li>
</ul>` },
      { h2: 'Holiday lets and commercial use', html: `<p>Holiday lets, B&amp;Bs and businesses use British Water's <em>Flows and Loads</em> figures, which can be higher than for a normal house. Above 2,000 litres a day to ground, or 5,000 litres a day to a watercourse, the general binding rules no longer apply: you need to connect to the public sewer if that is reasonable, or apply for a permit.</p>` },
    ],
    faqs: [
      { q: 'Do I need a permit for a new treatment plant?', a: 'Not if you meet the general binding rules. You need a permit if you cannot meet them, for example because of volume, protected sites or a groundwater Source Protection Zone 1, and connecting to the sewer is not reasonable.' },
    ],
    related: ['sewage-treatment-plant-installation', 'phosphate-credits-somerset', 'drainage-field-installation'],
  },

  {
    slug: 'phosphate-credits-somerset',
    keyword: 'phosphate credits Somerset',
    title: 'Phosphate Credits & Septic Tank Upgrades in Somerset',
    description: 'How Somerset\'s phosphate rules affect septic tanks. Some homeowners may qualify for a funded upgrade. Honest advice on your options in the Somerset Levels catchment.',
    h1: 'Septic tanks and phosphate credits in Somerset',
    lead: 'Somerset\'s phosphate problem has created schemes that pay to upgrade old septic tanks. Some homeowners may get an upgrade funded. Here is how it works, in plain English, and how to find out if it applies to you.',
    glance: [
      ['Where', 'Somerset Levels and Moors catchment'],
      ['Includes', 'Much of central and south Somerset, including Wells'],
      ['Possible', 'Funded upgrades for some homes'],
      ['Our advice', 'Check schemes before paying'],
    ],
    sections: [
      { h2: 'Why phosphates matter here', html: `<p>The Somerset Levels and Moors is a Ramsar site, an internationally important wetland. Too much phosphorus in the rivers that feed it harms wildlife. Since 2020, new housing in the catchment has had to be "nutrient neutral", meaning it must not add phosphorus overall.</p>` },
      { h2: 'Where septic tanks come in', html: `<p>Old septic tanks and poor treatment plants release phosphorus. Upgrading them reduces it. Natural England and the Environment Agency have advised that upgrading some existing septic tanks and treatment plants can create "phosphate credits", which developers can then use to get planning permission for new homes.</p>
<p>Somerset Council runs its own phosphate credit scheme, and lists approved third-party providers. At least one local firm offers free upgrades to eligible homeowners in the Parrett, Tone, Brue and Axe catchments, in return for the credits.</p>` },
      { h2: 'Does it apply to me?', html: `
<p>Maybe. Eligibility depends on where your property is, what system you have, and where it discharges. Natural England's advice says some systems, for example certain ones that already discharge to ground, cannot create credits.</p>
<ul>
<li>Somerset Council phosphate credit scheme: <a href="https://www.somerset.gov.uk/planning-buildings-and-land/somerset-council-phosphate-credit-scheme/" rel="noopener">somerset.gov.uk</a></li>
<li>Council list of third-party providers: <a href="https://somerset.gov.uk/planning-buildings-and-land/potential-third-party-phosphate-mitigation-schemes-in-the-somerset-levels-and-moors-catchment-area" rel="noopener">somerset.gov.uk</a></li>
</ul>` },
      { h2: 'Our honest position', html: `<p>If you might qualify for a funded upgrade, look into it before you pay anyone, including us. If you don't qualify, are in a hurry (for example a house sale), or want to choose your own system and installer, we are happy to quote. Schemes and national policy are changing, so we keep this page up to date.</p>` },
    ],
    faqs: [
      { q: 'Is a free septic tank upgrade really free?', a: 'Under the schemes we have seen, the provider pays for the upgrade because they sell the phosphate credits it creates. Read the terms carefully, including who owns and maintains the new plant and any legal agreement on your property.' },
      { q: 'Does this apply in Dorset?', a: 'Parts of north Dorset, such as around Sherborne, drain to the Somerset Levels and Moors. Other parts of Dorset are covered by different nutrient rules, such as Poole Harbour. Check with Dorset Council.' },
    ],
    related: ['septic-tank-replacement', 'new-build-off-mains-drainage', 'guides/general-binding-rules'],
  },
];
