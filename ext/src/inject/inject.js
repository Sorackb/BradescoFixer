// Peguei esta idéia em https://gist.github.com/tavisrudd/1174381 para que seja possível a interação com o javascript do site
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			script = document.createElement('script');
			script.setAttribute("type", "text/javascript");
			script.setAttribute("src", chrome.extension.getURL("js/corrige.js"));
			document.documentElement.appendChild(script);
			document.documentElement.removeChild(script);
			clearInterval(readyStateCheckInterval);
		}
	}, 10);
});