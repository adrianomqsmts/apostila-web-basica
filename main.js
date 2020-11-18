html = (txt) => {
    return `<a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">HTML5</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="`+ txt + `introducao.html" target="_parent" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="`+ txt + `comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href="`+ txt + `cabecalhos.html" class="dropdown-item">Cabeçalhos</a>
                                <a target="_parent" href="`+ txt + `paragrafos.html" class="dropdown-item">Parágrafos</a>
                                <a target="_parent" href="`+ txt + `formatacao-textos.html" class="dropdown-item">Formatação de texto</a>
                                <a target="_parent" href="`+ txt + `listas.html" class="dropdown-item">Listas</a>
                                <a target="_parent" href="`+ txt + `caminhas-arquivos.html" class="dropdown-item">Caminhos de arquivos</a>
                                <a target="_parent" href="`+ txt + `imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="`+ txt + `links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="`+ txt + `tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="`+ txt + `citacoes.html" class="dropdown-item">Citações</a>
                                <a target="_parent" href="`+ txt + `css-basico.html" class="dropdown-item">CSS básico</a>
                                <a target="_parent" href="`+ txt + `elementos-block-inline.html" class="dropdown-item">Elementos Block e Inline</a>
                                <a target="_parent" href="`+ txt + `classes.html" class="dropdown-item">Classes</a>
                                <a target="_parent" href="`+ txt + `identificadores.html" class="dropdown-item">Identificadores</a>
                                <a target="_parent" href="`+ txt + `html-em-html.html" class="dropdown-item">HTML em HTML</a>
                                <a target="_parent" href="`+ txt + `media.html" class="dropdown-item">Mídias</a>
                                <a target="_parent" href="`+ txt + `head.html" class="dropdown-item">head</a>
                                <a target="_parent" href="`+ txt + `caracteres-especiais.html" class="dropdown-item">Caracteres Especiais</a>
                                <a target="_parent" href="`+ txt + `semantica.html" class="dropdown-item">Semântica</a>
                                <a target="_parent" href="`+ txt + `boas-praticas.html" class="dropdown-item">Boas                                    práticas</a>
                                <a target="_parent" href="`+ txt + `formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="`+ txt + `lista-tags-html.html" class="dropdown-item">LISTA DE TAGS HTML</a>
                            </ul>
                        </div>`;
}

css = (txt) => {
    return ` <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">CSS3</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="`+ txt + `introducao.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="`+ txt + `comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href=`+ txt + `"unidades-medidas.html" class="dropdown-item">Unidades de medida</a>
                                <a target="_parent" href="`+ txt + `seletores-simples.html" class="dropdown-item">Seletores simples</a>
                                <a target="_parent" href="`+ txt + `formas-estilos.html" class="dropdown-item">Formas de estilos</a>
                                <a target="_parent" href="`+ txt + `cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="`+ txt + `background.html" class="dropdown-item">Background</a>
                                <a target="_parent" href="`+ txt + `modelo-caixa.html" class="dropdown-item">Modelo de Caixa</a>
                                <a target="_parent" href="`+ txt + `border.html" class="dropdown-item">Border</a>
                                <a target="_parent" href="`+ txt + `margins.html" class="dropdown-item">Margins</a>
                                <a target="_parent" href="`+ txt + `padding.html" class="dropdown-item">Padding</a>
                                <a target="_parent" href="`+ txt + `height-width.html" class="dropdown-item">Height and Width</a>
                                <a target="_parent" href="`+ txt + `outline.html" class="dropdown-item">Outline</a>
                                <a target="_parent" href="`+ txt + `box-sizing.html" class="dropdown-item">Box-sizing</a>
                                <a target="_parent" href="`+ txt + `textos.html" class="dropdown-item">Textos</a>
                                <a target="_parent" href="`+ txt + `fontes.html" class="dropdown-item">Fontes</a>
                                <a target="_parent" href="`+ txt + `icones.html" class="dropdown-item">Ícones</a>
                                <a target="_parent" href="`+ txt + `seletores-pseudo-classes.html" class="dropdown-item">Seletores de pseudo-classes</a>
                                <a target="_parent" href="`+ txt + `links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="`+ txt + `seletores-combinados.html" class="dropdown-item">Seletores de Combinação</a>
                                <a target="_parent" href="`+ txt + `listas.html" class="dropdown-item">List-style</a>
                                <a target="_parent" href="`+ txt + `tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="`+ txt + `seletores-pseudo-elementos.html" class="dropdown-item">Seletores de pseudo-elementos</a>
                                <a target="_parent" href="`+ txt + `opacidade.html" class="dropdown-item">Opacidade</a>
                                <a target="_parent" href="`+ txt + `gradiente.html" class="dropdown-item">Gradientes</a>
                                <a target="_parent" href="`+ txt + `seletores-atributos.html" class="dropdown-item">Seletores de Atributos</a>
                                <a target="_parent" href="`+ txt + `formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="`+ txt + `especificidade.html" class="dropdown-item">Especificidade</a>
                                <a target="_parent" href="`+ txt + `display.html" class="dropdown-item">Layout - Display</a>
                                <a target="_parent" href="`+ txt + `max-width.html" class="dropdown-item">Layout - Max-width</a>
                                <a target="_parent" href="`+ txt + `position.html" class="dropdown-item">Layout - Position</a>
                                <a target="_parent" href="`+ txt + `overflow.html" class="dropdown-item">Layout - Overflow</a>
                                <a target="_parent" href="`+ txt + `float.html" class="dropdown-item">Layout- Float and Clear</a>
                                <a target="_parent" href="`+ txt + `pratica-menu-horizontal.html" class="dropdown-item">Prática - menu horizontal</a>
                                <a target="_parent" href="`+ txt + `transicoes.html" class="dropdown-item">Transições</a>
                                <a target="_parent" href="`+ txt + `cursores.html" class="dropdown-item">Cursores</a>
                                <a target="_parent" href="`+ txt + `colunas.html" class="dropdown-item">Múltiplas colunas</a>
                                <a target="_parent" href="`+ txt + `media-queries.html" class="dropdown-item">Media Queries </a>
                                <a target="_parent" href="`+ txt + `Flexbox.html" class="dropdown-item">Flexbox</a>
                            </ul>
                        </div>`;
}


bt = (txt) => {
    return `<a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">BOOTSTRAP 4</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="`+ txt + `index-bootstrap.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="`+ txt + `container.html" class="dropdown-item">Containers</a>
                                <a target="_parent" href="`+ txt + `grids.html" class="dropdown-item">Basic Grids</a>
                                <a target="_parent" href="`+ txt + `formatacao-textos.html" class="dropdown-item">Formatação de Texto</a>
                                <a target="_parent" href="`+ txt + `cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="`+ txt + `bordas.html" class="dropdown-item">Bordas</a>
                                <a target="_parent" href="`+ txt + `espacamento.html" class="dropdown-item">Espacamento</a>
                                <a target="_parent" href="`+ txt + `display.html" class="dropdown-item">Display</a>
                                <a target="_parent" href="`+ txt + `sombras.html" class="dropdown-item">Sombras</a>
                                <a target="_parent" href="`+ txt + `tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="`+ txt + `imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="`+ txt + `jumbotron.html" class="dropdown-item">Jumbotron</a>
                                <a target="_parent" href="`+ txt + `botoes.html" class="dropdown-item">Botões</a>
                                <a target="_parent" href="`+ txt + `grupo-botoes.html" class="dropdown-item">Grupo de Botões</a>
                                <a target="_parent" href="`+ txt + `dropdowns.html" class="dropdown-item">Dropdowns</a>
                                <a target="_parent" href="`+ txt + `badges.html" class="dropdown-item">Badges</a>
                                <a target="_parent" href="`+ txt + `barra-progresso.html" class="dropdown-item">Barra de Progresso</a>
                                <a target="_parent" href="`+ txt + `spinners.html" class="dropdown-item">Spinners</a>
                                <a target="_parent" href="`+ txt + `pagincacao.html" class="dropdown-item">Paginação</a>
                                <a target="_parent" href="`+ txt + `cards.html" class="dropdown-item">Cards</a>
                                <a target="_parent" href="`+ txt + `collapse.html" class="dropdown-item">Collapse</a>
                                <a target="_parent" href="`+ txt + `formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="`+ txt + `menus-navegacao.html" class="dropdown-item">Menus de Navegação</a>
                                <a target="_parent" href="`+ txt + `barras-navegacao.html" class="dropdown-item">Barras de Navegação</a>
                                <a target="_parent" href="`+ txt + `carrossel.html" class="dropdown-item">Carrossel</a>
                                <a target="_parent" href="`+ txt + `flex.html" class="dropdown-item">Flex Box</a>
                            </ul>
                        </div>`;
}

js = (txt) => {
    return `                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">JAVASCRIPT</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="`+ txt + `introducao.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="`+ txt + `outputs.html" class="dropdown-item">Outputs</a>
                                <a target="_parent" href="`+ txt + `comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href="`+ txt + `variaveis.html" class="dropdown-item">Variáveis</a>
                                <a target="_parent" href="`+ txt + `operadores.html" class="dropdown-item">Operadores</a>
                                <a target="_parent" href="`+ txt + `funcoes.html" class="dropdown-item">Funções</a>
                                <a target="_parent" href="`+ txt + `eventos.html" class="dropdown-item">Eventos</a>
                                <a target="_parent" href="`+ txt + `string.html" class="dropdown-item">Strings</a>
                                <a target="_parent" href="`+ txt + `number.html" class="dropdown-item">Numbers</a>
                                <a target="_parent" href="`+ txt + `array.html" class="dropdown-item">Arrays</a>
                                <a target="_parent" href="`+ txt + `date.html" class="dropdown-item">Dates</a>
                                <a target="_parent" href="`+ txt + `math.html" class="dropdown-item">Biblioteca Math</a>
                                <a target="_parent" href="`+ txt + `condicionais.html" class="dropdown-item">Estruturas Condicionais</a>
                                <a target="_parent" href="`+ txt + `loops-repeticao.html" class="dropdown-item">Estruturas de Repetição</a>
                                <a target="_parent" href="`+ txt + `expressao-regular.html" class="dropdown-item">Expressões Regulares</a>
                                <a target="_parent" href="`+ txt + `tratamento-erro.html" class="dropdown-item">Tratamento de Erros</a>
                                <a target="_parent" href="`+ txt + `objetos.html" class="dropdown-item">Objetos</a>
                                <a target="_parent" href="`+ txt + `classes.html" class="dropdown-item">Classes</a>
                                <a target="_parent" href="`+ txt + `dom.html" class="dropdown-item">HTML DOM</a>
                                <a target="_parent" href="`+ txt + `bom.html" class="dropdown-item">Browser BOM</a>
                                <a target="_parent" href="`+ txt + `cookies.html" class="dropdown-item">Cookies</a>
                                <a target="_parent" href="`+ txt + `armazenamento.html" class="dropdown-item">Armazenamento</a>
                                <a target="_parent" href="`+ txt + `consideracoes-finais.html" class="dropdown-item">Considerações Finais</a>      
                            </ul>
                        </div>`;
}



function criarMenu() {
    var navbar = ` <nav class="navbar navbar-expand-lg navbar-dark text-white bg-darkviolet fixed-top">
            <a class="navbar-brand" href="../index.html">PumP</a>
            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item dropdown">
                       `+ html("") + `
                    </li>
                    <li class="nav-item dropdown">
                    `+ css("../css-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ bt("../bootstrap-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ js("../javascript-pages/") + `
                    </li>
                </ul>
            </div>
        </nav>
`;
    var idMenu = document.getElementById("menu");
    idMenu.innerHTML = navbar;
}

function criarMenuCSS() {
    var navbar = ` <nav class="navbar navbar-expand-lg navbar-dark text-white bg-darkviolet fixed-top">
            <a class="navbar-brand" href="../index.html">PumP</a>
            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item dropdown">
                       `+ html("../html-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                    `+ css("") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ bt("../bootstrap-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ js("../javascript-pages/") + `
                    </li>
                </ul>
            </div>
        </nav>
`;
    var idMenu = document.getElementById("menu");
    idMenu.innerHTML = navbar;
}



function criarMenuBT() {
    var navbar = ` <nav class="navbar navbar-expand-lg navbar-dark text-white bg-darkviolet fixed-top">
            <a class="navbar-brand" href="../index.html">PumP</a>
            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item dropdown">
                       `+ html("`+txt+`") + `
                    </li>
                    <li class="nav-item dropdown">
                    `+ css("../css-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ bt("") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ js("../javascript-pages/") + `
                    </li>
                </ul>
            </div>
        </nav>
`;
    var idMenu = document.getElementById("menu");
    idMenu.innerHTML = navbar;
}

function criarMenuJS() {
    var navbar = ` <nav class="navbar navbar-expand-lg navbar-dark text-white bg-darkviolet fixed-top">
            <a class="navbar-brand" href="../index.html">PumP</a>
            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item dropdown">
                       `+ html("../html-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                    `+ css("../css-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ bt("../bootstrap-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ js("") + `
                    </li>
                </ul>
            </div>
        </nav>
`;
    var idMenu = document.getElementById("menu");
    idMenu.innerHTML = navbar;
}

function criarMenuPrincipal() {
    var navbar = ` <nav class="navbar navbar-expand-lg navbar-dark text-white bg-darkviolet fixed-top">
            <a class="navbar-brand" href="index.html">PumP</a>
            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item dropdown">
                       `+ html("html-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                    `+ css("css-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ bt("bootstrap-pages/") + `
                    </li>
                    <li class="nav-item dropdown">
                        `+ js("javascript-pages/") + `
                    </li>
                </ul>
            </div>
        </nav>
`;
    var idMenu = document.getElementById("menu");
    idMenu.innerHTML = navbar;
}



function rodape() {

    var code = `<footer class="footer pt-5 mt-5 pb-5 border-0 d-none d-md-block mt-auto modal-footer position-relative bg-darkviolet"
        style="bottom: 0;left: 0;">
        <div class="container">
            <span class="text-light">© Adriano M. Martins 2020-2020 - Projetando um Projeto - PumP</span>
        </div>
    </footer>`
    var idRodape = document.getElementById("rodape");
    idRodape.innerHTML = code;

}
