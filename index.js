const xboxform = document.getElementById("xboxform");
const xboxformpush = document.getElementById("xboxformpush");
const xboxicon = document.getElementById("xboxicon");
let newxboxlist = [localStorage.collectionXbox];
let checkxboxlist = document.getElementById("showxboxlist");
const movieform = document.getElementById("movieform");
const movieformpush = document.getElementById("movieformpush");
let newmovielist = [localStorage.collectionMovie];
let checkmovielist = document.getElementById("showmovielist");
let xboxlist = [
  "11-11 memories retold",
  "agony",
  "assassin's creed IV black flag",
  "assassin's creed odyssey",
  "assassin's creed origins",
  "assassin's creed valhalla",
  "a way out",
  "battlefield 1",
  "battlefield 4",
  "battlefield hardline",
  "bloodbowl 2",
  "borderland 3",
  "call of duty advanced warfare",
  "call of duty black ops 3",
  "call of duty black ops 4",
  "call of duty cold war",
  "call of duty infinite warfare",
  "call of duty vanguard",
  "call of duty ww2",
  "chorus",
  "control",
  "cyberpunk 2077",
  "deadrising 3",
  "deadrising 4",
  "devil may cry 5",
  "divinity 2",
  "dishonored 2",
  "dragonball xenoverse 2",
  "dragonball z: kakarot",
  "dying light",
  "dynasty warriors 8 empires",
  "extinction",
  "far cry 4",
  "far cry 5",
  "far cry 6",
  "far cry primal",
];
let movielist = ["shang chi"];
// console.log(xboxsearch.value.toLowerCase().slice(0, 1));

function StoreListxbox() {
  window.localStorage.collectionXbox = xboxlist;
}

function StoreListmovie() {
  window.localStorage.collectionMovie = movielist;
}

xboxform.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < xboxlist.length; i++) {
    let listedesjeux = xboxlist[i];
  }
  if (
    xboxlist.includes(xboxsearch.value.toLowerCase()) == true ||
    newxboxlist.includes(xboxsearch.value.toLowerCase()) == true
  ) {
    xboxresult.innerText = " Jeu possedé !";
    xboxicon.classList.add("imgactive");
    setTimeout(() => {
      xboxicon.classList.remove("imgactive");
    }, 2500);
  } else {
    xboxresult.innerText = "Pas encore dans la collection";
    checkxboxlist.classList.remove("showxboxlist");
    checkxboxlist.classList.add("checkxboxlist");
    checkxboxlist.addEventListener("click", (e) => {
      let arrayresult = [];
      for (let i = 0; i < xboxlist.length; i++) {
        let firstxboxletter = xboxlist[i].slice(0, 1).toLowerCase();
        if (firstxboxletter === xboxsearch.value.toLowerCase().slice(0, 1)) {
          arrayresult.push([`${xboxlist[i]}`]);
          console.log(arrayresult);
          xboxresult.innerHTML = `<p>${arrayresult.sort()}</p>`;
        }
      }
    });
    setTimeout(() => {
      checkxboxlist.classList.remove("checkxboxlist");
      checkxboxlist.classList.add("showxboxlist");
      xboxresult.innerHTML = ``;
    }, 11500);
  }
  setTimeout(() => {
    xboxresult.innerText = "";
  }, 2500);
});

xboxformpush.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    xboxlist.includes(xboxpush.value.toLowerCase()) == true ||
    newxboxlist.includes(xboxpush.value.toLowerCase()) == true
  ) {
    xboxresultpush.innerText = "Jeu déja possédé !";
  } else {
    xboxlist.push(`${xboxpush.value}`.toLowerCase());
    xboxresultpush.innerText = "Jeu ajouté à la collection";
    StoreListxbox();
  }

  setTimeout(() => {
    xboxresultpush.innerText = "";
  }, 1500);
});

movieform.addEventListener("submit", (e) => {
  e.preventDefault();
  for (let i = 0; i < movielist.length; i++) {
    let listedesfilms = movielist[i];
  }
  if (
    movielist.includes(moviesearch.value.toLowerCase()) === true ||
    newmovielist.includes(moviesearch.value.toLowerCase()) === true
  ) {
    movieresult.innerText = " Film possedé !";
  } else {
    movieresult.innerText = "Pas encore dans la collection";
    checkmovielist.classList.remove("showmovielist");
    checkmovielist.classList.add("checkmovielist");
    checkmovielist.addEventListener("click", (e) => {
      let arrayresult = [];
      for (let i = 0; i < movielist.length; i++) {
        let firstmovieletter = movielist[i].slice(0, 1).toLowerCase();
        if (firstmovieletter === moviesearch.value.toLowerCase().slice(0, 1)) {
          arrayresult.push([`${movielist[i]}`]);
          console.log(arrayresult);
          movieresult.innerHTML = `<p>${arrayresult.sort()}</p>`;
        }
      }
    });
    setTimeout(() => {
      checkmovielist.classList.remove("checkmovielist");
      checkmovielist.classList.add("showmovielist");
      movieresult.innerHTML = ``;
    }, 11500);
  }

  setTimeout(() => {
    movieresult.innerText = "";
  }, 2500);
});

movieformpush.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    movielist.includes(moviepush.value.toLowerCase()) == true ||
    newmovielist.includes(moviepush.value.toLowerCase()) == true
  ) {
    movieresultpush.innerText = "Film déja possédé !";
  } else {
    movielist.push(`${moviepush.value}`.toLowerCase());
    movieresultpush.innerText = "Film ajouté à la collection";
    StoreListmovie();
  }

  setTimeout(() => {
    movieresultpush.innerText = "";
  }, 1500);
});
