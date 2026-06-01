import { definePlugin, ApplicationCommandOptionType } from "@utils/types";

export default definePlugin({
    name: "ShowMyTime",
    description: "Generates Discord timestamps based on your local PC time.",
    authors: [{ name: "Arthurdevon", id: 1072644260140163212n }],
    tags: ["Utility", "Text"],
    
    commands: [
        {
            name: "mytime",
            description: "Gets the current time in Discord timestamp format",
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
                }
            ],
            execute(args) {
                const format = args[0].value;
                const time = Math.floor(Date.now() / 1000);
                return { content: `<t:${time}:${format}>` };
            }
        }
    ]
});