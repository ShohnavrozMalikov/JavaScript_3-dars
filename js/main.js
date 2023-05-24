/* Functions in JS */
/*function savatchaniTekshir(uzatilganContainer=[78,"text",true]){

    if (uzatilganContainer.length == 0){
        document.write("Savatchamiz ichida " + uzatilganContainer.length + " ta ma'lumot bor!");
    }
    else{
        document.write("Savatchamiz ichida " + uzatilganContainer.length + " dona ma'lumot bor!")
    }

}
let container = [12,"javascript"];
savatchaniTekshir();*/

/* Date in JS */

let sana = new Date();

sana.setFullYear(2006);
sana.setMonth(2)
sana.setDate(21)
sana.setHours(4)
let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftaKuni = sana.getDay(3);
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust",
            "sentyabr","oktyabr","noyabr","dekabr"];
let kunlar = ["yakshanba","dushanba","seshanba","chorshanba","payshanba",
            "juma","shanba"];

document.write( yil+ "-yil " + kun + "-" + oylar[oy] + " - haftaning " + kunlar[haftaKuni] + " kuni tug'ulgan ekanman");








