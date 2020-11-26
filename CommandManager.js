/**
 * @fileoverview Neos.js Plugin - CommandManager
 * @name neosjs-commands
 * @author Bitman
 * @returns {CommandManager}
 * @see Parent Library: [Neos.js](https://github.com/PolyLogiX-Studio/Neos.js#readme)
 */

const CommandHandler = require("./CommandHandler");
const CommandExtended = require("./CommandExtended");

/**
 *
 * @class CommandManager
 * @example const CommandManager = require("neosjs-commands");
 * const Neos = new (require("@bombitmanbomb/neosjs"))
 * Command = CommandManager.Create(Neos)
 * Command.Add("Ping", (Handler)=>{Handler.Reply("Pong")})
 * Command.SetHelp("Ping", {index:"Ping Pong!", usage:Command.Options.Prefix+"Ping"})
 * Command.Add("Relay", (Handler, Sender, Args)=>{
 *  if (Args.length<2) return Handler.Usage();
 *  if (!Args[0].startsWith("U-")) return Handler.Reply("First Argument must be a UserID.");
 *  if (!Neos.IsFriend(Args[0])) return Handler.Reply("User is not a Friend of the bot.");
 *  Neos.SendTextMessage(Args.shift(), Args.join(" ")); // Remove first argument (UserID) and join the rest with spaces.
 *  Handler.Reply("Message Sent!")
 * },
 * {
 *  index:"Send a message to another user via the bot.",
 *  usage:Command.Options.Prefix+"Relay <User-ID> <Message>"
 * }, ["U-BotOwner"]);
 * Neos.on("messageReceived", Command.Run);
 */
class CommandManager {
	/**
	 *
	 *
	 * @static
	 * @param {Neos.js} neos
	 * @param {*} CommandExtendedOptions
	 * @param {*} CommandHandlerOptions
	 * @returns {CommandExtended}
	 * @memberof CommandManager
	 */
	static CreateCommands(neos, CommandExtendedOptions, CommandHandlerOptions) {
		return new CommandExtended(
			new CommandHandler(neos, CommandHandlerOptions),
			CommandExtendedOptions
		);
	}
}

module.exports = { CommandManager };
