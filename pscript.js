
const pikachu = document.querySelector('.pikachu');/*Em js criamos a constante pikachu e selecionamos sua class atraves do querySlector*/
const pedra = document.querySelector('.pedra');
const cloud = document.querySelector('.nuvens')

const jump = () => { /*Em seguida criamos uma função que adcionará o pulo, no caso função jump */
    pikachu.classList.add('jump'); /* No caso a função irá substituir a class pikachu pela jump*/
    setTimeout(()=> {/* Sendo que essa troca só ocorrerá uma única vez então complementamos com uma função interna chamada setTimeout que recebe dois parametros, um é uma função e o outro um intervalo de tempo */
        pikachu.classList.remove('jump') /*Essa função pode ser anônima apenas para remover a função jump */
    },500); /*após o tempo de execução da msm que é o tempo do pulo */
}


const loop = setInterval(()=> { //colisão personagem + pedra, criamos uma constante loop, para que toda vez que o personagem colida com pedra o jogo pare
                                //Passamos uma função chamada setInterval composta em seus parametros por uma (função, 10)e um tempo, e criamos
    const posicaoPedra = pedra.offsetLeft; //uma função anônima ( ) que identifica a posição da pedra e cria uma condição
    const posicaoPik = +window.getComputedStyle(pikachu).bottom.replace('px','');// comando para pegar um estilo segundo o valor do bottom, seguido de replace que converte px em vazio e p + inicial do comando que transforma string em numero.
    const posicaoNuvem = cloud.offsetLeft;
    if(posicaoPedra <= 50 && posicaoPedra > 0 && posicaoPik < 75) { //Essa condição diz que se a posição da pedra for menor ou igual a 120 px ela vai mudar a animação da pedra para none. e se o pikachu estiver a uma certa altura se o jogo termina
        pedra.style.animation ='none';
        pedra.style.left = `${posicaoPedra}px`; //e aqui dizemos que a estilização da pedra vai para a posição definada após a colisão.

        pikachu.style.animation ='none'; // se a condição for atendida a animação vai parar 
        pikachu.style.bottom = `${posicaoPik}px`;// e aqui será a ultima posição adcionada a colisão, onde a animação para.
        
        pikachu.src="pikachulose.png";

        cloud.style.animation ='none';
        cloud.style.left = `${posicaoNuvem}px`;


        

        clearInterval(loop);

    }
}, 10)
document.addEventListener('keydown', jump); /*Criamos um evento, no qual ('keydown') quando qualquer tecla for baixada, ele invoque a função jump */

