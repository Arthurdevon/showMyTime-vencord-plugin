import { definePlugin, ApplicationCommandOptionType } from "@utils/types";

export default definePlugin({
    name: "ShowMyTime",
    description: "Gera timestamps do Discord baseados na hora local do seu PC.",
    authors: [{ name: "Arthurdevon", id: 111111111111111111n }],
    tags: ["Utility", "Text"],
    
    commands: [
        {
            name: "mytime",
            description: "Pega a hora atual no formato de timestamp do Discord",
            options: [
                {
                    type: ApplicationCommandOptionType.STRING,
                    name: "format",
                    description: "Escolha o formato de exibição",
                    required: true,
                    choices: [
                        { name: "Relativo (Contagem Regressiva)", value: "R" },
                        { name: "Data e Hora Completa", value: "F" },
                        { name: "Hora Curta", value: "t" }
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