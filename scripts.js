(function () {

    // VARIAVEIS - DOM
    const $CRONOMETRO = document.getElementById("cronometro");
    const $DIA = document.getElementById("dia");
    const $SEMANA = document.getElementById("semana");
    const $HORA = document.getElementById("horas");
    const $MINUTOS = document.getElementById("minutos");
    const $SEGUNDOS = document.getElementById("segundos");
    const $MENSAGEM = document.getElementById("mensagem");
    const $0 = document.getElementById("0");
    const $1 = document.getElementById("1");
    const $2 = document.getElementById("2");
    const $3 = document.getElementById("3");
    const $4 = document.getElementById("4");
    const $5 = document.getElementById("5");
    const $6 = document.getElementById("6");
    const $IMAGEM = document.getElementById("img");

    let rodando = false;

    const DIASEMANA = [{
            semana: "Domingo",
            msg: "Domingo! Muitas vezes tentei fugir de mim, mas onde eu ia lá eu estava! 😴",
            img: "Imagens/chuva.gif"
        },
        {
            semana: "Segunda-Feira",
            msg: "Segundona! Se você parar para pensar, você pensa parado! 😄",
            img: "Imagens/ensolarado.gif"
        },
        {
            semana: "Terça-Feira",
            msg: "Terça! Se tem uma coisa que acaba com meu dia, é a noite! 😃",
            img: "Imagens/garoa.gif"
        },
        {
            semana: "Quarta-Feira",
            msg: "Quarta! Não acredite na mentira porque ela não é verdade! 👽",
            img: "Imagens/lactea.gif"
        },
        {
            semana: "Quinta-Feira",
            msg: "Quinta! Feliz é aquele que não é triste! 🧑",
            img: "Imagens/por do sol.gif"
        },
        {
            semana: "Sexta-Feira",
            msg: "Sextou! Eu jamais esquecerei das coisas que me lembro! 🤖",
            img: "Imagens/relampago.gif"
        },
        {
            semana: "Sabado",
            msg: "Sabadão! Se tudo der certo, nada dará errado! 🐶",
            img: "Imagens/tarde.gif"
        }
    ]


    // FUNÇÕES - RELOGIO DIGITAL   

    function atualizarDisplay() {

        let dataHoje = new Date();
        let diaAtual = dataHoje.getDate();
        let semanaAtual = dataHoje.getDay();
        let mesAtual = dataHoje.getMonth() + 1;
        let anoAtual = dataHoje.getFullYear();
        let horaAtual = ajustarNumeros(dataHoje.getHours());
        let minutosAtual = ajustarNumeros(dataHoje.getMinutes());
        let segundosAtual = ajustarNumeros(dataHoje.getSeconds());
        let dataAtual = ajustarNumeros(diaAtual) + "/" + ajustarNumeros(mesAtual) + "/" + ajustarNumeros(anoAtual);

        $DIA.textContent = dataAtual
        $SEMANA.textContent = DIASEMANA[semanaAtual].semana;
        $HORA.textContent = horaAtual;
        $MINUTOS.textContent = minutosAtual;
        $SEGUNDOS.textContent = segundosAtual;
        
        switch (semanaAtual) {
            case 0:
                $0.style.color = "#4682b4";
                break
            case 1:
                $1.style.color = "#4682b4"
                break
            case 2:
                $2.style.color = "#4682b4"
                break
            case 3:
                $3.style.color = "#4682b4"
                break
            case 4:
                $4.style.color = "#4682b4"
                break
            case 5:
                $5.style.color = "#4682b4"
                break
            case 6:
                $6.style.color = "#4682b4"
        }
        
    }

    dataHoje = new Date();
    semanaAtual = dataHoje.getDay();
    $MENSAGEM.textContent = DIASEMANA[semanaAtual].msg;
    $IMAGEM.src = DIASEMANA[semanaAtual].img;

    
    
    // AJUSTAR O NUMERO MENOR QUE 0

    function ajustarNumeros(numero) {
        if (numero < 10) {
            numero = "0" + numero;
        }
        return numero;
    }

    atualizarDisplay();
    let x = setInterval(atualizarDisplay, 1000);

    




    //CRONOMETRO

    const $PLAY = document.querySelector(".fa-play");
    $PLAY.addEventListener("click", iniciar);

    const $RELOGIO = document.querySelector(".fa-clock-rotate-left");
    $RELOGIO.addEventListener("click", voltarRelogio);

    const $PARAR = document.querySelector(".fa-stop");
    $PARAR.addEventListener("click", pararCronometro);

    const $PAUSAR = document.querySelector(".fa-pause");
    $PAUSAR.addEventListener("click", pausarCronometro);

    let hh = 0;
    let mm = 0;
    let ss = 0;
    
    let cron;

    function pararCronometro () {
        clearInterval(cron);
        rodando = false;
        hh = 0
        mm = 0
        ss = 0
        $CRONOMETRO.textContent = ajustarNumeros(hh) + ":" + ajustarNumeros(mm) + ":" + ajustarNumeros(ss);
    }

    function pausarCronometro () {
        rodando = false;
        clearInterval(cron);
    }

    function voltarRelogio () {
        $HORA.style.display = "flex"
        $MINUTOS.style.display = "flex"
        $SEGUNDOS.style.display = "flex"
        $CRONOMETRO.style.display = "none"
        if (rodando) {
            clearInterval(cron)
            alert("O cronometro ficará pausado!")
            rodando = false
        } 
    }

    function iniciar() {
        if (rodando) {
            return
        }
        rodando = true
        $HORA.style.display = "none"
        $MINUTOS.style.display = "none"
        $SEGUNDOS.style.display = "none"
        $CRONOMETRO.style.display = "flex"
        $CRONOMETRO.textContent = ajustarNumeros(hh) + ":" + ajustarNumeros(mm) + ":" + ajustarNumeros(ss);
        cron = setInterval(start, 1000) 
    }

    function start () {
        ss++;
        if (ss === 60) {
            ss = 0
            mm++

            if (mm === 60) {
                mm = 0
                hh++
            }
        }
        $CRONOMETRO.textContent = ajustarNumeros(hh) + ":" + ajustarNumeros(mm) + ":" + ajustarNumeros(ss);
    }
})()