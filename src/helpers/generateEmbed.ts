import { EmbedBuilder } from "discord.js";

const generateEmbed = (
	username: string,
	password: string,
	level: number,
	blueEssence: number
) => {
	const accountEmbed = new EmbedBuilder()
		.setTitle("Account reached target")
		.setDescription(`Finished ${new Date(Date.now())}`)
		.addFields(
			{ name: "Level", value: level.toString(), inline: true },
			{
				name: "Blue Essence",
				value: blueEssence.toString(),
				inline: true,
			},
			{ name: "Username", value: username },
			{ name: "Password", value: `||${password}||` }
		);

	return accountEmbed;
};

export default generateEmbed;
