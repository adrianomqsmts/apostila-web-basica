function criarMenu() {
    var navbar = ` <nav class="navbar navbar-expand-lg navbar-dark text-white bg-darkviolet fixed-top">
            <a class="navbar-brand" href="../index.html">PumP</a>
            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">HTML5</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="introducao.html" target="_parent" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href="cabecalhos.html" class="dropdown-item">Cabeçalhos</a>
                                <a target="_parent" href="paragrafos.html" class="dropdown-item">Parágrafos</a>
                                <a target="_parent" href="formatacao-textos.html" class="dropdown-item">Formatação de texto</a>
                                <a target="_parent" href="listas.html" class="dropdown-item">Listas</a>
                                <a target="_parent" href="caminhas-arquivos.html" class="dropdown-item">Caminhos de arquivos</a>
                                <a target="_parent" href="imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="citacoes.html" class="dropdown-item">Citações</a>
                                <a target="_parent" href="css-basico.html" class="dropdown-item">CSS básico</a>
                                <a target="_parent" href="elementos-block-inline.html" class="dropdown-item">Elementos Block e Inline</a>
                                <a target="_parent" href="classes.html" class="dropdown-item">Classes</a>
                                <a target="_parent" href="identificadores.html" class="dropdown-item">Identificadores</a>
                                <a target="_parent" href="html-em-html.html" class="dropdown-item">HTML em HTML</a>
                                <a target="_parent" href="media.html" class="dropdown-item">Mídias</a>
                                <a target="_parent" href="head.html" class="dropdown-item">head</a>
                                <a target="_parent" href="caracteres-especiais.html" class="dropdown-item">Caracteres Especiais</a>
                                <a target="_parent" href="semantica.html" class="dropdown-item">Semântica</a>
                                <a target="_parent" href="boas-praticas.html" class="dropdown-item">Boas                                    práticas</a>
                                <a target="_parent" href="formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="lista-tags-html.html" class="dropdown-item">LISTA DE TAGS HTML</a>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">CSS3</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="../css-pages/introducao.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="../css-pages/comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href=../css-pages/"unidades-medidas.html" class="dropdown-item">Unidades de medida</a>
                                <a target="_parent" href="../css-pages/seletores-simples.html" class="dropdown-item">Seletores simples</a>
                                <a target="_parent" href="../css-pages/formas-estilos.html" class="dropdown-item">Formas de estilos</a>
                                <a target="_parent" href="../css-pages/cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="../css-pages/background.html" class="dropdown-item">Background</a>
                                <a target="_parent" href="../css-pages/modelo-caixa.html" class="dropdown-item">Modelo de Caixa</a>
                                <a target="_parent" href="../css-pages/border.html" class="dropdown-item">Border</a>
                                <a target="_parent" href="../css-pages/margins.html" class="dropdown-item">Margins</a>
                                <a target="_parent" href="../css-pages/padding.html" class="dropdown-item">Padding</a>
                                <a target="_parent" href="../css-pages/height-width.html" class="dropdown-item">Height and Width</a>
                                <a target="_parent" href="../css-pages/outline.html" class="dropdown-item">Outline</a>
                                <a target="_parent" href="../css-pages/box-sizing.html" class="dropdown-item">Box-sizing</a>
                                <a target="_parent" href="../css-pages/textos.html" class="dropdown-item">Textos</a>
                                <a target="_parent" href="../css-pages/fontes.html" class="dropdown-item">Fontes</a>
                                <a target="_parent" href="../css-pages/icones.html" class="dropdown-item">Ícones</a>
                                <a target="_parent" href="../css-pages/seletores-pseudo-classes.html" class="dropdown-item">Seletores de pseudo-classes</a>
                                <a target="_parent" href="../css-pages/links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="../css-pages/seletores-combinados.html" class="dropdown-item">Seletores de Combinação</a>
                                <a target="_parent" href="../css-pages/listas.html" class="dropdown-item">List-style</a>
                                <a target="_parent" href="../css-pages/tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="../css-pages/seletores-pseudo-elementos.html" class="dropdown-item">Seletores de pseudo-elementos</a>
                                <a target="_parent" href="../css-pages/opacidade.html" class="dropdown-item">Opacidade</a>
                                <a target="_parent" href="../css-pages/gradiente.html" class="dropdown-item">Gradientes</a>
                                <a target="_parent" href="../css-pages/seletores-atributos.html" class="dropdown-item">Seletores de Atributos</a>
                                <a target="_parent" href="../css-pages/formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="../css-pages/especificidade.html" class="dropdown-item">Especificidade</a>
                                <a target="_parent" href="../css-pages/display.html" class="dropdown-item">Layout - Display</a>
                                <a target="_parent" href="../css-pages/max-width.html" class="dropdown-item">Layout - Max-width</a>
                                <a target="_parent" href="../css-pages/position.html" class="dropdown-item">Layout - Position</a>
                                <a target="_parent" href="../css-pages/overflow.html" class="dropdown-item">Layout - Overflow</a>
                                <a target="_parent" href="../css-pages/float.html" class="dropdown-item">Layout- Float and Clear</a>
                                <a target="_parent" href="../css-pages/pratica-menu-horizontal.html" class="dropdown-item">Prática - menu horizontal</a>
                                <a target="_parent" href="../css-pages/transicoes.html" class="dropdown-item">Transições</a>
                                <a target="_parent" href="../css-pages/cursores.html" class="dropdown-item">Cursores</a>
                                <a target="_parent" href="../css-pages/colunas.html" class="dropdown-item">Múltiplas colunas</a>
                                <a target="_parent" href="../css-pages/media-queries.html" class="dropdown-item">Media Queries </a>
                                <a target="_parent" href="../css-pages/Flexbox.html" class="dropdown-item">Flexbox</a>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">BOOTSTRAP 4</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="../bootstrap-pages/index-bootstrap.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="../bootstrap-pages/container.html" class="dropdown-item">Containers</a>
                                <a target="_parent" href="../bootstrap-pages/grids.html" class="dropdown-item">Basic Grids</a>
                                <a target="_parent" href="../bootstrap-pages/formatacao-textos.html" class="dropdown-item">Formatação de Texto</a>
                                <a target="_parent" href="../bootstrap-pages/cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="../bootstrap-pages/tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="../bootstrap-pages/imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="../bootstrap-pages/jumbotron.html" class="dropdown-item">Jumbotron</a>
                                <a target="_parent" href="../bootstrap-pages/botoes.html" class="dropdown-item">Botões</a>
                                <a target="_parent" href="../bootstrap-pages/grupo-botoes.html" class="dropdown-item">Grupo de Botões</a>
                                <a target="_parent" href="../bootstrap-pages/dropdowns.html" class="dropdown-item">Dropdowns</a>
                                <a target="_parent" href="../bootstrap-pages/badges.html" class="dropdown-item">Badges</a>
                                <a target="_parent" href="../bootstrap-pages/barra-progresso.html" class="dropdown-item">Barra de Progresso</a>
                                <a target="_parent" href="../bootstrap-pages/spinners.html" class="dropdown-item">Spinners</a>
                                <a target="_parent" href="../bootstrap-pages/pagincacao.html" class="dropdown-item">Paginação</a>
                                <a target="_parent" href="../bootstrap-pages/cards.html" class="dropdown-item">Cards</a>
                                <a target="_parent" href="../bootstrap-pages/collapse.html" class="dropdown-item">Collapse</a>
                                <a target="_parent" href="../bootstrap-pages/formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="../bootstrap-pages/menus-navegacao.html" class="dropdown-item">Menus de Navegação</a>
                                <a target="_parent" href="../bootstrap-pages/barras-navegacao.html" class="dropdown-item">Barras de Navegação</a>
                                <a target="_parent" href="../bootstrap-pages/carrossel.html" class="dropdown-item">Carrossel</a>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
`
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
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">HTML5</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="../html-pages/introducao.html" target="_parent" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="../html-pages/comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href="../html-pages/cabecalhos.html" class="dropdown-item">Cabeçalhos</a>
                                <a target="_parent" href="../html-pages/paragrafos.html" class="dropdown-item">Parágrafos</a>
                                <a target="_parent" href="../html-pages/formatacao-textos.html" class="dropdown-item">Formatação de texto</a>
                                <a target="_parent" href="../html-pages/listas.html" class="dropdown-item">Listas</a>
                                <a target="_parent" href="../html-pages/caminhas-arquivos.html" class="dropdown-item">Caminhos de arquivos</a>
                                <a target="_parent" href="../html-pages/imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="../html-pages/links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="../html-pages/tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="../html-pages/citacoes.html" class="dropdown-item">Citações</a>
                                <a target="_parent" href="../html-pages/css-basico.html" class="dropdown-item">CSS básico</a>
                                <a target="_parent" href="../html-pages/elementos-block-inline.html" class="dropdown-item">Elementos Block e Inline</a>
                                <a target="_parent" href="../html-pages/classes.html" class="dropdown-item">Classes</a>
                                <a target="_parent" href="../html-pages/identificadores.html" class="dropdown-item">Identificadores</a>
                                <a target="_parent" href="../html-pages/html-em-html.html" class="dropdown-item">HTML em HTML</a>
                                <a target="_parent" href="../html-pages/media.html" class="dropdown-item">Mídias</a>
                                <a target="_parent" href="../html-pages/head.html" class="dropdown-item">head</a>
                                <a target="_parent" href="../html-pages/caracteres-especiais.html" class="dropdown-item">Caracteres Especiais</a>
                                <a target="_parent" href="../html-pages/semantica.html" class="dropdown-item">Semântica</a>
                                <a target="_parent" href="../html-pages/boas-praticas.html" class="dropdown-item">Boas                                    práticas</a>
                                <a target="_parent" href="../html-pages/formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="../html-pages/lista-tags-html.html" class="dropdown-item">LISTA DE TAGS HTML</a>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">CSS3</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="introducao.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href="unidades-medidas.html" class="dropdown-item">Unidades de medida</a>
                                <a target="_parent" href="seletores-simples.html" class="dropdown-item">Seletores simples</a>
                                <a target="_parent" href="formas-estilos.html" class="dropdown-item">Formas de estilos</a>
                                <a target="_parent" href="cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="background.html" class="dropdown-item">Background</a>
                                <a target="_parent" href="modelo-caixa.html" class="dropdown-item">Modelo de Caixa</a>
                                <a target="_parent" href="border.html" class="dropdown-item">Border</a>
                                <a target="_parent" href="margins.html" class="dropdown-item">Margins</a>
                                <a target="_parent" href="padding.html" class="dropdown-item">Padding</a>
                                <a target="_parent" href="height-width.html" class="dropdown-item">Height and Width</a>
                                <a target="_parent" href="outline.html" class="dropdown-item">Outline</a>
                                <a target="_parent" href="box-sizing.html" class="dropdown-item">Box-sizing</a>
                                <a target="_parent" href="textos.html" class="dropdown-item">Textos</a>
                                <a target="_parent" href="fontes.html" class="dropdown-item">Fontes</a>
                                <a target="_parent" href="icones.html" class="dropdown-item">Ícones</a>
                                <a target="_parent" href="seletores-pseudo-classes.html" class="dropdown-item">Seletores de pseudo-classes</a>
                                <a target="_parent" href="links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="seletores-combinados.html" class="dropdown-item">Seletores de Combinação</a>
                                <a target="_parent" href="listas.html" class="dropdown-item">List-style</a>
                                <a target="_parent" href="tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="seletores-pseudo-elementos.html" class="dropdown-item">Seletores de pseudo-elementos</a>
                                <a target="_parent" href="opacidade.html" class="dropdown-item">Opacidade</a>
                                <a target="_parent" href="gradiente.html" class="dropdown-item">Gradientes</a>
                                <a target="_parent" href="seletores-atributos.html" class="dropdown-item">Seletores de Atributos</a>
                                <a target="_parent" href="formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="especificidade.html" class="dropdown-item">Especificidade</a>
                                <a target="_parent" href="display.html" class="dropdown-item">Layout - Display</a>
                                <a target="_parent" href="max-width.html" class="dropdown-item">Layout - Max-width</a>
                                <a target="_parent" href="position.html" class="dropdown-item">Layout - Position</a>
                                <a target="_parent" href="overflow.html" class="dropdown-item">Layout - Overflow</a>
                                <a target="_parent" href="float.html" class="dropdown-item">Layout- Float and Clear</a>
                                <a target="_parent" href="pratica-menu-horizontal.html" class="dropdown-item">Prática - menu horizontal</a>
                                <a target="_parent" href="transicoes.html" class="dropdown-item">Transições</a>
                                <a target="_parent" href="cursores.html" class="dropdown-item">Cursores</a>
                                <a target="_parent" href="colunas.html" class="dropdown-item">Múltiplas colunas</a>
                                <a target="_parent" href="media-queries.html" class="dropdown-item">Media Queries </a>
                                <a target="_parent" href="Flexbox.html" class="dropdown-item">Flexbox</a>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">BOOTSTRAP 4</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="../bootstrap-pages/index-bootstrap.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="../bootstrap-pages/container.html" class="dropdown-item">Containers</a>
                                <a target="_parent" href="../bootstrap-pages/grids.html" class="dropdown-item">Basic Grids</a>
                                <a target="_parent" href="../bootstrap-pages/formatacao-textos.html" class="dropdown-item">Formatação de Texto</a>
                                <a target="_parent" href="../bootstrap-pages/cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="../bootstrap-pages/tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="../bootstrap-pages/imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="../bootstrap-pages/jumbotron.html" class="dropdown-item">Jumbotron</a>
                                <a target="_parent" href="../bootstrap-pages/botoes.html" class="dropdown-item">Botões</a>
                                <a target="_parent" href="../bootstrap-pages/grupo-botoes.html" class="dropdown-item">Grupo de Botões</a>
                                <a target="_parent" href="../bootstrap-pages/dropdowns.html" class="dropdown-item">Dropdowns</a>
                                <a target="_parent" href="../bootstrap-pages/badges.html" class="dropdown-item">Badges</a>
                                <a target="_parent" href="../bootstrap-pages/barra-progresso.html" class="dropdown-item">Barra de Progresso</a>
                                <a target="_parent" href="../bootstrap-pages/spinners.html" class="dropdown-item">Spinners</a>
                                <a target="_parent" href="../bootstrap-pages/pagincacao.html" class="dropdown-item">Paginação</a>
                                <a target="_parent" href="../bootstrap-pages/cards.html" class="dropdown-item">Cards</a>
                                <a target="_parent" href="../bootstrap-pages/collapse.html" class="dropdown-item">Collapse</a>
                                <a target="_parent" href="../bootstrap-pages/formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="../bootstrap-pages/menus-navegacao.html" class="dropdown-item">Menus de Navegação</a>
                                <a target="_parent" href="../bootstrap-pages/barras-navegacao.html" class="dropdown-item">Barras de Navegação</a>
                                <a target="_parent" href="../bootstrap-pages/carrossel.html" class="dropdown-item">Carrossel</a>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
`
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
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">HTML5</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="../html-pages/introducao.html" target="_parent" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="../html-pages/comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href="../html-pages/cabecalhos.html" class="dropdown-item">Cabeçalhos</a>
                                <a target="_parent" href="../html-pages/paragrafos.html" class="dropdown-item">Parágrafos</a>
                                <a target="_parent" href="../html-pages/formatacao-textos.html" class="dropdown-item">Formatação de texto</a>
                                <a target="_parent" href="../html-pages/listas.html" class="dropdown-item">Listas</a>
                                <a target="_parent" href="../html-pages/caminhas-arquivos.html" class="dropdown-item">Caminhos de arquivos</a>
                                <a target="_parent" href="../html-pages/imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="../html-pages/links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="../html-pages/tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="../html-pages/citacoes.html" class="dropdown-item">Citações</a>
                                <a target="_parent" href="../html-pages/css-basico.html" class="dropdown-item">CSS básico</a>
                                <a target="_parent" href="../html-pages/elementos-block-inline.html" class="dropdown-item">Elementos Block e Inline</a>
                                <a target="_parent" href="../html-pages/classes.html" class="dropdown-item">Classes</a>
                                <a target="_parent" href="../html-pages/identificadores.html" class="dropdown-item">Identificadores</a>
                                <a target="_parent" href="../html-pages/html-em-html.html" class="dropdown-item">HTML em HTML</a>
                                <a target="_parent" href="../html-pages/media.html" class="dropdown-item">Mídias</a>
                                <a target="_parent" href="../html-pages/head.html" class="dropdown-item">head</a>
                                <a target="_parent" href="../html-pages/caracteres-especiais.html" class="dropdown-item">Caracteres Especiais</a>
                                <a target="_parent" href="../html-pages/semantica.html" class="dropdown-item">Semântica</a>
                                <a target="_parent" href="../html-pages/boas-praticas.html" class="dropdown-item">Boas                                    práticas</a>
                                <a target="_parent" href="../html-pages/formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="../html-pages/lista-tags-html.html" class="dropdown-item">LISTA DE TAGS HTML</a>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">CSS3</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="../css-pages/introducao.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="../css-pages/comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href="../css-pages/unidades-medidas.html" class="dropdown-item">Unidades de medida</a>
                                <a target="_parent" href="../css-pages/seletores-simples.html" class="dropdown-item">Seletores simples</a>
                                <a target="_parent" href="../css-pages/formas-estilos.html" class="dropdown-item">Formas de estilos</a>
                                <a target="_parent" href="../css-pages/cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="../css-pages/background.html" class="dropdown-item">Background</a>
                                <a target="_parent" href="../css-pages/modelo-caixa.html" class="dropdown-item">Modelo de Caixa</a>
                                <a target="_parent" href="../css-pages/border.html" class="dropdown-item">Border</a>
                                <a target="_parent" href="../css-pages/margins.html" class="dropdown-item">Margins</a>
                                <a target="_parent" href="../css-pages/padding.html" class="dropdown-item">Padding</a>
                                <a target="_parent" href="../css-pages/height-width.html" class="dropdown-item">Height and Width</a>
                                <a target="_parent" href="../css-pages/outline.html" class="dropdown-item">Outline</a>
                                <a target="_parent" href="../css-pages/box-sizing.html" class="dropdown-item">Box-sizing</a>
                                <a target="_parent" href="../css-pages/textos.html" class="dropdown-item">Textos</a>
                                <a target="_parent" href="../css-pages/fontes.html" class="dropdown-item">Fontes</a>
                                <a target="_parent" href="../css-pages/icones.html" class="dropdown-item">Ícones</a>
                                <a target="_parent" href="../css-pages/seletores-pseudo-classes.html" class="dropdown-item">Seletores de pseudo-classes</a>
                                <a target="_parent" href="../css-pages/links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="../css-pages/seletores-combinados.html" class="dropdown-item">Seletores de Combinação</a>
                                <a target="_parent" href="../css-pages/listas.html" class="dropdown-item">List-style</a>
                                <a target="_parent" href="../css-pages/tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="../css-pages/seletores-pseudo-elementos.html" class="dropdown-item">Seletores de pseudo-elementos</a>
                                <a target="_parent" href="../css-pages/opacidade.html" class="dropdown-item">Opacidade</a>
                                <a target="_parent" href="../css-pages/gradiente.html" class="dropdown-item">Gradientes</a>
                                <a target="_parent" href="../css-pages/seletores-atributos.html" class="dropdown-item">Seletores de Atributos</a>
                                <a target="_parent" href="../css-pages/formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="../css-pages/especificidade.html" class="dropdown-item">Especificidade</a>
                                <a target="_parent" href="../css-pages/display.html" class="dropdown-item">Layout - Display</a>
                                <a target="_parent" href="../css-pages/max-width.html" class="dropdown-item">Layout - Max-width</a>
                                <a target="_parent" href="../css-pages/position.html" class="dropdown-item">Layout - Position</a>
                                <a target="_parent" href="../css-pages/overflow.html" class="dropdown-item">Layout - Overflow</a>
                                <a target="_parent" href="../css-pages/float.html" class="dropdown-item">Layout- Float and Clear</a>
                                <a target="_parent" href="../css-pages/pratica-menu-horizontal.html" class="dropdown-item">Prática - menu horizontal</a>
                                <a target="_parent" href="../css-pages/transicoes.html" class="dropdown-item">Transições</a>
                                <a target="_parent" href="../css-pages/cursores.html" class="dropdown-item">Cursores</a>
                                <a target="_parent" href="../css-pages/colunas.html" class="dropdown-item">Múltiplas colunas</a>
                                <a target="_parent" href="../css-pages/media-queries.html" class="dropdown-item">Media Queries </a>
                                <a target="_parent" href="../css-pages/Flexbox.html" class="dropdown-item">Flexbox</a>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">BOOTSTRAP 4</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="index-bootstrap.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="container.html" class="dropdown-item">Containers</a>
                                <a target="_parent" href="grids.html" class="dropdown-item">Basic Grids</a>
                                <a target="_parent" href="formatacao-textos.html" class="dropdown-item">Formatação de Texto</a>
                                <a target="_parent" href="cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="jumbotron.html" class="dropdown-item">Jumbotron</a>
                                <a target="_parent" href="botoes.html" class="dropdown-item">Botões</a>
                                <a target="_parent" href="grupo-botoes.html" class="dropdown-item">Grupo de Botões</a>
                                <a target="_parent" href="dropdowns.html" class="dropdown-item">Dropdowns</a>
                                <a target="_parent" href="badges.html" class="dropdown-item">Badges</a>
                                <a target="_parent" href="barra-progresso.html" class="dropdown-item">Barra de Progresso</a>
                                <a target="_parent" href="spinners.html" class="dropdown-item">Spinners</a>
                                <a target="_parent" href="pagincacao.html" class="dropdown-item">Paginação</a>
                                <a target="_parent" href="cards.html" class="dropdown-item">Cards</a>
                                <a target="_parent" href="collapse.html" class="dropdown-item">Collapse</a>
                                <a target="_parent" href="formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="menus-navegacao.html" class="dropdown-item">Menus de Navegação</a>
                                <a target="_parent" href="barras-navegacao.html" class="dropdown-item">Barras de Navegação</a>
                                <a target="_parent" href="carrossel.html" class="dropdown-item">Carrossel</a>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
`
    var idMenu = document.getElementById("menu");
    idMenu.innerHTML = navbar;
}
function criarMenuPrincipal() {
    var navbar = ` <nav class="navbar navbar-expand-lg navbar-dark text-white bg-darkviolet">
            <a class="navbar-brand" href="index.html">PumP</a>
            <button class="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">HTML5</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="html-pages/introducao.html" target="_parent" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="html-pages/comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href="html-pages/cabecalhos.html" class="dropdown-item">Cabeçalhos</a>
                                <a target="_parent" href="html-pages/paragrafos.html" class="dropdown-item">Parágrafos</a>
                                <a target="_parent" href="html-pages/formatacao-textos.html" class="dropdown-item">Formatação de texto</a>
                                <a target="_parent" href="html-pages/listas.html" class="dropdown-item">Listas</a>
                                <a target="_parent" href="html-pages/caminhas-arquivos.html" class="dropdown-item">Caminhos de arquivos</a>
                                <a target="_parent" href="html-pages/imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="html-pages/links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="html-pages/tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="html-pages/citacoes.html" class="dropdown-item">Citações</a>
                                <a target="_parent" href="html-pages/css-basico.html" class="dropdown-item">CSS básico</a>
                                <a target="_parent" href="html-pages/elementos-block-inline.html" class="dropdown-item">Elementos Block e Inline</a>
                                <a target="_parent" href="html-pages/classes.html" class="dropdown-item">Classes</a>
                                <a target="_parent" href="html-pages/identificadores.html" class="dropdown-item">Identificadores</a>
                                <a target="_parent" href="html-pages/html-em-html.html" class="dropdown-item">HTML em HTML</a>
                                <a target="_parent" href="html-pages/media.html" class="dropdown-item">Mídias</a>
                                <a target="_parent" href="html-pages/head.html" class="dropdown-item">head</a>
                                <a target="_parent" href="html-pages/caracteres-especiais.html" class="dropdown-item">Caracteres Especiais</a>
                                <a target="_parent" href="html-pages/semantica.html" class="dropdown-item">Semântica</a>
                                <a target="_parent" href="html-pages/boas-praticas.html" class="dropdown-item">Boas                                    práticas</a>
                                <a target="_parent" href="html-pages/formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="html-pages/lista-tags-html.html" class="dropdown-item">LISTA DE TAGS HTML</a>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">CSS3</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="css-pages/introducao.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="css-pages/comentarios.html" class="dropdown-item">Comentários</a>
                                <a target="_parent" href="css-pages/unidades-medidas.html" class="dropdown-item">Unidades de medida</a>
                                <a target="_parent" href="css-pages/seletores-simples.html" class="dropdown-item">Seletores simples</a>
                                <a target="_parent" href="css-pages/formas-estilos.html" class="dropdown-item">Formas de estilos</a>
                                <a target="_parent" href="css-pages/cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="css-pages/background.html" class="dropdown-item">Background</a>
                                <a target="_parent" href="css-pages/modelo-caixa.html" class="dropdown-item">Modelo de Caixa</a>
                                <a target="_parent" href="css-pages/border.html" class="dropdown-item">Border</a>
                                <a target="_parent" href="css-pages/margins.html" class="dropdown-item">Margins</a>
                                <a target="_parent" href="css-pages/padding.html" class="dropdown-item">Padding</a>
                                <a target="_parent" href="css-pages/height-width.html" class="dropdown-item">Height and Width</a>
                                <a target="_parent" href="css-pages/outline.html" class="dropdown-item">Outline</a>
                                <a target="_parent" href="css-pages/box-sizing.html" class="dropdown-item">Box-sizing</a>
                                <a target="_parent" href="css-pages/textos.html" class="dropdown-item">Textos</a>
                                <a target="_parent" href="css-pages/fontes.html" class="dropdown-item">Fontes</a>
                                <a target="_parent" href="css-pages/icones.html" class="dropdown-item">Ícones</a>
                                <a target="_parent" href="css-pages/seletores-pseudo-classes.html" class="dropdown-item">Seletores de pseudo-classes</a>
                                <a target="_parent" href="css-pages/links.html" class="dropdown-item">Links</a>
                                <a target="_parent" href="css-pages/seletores-combinados.html" class="dropdown-item">Seletores de Combinação</a>
                                <a target="_parent" href="css-pages/listas.html" class="dropdown-item">List-style</a>
                                <a target="_parent" href="css-pages/tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="css-pages/seletores-pseudo-elementos.html" class="dropdown-item">Seletores de pseudo-elementos</a>
                                <a target="_parent" href="css-pages/opacidade.html" class="dropdown-item">Opacidade</a>
                                <a target="_parent" href="css-pages/gradiente.html" class="dropdown-item">Gradientes</a>
                                <a target="_parent" href="css-pages/seletores-atributos.html" class="dropdown-item">Seletores de Atributos</a>
                                <a target="_parent" href="css-pages/formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="css-pages/especificidade.html" class="dropdown-item">Especificidade</a>
                                <a target="_parent" href="css-pages/display.html" class="dropdown-item">Layout - Display</a>
                                <a target="_parent" href="css-pages/max-width.html" class="dropdown-item">Layout - Max-width</a>
                                <a target="_parent" href="css-pages/position.html" class="dropdown-item">Layout - Position</a>
                                <a target="_parent" href="css-pages/overflow.html" class="dropdown-item">Layout - Overflow</a>
                                <a target="_parent" href="css-pages/float.html" class="dropdown-item">Layout- Float and Clear</a>
                                <a target="_parent" href="css-pages/pratica-menu-horizontal.html" class="dropdown-item">Prática - menu horizontal</a>
                                <a target="_parent" href="css-pages/transicoes.html" class="dropdown-item">Transições</a>
                                <a target="_parent" href="css-pages/cursores.html" class="dropdown-item">Cursores</a>
                                <a target="_parent" href="css-pages/colunas.html" class="dropdown-item">Múltiplas colunas</a>
                                <a target="_parent" href="css-pages/media-queries.html" class="dropdown-item">Media Queries </a>
                                <a target="_parent" href="css-pages/Flexbox.html" class="dropdown-item">Flexbox</a>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">BOOTSTRAP 4</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <ul class="overflow-auto m-0 p-0" style="height: 300px">
                                <a target="_parent" href="bootstrap-pages/index-bootstrap.html" class="dropdown-item">Introdução</a>
                                <a target="_parent" href="bootstrap-pages/container.html" class="dropdown-item">Containers</a>
                                <a target="_parent" href="bootstrap-pages/grids.html" class="dropdown-item">Basic Grids</a>
                                <a target="_parent" href="bootstrap-pages/formatacao-textos.html" class="dropdown-item">Formatação de Texto</a>
                                <a target="_parent" href="bootstrap-pages/cores.html" class="dropdown-item">Cores</a>
                                <a target="_parent" href="bootstrap-pages/tabelas.html" class="dropdown-item">Tabelas</a>
                                <a target="_parent" href="bootstrap-pages/imagens.html" class="dropdown-item">Imagens</a>
                                <a target="_parent" href="bootstrap-pages/jumbotron.html" class="dropdown-item">Jumbotron</a>
                                <a target="_parent" href="bootstrap-pages/botoes.html" class="dropdown-item">Botões</a>
                                <a target="_parent" href="bootstrap-pages/grupo-botoes.html" class="dropdown-item">Grupo de Botões</a>
                                <a target="_parent" href="bootstrap-pages/dropdowns.html" class="dropdown-item">Dropdowns</a>
                                <a target="_parent" href="bootstrap-pages/badges.html" class="dropdown-item">Badges</a>
                                <a target="_parent" href="bootstrap-pages/barra-progresso.html" class="dropdown-item">Barra de Progresso</a>
                                <a target="_parent" href="bootstrap-pages/spinners.html" class="dropdown-item">Spinners</a>
                                <a target="_parent" href="bootstrap-pages/pagincacao.html" class="dropdown-item">Paginação</a>
                                <a target="_parent" href="bootstrap-pages/cards.html" class="dropdown-item">Cards</a>
                                <a target="_parent" href="bootstrap-pages/collapse.html" class="dropdown-item">Collapse</a>
                                <a target="_parent" href="bootstrap-pages/formularios.html" class="dropdown-item">Formulários</a>
                                <a target="_parent" href="bootstrap-pages/menus-navegacao.html" class="dropdown-item">Menus de Navegação</a>
                                <a target="_parent" href="bootstrap-pages/barras-navegacao.html" class="dropdown-item">Barras de Navegação</a>
                                <a target="_parent" href="bootstrap-pages/carrossel.html" class="dropdown-item">Carrossel</a>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>`

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
