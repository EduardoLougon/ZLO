$(document).ready(function(){
    setTimeout(function(){
        // Definir o texto para cada slide
        var text1 = "A sua próxima cueca!";
        var text2 = "A sua próxima cueca!";

        // Função para o efeito de digitação
        function typeWriter(txtElement, txt, i = 0) {
            if (i < txt.length) {
                $(txtElement).html($(txtElement).html() + txt.charAt(i));
                i++;
                setTimeout(() => typeWriter(txtElement, txt, i), 50); // Ajuste a velocidade aqui (50ms)
            } else {
                $(txtElement).css('opacity', 1); // Exibe o texto após a digitação
            }
        }

        // Função para limpar o texto antes da digitação
        function clearText(txtElement) {
            $(txtElement).html("");
        }

        // Iniciar a digitação no primeiro slide
        clearText($("#typing-text-1"));
        typeWriter($("#typing-text-1"), text1);

        // Iniciar a digitação nos outros slides
        $('#carouselExampleIndicators').on('slid.bs.carousel', function (e) {
            var $active = $(e.relatedTarget);
            var index = $active.index();

            if (index === 0) {
                clearText($("#typing-text-1"));
                typeWriter($("#typing-text-1"), text1);
            } else if (index === 1) {
                clearText($("#typing-text-2"));
                typeWriter($("#typing-text-2"), text2);
            }
        });
    }, 0);
    //document.getElementById('cadastroForm').addEventListener('submit', function(event) {
        //$('#agradecimentoModal').modal('show');
        //document.getElementById('cadastroForm').reset();
        //event.preventDefault();
    //});

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=> {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el)=> observer.observe(el));


    const reviewWrap = document.getElementById("reviewWrap");
    const leftArrow = document.getElementById("leftArrow");
    const rightArrow = document.getElementById("rightArrow");
    const personName = document.getElementById("personName");
    const personProf = document.getElementById("personProf");
    const description = document.getElementById("description");
    const audio = document.getElementById('audio')

    let people = [
	{
		name: "Carlos Bergamasch",
		description:
			'"Rodei 350 km no primeiro dia e 700 km no segundo usando a cueca, e posso dizer que funciona. Em nenhum momento senti necessidade de ajustar nada, embora tenha sentido uma leve pressão. Diferente do normal, não tive desconforto ou necessidade de reposicionar. Alguns amigos acham bobagem, mas quem enfrenta esse problema sabe a diferença que faz. No geral, aprovei!"',
        prof: "Empresário"
	},

	{
		name: "Alessandro Filí",
		description:
			'"Joguei bola com a cueca e foi incrível! Sempre ajusto, mas dessa vez nem lembrei. Para esportes e moto, funciona muito bem. No dia a dia, é muito confortável. Além disso, ajudou no cheiro. Suo muito, mas mesmo após um dia no sol ou jogando bola, nada de odor. Já lavei três vezes e continua ótima. Vou testar mais. Valeu!"',
        prof: "Empresário"
	},

	{
		name: "Admar Morgan",
		description:
			'"Ficou espetacular! Parece que nem tenho o órgão de tão confortável. Nada de ficar colado na perna ou prensado. Antes, era um estresse ter que me mexer na moto para aliviar, mas agora nem sinto que tá ali. Espetacular!"',
        prof: "Empresário"
	},

	{
		name: "Fernando Rocha",
		description:
			'"A cueca é show de bola! Não enrola, o tecido é leve e muito confortável. Usei por dois dias seguidos e achei ótima para se exercitar. Parece ter uma boa absorção de suor. Tá no caminho certo! Gostei bastante."',
        prof: "Personal Trainer"
	},

    {
		name: "William",
		description:
            '"A cueca é perfeita! O tamanho ficou ótimo e o tecido é de qualidade, muito confortável. Parece que estou quase pelado, mas a divisão das partes mantém tudo separado de maneira incrível. Compreendi o propósito, e realmente faz sentido. É um sucesso! Quero mais, tem outras cores? Vai me pagar com cueca? (risos) Muito bom, essencial!"',
        prof: "Engenheiro de Software"
	},

    {
		name: "Alan Abi Madi",
		description:
            '"Usei a cueca sexta-feira e preciso dizer: muito boa mesmo! Confortável, firme e não fica descendo ou enrolando, coisa que sempre me incomoda em outras. Segura bem e me senti super à vontade o tempo todo. Dá pra usar o dia inteiro sem nem lembrar que tá usando. Gostei bastante!"',
        prof: "Advogado"
	},
    {
		name: "Fernando Ferreira",
		description:
            '"A costura é excelente, não machuca nem atrapalha, e segurou muito bem, melhor que as gringas. Andei de moto naked, que costuma apertar tudo ali, mas dessa vez nada de incômodo. Só achei um pouco grande na cintura, mas no geral, tá mais que aprovada!""',
        prof: "Empresário"
	},
    {
		name: "Jonathan",
		description:
            '"O pessoal tá adorando a cueca! Um amigo, que viaja de moto BMW, disse que resolveu um problema enorme e sugeriu até uma versão segunda pele. Achou o tecido incrível, comparou com produtos caros e quer levar a ideia para uma boutique de motoqueiros. Vai testar em uma viagem de 2000 km e depois me dá um feedback. O pessoal do esporte também elogiou muito. Tá fazendo sucesso!"',
        prof: "Profissional de Marketing"
	},
    {
		name: "Cecílio Campos",
		description:
            '"Usei a cueca para pedalar e achei super confortável. Percebi que a região genital fica mais protegida, o que melhorou muito a experiência. Não sei como seria na moto, mas na bike fez bastante diferença. Parabéns, a ideia é muito boa!"',
        prof: "Administrador"
	},
    {
		name: "Frederico",
		description:
            '"No início, a cueca causou um leve desconforto por ser uma sensação nova, mas logo me acostumei e funcionou bem, mantendo tudo firme e elevado. Passei para um amigo urologista e dois motoqueiros, e todos gostaram. Na moto, faz muita diferença, evitando incômodos. No futebol, também se saiu muito bem."',
        prof: "Urologista"
	},
    ];

    personName.innerText = people[0].name;
    description.innerText = people[0].description;
    personProf.innerText = people[0].prof
    audio.src = `./audio/${people[0].name}.mp3`
    let currentPerson = 0;

    //Select the side where you want to slide
    function slide(whichSide, personNumber) {
        let reviewWrapWidth = reviewWrap.offsetWidth + "px";
        let descriptionHeight = description.offsetHeight + "px";
        //(+ or -)
        let side1symbol = whichSide === "left" ? "" : "-";
        let side2symbol = whichSide === "left" ? "-" : "";

        let tl = gsap.timeline();

        tl.to(reviewWrap, {
            duration: 0.4,
            opacity: 0,
            translateX: `${side1symbol + reviewWrapWidth}`
        });

        tl.to(reviewWrap, {
            duration: 0,
            translateX: `${side2symbol + reviewWrapWidth}`
        });

        setTimeout(() => {
            description.style.height = descriptionHeight;
        }, 0);
        setTimeout(() => {
            personName.innerText = people[personNumber].name;
        }, 0);
        setTimeout(() => {
            description.innerText = people[personNumber].description;
        }, 0);

        setTimeout(() => {
            audio.src = `./audio/${people[personNumber].name}.mp3`
        }, 0);

        setTimeout(() => {
            personProf.innerText = people[personNumber].prof;
        }, 0);

        tl.to(reviewWrap, {
            duration: 0.4,
            opacity: 1,
            translateX: 0
        });
    }

    function setNextCardLeft() {
        if (currentPerson === 9) {
            currentPerson = 0;
            slide("left", currentPerson);
        } else {
            currentPerson++;
        }

        slide("left", currentPerson);
    }

    function setNextCardRight() {
        if (currentPerson === 0) {
            currentPerson = 9;
            slide("right", currentPerson);
        } else {
            currentPerson--;
            console.log(1)
        }

        slide("right", currentPerson);
    }

    leftArrow.addEventListener("click", setNextCardLeft);
    rightArrow.addEventListener("click", setNextCardRight);


    window.addEventListener("resize", () => {
        description.style.height = "100%";
    });

});

