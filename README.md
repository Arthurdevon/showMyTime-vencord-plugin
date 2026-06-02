# showMyTime

Discord timestamps for event announcements. Each viewer sees the time in their own timezone.

Discord's `<t:UNIX:FORMAT>` markup renders timestamps relative to whoever reads them — useful for posting event times once instead of maintaining a list of timezone conversions.

## Features

- `/mytime` slash command with 7 timestamp format options
- Optional custom date input (defaults to now)
- Invalid dates are rejected with an ephemeral error

## Usage

```
/mytime format:"Full Date/Time" date:"2026-06-15 20:00"
```

Output: `<t:1750017600:F>`

Paste the output into a chat — Discord renders it as `Monday, June 15, 2026 20:00` in the viewer's local timezone.

Without a date argument, the timestamp is for the current moment:

```
/mytime format:"Relative"
```

Output: `<t:1750017600:R>` → `Just now`

## Supported formats

| Code | Name | Example output |
|------|------|---------------|
| `t` | Short Time | `16:20` |
| `T` | Long Time | `16:20:30` |
| `d` | Short Date | `2026-06-15` |
| `D` | Long Date | `June 15, 2026` |
| `f` | Short Date/Time | `June 15, 2026 16:20` |
| `F` | Full Date/Time | `Monday, June 15, 2026 16:20` |
| `R` | Relative | `in 2 hours` |

## Date parameter

Accepts three formats. All are parsed in local time:

- `YYYY-MM-DD` (defaults to 00:00:00)
- `YYYY-MM-DD HH:mm`
- `YYYY-MM-DD HH:mm:ss`
- `YYYY-MM-DDTHH:mm:ss` (ISO-style `T` separator, normalized internally)

Invalid dates return an ephemeral error only visible to you.

## Installation

1. Copy the `showMyTime` folder into Vencord's `src/plugins/` directory.
2. Build Vencord (`pnpm buildStandalone`).
3. Enable `showMyTime` in settings.
