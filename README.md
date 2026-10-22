# 🚖 Kashipur Cab Service - Website & Booking System

A lightweight, modern, mobile-first website created specifically for a family-owned cab business operating out of **Kashipur (Uttarakhand)**, covering **Delhi NCR (Gurugram / Noida / Airport)**, **All India**, and **India-to-Nepal cross-border tours**.

---

## 🌟 Key Features

1. **Instant WhatsApp Booking Generator:**
   * Visitors select their pickup location, destination, date, trip type, and car model.
   * Clicking *"Send Booking on WhatsApp"* automatically formats a clean, detailed inquiry and opens WhatsApp directly to your father.
2. **Direct Call Priority (Father handles all calls):**
   * Prominent click-to-call buttons (`9837084883` & `8384812979`).
   * Mobile sticky bottom bar: Customer can tap *"Call Driver Now"* or *"WhatsApp Quote"* from any page section.
3. **Dedicated Fleet Showcase:**
   * **Maruti Suzuki Ertiga (7-Seater):** Highlighted as the dedicated family MUV for groups and hill stations.
   * **Maruti Suzuki Swift Dzire (Sedan):** Highlighted for budget outstation and Delhi airport drops.
   * **Partner Network (Toyota Innova Crysta & Tempo Traveller):** Highlighted so you can take large group or luxury bookings and outsource to your trusted driver connections.
4. **India to Nepal Cross-Border Special Section:**
   * Dedicated showcase for Kathmandu, Pokhara, Lumbini, Janakpur.
   * Highlights border permit and customs (Bhansar) assistance at Banbasa / Sonauli borders.
5. **Zero Maintenance & Single Config File:**
   * **Everything** (phone numbers, email, business name, car details, routes, FAQs) is controlled in ONE simple file: [`src/data/config.js`](./src/data/config.js).

---

## 🛠️ How to Run & Preview Locally

Run the following in PowerShell / Terminal:

```bash
# 1. Start local development server
npm run dev

# 2. Or build for production
npm run build
```

---

## ✏️ How to Update Business Details (Easy 1-File Setup)

Open [`src/data/config.js`](./src/data/config.js) to change:
- `name`: `MileUp Cabs`
- `primaryPhone`: `9837084883`
- `secondaryPhone`: `8384812979`
- `whatsappNumber`: `9837084883`
- `email`: `mileupcabs@zohomail.in`
- `address`: Office & base location

Whenever you edit [`src/data/config.js`](./src/data/config.js), it automatically updates across the entire website (Navbar, Footer, Booking forms, Call desk, Schema).

---

## 🚀 Free Hosting & Deployment (Zero Cost)

You do **not** need to pay monthly hosting fees!

### Option 1: Vercel (Recommended - 2 Minutes)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Select your GitHub repository and click **Deploy**.
4. Your website will be live with free SSL (HTTPS) and blazing-fast global CDN.

### Option 2: Netlify (Drag and Drop)
1. Run `npm run build` in your project folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder.
4. Your website is live immediately!

---

## 🌐 Custom Domain Recommendation
Buy a `.in` or `.com` domain from Namecheap, GoDaddy, or Hostinger (~₹600 - ₹900/year). Connect it to Vercel/Netlify for free.
