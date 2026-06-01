import definePlugin from "@utils/types";
import { ApplicationCommandOptionType } from "@api/Commands";

export default definePlugin({
    name: "ShowMyTime",
    description: "Generates Discord timestamps based on local or custom time.",
    authors: [{ name: "Arthurdevon", id: 1072644260140163212n }],
    tags: ["Utility", "Text"],
    
    commands: [
        {
            name: "mytime",
            description: "Gets a Discord timestamp for a specific or current time",
            options: [
                {
                    type: ApplicationCommandOptionType.STRING,
                    name: "format",
                    description: "Choose the display format",
                    required: true,
                    choices: [
                        { name: "Relative (Countdown)", value: "R" },
                        { name: "Full Date and Time", value: "F" },
                        { name: "Short Time", value: "t" }
                    ]
                },
                {
                    type: ApplicationCommandOptionType.STRING,
                    name: "date",
                    description: "Optional: Custom date (e.g., YYYY-MM-DD or Month DD YYYY)",
                    required: false
                }
            ],
            execute(args) {
                const format = args[0].value;
                const customDate = args[1]?.value;
                let time = Math.floor(Date.now() / 1000);

                if (customDate) {
                    const parsed = Date.parse(customDate);
                    if (!isNaN(parsed)) {
                        time = Math.floor(parsed / 1000);
                    } else {
                        return { content: "❌ Invalid date format. Use YYYY-MM-DD (e.g., 2026-06-05) or English (e.g., June 5 2026)." };
                    }
                }

                return { content: `<t:${time}:${format}>` };
            }
        }
    ]
});