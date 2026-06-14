# showMyTime

lil vencord plugin that spits out discord timestamp codes (`<t:unix:format>`) so everyone sees event times in their own timezone.

made this cause i got sick of typing "8pm BRT / 7pm ART / 6pm whatever" every time i announced something. post it once, discord does the math per person.

## what it does

`/mytime` slash command. pick a format, optionally throw it a date. you get the code, it's already on your clipboard, paste it. nobody sees the command but you.

- 7 formats (short/long time, dates, relative, the usual)
- date is optional, defaults to right now
- response is private, only you see it
- code goes straight to clipboard
- shows a readable preview so you can sanity check before pasting
- bad dates just get rejected, no crash

## usage

```
/mytime format:"Full Date/Time" date:"2026-06-15 20:00"
```

you (and only you) get:

```
15/06/2026, 20:00:00 — <t:1780695000:F> (copied)
```

it's already in your clipboard. paste it. discord shows `<t:1780695000:F>` as `Monday, June 15, 2026 8:00 PM` for everyone, in their own time.

no date? just uses now:

```
/mytime format:"Relative"
```

## formats

| code | what | looks like |
|---|---|---|
| `t` | short time | `16:20` |
| `T` | long time | `16:20:30` |
| `d` | short date | `2026-06-15` |
| `D` | long date | `June 15, 2026` |
| `f` | short date/time | `June 15, 2026 16:20` |
| `F` | full date/time | `Monday, June 15, 2026 16:20` |
| `R` | relative | `in 2 hours` |

## date input

takes a few shapes, all parsed in local time:

- `YYYY-MM-DD` (assumes 00:00:00)
- `YYYY-MM-DD HH:mm`
- `YYYY-MM-DD HH:mm:ss`
- `YYYY-MM-DDTHH:mm:ss` (the iso T works too, gets normalized)

anything weird = private error, no drama.

## install

1. drop the `showMyTime` folder into vencord's `src/plugins/`
2. build it (`pnpm buildStandalone`)
3. enable it in settings

## known stuff / maybe later

- no natural language dates ("tomorrow 8pm") yet. might add it, might not
- everything's local time, no per-command tz override. havent needed one

gpl-3.0, see LICENSE
