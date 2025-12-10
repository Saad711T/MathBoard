const vscode = require("vscode");
const path = require("path");

function activate(context) {
    let disposable = vscode.commands.registerCommand("mathboard.open", () => {
        const panel = vscode.window.createWebviewPanel(
            "MathBoard",
            "Math Board",
            vscode.ViewColumn.One,
            { enableScripts: true }
        );

        const htmlPath = path.join(context.extensionPath, "media", "board.html");
        const html = require("fs").readFileSync(htmlPath, "utf8");

        panel.webview.html = html;
    });

    context.subscriptions.push(disposable);
}

exports.activate = activate;
