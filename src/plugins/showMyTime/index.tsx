import definePlugin from "@utils/types";
import { ApplicationCommandOptionType, ApplicationCommandInputType, findOption } from "@api/Commands";
import { Devs } from "@utils/constants";
import { sendMessage } from "@utils/discord";
import { FluxDispatcher, MessageActions, PendingReplyStore } from "@webpack/common";

export default definePlugin({
    name: "showMyTime",
    description: "Show current time as Discord timestamp",
    authors: [Devs.Arthurdevon],
    tags: ["Utility"],
    commands: [
        {
            name: "mytime",
            description: "Get current time as Discord timestamp",
            inputType: ApplicationCommandInputType.BUILT_IN,
            options: [
                {
                    type: ApplicationCommandOptionType.STRING,
                    name: "format",
                    description: "Choose format",
                    choices: [
                        { name: "Relative (R)", value: "R" },
                        { name: "Full (F)", value: "F" },
                        { name: "Short Time (t)", value: "t" }
                    ],
                    required: true
                }
            ],
            execute: async (args, { channel }) => {
                const format = findOption(args, "format");
                const time = Math.floor(Date.now() / 1000);
                const response = `<t:${time}:${format}>`;
                sendMessage(channel.id, { content: response }, false);
            }
        }
    ]
});