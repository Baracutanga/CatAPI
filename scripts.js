const btnGerar = document.getElementById('gerarImagem');


btnGerar.addEventListener('mouseover', function () {
    document.getElementById('gerarImagem').style.color = "#4d6345"
})

btnGerar.addEventListener('mouseleave', function () {
    document.getElementById('gerarImagem').style.color = "#1c2419"
})

btnGerar.addEventListener('click', function () {;
    const imgElement = document.getElementById('catImg');
    imgElement.src = `https://cataas.com/cat?${new Date().getTime()}`;
});
