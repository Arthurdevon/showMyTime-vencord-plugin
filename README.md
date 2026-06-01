# showMyTime

Quick Vencord plugin to generate and send Discord timestamps using your local system clock.

## Previews

### Command Menu
![Command Menu](assets/preview.png)

### Formats Example
* **Relative Time (R):** ![Relative](assets/relativo.png)
* **Full Date/Time (F):** ![Full Date](<assets/data completa.png>)
* **Short Time (t):** ![Short Time](assets/curto.png)

## How to use
Just type `/mytime` in any chat and pick a format:
* `R` - Relative time (countdown)
* `F` - Full date and time
* `t` - Short time (hours and minutes)

## Installation
1. Drop the `showMyTime` folder into your Vencord's `src/plugins/` directory.
2. Build Vencord (`pnpm buildStandalone`).
3. Enable `showMyTime` in your Vencord settings.