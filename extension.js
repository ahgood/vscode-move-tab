const vscode = require('vscode');

function registerCommand(command, parameter) {
	return vscode.commands.registerCommand(`movetab.${command}`, function () {
		vscode.commands.executeCommand('moveActiveEditor', parameter);
	});
}

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const toFirst = registerCommand('moveTabToFirst', { to: 'first' });
	const toLast = registerCommand('moveTabToLast', { to: 'last' });
	const toLeft = registerCommand('moveTabToLeft', { to: 'left', value: 1 });
	const toRight = registerCommand('moveTabToRight', { to: 'right', value: 1 });

	context.subscriptions.push(toFirst, toLast, toLeft, toRight);
}

exports.activate = activate;
