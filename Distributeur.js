class Jour{
    constructor(nbRepas, quantiteTotaleMange)
}

class profilAnimal
{
    constructor(idAnimal, nom, nbRepasMax, doseMax, journee){
        this.idAnimal = idAnimal;
        this.nom = nom;
        this.nbRepasMax = nbRepasMax;
        this.doseMax = doseMax;
        this.journal = new Array();
        this.journal.push(journee);
    }
}

var wow = new Jour(3,1200);

var chienMax = new profilAnimal(1,'Max',3,1200,wow);

chienMax.journal.push(wow);

document.write(chienMax).journal;
