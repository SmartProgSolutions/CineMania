// Colocando navbar via js

class Navbar{
    constructor(document){
        this.document = document;
        this.window = window;
        this.ul = document.querySelector('#navbar');
        this.eventContent();
        this.eventSubmit();
    }

    eventContent(){ // Método para tratar do evento DOMContentLoaded
        this.document.addEventListener('DOMContentLoaded', () => {
            const cinemania = this.createLink('../../home/home.html', 'active', 'CineMania');
            const lancamentos = this.createLink('../../lancamentos/html/lancamentos.html', null, 'Lançamentos');
            const categorias = this.createLink('../../moviesForCategories/catg.html', null, 'Categorias');
            const search = this.createLink(null, null, null, 'buscador');
            const entrar = this.createLink('../../loginAndRegister/index.html', null, 'Entrar');
            const registrar = this.createLink('../../loginAndRegister/index.html', null, 'Registrar-se');
            const discover = this.createLink('../../filterMidias/filtro.html', null, 'Discover');
            const contato = this.createLink('../../contact/index.html', null, 'Contato');


            this.ul.appendChild(cinemania);
            this.ul.appendChild(lancamentos);
            this.ul.appendChild(categorias);
            this.ul.appendChild(discover);
            this.ul.appendChild(contato);
            this.ul.appendChild(search);
            this.ul.appendChild(entrar);
            this.ul.appendChild(registrar);

        })
    }

    eventSubmit(){ // Método para tratar do evento submit.
        this.document.addEventListener('submit', (e) => {
            // Quando o formulário for enviado será enviado um objeto com chave o genero e o valor o id
            e.preventDefault();

            if(e.target.id === 'formBuscador'){
                const dados = e.target.querySelector('#search').value;
                this.window.location.href = "../../results/search.html?dados=" + encodeURIComponent(dados);

                return;
            }
        });
    }

    createLink(href, classe, content, id = null){
        const li = this.document.createElement('li');

        if(id){
            li.setAttribute('id', id);

            const formBuscador = this.createForm('search.html', 'get', 'formBuscador');
            const label = this.createLabel('Search: ', 'search');
            const buscador = this.createInput('search');
            const button = this.createButton('submit', 'botaoPesquisa');

            label.appendChild(buscador);

            formBuscador.appendChild(label);
            formBuscador.appendChild(button);

            li.appendChild(formBuscador);

            return li;
        }

        const a = this.document.createElement('a');

        if(classe){
            a.classList.add(`${classe}`);
        }

        a.setAttribute('href', `${href}`);
        a.textContent = `${content}`;

        li.appendChild(a);

        return li;

    }

    createLabel(content, idDoInput){ // Método para criar o elemento label.
        const label = this.document.createElement('label');

        label.htmlFor = `${idDoInput}`;
        label.textContent = `${content}`;

        return label;
    }

    createInput(id){ // Método para criar o elemento input.
        const input = this.document.createElement('input');

        input.id = `${id}`;
        input.type = 'text';
        input.name = 'dados';

        return input;
    }

    createButton(type, id, classe, content = null){ // Método para criar o elemento button.
        const button = this.document.createElement('button');
        button.type = `${type}`;

        if(id){
            button.id = `${id}`;
        }

        if(content){
            button.textContent = content;
        }

        if(classe){
            button.classList.add(`${classe}`);
        }

        return button;
    }

    createForm(action, method, id){
        const form = this.document.createElement('form');

        form.setAttribute('action', action);
        form.setAttribute('method', method);
        form.setAttribute('id', id);

        return form;
    }
}

const navbar = new Navbar(document, window);





// const cinemania = this.createLink('../../../home/home.html', 'active', 'CineMania');
// const lancamentos = this.createLink('#lancamentos', null, 'Lançamentos');
// const categorias = this.createLink('../../moviesForCategories/catg.html', null, 'Categorias');
// const search = this.createLink(null, null, null, 'buscador');
// const entrar = this.createLink('../../loginAndRegister/index.html', null, 'Entrar');
// const registrar = this.createLink('../../loginAndRegister/index.html', null, 'Registrar-se');