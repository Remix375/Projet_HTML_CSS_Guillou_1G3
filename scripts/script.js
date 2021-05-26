let catInterval = ''


const change_cat_image = () => {
    const randomNum1 = Math.floor(Math.random() * 10000000);
    const imageHolder = document.getElementById("cat-image");

    const link = `https://thiscatdoesnotexist.com/?${randomNum1}`;

    imageHolder.src = link;
}



const changeInterets = (nouvel_interet) => {
    interets = nouvel_interet;

    if(catInterval) {
        clearInterval(catInterval)
    }


    const affichageInterets = document.getElementById("aff-interets");

    //reinitialise le code dans l'endroit ou afficher
    affichageInterets.innerHTML = "";

    switch(interets) {
        case "animal":
            affichageInterets.innerHTML = `
                <div>
                    <img src="https://thiscatdoesnotexist.com/" id="cat-image">
                    <p>J'aime bien les animaux, le chat est mon animal prefere.<br>J'ai deux chats chez moi: Harry et Blue</p>    
                    <p id="info-interet">Le Chat domestique (Felis silvestris catus) est la sous-espèce issue de la domestication du Chat sauvage (Felis silvestris), mammifère carnivore de la famille des Félidés.

                    Il est l’un des principaux animaux de compagnie et compte aujourd’hui une cinquantaine de races différentes reconnues par les instances de certification. Dans de très nombreux pays, le chat entre dans le cadre de la législation sur les carnivores domestiques à l’instar du chien et du furet. Essentiellement territorial, le chat est un prédateur de petites proies comme les rongeurs ou les oiseaux. Les chats ont diverses vocalisations dont les ronronnements, les miaulements, les feulements ou les grognements, bien qu’ils communiquent principalement par des positions faciales et corporelles et des phéromones.</p>                            
                </div>`
                catInterval = setInterval(change_cat_image, 1000)
            break;
        case "jv":
            affichageInterets.innerHTML = `
                <div>
                    <img src="https://static.wikia.nocookie.net/wikidoublage/images/a/ac/Portal_2.jpg/revision/latest?cb=20190720153256&path-prefix=fr">
                    <p>Mon jeu video prefere en ce moment est portal 2</p>
                    <p id="info-interet">Portal 2 est un jeu vidéo de plates-formes et de réflexion en vue subjective développé et édité par Valve. Le jeu paraît sur Windows, OS X, PlayStation 3 et Xbox 360 le 19 avril 2011 en Amérique du Nord, et le surlendemain pour le reste du monde. La version pour Linux a été mise en bêta-test le 25 février 20143. La version du jeu sur disque optique est distribuée par Electronic Arts, tandis que la distribution en ligne pour Windows et OS X est gérée par le service de diffusion de contenu de Valve, Steam. Portal 2 est annoncé le 5 mars 2010 à la suite d'un jeu en réalité alternée d'une semaine basé sur les nouveaux correctifs apportés au jeu original. Avant la sortie du jeu sur Steam, l'entreprise met en vente un deuxième jeu en réalité alternée, Potato Sack, portant sur treize titres développés indépendamment, qui aboutit à une parodie de calcul distribué permettant de télécharger Portal 2 dix heures avant sa sortie.</p>
                </div>`
            break;
        case "livres":
            affichageInterets.innerHTML = `
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/81BDOUL7VnL.jpg">
                    <p>J'adore lire, surtout des romans de science fiction ou d'aventure.<br>En ce moment j'en suis a la premiere partie du tome 3 des "Stormlight Archive"</p>
                    <p id='info-interet'>Les Archives de Roshar (titre original : The Stormlight Archive) est un cycle de fantasy écrit par Brandon Sanderson. La série s’intègre dans l’univers étendu du Cosmère.</p>
                </div>`
            break;
        case "prog":
            affichageInterets.innerHTML = `
                <div>
                    <img src="https://blog.lesjeudis.com/wp-content/uploads/2019/10/java-le-langage-de-programmation-pour-les-debutants.jpg">
                    <p>J'aime bien programmer<br>Python, JavaScript, C#, SQL<br>Et aussi HTML et css</p>
                    <p>Je connais aussi les Framework Express.js et React.js dans l'environnement NODE pour la creation d'application web</p>
                </div>`
        
    }




}


///changeInterets(1)






/*
const changeImage = () => {
    const imageHolder = document.getElementById("header");

    const randomNum1 = Math.floor(Math.random() * 10000000);

    const link = `https://thiscatdoesnotexist.com/?${randomNum1}`;

    console.log(link)
    imageHolder.style.backgroundImage = `url('${link}')`;
}

setInterval(changeImage, 1500)*/