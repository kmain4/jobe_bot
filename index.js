const Discord = require("discord.js");
const config = require("./config.json");
const { exec } = require('child_process');

const client = new Discord.Client();

try {
	client.login(config.BOT_TOKEN);
	console.log("You have logged in successfully");
} catch(err) {
	console.log(err);
}



const prefix = "!";

client.on("message", function(message) {
	if (message.author.bot) return;
	if(!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	switch(command) {
		case "restart":
			exec("docker service update --force valheim", (err, stdout, stderr) => {});
			message.reply("Server is checking for updates and restarting.");
			break;
		case "update":
			exec("docker service update --force valheim", (err, stdout, stderr) => {});
			message.reply("Server is checking for updates and restarting.");
			break;
		case "patch":
			exec("docker service update --force valheim", (err, stdout, stderr) => {});
			message.reply("Server is checking for updates and restarting.");
			break;
		default:
			message.reply("I have no idea what that means... try '!patch', '!update', or '!restart'.");
			break;
	}
});
