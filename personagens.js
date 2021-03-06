var imagem = "",
	jogadorImagem = document.getElementById("jogadorImagem"),
	inimigoImagem = document.getElementById("inimigoImagem"),
	txtNome = document.getElementById("txtNome"),
	atualVida = document.getElementById("atualVida"),
	totalVida = document.getElementById("totalVida"),
	totalAtaque = document.getElementById("totalAtaque"),
	bonusAtaque = document.getElementById("bonusAtaque"),
	totalDefesa = document.getElementById("totalDefesa"),
	bonusDefesa = document.getElementById("bonusDefesa"),
	totalAtaqueMagico = document.getElementById("totalAtaqueMagico"),
	bonusAtaqueMagico = document.getElementById("bonusAtaqueMagico"),
	totalDefesaMagica = document.getElementById("totalDefesaMagica"),
	bonusDefesaMagica = document.getElementById("bonusDefesaMagica");
	
function escolherPersonagem(nomePersonagem){
	if(nomePersonagem === "Guerreiro"){
		var personagem = {
		numero : 1,
		nome : "Guerreiro",
		vida : 10,
		ataque : 3,
		defesa : 3,
		ataqueMagico: 2,
		defesaMagica: 2,
		imagemParado: "imagens/guerreiro/1.png",
		imagemAndando: "imagens/guerreiro/2.png",
		imagemAtacando: "",
		imagemCurando: "",
		experiencia: 0,
		item1: 5,
		item2: 5,
		item3: 5,
		item4: 5,
		item5: 5,
		item6: 5
		};
		return personagem;
	} else if(nomePersonagem === "Mago"){
		var personagem = {
		numero : 2,
		nome : "Mago",
		vida : 10,
		ataque : 2,
		defesa : 2,
		ataqueMagico: 3,
		defesaMagica: 3,
		imagemParado: "",
		imagemAndando: "",
		imagemAtacando: "",
		imagemCurando: "",
		experiencia: 0,
		item1: 5,
		item2: 5,
		item3: 5,
		item4: 5,
		item5: 5,
		item6: 5
		};
		return personagem;
	}
}
	
function colocarStatusPersonagem(){
	if(item2Ativo){
		bonusAtaque.innerHTML =  Math.floor(jogador.ataque / 2);
	} else {
		bonusAtaque.innerHTML = "0";
	}
	if(item3Ativo){
		bonusDefesa.innerHTML =  Math.floor(jogador.defesa / 2);
	} else {
		bonusDefesa.innerHTML = "0";
	}
	if(item5Ativo){
		bonusAtaqueMagico.innerHTML =  Math.floor(jogador.ataqueMagico / 2);
	} else {
		bonusAtaqueMagico.innerHTML = "0";
	}
	if(item6Ativo){
		bonusDefesaMagica.innerHTML =  Math.floor(jogador.defesaMagica / 2);
	} else {
		bonusDefesaMagica.innerHTML = "0";
	}
	txtNome.innerHTML = jogador.nome;
	totalVida.innerHTML = jogador.vida;
	totalAtaque.innerHTML = jogador.ataque + parseInt(bonusAtaque.innerHTML);
	totalDefesa.innerHTML = jogador.defesa + parseInt(bonusDefesa.innerHTML);
	totalAtaqueMagico.innerHTML = jogador.ataqueMagico + parseInt(bonusAtaqueMagico.innerHTML);
	totalDefesaMagica.innerHTML = jogador.defesaMagica + parseInt(bonusDefesaMagica.innerHTML);
}

function apagarStatusPersonagem(){
	txtNome.innerHTML = "Walking Hero";
	atualVida.innerHTML = "";
	totalVida.innerHTML = "";
	totalAtaque.innerHTML = "";
	totalDefesa.innerHTML = "";
	totalAtaqueMagico.innerHTML = "";
	totalDefesaMagica.innerHTML = "";
}

function andando(){
	if(!batalhando){
		if(imagem === jogador.imagemParado){
			imagem = jogador.imagemAndando;
			jogadorImagem.src = imagem;
		} else {
			imagem = jogador.imagemParado;
			jogadorImagem.src = imagem;
		}
	} else {
		imagem = jogador.imagemParado;
		jogadorImagem.src = imagem;
	}
	animacao = setTimeout(andando,500);
}

function pararAnimacao(){
	clearTimeout(animacao);
	jogadorImagem.src = "";
}

function mostrarPersonagens(){
	personagemJogador.setAttribute("onclick",  "comecarJogo('Guerreiro')");
	personagemInimigo.setAttribute("onclick",  "comecarJogo('Mago')");
	jogadorImagem.src = "imagens/guerreiro/1.png";
	inimigoImagem.src = "imagens/guerreiro/2.png";
	txtStatus.innerHTML = "Escolha o personagem";
}

function personagemEscolhido(){
	personagemJogador.removeAttribute("onclick");
	personagemInimigo.removeAttribute("onclick");
	inimigoImagem.src = "";
	txtStatus.innerHTML = "";
}