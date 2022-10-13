module.exports = {
	/* The token of your Discord Bot */
	token: "OTc2NzkyMzExMjE4NDQyMjUw.Gy9_8l.5YuWrwNowAibRq3yAaDnfIHV7WRky_6ttGeWDk",
	/* For the support server */
	support: {
		id: "1029000456703332422", // The ID of the support server
		logs: "1029445351280738386", // And the ID of the logs channel of your server (new servers for example)
	},
	/* Dashboard configuration */
	dashboard: {
		enabled: false, // whether the dashboard is enabled or not
		secret: "ffFuZKPMB88xWTOHCCbVoQV0jhYlJd0Q", // Your discord client secret
		baseURL: "https://charisma.widemc.fun", // The base URl of the dashboard
		logs: "1029445351280738386", // The channel ID of logs
		port: 8080, // Dashboard port
		expressSessionPassword: "XXXXXXXXXXX", // Express session password (it can be what you want)
		failureURL: "https://charisma.widemc.fun" // url on which users will be redirected if they click the cancel button (discord authentication)
	},
	mongoDB: "mongodb+srv://BeJIIHiu:oper4545@cluster0.z79u1ww.mongodb.net/charisma?retryWrites=true&w=majority", // The URl of the mongodb database
	prefix: "/", // The default prefix for the bot
	/* For the embeds (embeded messages) */
	embed: {
		color: "RANDOM", // The default color for the embeds
		footer: "Charisma | New return" // And the default footer for the embeds
	},
	/* Bot's owner informations */
	owner: {
		id: "877198398489518110", // The ID of the bot's owner
		name: "Really GIRL#0984" // And the name of the bot's owner
	},
	/* DBL votes webhook (optional) */
	votes: {
		port: 5000, // The port for the server
		password: "XXXXXXXXXXX", // The webhook auth that you have defined on discordbots.org
		channel: "XXXXXXXXXXX" // The ID of the channel that in you want the votes logs
	},
	/* The API keys that are required for certain commands */
	apiKeys: {
		// BLAGUE.XYZ: https://blague.xyz/
		blagueXYZ: "",
		// FORTNITE TRN: https://fortnitetracker.com/site-api
		fortniteTRN: "a2a8262f-c0aa-4046-a03b-a064a6ab48ed",
		// FORTNITE FNBR: https://fnbr.co/api/docs
		fortniteFNBR: "5ab16c0e5f957f27504aa4e4",
		// DBL: https://discordbots.org/api/docs#mybots
		dbl: "XXXXXXXXXXX",
		// AMETHYSTE: https://api.amethyste.moe
		amethyste: "6c48d77243702acba7241cb24057fee00ea404270a958eb6b79d3898ae2e0fbe603a8138b5736a56ad1c1d80c3bb067614cfba6b2a33ff90e62914e6ebd64c82",
		// SENTRY: https://sentry.io (this is not required and not recommended - you can delete the field)
		sentryDSN: "https://1a0ba0092acd464dab3d114c2a722a12@o4503971863592960.ingest.sentry.io/4503971865690112"
	},
	/* The others utils links */
	others: {
		github: "", // Founder's github account
		donate: "https://patreon.com/" // Donate link
	},
	/* The Bot status */
	status: [
		{
			name: "Charisma help on {serversCount} servers",
			type: "LISTENING"
		},
		{
			name: "My website : https://charisma.widemc.fun/",
			type: "PLAYING"
		}
	]
};
