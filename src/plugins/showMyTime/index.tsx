import definePlugin from "@utils/types";
import { ApplicationCommandInputType, ApplicationCommandOptionType } from "@api/Commands";

const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})(?:\s(\d{2}):(\d{2})(?::(\d{2}))?)?$/;

function parseDate(input: string): number | null {
    const m = input.replace("T", " ").match(DATE_RE);
    if (!m) return null;

    const [, yr, mo, dy, hr = "0", mi = "0", sc = "0"] = m;
    const year = +yr, month = +mo, day = +dy, hour = +hr, min = +mi, sec = +sc;

    if (month < 1 || month > 12 || day < 1 || hour > 23 || min > 59 || sec > 59)
        return null;

    const maxDay = [31, (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
    if (day > maxDay) return null;

    return Math.floor(new Date(year, month - 1, day, hour, min, sec).getTime() / 1000);
}

export default definePlugin({
    name: "showMyTime",
    description: "Generate Discord timestamps for event announcements. Displays in each viewer's timezone.",
    authors: [{ name: "Arthurdevon", id: 1072644260140163212n }],

    commands: [
        {
            name: "mytime",
            description: "Generate a Discord timestamp code",
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [
                {
                    type: ApplicationCommandOptionType.STRING,
                    name: "format",
                    description: "Timestamp display format",
                    required: true,
                    choices: [
                        { name: "Short Time (16:20)", value: "t" },
                        { name: "Long Time (16:20:30)", value: "T" },
                        { name: "Short Date (2026-06-15)", value: "d" },
                        { name: "Long Date (June 15, 2026)", value: "D" },
                        { name: "Short Date/Time (June 15, 2026 16:20)", value: "f" },
                        { name: "Full Date/Time (Monday, June 15, 2026 16:20)", value: "F" },
                        { name: "Relative (in 2 hours)", value: "R" }
                    ]
                },
                {
                    type: ApplicationCommandOptionType.STRING,
                    name: "date",
                    description: "Date: YYYY-MM-DD, YYYY-MM-DD HH:mm, or YYYY-MM-DD HH:mm:ss (default: now)",
                    required: false
                }
            ],
            execute(args: any[]) {
                const format = args[0].value as string;
                const dateArg = args[1]?.value as string | undefined;

                if (dateArg) {
                    const unix = parseDate(dateArg);
                    if (unix === null) return {
                        content: `Invalid date: "${dateArg}". Use YYYY-MM-DD, YYYY-MM-DD HH:mm, or YYYY-MM-DD HH:mm:ss`,
                        flags: 64 // ephemeral
                    };
                    return { content: `<t:${unix}:${format}>` };
                }

                return { content: `<t:${Math.floor(Date.now() / 1000)}:${format}>` };
            }
        }
    ]
});
