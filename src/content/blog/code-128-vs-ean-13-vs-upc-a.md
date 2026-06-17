---
title: "Code 128 vs. EAN-13 vs. UPC-A: Which Barcode is Right?"
description: "A detailed comparison of Code 128, EAN-13, and UPC-A barcodes. Learn how character sets, digit requirements, and industrial rules define each format."
publishDate: "2026-06-09"
keywords: ["code 128 vs ean 13", "upc-a vs ean-13", "barcode types", "retail barcodes"]
---

Using the wrong barcode standard can result in items being rejected by retail cash registers or warehouse logistics software. To choose the right layout, you must understand the technical rules of Code 128, EAN-13, and UPC-A.

Here is a deep dive into how these formats compare.

---

## Technical Comparison Matrix

| Property | Code 128 | EAN-13 | UPC-A |
| :--- | :--- | :--- | :--- |
| **Primary Industry** | Logistics, Assets, Shipping | Global Retail Stores | North American Retail Stores |
| **Supported Characters** | Full 128 ASCII (Alphanumeric) | Digits 0-9 Only | Digits 0-9 Only |
| **Character Length** | Variable (Dense packing) | Exactly 13 digits | Exactly 12 digits |
| **Checksum Type** | Modulo 103 (Embedded) | Modulo 10 (Last digit) | Modulo 10 (Last digit) |
| **GS1 Compliant** | Yes (as GS1-128 sub-type) | Yes | Yes |

---

## 1. Code 128: Alphanumeric powerhouse

**Code 128** is an exceptionally versatile linear barcode symbology. It can encode numbers, uppercase/lowercase letters, and punctuation.

- **How it works:** It shifts dynamically between three sub-modes (Code Sets A, B, and C) to compress numeric pairs into tiny physical widths.
- **Where it is used:** Warehouse logistics, pallet ID stickers, serial numbers, office equipment tagging, and hospital patient wristbands.
- **Generator Link:** Create custom tags with our specialized [Code 128 Barcode Generator](/code-128-barcode-generator/).

---

## 2. EAN-13: International retail standard

**EAN-13** is the standard product identifier found on nearly every grocery and retail item worldwide outside of North America.

- **How it works:** It consists of 12 digits representing country of origin, manufacturing brand, and item code, followed by a 13th checksum digit.
- **Where it is used:** Supermarkets, convenience stores, and online inventory management (ISBN books are formatted as EAN-13).
- **Generator Link:** Create images with our specialized [EAN-13 Barcode Generator](/ean-13-barcode-generator/).

---

## 3. UPC-A: North American consumer retail

**UPC-A** is the dominant retail barcode standard in the United States and Canada.

- **How it works:** It encodes exactly 12 numeric digits (11 data digits + 1 checksum digit). It is technically a subset of EAN-13; prepending a zero `0` to any UPC-A number converts it into an EAN-13 barcode without changing its physical stripe structure.
- **Where it is used:** Checkout lanes in US and Canadian physical retail chains.
- **Generator Link:** Access UPC-A options on our general [Barcode Generator](/barcode-generator/).

---

## Frequently Asked Questions (FAQ)

### Can I scan an EAN-13 product barcode in the USA?
Yes. Today, virtually all modern point-of-sale scanner terminals in North America are "multi-lingual" and read both UPC-A and EAN-13 barcodes flawlessly.

### Is Code 128 suitable for selling items in supermarkets?
No. Standard point-of-sale supermarket registers are configured to search inventory lists based on 12-digit (UPC) or 13-digit (EAN) indexes. They will not recognize a Code 128 barcode at checkout.

### Do I need to buy these numbers?
Yes, for official public retail distribution. While you can generate the graphic images for free here, the numbers themselves must be leased from **GS1** to prevent duplicate codes on store shelves.
