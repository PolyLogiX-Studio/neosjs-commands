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
