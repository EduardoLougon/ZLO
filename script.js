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

});

