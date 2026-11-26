// Site-wide settings. Change the brand, contact details and prices here only.
// Anything starting with "TODO" is a placeholder: the build prints a warning for each one.
// Rich to update every TODO before launch.

module.exports = {
  brand: 'Mendip Drainage',            // Chosen by Rich 2026-11-25 (base moved to Wells). mendipdrainage.com was unregistered on that date: Rich to buy.
  brandShort: 'Mendip Drainage',
  tagline: 'Septic tank replacement, done properly.',
  url: 'https://www.mendipdrainage.com', // Rich to update if www/non-www choice changes (no trailing slash)
  baseTown: 'Wells',
  baseSlug: 'wells',                   // slug of the base town in src/data/areas.js
  region: 'Somerset',

  phone: 'TODO 01749 000000',          // TODO: real number. Shown as "Call us" until set.
  email: 'hello@mendipdrainage.com',   // Cloudflare Email Routing forwards this (and every other address on the domain) to Rich's Gmail.
  formAction: 'https://api.web3forms.com/submit', // Web3Forms (free, 250 a month). Account: mendipdrainage@richietaylor.net, set up 26 Nov 2026.
  formKey: 'd929552d-4393-4172-98a5-e4f2fa42dee6', // Web3Forms access key. Public by design (it only lets people send to Rich's inbox).
  companyName: 'TODO Mendip Drainage Ltd', // TODO: registered company name and number for the footer
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
    desludgeLow: 200,
    desludgeHigh: 350,
  },

  lastReviewed: '2026-11-24', // date the regulation content was last checked against GOV.UK
};
