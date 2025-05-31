const obj_ante = document.querySelector('#ante')
const obj_prox = document.querySelector('#prox')
const obj_img_destaque = document.querySelector('#img_destaque')
const obj_p_nome = document.querySelector('#p_nome')
const obj_p_preço = document.querySelector('#p_preço')
const obj_a_home = document.querySelector('#a_home') 
const obj_img_compra = document.getElementById('img_compra')
const obj_video_compra = document.getElementById('video_compra')
const obj_p_titulo = document.getElementById('titulo')
const obj_p_sinop = document.getElementById('sinop')
const obj_p_desen = document.getElementById('desen')
const obj_p_data = document.getElementById('data')
const obj_p_valor = document.getElementById('valor')
const obj_a_compra = document.getElementById('a_compra')

let num_destaq = 0


if(obj_ante && obj_prox){ 
    obj_ante.addEventListener('click', funCardAnterior)
    obj_prox.addEventListener('click', funProximoCard)
}

function funProximoCard() {
    num_destaq++
    if ( num_destaq == home.length ) {
        num_destaq = 0
    }
    funExibeCard(num_destaq)
}

function funCardAnterior() {
    num_destaq--
    if ( num_destaq < 0 )  {
        num_destaq = ( home.length - 1 )
    }
    funExibeCard(num_destaq)
}

function funExibeCard(par_ind) {
    obj_img_destaque.setAttribute('src', home[par_ind]['img'] )
    obj_img_destaque.setAttribute('alt', home[par_ind]['nome'] )
    obj_img_destaque.setAttribute('title', home[par_ind]['nome'] )
    obj_p_nome.innerHTML = home[par_ind]['nome']
    obj_p_preço.innerHTML = 'Preço: ' + home[par_ind]['preço']
    obj_a_home.setAttribute('href', home[par_ind]['link'] )
}

if(obj_img_destaque){ 
    funExibeCard(0)
}

function loja() {
    var jogo = {}
    for(let obj_jogo of jogo){
        obj_jogo.addEventListener('click', () =>{
            var obj_nome = obj_jogo.parentElement.querySelector('.p_game').innerHTML

            for(let i=0; i < games.length; i++){
                if(games[i].nome == obj_nome){
                    jogo = games[i]
                }
            }
            sessionStorage.setItem('jogoescolhido', JSON.stringify(jogo));
            window.open('./loja.html', "_self");
            window.alert('jogo.nome');
        })
    }
}

const btn_a_game = document.querySelectorAll('.a_game')

function irParaLoja(id){
    const localStorage = window.localStorage;
    localStorage.setItem('id', id)

    window.location.replace("./loja.html");
}

btn_a_game.forEach( (el)=>{ 

    const id = el.id; 

    el.addEventListener( 'click', ()=> { irParaLoja(id)} ) 
})

if( document.querySelectorAll('.loja') ){

    const localStorage = window.localStorage; 
    const id = localStorage.getItem('id'); 

    for(let i=0; i < games.length; i++){

        if(games[i].id == id){
            console.log(games[i]) 
            let  game = games[i];
            obj_p_titulo.innerHTML = game.nome
            obj_img_compra.src = '../' + game.img
            obj_img_compra.alt = game.nome
            obj_video_compra.src = game.video
            obj_a_compra.href = game.link
            obj_p_sinop.innerHTML = game.sinopse
            obj_p_desen.innerHTML = game.desenvolvedora
            obj_p_data.innerHTML = game.lançamento
            if(game.valor == 'Não Disponivel' || game.valor == 'Gratuito'){
                obj_p_valor.innerHTML = game.valor
            } else {
                obj_p_valor.innerHTML = 'Preço: R$ ' + game.valor
        }
        }
    }
}