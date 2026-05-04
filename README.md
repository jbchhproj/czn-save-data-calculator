# CZN Save Data Calculator

An unofficial mobile-first calculator for Chaos Zero Nightmare players to plan save data requirements and card capacity across combatants.

## Features

- Save data and faint memory calculations by tier
- Deep trauma mode support
- Interactive card acquisition, duplication, removal, and seasonal counters
- Mobile-first layout with constrained desktop presentation
- Anonymous usage telemetry for understanding feature usage and UX friction

## Tech Stack

- React
- Next.js
- TypeScript
- PostgreSQL
- Neon
- Vercel

## Telemetry

The app records basic anonymous interaction events, such as button presses and disabled-control clicks, to help improve the tool. Telemetry requests are validated server-side before being stored in Neon PostgreSQL.

Telemetry includes:

- event name
- anonymous browser ID
- disabled-click state
- server and client timestamps
- flexible JSON metadata

Database setup is documented in [sql/telemetry_events.sql](sql/telemetry_events.sql). Example analysis queries are available in [sql/example_telemetry_queries.sql](sql/example_telemetry_queries.sql).

## Privacy

This project collects a persistent pseudonymous ID to understand basic usage patterns.

No names, emails, precise location, account information, or personal information are collected, stored, or shared.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Telemetry requires a local environment variable:

```env
DATABASE_URL="your_neon_connection_string"
```

Do not commit `.env.local`.

## Verification

```bash
npm run lint
npx tsc --noEmit --pretty false
```

## Disclaimer

This is an unofficial fan-made tool and is not affiliated with, endorsed by, or sponsored by Smilegate or Super Creative.

Chaos Zero Nightmare and all related names, logos, and assets are trademarks of Smilegate & Super Creative. All game data referenced in this tool belongs to their respective owners.

This project does not reproduce, distribute, or claim ownership of any proprietary game assets or content.

## Donations

A Ko-fi link is provided for anyone who wishes to voluntarily support future updates to this tool. Donations are entirely optional and are not a payment for any service or product. This project is not a commercial venture and is not intended to generate profit.
