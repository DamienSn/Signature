const file = document.querySelector('#file');
let img = document.querySelector('.picture');
const btn = document.querySelector('#uploadBtn');

let app = new Vue({
  el: 'main',
  data: {
    name: '',
    surname: '',
    fixe: '',
    mobile: '',
    mail: '',
    adresse: '',
    src: ''
  },
  methods: {
    reset: function(){
      this.name = '';
      this.surname = '';
      this.mail = '';
      this.fixe = '';
      this.mobile = '';
      this.adresse = '';
    },
    upload: function(){
      const photo = file.files[0];

      if (photo) {
        const analyseur = new FileReader();
        analyseur.readAsDataURL(photo);
        analyseur.onload = function(e){
          app.src = this.result;
        }
      }
    },
    click: function() {
        file.click();
    }
  }
})

// polices

function police() {
  let choix = document.querySelector('select').value;
  document.querySelector('.preview').setAttribute('id', choix);
};

// génération

function générerSignature() {
  let div = document.querySelector('.preview').innerHTML;
  let index = div.indexOf('<div class="identity">');
  let indexA = div.indexOf('<a');
  let font = document.querySelector('select').value;
  let signature = '<!DOCTYPE html> <head><meta charset="utf-8"></head><body>' + div.slice(index, indexA) + '<style>*{font-family: "' + font + '"} .picture {padding-right: 15px; max-width: 100px; max-height: 100px;} .identity {display: flex; justify-content: flex-start; align-items: center;} hr {border-color: #eb2f06;}' + '</body></html>'
  console.info("La signature a bien été générée !");

  var element = document.querySelector('.dl');

  let href = "data:text/plain;charset=utf-8," + encodeURIComponent(signature);
  element.setAttribute('href', href);
  element.setAttribute('download', 'Signature.html');
};

// animations

let myTitleText = 'Signature ✒';
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
