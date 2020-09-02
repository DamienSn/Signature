function submit() {
  let surname = document.querySelector('#Prénom').value;
  document.querySelector('.surname').textContent = surname;


  let name = document.querySelector('#Nom').value;
  document.querySelector('.name').textContent = name;

  let fixe = document.querySelector('#Fixe').value;

  let mob = document.querySelector('#Mobile').value;


  let email = document.querySelector('#Mail').value;
  if (email !== '') {
    document.querySelector('.mail').textContent = '✉ ' + email;
  } else {
    document.querySelector('.mail').textContent = '';
  }

  let adresse = document.querySelector('#Adresse').value;
  if (adresse !== '') {
    document.querySelector('.address').textContent = '📬 ' + adresse;
  } else {
    document.querySelector('.address').textContent = '';
  }

  let photo = document.querySelector('#Photo').value;
  document.querySelector('.picture').setAttribute('src', photo);

  let photoComplétée = document.querySelector('#Photo').getAttribute('set');
  if (photoComplétée === '') {
    document.querySelector('.picture').style.visibility = "hidden";
  }

  mettreEnFormeLesDonnéesTel(fixe);
  mettreEnFormeLesDonnéesTelMob(mob);

  if (name === '' && surname === '' && email === '' && adresse === '' && mobile === '' && fixe === '') {
    document.querySelector('.preview').style.visibility = "hidden";
  } else {
    document.querySelector('.preview').style.visibility = "visible";
  }
}
/*
███████ ██ ██   ██ ███████
██      ██  ██ ██  ██
█████   ██   ███   █████
██      ██  ██ ██  ██
██      ██ ██   ██ ███████
*/
function mettreEnFormeLesDonnéesTel(data) {
  let données = data;
  let prm = données.slice(0, 2);
  let dxm = données.slice(2, 4);
  let trm = données.slice(4, 6);
  let qtm = données.slice(6, 8);
  let cqm = données.slice(8);

  let affichage = prm + " " + dxm + " " + trm + " " + qtm + " " + cqm;
  if (document.querySelector('#Fixe').value !== '') {
    document.querySelector('.telfix').textContent = '☎ Fixe : ' + affichage;
    document.querySelector('.preview').style.visibility = "visible";
  } else {
    document.querySelector('.telfix').textContent = '';
  }

}
/*
███    ███  ██████  ██████  ██ ██      ███████
████  ████ ██    ██ ██   ██ ██ ██      ██
██ ████ ██ ██    ██ ██████  ██ ██      █████
██  ██  ██ ██    ██ ██   ██ ██ ██      ██
██      ██  ██████  ██████  ██ ███████ ███████
*/

function mettreEnFormeLesDonnéesTelMob(data) {
  let données = data;
  let prm = données.slice(0, 2);
  let dxm = données.slice(2, 4);
  let trm = données.slice(4, 6);
  let qtm = données.slice(6, 8);
  let cqm = données.slice(8);

  let affichage = prm + " " + dxm + " " + trm + " " + qtm + " " + cqm;
  if (document.querySelector('#Mobile').value !== '') {
    document.querySelector('.telmobile').textContent = '📱 Mobile : ' + affichage;
    document.querySelector('.preview').style.visibility = "visible";
  } else {
    document.querySelector('.telmobile').textContent = '';
  }

}
/*
██████  ███████ ███████ ███████ ████████
██   ██ ██      ██      ██         ██
██████  █████   ███████ █████      ██
██   ██ ██           ██ ██         ██
██   ██ ███████ ███████ ███████    ██
*/

function reset() {
  document.querySelector('.name').textContent = "";
  document.querySelector('.surname').textContent = "";
  document.querySelector('.telfix').textContent = "";
  document.querySelector('.telmobile').textContent = "";
  document.querySelector('.address').textContent = "";
  document.querySelector('.picture').setAttribute('src', '');
  document.querySelector('.preview').style.visibility = "hidden";
  document.querySelector('#Nom').value = '';
  document.querySelector('#Prénom').value = '';
  document.querySelector('#Fixe').value = '';
  document.querySelector('#Mobile').value = '';
  document.querySelector('#Mail').value = '';
  document.querySelector('#Adresse').value = '';
  document.querySelector('#Photo').value = '';
}
/*
██████   ██████  ██      ██  ██████ ███████
██   ██ ██    ██ ██      ██ ██      ██
██████  ██    ██ ██      ██ ██      █████
██      ██    ██ ██      ██ ██      ██
██       ██████  ███████ ██  ██████ ███████
*/

function police() {
  let choix = document.querySelector('select').value;
  document.querySelector('.preview').setAttribute('id', choix);
};
/*
 ██████  ███████ ███    ██ ███████ ██████  ███████ ██████
██       ██      ████   ██ ██      ██   ██ ██      ██   ██
██   ███ █████   ██ ██  ██ █████   ██████  █████   ██████
██    ██ ██      ██  ██ ██ ██      ██   ██ ██      ██   ██
 ██████  ███████ ██   ████ ███████ ██   ██ ███████ ██   ██
*/

function générerSignature() {
  let div = document.querySelector('.preview').innerHTML;
  let index = div.indexOf('<img');
  let indexA = div.indexOf('<a');
  let font = document.querySelector('select').value;
  let signature = div.slice(index, indexA) + '<style>*{font-family: "' + font + '"} .picture {padding-right: 15px; max-width: 300px; max-height: 100px;}hr {border-color: #eb2f06;}'
  console.info("La signature a bien été générée !");

  var element = document.querySelector('.dl');

  let href = "data:text/plain;charset=utf-8," + encodeURIComponent(signature);
  element.setAttribute('href', href);
  element.setAttribute('download', 'Signature.html');
};
/*
 █████  ███    ██ ██ ███    ███  █████  ████████ ██  ██████  ███    ██ ███████
██   ██ ████   ██ ██ ████  ████ ██   ██    ██    ██ ██    ██ ████   ██ ██
███████ ██ ██  ██ ██ ██ ████ ██ ███████    ██    ██ ██    ██ ██ ██  ██ ███████
██   ██ ██  ██ ██ ██ ██  ██  ██ ██   ██    ██    ██ ██    ██ ██  ██ ██      ██
██   ██ ██   ████ ██ ██      ██ ██   ██    ██    ██  ██████  ██   ████ ███████
*/

let myTitleText = 'SigNATurE ✒';
let myTitleArray = myTitleText.split('');
let timeLooper;

function loopTitle() {
  if (myTitleArray.length > 0) {
    document.querySelector('#title').innerHTML += myTitleArray.shift();
  } else {
    clearTimeout(timeLooper);
  }
  timeLooper = setTimeout('loopTitle()', 100);
}

loopTitle();

let myH5Text = 'Créez facilement vos signatures e-mail ! ✉';
let myH5Array = myH5Text.split('');
let h5TimeLooper;

function loopH5() {
  if (myH5Array.length > 0) {
    document.querySelector('#myh5').innerHTML += myH5Array.shift();
  } else {
    clearTimeout(timeLooper);
  }
  h5TimeLooper = setTimeout('loopH5()', 40);
}

loopH5();

//var isIE = /*@cc_on!@*/false || !!document.documentMode;

/*if (isIE === true) {
alert('Vous utilisez Internet Explorer... Ce n\'est pas très respectueux pour moi, qui ai développé ce site, d\'utiliser un navigateur préhistorique ! Bon, ça va pour cette fois ci, vous pouvez utiliser le site, mais essayez de passer à Chrome, Firefox, Edge, Opera... ');
} else {
}*/
