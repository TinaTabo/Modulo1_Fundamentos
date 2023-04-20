//-- Nueva clase
class Contacts{
    //-- Constructor
    constructor(){
        //-- Inicializar array
        this.arrPersons = [];
    }

    //-- Metodos
    printPersons(){
        this.arrPersons.forEach(element => {
            console.log(`---------------------`);
            element.printAll();
        });
    }
}

//-- Exportar clase
module.exports = {Contacts};