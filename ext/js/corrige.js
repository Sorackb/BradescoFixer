window.vTimerProximo = window.setInterval(function() {
	if (window.frames['perfil_frames'] !== undefined &&
			window.frames['perfil_frames'].document.querySelector('#tbsubmit > a') !== null) {
		window.frames['perfil_frames'].document.querySelector('#tbsubmit > a').href = 'javascript:spanIndicadorTT = {};' +
			'spanTipoVeiculo = {};spanTipoVeiculo.value = "";NovaCotacao_2();';
		window.clearInterval(window.vTimerProximo);
	}
}, 10);

window.vTimerCalcular = window.setInterval(function() {
	if (window.frames['perfil_frames'] !== undefined &&
			window.frames['perfil_frames'].document.querySelector('#BotaoCalcular > a') !== null) {
		var corrigirSubmeterCalculoStr = '';
		var novoHref = '';
		var corrigirSubmeterCalculo = function() {
			submeterAlterado = SubmeterCalculo.toString();

			submeterAlterado = submeterAlterado.split('document.pesquisa.tpRCTR(0).checked').join('document.pesquisa.tpRCTR[0].checked');
			submeterAlterado = submeterAlterado.split('document.pesquisa.tpRCTR(1).checked').join('document.pesquisa.tpRCTR[1].checked');
			submeterAlterado = submeterAlterado.split('document.pesquisa.AsDiaNoite').join('document.querySelector("input[name=AsDiaNoite]")');
			submeterAlterado = submeterAlterado.split('document.pesquisa.NmAssDNBasica').join('document.querySelector("input[name=NmAssDNBasica]")');
			submeterAlterado = submeterAlterado.split('document.pesquisa.InCarRes').join('document.querySelector("input[name=InCarRes]")');
			submeterAlterado = submeterAlterado.split('document.pesquisa.NmCarrResBasica').join('document.querySelector("input[name=NmCarrResBasica]")');
			submeterAlterado = submeterAlterado.split('document.pesquisa.Vidros').join('document.querySelector("input[name=Vidros]")');
			submeterAlterado = submeterAlterado.split('document.pesquisa.NmVidrosBasica').join('document.querySelector("input[name=NmVidrosBasica]")');
			submeterAlterado = submeterAlterado.split('function SubmeterCalculo() {').join('SubmeterCalculo = function() {');

			eval(submeterAlterado);
		}
		corrigirSubmeterCalculoStr = corrigirSubmeterCalculo.toString();
		corrigirSubmeterCalculoStr = corrigirSubmeterCalculoStr.split('function () {').join('');
		corrigirSubmeterCalculoStr = corrigirSubmeterCalculoStr.substring(0, corrigirSubmeterCalculoStr.length - 1);
		novoHref = window.frames['perfil_frames'].document.querySelector('#BotaoCalcular > a').href;
		window.frames['perfil_frames'].document.querySelector('#BotaoCalcular > a').href = novoHref.split('javascript:').join(
			'javascript:' + corrigirSubmeterCalculoStr + ';');
		window.clearInterval(window.vTimerCalcular);
	}
}, 10);