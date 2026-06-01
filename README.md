# showMyTime

A simple and lightweight Vencord plugin that adds a `/mytime` slash command to quickly generate and send Discord timestamps based on your local system clock.

## Installation

1. Copy the `src/plugins/showMyTime` folder into your Vencord installation's `src/plugins/` directory.
2. Run `pnpm buildStandalone` (or your preferred build command) in your Vencord repository.
3. Relaunch Discord and enable `showMyTime` in your Vencord settings.

## Usage

Type `/mytime` in any chat and choose a format:
- **Relative (R):** Countdown/relative time (e.g., *in 10 minutes*).
- **Full (F):** Full date and time.
- **Short Time (t):** Just the hours and minutes.