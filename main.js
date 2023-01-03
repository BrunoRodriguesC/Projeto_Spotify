/*alterar o fundo do banner de acordo com a musica*/

let informacoesBanner = {
    musica : document.querySelector('.audioPrincipal'),
    foto : document.querySelector('.imagemPrincipal'),
    nome : document.querySelector('.nomeMusica'),
    categoria : document.querySelector('.categoria'),
    descricao : document.querySelector('.descricao'),
}

const chippin = {
    musica : document.querySelector('.playChippin'),
    foto : document.querySelector('.fotoChippin'),
    nome : "Chippin'in",
    categoria : "2019 . SINGLE",
    descricao : "SAMURAI",
}
const neverFadeAway = {
    musica : document.querySelector('.playNever_Fade_Away'),
    foto : document.querySelector('.fotoNeverFade'),
    nome : "Never Fade Away",
    categoria : "2019 . SINGLE",
    descricao : "SAMURAI",
}
const testament = {
    musica : document.querySelector('.playTestament'),
    foto : document.querySelector('.fotoTestament'),
    nome : "Testament",
    categoria : "2017 . SINGLE",
    descricao : "Nana Mizuki",
}

const myBoo = {
    musica : document.querySelector('.playmyBoo'),
    foto : document.querySelector('.fotoMyBoo'),
    nome : "My Boo",
    categoria : "2004 . SINGLE",
    descricao : "Usher, Alicia Keys",
}
const fairyTale = {
    musica : document.querySelector('.playfairyTale'),
    foto : document.querySelector('.fotoFairyTale'),
    nome : "Fairy Tale",
    categoria : "2002 . SINGLE",
    descricao : "Shaman",
}
const brunoMars = {
    musica : document.querySelector('.playWhenIWasYourMan'),
    foto : document.querySelector('.fotoBrunoMars'),
    nome : "When I Was Your Man",
    categoria : "2012 . SINGLE",
    descricao : "Bruno Mars",
}


document.querySelector('.play').addEventListener('click', tocarMusica);

    function tocarMusica(){
        informacoesBanner.musica.play();
    }


document.querySelector('.Chippin_In').addEventListener('click', tocarChippin);
    function tocarChippin(){
        informacoesBanner.musica = chippin.musica;
        informacoesBanner.foto.src = "./Imagens/cyberpunk_Chippin.png";
        informacoesBanner.nome.innerHTML = chippin.nome;
        informacoesBanner.categoria.innerHTML = chippin.categoria;
        informacoesBanner.descricao.innerHTML = chippin.descricao;
        chippin.musica.play();
    }

document.querySelector('.Never_Fade_Away').addEventListener('click', tocarNeverFade);
    function tocarNeverFade(){
        informacoesBanner.musica = neverFadeAway.musica;
        informacoesBanner.foto.src = "./Imagens/Cyberpunk_Never_Fade_way.png";
        informacoesBanner.nome.innerHTML = neverFadeAway.nome;
        informacoesBanner.categoria.innerHTML = neverFadeAway.categoria;
        informacoesBanner.descricao.innerHTML = neverFadeAway.descricao;
        neverFadeAway.musica.play();
    }


    document.querySelector('.Testament').addEventListener('click', tocarTestament);
    function tocarTestament(){
        informacoesBanner.musica = testament.musica;
        informacoesBanner.foto.src = "./Imagens/Testament_Nana_Mizuki.png";
        informacoesBanner.nome.innerHTML = testament.nome ;
        informacoesBanner.categoria.innerHTML = testament.categoria;
        informacoesBanner.descricao.innerHTML = testament.descricao;
        testament.musica.play();
    }


document.querySelector('.My_Boo').addEventListener('click', tocarmyBoo);
    function tocarmyBoo(){
        informacoesBanner.musica = myBoo.musica;
        informacoesBanner.foto.src = "./Imagens/Usher_My_Boo.png";
        informacoesBanner.nome.innerHTML = myBoo.nome;
        informacoesBanner.categoria.innerHTML = myBoo.categoria;
        informacoesBanner.descricao.innerHTML = myBoo.descricao;
        myBoo.musica.play();
    }


document.querySelector('.Fairy_Tale').addEventListener('click', tocarfairyTale);
    function tocarfairyTale(){
        informacoesBanner.musica = fairyTale.musica;
        informacoesBanner.foto.src = "./Imagens/FairyTale_Shaman.png";
        informacoesBanner.nome.innerHTML = fairyTale.nome;
        informacoesBanner.categoria.innerHTML = fairyTale.categoria;
        informacoesBanner.descricao.innerHTML = fairyTale.descricao;
        fairyTale.musica.play();
    }


    document.querySelector('.When_I_Was_Your_Man').addEventListener('click', tocarbrunoMars);
    function tocarbrunoMars(){
        informacoesBanner.musica = brunoMars.musica;
        informacoesBanner.foto.src = "./Imagens/Bruno_Mars_When_i_was_your_man.png";
        informacoesBanner.nome.innerHTML = brunoMars.nome;
        informacoesBanner.categoria.innerHTML = brunoMars.categoria;
        informacoesBanner.descricao.innerHTML = brunoMars.descricao;
        brunoMars.musica.play();
    }

