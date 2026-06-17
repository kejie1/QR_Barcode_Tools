---
title: "How to Create an EAN-13 Barcode: Formats & Checksums"
description: "A comprehensive guide to generating EAN-13 product barcodes. Learn how the country prefix, company codes, and the 13th-digit checksum are structured."
publishDate: "2026-06-11"
keywords: ["create ean-13 barcode", "ean-13 checksum", "retail product barcode", "ean format"]
---

If you plan to sell physical items in global retail markets, you will need to print **EAN-13** barcodes. EAN stands for European Article Number (now officially known as the International Article Number).

In this article, we explain the structure of EAN-13 codes, how to calculate the vital 13th check digit, and how to create the barcode graphics.

---

## The Anatomy of an EAN-13 Barcode

An EAN-13 code is not just a random string of 13 numbers. Every digit block has a strict meaning:

```text
Prefix (3 digits) + Manufacturer Code (4-5 digits) + Product ID (4-5 digits) + Checksum (1 digit)
```

1. **GS1 Country Prefix (First 3 digits):** Indicates the GS1 member organization where the company registered (e.g., `500-509` for the United Kingdom, `690-699` for China, `300-379` for France).
2. **Company/Manufacturer Code:** Issued to your business by GS1.
3. **Item Reference Number:** Allocated by you to identify the specific product variation (size, color, weight).
4. **Checksum (Last digit):** A mathematically calculated digit to verify the scan code is error-free.

---

## How to Calculate the EAN-13 Checksum

The final 13th digit is calculated using a **Modulo-10 weighted formula**:

### Step-by-Step Example (using `400638133393` as the 12 input digits):

1. **Sum the Odd-Positioned Digits:**
   - Positions 1, 3, 5, 7, 9, 11
   - $4 + 0 + 3 + 1 + 3 + 9 = 20$
2. **Sum the Even-Positioned Digits and Multiply by 3:**
   - Positions 2, 4, 6, 8, 10, 12
   - $0 + 6 + 8 + 3 + 3 + 3 = 23$
   - $23 \times 3 = 69$
3. **Add the Two Results:**
   - $20 + 69 = 89$
4. **Calculate Checksum:**
   - Find the next multiple of 10 equal to or greater than 89, which is 90.
   - Subtract the sum from this multiple: $90 - 89 = 1$.
   - The checksum digit is **1**. The complete EAN-13 code is **4006381333931**.

---

## How to Generate EAN-13 Graphics

Instead of performing math calculations by hand, you can use our smart [EAN-13 Barcode Generator](/ean-13-barcode-generator/):

1. Type your **12 digits** into the input field.
2. Our tool automatically computes the correct 13th checksum digit and generates your high-resolution barcode preview.
3. If you type **13 digits**, we verify your last digit. If it is mathematically incorrect, we warn you and auto-correct it.
4. Download the final graphic as **PNG** or **SVG** vectors.

---

## Frequently Asked Questions (FAQ)

### What happens if I use an incorrect checksum in my barcode?
Scanning cash registers will beep with a "Format Error" or fail to scan entirely. Every retail store's scanning database validates the checksum. Our generator helps protect you by auto-correcting any invalid user-provided checksums.

### Are EAN-13 codes and barcodes identical?
The EAN-13 "code" is the literal sequence of 13 numeric digits. The "barcode" is the physical, printed black and white parallel stripes that can be optically decoded by a scanning gun.

### Can EAN-13 codes have alphabetic letters?
No. The EAN-13 barcode standard strictly encodes digits from `0` to `9` only. If you need alphanumeric support, you should choose the [Code 128 Barcode Generator](/code-128-barcode-generator/).
