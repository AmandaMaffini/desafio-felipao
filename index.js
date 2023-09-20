let NomeDaHeroina = "Amanda"
let XpDaHeroina = 1000;
let PatenteDaHeroina;


switch (true) {
    case  XpDaHeroina >= 0 && XpDaHeroina <= 1000:
        PatenteDaHeroina = "Ferro";
        break;
    case XpDaHeroina >= 1001 && XpDaHeroina <= 2000:
        PatenteDaHeroina = "Bronze"; 
                break;
    case XpDaHeroina >= 2001 && XpDaHeroina <= 5000:
        PatenteDaHeroina = "Prata";
        break;
    case XpDaHeroina >= 5001 && XpDaHeroina <= 7000:
        PatenteDaHeroina = "Ouro";
        break;
    case XpDaHeroina >= 7001 && XpDaHeroina <= 8000:
        PatenteDaHeroina = "Platina";
        break;
    case XpDaHeroina >= 8001 && XpDaHeroina <= 9000:
        PatenteDaHeroina = "Ascendente";
        break;
    case XpDaHeroina >= 9001 && XpDaHeroina <= 10000:
        PatenteDaHeroina = "Imortal";
        break;
    case XpDaHeroina > 10001:
        PatenteDaHeroina = "Radiante";
        break;
    default:
        PatenteDaHeroina = "Desconhecido";
}

console.log ("A Heróina de nome ${NomeDaHeroina} está no nível de ${PatenteDaHeroina}!");

