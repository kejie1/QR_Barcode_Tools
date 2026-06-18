# QR Barcode Tools

Free browser-based QR code and barcode generators. Create high-resolution static QR codes and industry-compliant barcodes securely and locally in your browser.

**Website URL:** [https://qrbarcodetools.com](https://qrbarcodetools.com) (Placeholder)

---

## Key Features & Tools

### 🌐 QR Code Utilities
- **/qr-code-generator/**: Universal static QR code builder with a fast default flow and collapsed Advanced Options for sizes, correction levels, colors, logo upload, common platform icon presets, frame/shape/finder controls, and platform background PNG exports.
- **/wifi-qr-code-generator/**: Share local network parameters securely without uploading your router password.
- **/url-qr-code-generator/**: Fast, protocol-aware website redirect generator.
- **/vcard-qr-code-generator/**: Convert standard contact details into a scannable digital business card (vCard 3.0).

### 🏷️ Barcode Utilities
- **/barcode-generator/**: General barcode generator matching Code 128, EAN-13, and UPC-A layouts.
- **/code-128-barcode-generator/**: Specialized high-density alphanumeric layout for warehouse labels and assets.
- **/ean-13-barcode-generator/**: Specialized retail barcode compiler featuring instant modulo-10 check digit helper.

---

## Privacy Architecture

This platform is engineered as a **100% static Astro client-side site**.
- **No databases:** We do not capture or catalog your data entries.
- **No servers:** All calculations, checksums, and graphic renderings are completed inside your web browser.
- **GDPR & CCPA Compliant:** By preventing data transmission to external servers, your data privacy remains completely secure.

---

## Local Development & Installation

Ensure you have [Node.js](https://nodejs.org/) (v18.14.1 or higher) installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to inspect the application.

### 3. Build for Production
This compiles the Astro site into static output inside the `/dist/` folder, ready for deployment to Cloudflare Pages, Netlify, or Vercel.
```bash
npm run build
```

### 4. Preview the Production Build Locally
```bash
npm run preview
```
