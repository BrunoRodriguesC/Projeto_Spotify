/*Atualizar as informacoes do banner pincipal*/

let musicaPrincipal = document.querySelector('.audioPrincipal');
const chippin_in = document.querySelector('.playChippin');
const never_Fade_Away = document.querySelector('.playNever_Fade_Away');
const Testament = document.querySelector('.playTestament');
const my_Boo = document.querySelector('.playmyBoo');
const fairy_Tale = document.querySelector('.playfairyTale');
const when_I_Was_Your_Man = document.querySelector('.playWhenIWasYourMan');


document.querySelector('.play').addEventListener('click', tocarMusica);

    function tocarMusica(){
        musicaPrincipal.play();
    }


document.querySelector('.Chippin_In').addEventListener('click', tocarChippin);
    function tocarChippin(){
        musicaPrincipal = chippin_in
        chippin_in.play();
        document.getElementsByClassName('.nomeMusica') = 'Chippin`in';
    }

document.querySelector('.Never_Fade_Away').addEventListener('click', tocarNeverFade);
    function tocarNeverFade(){
        musicaPrincipal = never_Fade_Away;
        never_Fade_Away.play();
    }


    document.querySelector('.Testament').addEventListener('click', tocarTestament);
    function tocarTestament(){
        musicaPrincipal = Testament
        Testament.play();
    }


document.querySelector('.My_Boo').addEventListener('click', tocarmyBoo);
    function tocarmyBoo(){
        musicaPrincipal = my_Boo
        my_Boo.play();
    }


document.querySelector('.Fairy_Tale').addEventListener('click', tocarfairyTale);
    function tocarfairyTale(){
        musicaPrincipal = fairy_Tale
        fairy_Tale.play();
    }


    document.querySelector('.When_I_Was_Your_Man').addEventListener('click', tocarbrunoMars);
    function tocarbrunoMars(){
        musicaPrincipal = when_I_Was_Your_Man
        when_I_Was_Your_Man.play();
    }

