// Informational guides. Build topical authority and answer real questions.
// Every rule stated here must match research/regulations.md.
const { gbp, cfg } = require('../layout');
const p = cfg.prices;

module.exports = [
  {
    slug: 'general-binding-rules',
    keyword: 'septic tank general binding rules',
    title: 'Septic Tank General Binding Rules Explained (England)',
    description: 'The general binding rules for septic tanks and treatment plants in plain English: volume limits, watercourses, selling, emptying and permits.',
    h1: 'The general binding rules, in plain English',
    lead: 'If you have a septic tank or small sewage treatment plant in England, the general binding rules are the conditions you must meet to avoid needing an environmental permit. Here is what they mean for you.',
    sections: [
      { h2: 'What they are', html: `<p>The general binding rules are set by the Environment Agency under the Environmental Permitting Regulations 2016. The current version took effect on 2 October 2023. If your system meets them, you do not need a permit. They only cover domestic-type sewage.</p>` },
      { h2: 'The headline rules', add: 'checker', html: `
<ul>
<li><strong>Septic tanks must not discharge to a watercourse.</strong> They must go to ground through a drainage field.</li>
<li><strong>Treatment plants may discharge to a watercourse</strong> that flows all year, or to a drainage field.</li>
<li><strong>Volume limits:</strong> up to 2,000 litres a day to ground, or 5,000 litres a day to surface water. A normal house is well under these.</li>
<li><strong>Standards:</strong> treatment plants must meet BS EN 12566, drainage fields BS 6297:2007 (for systems installed after the standards came in).</li>
<li><strong>Size:</strong> new systems must be sized to British Water's <em>Flows and Loads</em> guidance.</li>
<li><strong>Maintenance:</strong> maintain it as the maker says, and get it emptied before it is full, at least yearly or as the maker says, by a registered waste carrier.</li>
<li><strong>Selling:</strong> you must tell the buyer in writing about the system, where it is, any changes, how to maintain it and any records.</li>
</ul>` },
      { h2: 'If your septic tank goes to a stream or ditch', fig: { src: 'before-after.svg', alt: 'Before: an old septic tank sending dirty liquid into a ditch, marked not allowed. After: a new treatment plant sending clean water to a flowing stream, marked allowed.', caption: 'The most common upgrade: old septic tank to ditch, replaced by a treatment plant to a flowing stream.' }, html: `<p>This has not been allowed since the rules changed, and the old deadline of 1 January 2020 has passed. You need to either connect to the mains sewer, replace the tank with a <a href="/sewage-treatment-plant-installation/">treatment plant</a>, or install a <a href="/drainage-field-installation/">drainage field</a>. GOV.UK says to do it as soon as possible, with plans in place within a reasonable time, usually 12 months.</p>` },
      { h2: 'When you cannot use the rules', html: `
<p>For discharges that started on or after 1 January 2015, you cannot rely on the general binding rules (and need to connect to the sewer or get a permit) if, for example:</p>
<ul>
<li>a public foul sewer is within 30m of your property boundary</li>
<li>a surface water discharge is in or within 500m of certain protected sites (such as an SSSI, SAC, SPA or Ramsar site), or a ground discharge is in or within 50m of one</li>
<li>a ground discharge is in a groundwater Source Protection Zone 1, which includes anywhere within 50m of a private drinking water supply</li>
<li>a surface water discharge is to a dry ditch, an enclosed pond or lake</li>
</ul>
<p>You can check protected sites on Defra's Magic map.</p>` },
      { h2: 'Existing or new discharge?', html: `<p>A discharge counts as new if it started, changed type, moved more than 10m, or increased past the volume limits on or after 2 October 2023. Replacing a septic tank with a treatment plant can make it a new discharge, so the rules for new discharges must be checked.</p>` },
      { h2: 'Where to read the rules yourself', html: `
<ul>
<li><a href="https://www.gov.uk/guidance/general-binding-rules-small-sewage-discharge-to-a-surface-water" rel="noopener">GOV.UK: discharges to surface water</a></li>
<li><a href="https://www.gov.uk/guidance/general-binding-rules-small-sewage-discharge-to-the-ground" rel="noopener">GOV.UK: discharges to the ground</a></li>
<li><a href="https://www.gov.uk/permits-you-need-for-septic-tanks" rel="noopener">GOV.UK: septic tanks and treatment plants, what you need to do</a></li>
</ul>
<p>These rules apply in England. Wales and Scotland have their own.</p>` },
    ],
    faqs: [
      { q: 'Do I need to register my septic tank?', a: 'Not in England, if it meets the general binding rules. Registration was dropped when the rules came in. Wales and Scotland are different.' },
      { q: 'What happens if I ignore the rules?', a: 'The Environment Agency can take action if a system causes pollution or does not meet the rules. The bigger practical problem for most people is a sale falling through or being delayed.' },
    ],
    related: ['septic-tank-replacement', 'guides/can-a-septic-tank-discharge-to-a-ditch', 'selling-a-house-with-a-septic-tank'],
  },

  {
    slug: 'septic-tank-vs-treatment-plant',
    keyword: 'septic tank vs sewage treatment plant',
    title: 'Septic Tank vs Sewage Treatment Plant: Which Do You Need?',
    description: 'The difference between a septic tank and a sewage treatment plant: how each works, where each can discharge, running costs, and which suits your property.',
    h1: 'Septic tank vs sewage treatment plant',
    lead: 'They look similar from the garden, but they work differently and the rules treat them differently. The main question is where the water goes.',
    sections: [
      { h2: 'How each one works', fig: [{ src: 'septic-tank-diagram.svg', alt: 'Cutaway of a septic tank: waste in, scum floats, sludge sinks, liquid flows out to a drainage field where the soil cleans it.', caption: 'A septic tank separates solids. The soil does the cleaning.' }, { src: 'treatment-plant-diagram.svg', alt: 'Cutaway of a sewage treatment plant: solids settle, an air pump feeds bacteria that clean the water, it settles again and clean water flows out.', caption: 'A treatment plant cleans the water itself using air and natural bacteria.' }], html: `
<p><strong>Septic tank:</strong> a tank with two or more chambers. Solids sink, scum floats, and the liquid flows out. No power, no moving parts. The liquid is still dirty, so it must be cleaned by the soil in a drainage field.</p>
<p><strong>Treatment plant:</strong> settles the solids too, but then adds air so bacteria break down the waste, and settles it again. Needs electricity. The water leaving it is much cleaner.</p>` },
      { h2: 'Side by side', add: 'proscons', html: `
<table>
<thead><tr><th></th><th>Septic tank</th><th>Treatment plant</th></tr></thead>
<tbody>
<tr><td>Can go to a stream or river?</td><td>No</td><td>Yes, if it flows all year</td></tr>
<tr><td>Can go to a drainage field?</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Needs power?</td><td>No</td><td>Yes</td></tr>
<tr><td>Servicing</td><td>Emptying, checks</td><td>Yearly service and emptying</td></tr>
<tr><td>Unit cost</td><td>Lower</td><td>Higher, about ${gbp(p.plantOnlyLow)}–${gbp(p.plantOnlyHigh)} for a house</td></tr>
</tbody>
</table>` },
      { h2: 'Which do you need?', html: `
<ul>
<li><strong>Only a stream or ditch to discharge to, or clay soil?</strong> A treatment plant, discharging to a watercourse that flows all year.</li>
<li><strong>Free-draining ground and space for a field?</strong> A septic tank with a drainage field can work and has no running costs. A treatment plant to a drainage field is also an option.</li>
<li><strong>Public sewer nearby?</strong> Connecting may be the right answer.</li>
</ul>
<p>We assess this on a free site visit. See <a href="/septic-tank-replacement/">septic tank replacement</a>.</p>` },
    ],
    faqs: [
      { q: 'Is a treatment plant better than a septic tank?', a: 'It cleans the water better and gives you more choice about where it goes. But it costs more to buy and run. If your ground drains well, a septic tank and drainage field is still a good, legal option.' },
    ],
    related: ['sewage-treatment-plant-installation', 'septic-tank-replacement', 'guides/drainage-field-vs-soakaway'],
  },

  {
    slug: 'can-a-septic-tank-discharge-to-a-ditch',
    keyword: 'can a septic tank discharge into a ditch',
    title: 'Can a Septic Tank Discharge into a Ditch or Stream?',
    description: 'No. In England a septic tank must not discharge to a ditch, stream or river. What the rules say, what you need to do, and the options for fixing it.',
    h1: 'Can a septic tank discharge into a ditch or stream?',
    lead: 'No. In England, a septic tank must not discharge directly to a watercourse. That includes streams, rivers and ditches. If yours does, it needs to be upgraded.',
    sections: [
      { h2: 'What the rules say', fig: { src: 'before-after.svg', alt: 'Before: an old septic tank sending dirty liquid into a ditch, marked not allowed. After: a new treatment plant sending clean water to a flowing stream, marked allowed.', caption: 'The most common upgrade: old septic tank to ditch, replaced by a treatment plant to a flowing stream.' }, html: `<p>The general binding rules for surface water discharges only allow a small sewage treatment plant to discharge to a watercourse. Where a septic tank does, GOV.UK says you must replace or upgrade it as soon as possible, with plans in place within a reasonable time, usually 12 months.</p>` },
      { h2: 'What about a treatment plant to a ditch?', html: `<p>Even a treatment plant can only discharge to surface water that <strong>flows throughout the year</strong>. A ditch that dries up in summer does not count (except in drought). An enclosed pond or lake is not allowed either.</p>` },
      { h2: 'How do I know where mine goes?', html: `<p>Many owners don't know. Clues: a pipe coming out into a ditch or stream bank near the tank, no wet patch or field in the garden, or old deeds mentioning an outfall. A <a href="/septic-tank-survey/">septic tank survey</a> will find it.</p>` },
      { h2: 'Your options', html: `
<ol>
<li>Connect to the mains sewer, if reasonable.</li>
<li>Replace the tank with a <a href="/sewage-treatment-plant-installation/">sewage treatment plant</a>, which can use the same outfall if the watercourse flows all year.</li>
<li>Keep the tank and add a <a href="/drainage-field-installation/">drainage field</a>, if the ground drains.</li>
</ol>` },
    ],
    faqs: [
      { q: 'My septic tank has gone to the stream for 50 years. Does it still need changing?', a: 'Yes. Age does not make it compliant. The old deadline of 1 January 2020 has passed.' },
    ],
    related: ['septic-tank-replacement', 'guides/general-binding-rules', 'guides/septic-tank-rules-1-january-2020'],
  },

  {
    slug: 'buying-a-house-with-a-septic-tank',
    keyword: 'buying a house with a septic tank',
    title: 'Buying a House with a Septic Tank: What to Check',
    description: 'Buying a house with a septic tank in Somerset or Dorset? What to ask, what to check, the rules, and how to avoid inheriting a costly problem.',
    h1: 'Buying a house with a septic tank',
    lead: 'Lots of lovely rural homes around Wells and the Mendips are off the mains. A septic tank is nothing to fear, but you should know what you are buying before you exchange.',
    sections: [
      { h2: 'Questions to ask the seller', html: `
<ul>
<li>Is it a septic tank, treatment plant or cesspit?</li>
<li>Where does it discharge?</li>
<li>Is it shared? Is there a written agreement for costs and access?</li>
<li>Is it all within the boundary? If not, what rights are there?</li>
<li>When was it last emptied and serviced? Are there records?</li>
<li>Does it have building regulations approval?</li>
</ul>
<p>The seller must give you a written description of the system under the general binding rules.</p>` },
      { h2: 'Get it surveyed', html: `<p>A normal building survey will not usually tell you if it meets the rules. A specialist <a href="/septic-tank-survey/">septic tank survey</a> will. If it needs replacing, a written quote gives you a real number to negotiate with.</p>` },
      { h2: 'If it needs upgrading', html: `<p>GOV.UK says buyer and seller should agree who will do the work, as a condition of sale. That might mean the seller does it before completion, or you agree a lower price and do it after. Typical cost for a full replacement is ${gbp(p.replacementTypicalLow)} to ${gbp(p.replacementTypicalHigh)}. See <a href="/septic-tank-replacement-cost/">prices</a>.</p>` },
      { h2: 'Running costs to budget for', html: `
<ul>
<li>Emptying: about ${gbp(p.desludgeLow)}–${gbp(p.desludgeHigh)} a time, usually yearly</li>
<li>Treatment plant service: from ${gbp(p.serviceFrom)} a year</li>
<li>Electricity for a treatment plant</li>
</ul>` },
    ],
    faqs: [
      { q: 'Will I get a mortgage on a house with a septic tank?', a: 'Usually yes. Lenders may ask questions about a non-compliant system, so have the answers ready.' },
    ],
    related: ['selling-a-house-with-a-septic-tank', 'septic-tank-survey', 'septic-tank-replacement-cost'],
  },

  {
    slug: 'drainage-field-vs-soakaway',
    keyword: 'drainage field vs soakaway',
    title: 'Drainage Field vs Soakaway: What\'s the Difference?',
    description: 'Drainage field or soakaway? Why the difference matters for septic tanks, what the rules allow, and how to tell what you have.',
    h1: 'Drainage field vs soakaway',
    lead: 'People use the words to mean the same thing. For sewage, they are not, and the difference can decide whether your system meets the rules.',
    sections: [
      { h2: 'Soakaway', html: `<p>A soakaway is usually a pit filled with rubble or crates, or a chamber of concrete rings, that lets water soak into the ground at one point. It is designed for <strong>rainwater</strong>. For sewage, the general binding rules say a soakaway installed after December 2007 is not allowed, and shafts or concrete rings should be avoided for new discharges.</p>` },
      { h2: 'Drainage field', fig: { src: 'drainage-field-plan.svg', alt: 'Plan of a garden with a drainage field of perforated pipes in gravel trenches, at least 15 metres from the house and 10 metres from a stream, tank within 30 metres of tanker access.', caption: 'Key distances from Approved Document H.' }, html: `<p>A drainage field is a network of perforated pipes laid in gravel trenches, spreading the effluent thinly over a wide area so the soil can clean it. For sewage, this is what the rules require, built to BS 6297:2007 and designed from a <a href="/guides/percolation-test/">percolation test</a>.</p>` },
      { h2: 'What if I have an old soakaway?', html: `<p>Older systems installed before the standards came in may still be acceptable if they work and cause no pollution. If yours is failing, being replaced, or might be discharging straight into groundwater, it needs a proper drainage field. See <a href="/drainage-field-installation/">drainage field installation</a>.</p>` },
    ],
    faqs: [],
    related: ['drainage-field-installation', 'guides/percolation-test'],
  },

  {
    slug: 'percolation-test',
    keyword: 'percolation test for septic tank',
    title: 'Percolation Test for a Septic Tank or Drainage Field',
    description: 'How a percolation test works, what the Vp result means, and why it decides whether a drainage field will work on your land.',
    h1: 'Percolation tests explained',
    lead: 'A percolation test measures how fast water soaks into your soil. It decides whether a drainage field can work and how big it needs to be.',
    sections: [
      { h2: 'How the test is done', html: `
<p>Approved Document H sets out the method:</p>
<ol>
<li>Dig a trial hole at least 2m deep (or 1.5m below the planned pipes) to check the water table.</li>
<li>Dig a 300mm square test hole, 300mm below where the pipes will go.</li>
<li>Fill it with water to at least 300mm and let it soak away overnight.</li>
<li>Next day, refill it and time how long the water takes to drop from 75% to 25% full (150mm).</li>
<li>Divide the time in seconds by 150. That is the Vp, seconds per millimetre.</li>
<li>Repeat at least three times in at least two holes, and take the average.</li>
</ol>
<p>Don't test in heavy rain, frost or drought.</p>` },
      { h2: 'What the result means', html: `
<ul>
<li><strong>Vp between 12 and 100:</strong> a drainage field can work.</li>
<li><strong>Below 12:</strong> water drains too fast to clean the effluent properly.</li>
<li><strong>Above 100:</strong> the ground drains too slowly, common in heavy clay.</li>
</ul>
<p>The winter water table must also stay at least 1m below the pipes. If the ground fails, a treatment plant to a flowing watercourse may be the answer.</p>` },
    ],
    faqs: [],
    related: ['drainage-field-installation', 'guides/drainage-field-vs-soakaway'],
  },

  {
    slug: 'signs-your-septic-tank-is-failing',
    keyword: 'signs of a failing septic tank',
    title: '7 Signs Your Septic Tank Is Failing',
    description: 'Smells, slow drains, boggy grass, sewage backing up: the signs your septic tank or drainage field is failing, and what to do next.',
    h1: 'Signs your septic tank is failing',
    lead: 'Septic tanks can work quietly for decades, then fail. Catch the signs early and the fix is usually cheaper.',
    sections: [
      { h2: 'The warning signs', html: `
<ol>
<li><strong>Slow sinks, baths and toilets</strong> all over the house, not just one.</li>
<li><strong>Gurgling</strong> in the pipes.</li>
<li><strong>Sewage smells</strong> in the garden or near the tank.</li>
<li><strong>Wet, boggy or extra-green grass</strong> over the drainage area.</li>
<li><strong>Sewage backing up</strong> into the house or the first manhole.</li>
<li><strong>The tank fills quickly</strong> after it has been emptied.</li>
<li><strong>Dirty water</strong> where the pipe meets a ditch or stream.</li>
</ol>` },
      { h2: 'What to do', html: `<p>First, get the tank emptied by a registered waste carrier and ask them what they saw. If problems come back quickly, the drainage field or tank has probably failed. Book a <a href="/septic-tank-survey/">survey</a> to find the cause before spending money.</p>` },
      { h2: 'Legal duty', html: `<p>Under the general binding rules you must repair or replace a system that is not in good working order, for example leaks, cracks, blockages, poor drainage or smells.</p>` },
    ],
    faqs: [],
    related: ['septic-tank-replacement', 'septic-tank-survey', 'guides/septic-tank-smells'],
  },

  {
    slug: 'how-often-empty-treatment-plant',
    keyword: 'how often should a treatment plant be emptied',
    title: 'How Often Should a Septic Tank or Treatment Plant Be Emptied?',
    description: 'The general binding rules say empty your septic tank or treatment plant at least once a year, or as the manufacturer says. What affects it and who can do it.',
    h1: 'How often should a septic tank or treatment plant be emptied?',
    lead: 'The short answer from the rules: before it gets too full, and at least once a year, or as the manufacturer says.',
    sections: [
      { h2: 'What the rules say', html: `<p>The general binding rules say you must get the sludge removed before it goes beyond the maximum capacity of the system, and you should do this at least once a year or in line with the manufacturer's instructions. The company taking it away must be a registered waste carrier. Ask to see their certificate.</p>` },
      { h2: 'What affects it', html: `
<ul>
<li>Number of people in the house</li>
<li>Size of tank or plant</li>
<li>Type of plant: some makers give longer intervals</li>
<li>What goes down the drain: wipes, fats and chemicals make things worse</li>
</ul>` },
      { h2: 'Septic tank or treatment plant: any difference?', html: `<p>The rule is the same for both: empty before it is too full, at least yearly or as the maker says. In practice, a treatment plant with too much sludge can carry solids through to the outlet and stop treating properly. A septic tank left too long pushes solids out into the drainage field, which can block it for good. A blocked drainage field costs far more to fix than a yearly empty.</p>` },
      { h2: 'Booking an empty', html: `
<ul>
<li>Check the company is a registered waste carrier and ask for a copy of the certificate.</li>
<li>Make sure the tanker can reach. Approved Document H expects a septic tank to be within 30m of vehicle access.</li>
<li>For a treatment plant, check whether the maker says to empty fully or partly, and whether to refill it with water afterwards.</li>
<li>Keep the receipt. Emptying records help when you sell.</li>
</ul>` },
      { h2: 'Cost', html: `<p>Typically ${gbp(p.desludgeLow)} to ${gbp(p.desludgeHigh)} per empty, depending on size and access. A yearly service for a treatment plant is from ${gbp(p.serviceFrom)}. See <a href="/treatment-plant-servicing/">servicing</a>.</p>` },
    ],
    faqs: [],
    related: ['treatment-plant-servicing'],
  },

  {
    slug: 'building-regulations-treatment-plant',
    keyword: 'building regulations for sewage treatment plant',
    title: 'Building Regulations for Septic Tanks & Treatment Plants',
    description: 'Do you need building regulations approval for a septic tank or treatment plant? Yes. What Approved Document H requires, including key distances.',
    h1: 'Building regulations for septic tanks and treatment plants',
    lead: 'Installing a new septic tank or treatment plant needs building regulations approval. Approved Document H, part H2, sets out how it should be done.',
    sections: [
      { h2: 'You need approval', html: `<p>GOV.UK says you need building regulations approval to install a new septic tank or small sewage treatment plant, and you may need planning permission too. If your current system was never approved, you may need to apply when you change it.</p>` },
      { h2: 'Key distances from Approved Document H', fig: { src: 'drainage-field-plan.svg', alt: 'Plan of a garden with a drainage field of perforated pipes in gravel trenches, at least 15 metres from the house and 10 metres from a stream, tank within 30 metres of tanker access.', caption: 'Key distances from Approved Document H.' }, html: `
<table>
<thead><tr><th>What</th><th>Distance</th></tr></thead>
<tbody>
<tr><td>Septic tank from habitable parts of buildings</td><td>At least 7m</td></tr>
<tr><td>Septic tank from tanker access</td><td>Within 30m</td></tr>
<tr><td>Treatment plant discharge from watercourses and other buildings</td><td>At least 10m</td></tr>
<tr><td>Drainage field from any watercourse or permeable drain</td><td>At least 10m</td></tr>
<tr><td>Drainage field from any building</td><td>At least 15m</td></tr>
<tr><td>Drainage field from a groundwater supply abstraction</td><td>At least 50m</td></tr>
</tbody>
</table>` },
      { h2: 'Other requirements', html: `
<ul>
<li>Plants should be type-tested, and if they need power, cope without it for up to 6 hours or have a backup supply.</li>
<li>A notice should be fixed inside the building describing the maintenance needed.</li>
<li>No driveways, paving or other services in the drainage field area.</li>
</ul>` },
      { h2: 'We handle it', html: `<p>We prepare the drawings and information building control needs and arrange inspections as part of every <a href="/septic-tank-replacement/">replacement</a>.</p>` },
    ],
    faqs: [],
    related: ['septic-tank-replacement', 'drainage-field-installation'],
  },

  {
    slug: 'choosing-a-treatment-plant',
    keyword: 'best sewage treatment plant UK',
    title: 'Choosing a Sewage Treatment Plant: UK Brands Compared',
    description: 'Klargester, Marsh, Tricel, Graf, WPL and more: how to choose a domestic sewage treatment plant, what matters, and indicative prices.',
    h1: 'Choosing a sewage treatment plant',
    lead: 'There is no single best plant. The right one depends on your site, budget and how much you want to spend running it. Here is what to compare.',
    sections: [
      { h2: 'What to compare', fig: { src: 'treatment-plant-diagram.svg', alt: 'Cutaway of a sewage treatment plant: solids settle, an air pump feeds bacteria that clean the water, it settles again and clean water flows out.', caption: 'A treatment plant cleans the water itself using air and natural bacteria.' }, html: `
<ul>
<li><strong>Certification:</strong> BS EN 12566-3, and ideally on British Water's approved equipment list.</li>
<li><strong>Size:</strong> sized to British Water <em>Flows and Loads</em> for your bedrooms.</li>
<li><strong>Running cost:</strong> electricity used by the blower or motor.</li>
<li><strong>Servicing:</strong> parts availability, service interval, and who locally can service it.</li>
<li><strong>Depth and shape:</strong> deep or shallow dig, which matters on rock or a high water table.</li>
<li><strong>Warranty:</strong> on the tank and the mechanical parts.</li>
</ul>` },
      { h2: 'Common UK makes', html: `
<p>Makes we commonly see and can fit include <strong>Kingspan Klargester</strong> (BioDisc, BioFicient), <strong>Marsh</strong> (Ensign, Ultra), <strong>Tricel</strong> (Novo), <strong>Graf</strong> (One2Clean), <strong>WPL</strong> (Diamond), <strong>Harlequin</strong> and <strong>Premier Tech</strong> (Ecoflo).</p>
<p>Online prices for a house-sized plant on its own were roughly ${gbp(p.plantOnlyLow)} to ${gbp(p.plantOnlyHigh)} when we last checked (November 2026), before delivery and installation.</p>` },
      { h2: 'Our approach', html: `<p>We are not tied to one brand. We recommend what suits the site and explain why, with the running costs side by side. See <a href="/sewage-treatment-plant-installation/">treatment plant installation</a>.</p>` },
    ],
    faqs: [],
    related: ['sewage-treatment-plant-installation', 'septic-tank-replacement-cost'],
  },

  {
    slug: 'septic-tank-rules-1-january-2020',
    keyword: 'septic tank rules 2020',
    title: 'The 2020 Septic Tank Rules: What Changed and What Now',
    description: 'What the 1 January 2020 septic tank deadline meant, why it still matters for homeowners and house sales, and what the current 2023 rules say.',
    h1: 'The 2020 septic tank rules: what changed',
    lead: 'You may have heard that septic tanks "had to be replaced by 2020". Here is what actually changed, and why it still matters.',
    sections: [
      { h2: 'What the deadline was', html: `<p>Under the general binding rules, septic tanks discharging directly to a watercourse had to be replaced or upgraded by 1 January 2020, or sooner if the property was sold before then. It applied to septic tanks going to surface water, not to those going to a proper drainage field.</p>` },
      { h2: 'What now', html: `<p>The deadline has passed, but the rule hasn't gone away. Any septic tank still discharging to a stream, river or ditch is non-compliant and needs upgrading as soon as possible. The current rules took effect on 2 October 2023.</p>` },
      { h2: 'Why sales bring it up', html: `<p>Buyers' solicitors ask where the tank discharges. If the answer is a watercourse, the buyer and seller need to agree who will do the work. See <a href="/selling-a-house-with-a-septic-tank/">selling a house with a septic tank</a>.</p>` },
    ],
    faqs: [],
    related: ['guides/general-binding-rules', 'septic-tank-replacement'],
  },

  {
    slug: 'septic-tank-smells',
    keyword: 'septic tank smell',
    title: 'Septic Tank Smell: Causes and Fixes',
    description: 'Why your septic tank or treatment plant smells, from blocked vents to a failed drainage field, and when it is a sign of a bigger problem.',
    h1: 'Why does my septic tank smell?',
    lead: 'A faint smell near the tank lids can be normal. A strong, lasting smell in the garden or house is a warning sign.',
    sections: [
      { h2: 'Common causes', html: `
<ul>
<li><strong>The tank is full</strong> and needs emptying.</li>
<li><strong>Blocked or missing vent</strong> on the tank or the house soil pipe.</li>
<li><strong>Failed drainage field</strong>, letting effluent come to the surface.</li>
<li><strong>Cracked tank or loose lids.</strong></li>
<li><strong>Treatment plant fault</strong>: a failed air blower lets the plant go septic and smell.</li>
<li><strong>Dried-out traps</strong> inside the house.</li>
</ul>` },
      { h2: 'Smell in the house or the garden?', html: `
<p><strong>Inside the house</strong>, the cause is often closer to home: a dry trap on a little-used sink or shower, a failed toilet seal, or a blocked vent stack. Run water into every outlet and check the vent pipe on the roof is clear.</p>
<p><strong>In the garden</strong>, a brief smell near the tank lids after use can be normal. A smell over the drainage field, or one that lasts all day, usually means the tank is full, the drainage field is failing, or effluent is reaching the surface.</p>
<p><strong>At the stream or ditch</strong>, a smell or grey water where the pipe comes out means poorly treated effluent is getting out. If that is a septic tank, it should not be discharging there at all under the general binding rules.</p>` },
      { h2: 'What to do', html: `<p>Start with emptying and checking the lids and vents. If a treatment plant smells, check the blower is running and the alarm is not on. If the smell keeps coming back, book a <a href="/septic-tank-survey/">survey</a>. The rules say you must fix a system that causes smells.</p>` },
    ],
    faqs: [],
    related: ['guides/signs-your-septic-tank-is-failing', 'treatment-plant-servicing'],
  },
];
