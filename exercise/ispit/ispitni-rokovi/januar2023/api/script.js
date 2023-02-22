 async function getFlags() {
     let result = await fetch("https://restcountries.com/v3.1/all");
     let data = await result.json();
     img1.src = data[212].flags.png;
     img2.src = data[0].flags.png;
     img3.src = data[91].flags.png;
     img4.src = data[29].flags.png;
     img5.src = data[99].flags.png;
     img6.src = data[159].flags.png;

     kliknutaSlika1.src = data[212].flags.png;
     kliknutaSlika2.src = data[0].flags.png;
     kliknutaSlika3.src = data[91].flags.png;
     kliknutaSlika4.src = data[29].flags.png;
     kliknutaSlika5.src = data[99].flags.png;
     kliknutaSlika6.src = data[159].flags.png;



     console.log(data);
     img1.addEventListener("click", () => {
         flag.appendChild(kliknutaSlika1);
         img1.style.border = "1px dotted black";
         city.innerHTML = "Glavni grad je " + data[212].capital;
         country.innerHTML = "Kliknuli ste na " + data[212].altSpellings[1];

         kliknutaSlika2.remove();
         kliknutaSlika3.remove();
         kliknutaSlika4.remove();
         kliknutaSlika5.remove();
         kliknutaSlika6.remove();
     });

     img2.addEventListener("click", () => {
         flag.appendChild(kliknutaSlika2);
         img2.style.border = "1px dotted black";
         city.innerHTML = "Glavni grad je " + data[0].capital;
         country.innerHTML = "Kliknuli ste na " + data[0].altSpellings[1];
         kliknutaSlika1.remove();

         kliknutaSlika3.remove();
         kliknutaSlika4.remove();
         kliknutaSlika5.remove();
         kliknutaSlika6.remove();
     });

     img3.addEventListener("click", () => {
         flag.appendChild(kliknutaSlika3);
         img3.style.border = "1px dotted black";
         city.innerHTML = "Glavni grad je " + data[91].capital;
         country.innerHTML = "Kliknuli ste na " + data[91].altSpellings[1];
         kliknutaSlika1.remove();
         kliknutaSlika2.remove();

         kliknutaSlika4.remove();
         kliknutaSlika5.remove();
         kliknutaSlika6.remove();
     });

     img4.addEventListener("click", () => {
         flag.appendChild(kliknutaSlika4);
         img4.style.border = "1px dotted black";
         city.innerHTML = "Glavni grad je " + data[29].capital;
         country.innerHTML = "Kliknuli ste na " + data[29].altSpellings[1];
         kliknutaSlika1.remove();
         kliknutaSlika2.remove();
         kliknutaSlika3.remove();

         kliknutaSlika5.remove();
         kliknutaSlika6.remove();
     });

     img5.addEventListener("click", () => {
         flag.appendChild(kliknutaSlika5);
         img5.style.border = "1px dotted black";
         city.innerHTML = "Glavni grad je " + data[99].capital;
         country.innerHTML = "Kliknuli ste na " + data[99].altSpellings[1];
         kliknutaSlika1.remove();
         kliknutaSlika2.remove();
         kliknutaSlika3.remove();
         kliknutaSlika4.remove();

         kliknutaSlika6.remove();
     });

     img6.addEventListener("click", () => {
         flag.appendChild(kliknutaSlika6);
         img6.style.border = "1px dotted black";
         city.innerHTML = "Glavni grad je " + data[159].capital;
         country.innerHTML = "Kliknuli ste na " + data[159].altSpellings[1];
         kliknutaSlika1.remove();
         kliknutaSlika2.remove();
         kliknutaSlika3.remove();
         kliknutaSlika4.remove();
         kliknutaSlika5.remove();

     });




 }
 getFlags();

 let info = document.querySelector(".info-part");
 let flag = info.querySelector(".flag");
 let city = info.querySelector(".city");
 let country = info.querySelector(".country");



 let cards = document.querySelector(".cards");
 let germany = cards.querySelector(".card1");
 let finland = cards.querySelector(".card2");
 let serbia = cards.querySelector(".card3");
 let spania = cards.querySelector(".card4");
 let switzerland = cards.querySelector(".card5");
 let greek = cards.querySelector(".card6");

 let img1 = germany.querySelector("img");

 let img2 = finland.querySelector("img");

 let img3 = serbia.querySelector("img");

 let img4 = spania.querySelector("img");

 let img5 = switzerland.querySelector("img");
 let img6 = greek.querySelector("img");

 let kliknutaSlika1 = document.createElement("img");
 let kliknutaSlika2 = document.createElement("img");
 let kliknutaSlika3 = document.createElement("img");
 let kliknutaSlika4 = document.createElement("img");
 let kliknutaSlika5 = document.createElement("img");
 let kliknutaSlika6 = document.createElement("img");