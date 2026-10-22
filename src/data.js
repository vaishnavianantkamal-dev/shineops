export const navLinks = [
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How it works' },
  { href: '#who', label: "Who it's for" },
  { href: '#faq', label: 'FAQ' },
];

export const sampleRows = [
  { client: 'Client A · Real estate', funds: '₹42,800', budget: '₹8,000', cpl: '₹286', status: 'Healthy', kind: 'good' },
  { client: 'Client B · Clinic', funds: '₹3,150', budget: '₹5,000', cpl: '₹198', status: 'Low funds', kind: 'crit' },
  { client: 'Client C · Education', funds: '₹61,400', budget: '₹12,000', cpl: '₹412', status: 'CPL up 28%', kind: 'warn' },
  { client: 'Client D · Retail', funds: '₹18,900', budget: '₹4,500', cpl: '₹154', status: 'Healthy', kind: 'good' },
  { client: 'Client E · Interiors', funds: '₹9,700', budget: '₹6,000', cpl: '₹520', status: 'Near cap', kind: 'warn' },
];

export const features = [
  { title: 'Multi-client monitoring', body: "See every client's ad accounts, budgets and spend from one screen.", icon: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z' },
  { title: 'Funds & budget tracking', body: 'Know which clients are low on funds or close to their daily spend cap before they do.', icon: 'M3 7h18v12H3zM3 11h18M16 15h2' },
  { title: 'CPL trends', body: 'Yesterday, 7-day, 14-day and 30-day cost per lead, side by side, for every client.', icon: 'M3 17l6-6 4 4 8-8M15 7h6v6' },
  { title: 'Campaign-level detail', body: 'Status, spend, impressions, clicks, CTR, results and cost per result, with a 10-day trend.', icon: 'M4 20V10M10 20V4M16 20v-7M22 20H2' },
  { title: 'Smart alerts', body: 'Rule-based alerts for budget and performance issues — deduplicated, auto-resolving, no spam.', icon: 'M6 16V11a6 6 0 0 1 12 0v5l2 2H4zM10 21h4' },
  { title: 'Role-based access', body: 'Admins, managers, analysts and client-view users each see only what they should.', icon: 'M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6zM9 12l2 2 4-4' },
];

export const steps = [
  { n: '01', title: 'Connect Meta once', body: 'Your agency admin signs in with Facebook Login for Business.' },
  { n: '02', title: 'Accounts sync automatically', body: 'Ad accounts are discovered and mapped to your clients.' },
  { n: '03', title: 'Your team gets a dashboard', body: 'Budgets, CPL and alerts, refreshed on a schedule.' },
  { n: '04', title: 'Add clients & teammates', body: 'Invite your team with the right role for each client.' },
];

export const audiences = [
  {
    title: 'Performance agencies',
    body: 'Media-buying teams managing 5+ Meta ad accounts for clients.',
    points: ['Every ad account under one login', 'CPL side by side across clients', 'No more switching Business Managers'],
  },
  {
    title: 'Agency owners',
    body: "A bird's-eye view of every client without opening every account.",
    points: ['Spend and health of every client at a glance', 'Spot which accounts need attention', 'Give teammates only the access they need'],
  },
  {
    title: 'Account managers',
    body: 'Flag low funds and budget issues before the client does.',
    points: ['Low-funds and budget-cap alerts', 'CPL spikes flagged automatically', 'Alerts resolve themselves when fixed'],
  },
];

// SAMPLE CONTENT — placeholder reviews for layout only.
// Replace with real Google reviews (exact wording, real reviewer names) before going live.
export const testimonials = [
  { name: 'Priya Sharma', role: 'Founder', agency: 'Performance agency, Mumbai', color: '#0A6B76', quote: 'We manage 18 Meta accounts. Mornings used to mean 18 logins — now it is one screen and a coffee.' },
  { name: 'Rahul Mehta', role: 'Head of Media', agency: 'Digital agency, Ahmedabad', color: '#2A78D6', quote: 'The low-funds alert alone has saved us from three awkward client calls this quarter.' },
  { name: 'Ananya Iyer', role: 'Account Manager', agency: 'Growth studio, Bengaluru', color: '#8B5CF6', quote: 'CPL for yesterday, 7, 14 and 30 days side by side. I stopped maintaining my spreadsheet.' },
  { name: 'Arjun Reddy', role: 'Agency Owner', agency: 'Real-estate marketing, Hyderabad', color: '#1C7A3A', quote: 'I finally see every client’s health without opening Ads Manager. Read-only means zero risk.' },
  { name: 'Sneha Kulkarni', role: 'Media Buyer', agency: 'Performance agency, Pune', color: '#C8312A', quote: 'Budget-cap warnings come in before the client notices. That is exactly what we needed.' },
  { name: 'Vikram Singh', role: 'Co-founder', agency: 'D2C ads agency, Delhi NCR', color: '#A86A00', quote: 'Setup took one Facebook login. Accounts were mapped to clients by the end of the day.' },
  { name: 'Kavya Nair', role: 'Client Servicing Lead', agency: 'Healthcare marketing, Kochi', color: '#0E7490', quote: 'Client-view access is great — our clinics see their numbers and nothing else.' },
  { name: 'Rohan Gupta', role: 'Performance Lead', agency: 'Ed-tech agency, Jaipur', color: '#BE185D', quote: 'Alerts are deduplicated and resolve themselves. No spam, just the issues that matter.' },
  { name: 'Meera Joshi', role: 'Operations Head', agency: 'Interiors marketing, Chennai', color: '#4D7C0F', quote: 'Our team of six works from one dashboard with the right role each. Clean and simple.' },
  { name: 'Aditya Verma', role: 'Founder', agency: 'Lead-gen agency, Lucknow', color: '#6D28D9', quote: 'Campaign-level detail with a 10-day trend makes the weekly client review a five-minute job.' },
];

export const faqs = [
  { q: 'Can Shineops Ads Monitor change or pause my ads?', a: "No. It's read-only — it uses Meta's ads_read and business_management permissions to read spend, budget and billing data. It can never edit, pause or create campaigns." },
  { q: 'Do my clients need to log into anything?', a: 'No. Your agency connects its Meta Business Manager once. Clients only get a login if you choose to give them client-view access.' },
  { q: 'Does it support Google Ads?', a: 'Not yet. Meta (Facebook and Instagram) ads are supported today; Google Ads is planned.' },
  { q: 'How is pricing structured?', a: 'Plans are tailored per agency, based on your number of clients, ad accounts and team members. Request a demo and we will share pricing.' },
  { q: 'Is my data secure?', a: 'Access tokens are stored encrypted, and every agency’s data is isolated from every other agency.' },
];
