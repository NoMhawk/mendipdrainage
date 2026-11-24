// Site-wide settings. Change the brand, contact details and prices here only.
// Anything starting with "TODO" is a placeholder: the build prints a warning for each one.
// Rich to update every TODO before launch.

module.exports = {
  brand: 'Yeo Drainage',               // Chosen by Rich 2026-11-24. yeodrainage.com was unregistered on that date: Rich to buy.
  brandShort: 'Yeo Drainage',
  tagline: 'Septic tank replacement, done properly.',
  url: 'https://www.yeodrainage.com', // Rich to update if www/non-www choice changes (no trailing slash)
  baseTown: 'Yeovil',
  region: 'Somerset',

  phone: 'TODO 01935 000000',          // TODO: real number. Shown as "Call us" until set.
  email: 'TODO hello@yeodrainage.com',
  formAction: 'TODO',                  // TODO: form endpoint (e.g. Formspree or a Cloudflare Pages Function). Until set, the form shows phone/email instead.
  companyName: 'TODO Yeo Drainage Ltd', // TODO: registered company name and number for the footer
  companyNumber: 'TODO',
  hours: 'Monday to Friday 8am to 6pm, Saturday 8am to 12pm', // TODO: confirm

  // Draft price ranges (GBP, inc VAT). Rich to confirm against real costs before launch.
  // Sources and reasoning: research/suppliers-and-costs.md
  prices: {
    replacementTypicalLow: 7000,
    replacementTypicalHigh: 15000,
    plantOnlyLow: 2000,
    plantOnlyHigh: 5000,
    drainageFieldLow: 2500,
    drainageFieldHigh: 6000,
    surveyFrom: 295,
    serviceFrom: 150,
    desludgeLow: 200,
    desludgeHigh: 350,
  },

  lastReviewed: '2026-11-24', // date the regulation content was last checked against GOV.UK
};
