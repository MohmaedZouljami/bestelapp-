import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let prijs = await menu(); //ik haal mijn prijs en defineer die uit mijn functie
async function menu() { 
let prijs = 0
let bestelling 

    

//menu kiezen 
do{
bestelling =  await userInput.question('kies tussen: friet (3€) hamburger (5€) frikandel (4€) type 4 als u wilt stoppen')
switch(bestelling){
    case 'friet':
        prijs += 6;
        break;
    case 'hamburger':
        prijs += 5;
        break;
    case 'frikandel':
        prijs += 4;
        break;
}
console.log('uw som zit momenteel aan:' + prijs + 'euro. ')
}while (!(bestelling =='4'))

//kies u sauce
let sauce = await userInput.question('wilt u en extra sauce bij? die maar 0.90€ cost ')

if (sauce =='ja'){      //als hij ja zeg voor het saus dan heft hij kans voor en gratice saus te krijgen 
    let kans = Math.random();
    if(kans < 0.2){
        console.log('je heb geluk, je krijgt en gratis saus bij ')
        console.log('uw prijs na de saus is:' + prijs + ' euro ')
        return prijs
    
    }else{                  //als de kans groter is dan 0.2 dan... 
        console.log('sorry, maar je krijgt geen gratis saus deze keer. 0.90€ word toegevoegd ')
        prijs += 0.90;
        console.log(' uw prijs na de saus is: ' + prijs + ' euro ')
        return prijs

    }

}else if (sauce == 'nee'){
    console.log('u totale prijs zonder saus is: ' + prijs + ' euro ' )
    return prijs 
}
}

let kortingBon = await userInput.question('heeft u een kortingbon? (ja/nee) ')

function berekenKorting(prijs, kortingBon){
    let nieuwePrijs
        if(kortingBon == 'ja'){
            let korting = prijs * 0.10 
            nieuwePrijs = prijs - korting
        }else if (kortingBon == 'nee'){
            nieuwePrijs = prijs 
        }
        return nieuwePrijs 
    }

    let totaal = berekenKorting(prijs, kortingBon)
    console.log('totale prijs na korting: ' + totaal + 'euro. ')

    process.exit();


