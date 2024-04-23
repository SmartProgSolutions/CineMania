class Language{
    constructor(document){
        this.document = document;
        // this.btnPortugues = this.document.querySelector('#btnPortugues');
        // this.btnEnglish = this.document.querySelector('#btnIngles');
        this.eventLanguage();
    }

    eventLanguage(){
        this.document.addEventListener('click', e => {
            const btnPortugues = this.document.querySelector('#btnPortugues');
            const btnEnglish = this.document.querySelector('#btnIngles');
            
            if(e.target === btnPortugues){
                localStorage.setItem('language', 'pt-BR');
                location.reload();
            }

            if(e.target === btnEnglish){
                localStorage.setItem('language', 'en-US');
                location.reload();
            }
        });
    }
}

const language = new Language(document);