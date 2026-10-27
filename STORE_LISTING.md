# ValuTime — Chrome Web Store Listing

Copy-paste ready. Character limits noted for each field.

---

## 1. Extension name  (max 75 characters)

**ValuTime — Time Zones, Currency & Focus for Freelancers**

Alternatives:
- ValuTime: World Clock, Currency Fees & Focus Timer
- ValuTime — Freelancer Time, Money & Focus Hub

---

## 2. Short description / Summary  (max 132 characters)

The store takes this from the `description` in manifest.json, so it updates with the new zip. As of v1.7.0 (123 characters):

**Client time zones with live status & a meeting planner, currency with real payout fees, To-Do and Pomodoro for freelancers.**

Alternatives:
- See your real payout after fees, track client time zones, plan tasks, and focus — all in one freelancer toolkit.
- One calm tab for freelancers: world clocks, live currency with payout fees, to-dos, and a focus timer.

---

## 3. Detailed description

**Stop juggling five tabs to run your freelance day.**

ValuTime brings the four things every independent creator checks constantly — time zones, currency, tasks, and focus — into a single, calm browser popup. No account, no clutter, no ads. Just the numbers you need to quote confidently, meet clients on time, and protect your deep work.

Built by a working freelancer, for freelancers.

**🌍 Time zones that match how you actually work**
- See your local time alongside every client city at a glance.
- Add cities from a searchable list of 240+ locations across every major country and time zone.
- Know before you message: each city shows whether your client is 🟢 Working, 🟡 Early / Evening, 🌙 Asleep or 🏖️ on the weekend.
- **Best time to meet** — a planner shows everyone's working hours on your day and highlights when all your clients are available, e.g. "All clients working: 7:00 PM – 12:00 AM your time." Tap any hour to preview it.
- Rename any city with a client's name ("Acme Ltd", "Shawn"), so your list reads like your client list.
- Drag a per-city slider to instantly see "if it's 3 PM here, what time is it for my client?" Perfect for scheduling calls and deadlines across the globe.
- Drag and drop to reorder your cities. Your setup, your order.

**💱 Currency conversion that shows what you'll really receive**
This is the part generic converters miss. ValuTime uses live exchange rates *and* estimates the platform fees freelancers actually pay — so you see your true take-home, not just the mid-market number.
- Convert any amount across 50+ currencies with up-to-date rates.
- Toggle payout providers — Wise, Payoneer, PayPal, Remitly, Western Union, Skrill, Revolut — to compare net amounts side by side.
- Fine-tune each provider's fee percentage in Settings to match your real rates.
- Quote and invoice with confidence, knowing exactly what lands in your account.

**✅ A to-do list that keeps clients moving**
- Add tasks with high / medium / low priority.
- Filter by All, Active, or Done, and clear completed items in one tap.
- A clean completion progress bar shows how close you are to inbox-zero on your day.

**🍅 A focus timer that defends your deep work**
- A full Pomodoro timer with customizable focus, short-break, and long-break lengths.
- Session dots track your streak toward each long break.
- Optionally block distracting sites (social, video, news) automatically — but only while you're in a focus session.
- Choose your alert sound: Bell, Chime, Digital, Gentle, or Silent.

**🎨 Designed to fit your brain and your eyes**
- Four polished themes: Ocean, Emerald, Amber, and Violet.
- Light, Dark, or Auto display — all tuned for proper contrast.
- Two extra layout modes most apps don't offer:
  - **ADHD · Focus** — calmer, roomier, fewer distractions, bigger targets, quieter motion.
  - **OCD · Structured** — tight, aligned grids, uniform spacing, and clear progress indicators.
- Accessibility built in: adjustable text size, high-contrast mode, reduce-motion, and keyboard-friendly controls (WCAG AA).

**🔒 Private by design**
Everything you add stays on your device using Chrome's local storage. ValuTime has no login, collects no personal data, shows no ads, and never sells anything. Exchange rates are fetched anonymously from a public rates API.

Run your freelance day from one tab. Install ValuTime and get back to the work that pays.

> Note: Currency rates and transfer fees are estimates for planning only — always confirm final amounts with your payment provider before sending or invoicing.

---

## 4. Category & language

- **Category:** Workflow & Planning (alt: Productivity)
- **Language:** English

---

## 5. Search keywords / tags

freelancer tools, world clock, time zone converter, meeting planner, best time to meet, client time zones, currency converter, exchange rates, Wise fees, PayPal fees, Payoneer, invoice calculator, payout calculator, to-do list, task manager, pomodoro, focus timer, site blocker, productivity, ADHD, accessibility

---

## 5b. Store images (all in the `store-assets` folder)

Upload these in the **Store listing → Graphic assets** section. Delete the old screenshots first, then upload in this order (the first one is shown largest):

| Store field | File | Size |
|---|---|---|
| Store icon | `store-icon-128.png` | 128×128 |
| Screenshot 1 | `screenshot-1-time-zones.png` | 1280×800 |
| Screenshot 2 | `screenshot-2-meeting-planner.png` | 1280×800 |
| Screenshot 3 | `screenshot-3-currency-fees.png` | 1280×800 |
| Screenshot 4 | `screenshot-4-todo-pomodoro.png` | 1280×800 |
| Screenshot 5 | `screenshot-5-themes.png` | 1280×800 |
| Small promo tile | `promo-small-440x280.png` | 440×280 |
| Marquee promo tile | `promo-marquee-1400x560.png` | 1400×560 |

All are 24-bit PNGs with no transparency, as the store requires. The client names in the screenshots ("Acme Studio", "Bloom & Co." and so on) are made-up demo data.
The editable icon artwork is in `store-assets/source` (`icon-large.svg` for 128px, `icon-small.svg` for 16–48px).

---

## 6. Permission justifications (for the submission form)

- **storage** — Saves your cities, currencies, tasks, timer settings, and preferences locally on your device.
- **alarms** — Runs the Pomodoro focus/break timer accurately even when the popup is closed.
- **notifications** — Alerts you when a focus or break session ends.
- **offscreen** — Plays the session-end alert sound reliably.
- **declarativeNetRequest** — Blocks the distracting sites you choose, but only during active focus sessions.

(The **tabs** permission was removed in v1.7.0 — it isn't needed to open links, and removing it drops the "Read your browsing history" install warning.)

---

## 7. What's new (release notes — v1.7.0)

**Short version (for the store "What's new" box):**
- 🤝 New: "Best time to meet" planner — see when all your clients are working, in your time
- 🟢 New: live status on every city — Working, Early/Evening, Asleep or Weekend
- ✏️ New: rename cities with your clients' names
- 🛠️ Fixed: currency amount box, Enter-to-add tasks, pop-ups not closing, slider showing the wrong day, Pomodoro break/resume and alert sound
- 🔒 Removed an unneeded permission (no more "browsing history" warning)
- 🎨 Fresh new icon

**Full release notes:**
- New: fresh app icon (a clock whose hands form a check mark), also shown in the popup header.
- New: "Best time to meet" planner on the Time tab. Shows everyone's working hours across your day, highlights the hours when all clients are working, and lets you tap any hour to preview it in every city.
- New: status badge on each city — 🟢 Working, 🟡 Early / Evening, 🌙 Asleep, 🏖️ Weekend.
- New: rename any city (e.g. with a client's name).
- New: set your working hours in Settings → Clock (default 9 AM – 6 PM).
- New: "Buy me a coffee" now links to Support Kori.
- New: press Escape to close any pop-up window.
- Fixed: typing an amount in Currency no longer loses focus after each digit.
- Fixed: Add City / Add Currency windows now close after you've clicked the search box.
- Fixed: pressing Enter adds a to-do; the to-do input and list are properly styled.
- Fixed: time sliders no longer show the wrong day for cities ahead of or behind UTC, or around daylight-saving changes.
- Fixed: pausing and resuming a break no longer turns it into a focus session.
- Fixed: the popup updates instantly when a Pomodoro session ends while it's open.
- Fixed: the alert sound you choose in Settings (including Silent) is now used for real alerts.
- Improved: cleaner time zone labels (no more "GMT+0 · GMT+0").
- Privacy: removed the unused "tabs" permission.

## Previous release — v1.6.0
- Added 160+ cities (247 total) across every major country and time zone.
- Fixed the local clock so seconds tick live.
- Removed the "Compare at a custom time" card (use the city sliders instead).
