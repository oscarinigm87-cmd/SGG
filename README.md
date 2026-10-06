# SGG Website FULL v1.3 — AI + WhatsApp Fix

Bilingual (English / Spanish) premium consulting website prototype.

## Fixes in v1.3
- Fixed the AI section rendering bug. AI content was present in the HTML and translation data, but the final render function was not being executed after the AI renderer was defined.
- AI section now renders in both English and Spanish.
- AI is a first-class SGG service line: AI Strategy, AI Automation, AI + ERP, and Data & AI.
- WhatsApp button now uses a direct WhatsApp Web URL with a pre-filled message once the real number is configured.
- WhatsApp message changes with the selected language.
- Replaced the temporary WhatsApp glyph with a clean inline WhatsApp SVG icon.

## WhatsApp
Open `script.js` and replace:

`const WHATSAPP_NUMBER = '573118377286';`

with the real SGG WhatsApp Business number, digits only, including Colombia country code 57.

Example format only: `573001234567`

The link generated is:
`https://web.whatsapp.com/send?phone=NUMBER&text=PRE-FILLED-MESSAGE`

On desktop this opens WhatsApp Web; on supported devices WhatsApp may hand off to the installed app.

## Important
No real phone number, client proof, certification, or business result has been invented in this prototype.


### Current WhatsApp configuration
- Number: **+57 311 837 7286**
- Desktop: opens WhatsApp Web directly.
- Message: pre-filled according to the selected website language (English/Spanish).
- Secondary pages use the same floating CTA and direct WhatsApp destination.
