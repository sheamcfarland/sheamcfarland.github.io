var phonebox = document.getElementById("phonebox");
var mobilebox = document.getElementById("mobilebox");

// Copy button
document.getElementsByClassName("primary")[0].onclick = function(e) {
    var text = document.getElementsByClassName('signature')[0];
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);
    //add to clipboard.
    document.execCommand('copy');
};

// Inizitalice signature
document.getElementsByTagName('td')[2].innerText = document.getElementById('name').placeholder
document.getElementsByTagName('td')[3].innerText = document.getElementById('title').placeholder
if (phonebox.checked == true){
  document.getElementById('phonelinklabel').style.display = "inline"
  document.getElementById('phonelink').href = "tel:" + document.getElementById('phone').placeholder
  document.getElementById('phonelink').innerText = document.getElementById('phone').placeholder
  } else {
    document.getElementById('phonelink').innerText = ""
    document.getElementById('phonelinklabel').style.display = "none"
  }
phonebox.onclick = function() {
  if (phonebox.checked == true){
    document.getElementById('phonelinklabel').style.display = "inline"
    document.getElementById('phonelink').href = "tel:" + document.getElementById('phone').placeholder
    document.getElementById('phonelink').innerText = document.getElementById('phone').placeholder
    } else {
      document.getElementById('phonelink').innerText = ""
      document.getElementById('phonelinklabel').style.display = "none"
    }
  }
  if (mobilebox.checked == true){
    document.getElementById('mobilelinklabel').style.display = "inline"
    document.getElementById('mobilelink').href = "tel:" + document.getElementById('mobile').placeholder
    document.getElementById('mobilelink').innerText = document.getElementById('mobile').placeholder
    } else {
      document.getElementById('mobilelink').innerText = ""
      document.getElementById('mobilelinklabel').style.display = "none"
    }
mobilebox.onclick = function() {
  if (mobilebox.checked == true){
    document.getElementById('mobilelinklabel').style.display = "inline"
    document.getElementById('mobilelink').href = "tel:" + document.getElementById('mobile').placeholder
    document.getElementById('mobilelink').innerText = document.getElementById('mobile').placeholder
    } else {
      document.getElementById('mobilelink').innerText = ""
      document.getElementById('mobilelinklabel').style.display = "none"
    }
  }
document.getElementById('email-signature').href = "mailto:" + document.getElementById('email').placeholder
document.getElementById('email-signature').innerText = document.getElementById('email').placeholder

// Set signature with key press
var timerHandle = false; // global!
function setTimerName(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffName,500); // delay is in milliseconds
}
function sendItOffName() {
    what = document.getElementById("name").value;
    document.getElementsByTagName('td')[2].innerText = what
}

function setTimerTitle(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffTitle,500); // delay is in milliseconds
}
function sendItOffTitle() {
    what = document.getElementById("title").value;
    document.getElementsByTagName('td')[3].innerText = what
}

function setTimerPhone(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffPhone,500); // delay is in milliseconds
}
function sendItOffPhone() {
    what = document.getElementById("phone").value;
    document.getElementsByTagName('td')[4].innerText = what
}

function setTimerMobile(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffMobile,500); // delay is in milliseconds
}
function sendItOffMobile() {
    what = document.getElementById("mobile").value;
    document.getElementsByTagName('td')[5].innerText = what
}

function setTimerEmail(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffEmail,500); // delay is in milliseconds
}
function sendItOffEmail() {
    what = document.getElementById("email").value;
    document.getElementById('email-signature').innerText = what
    document.getElementById('email-signature').href = "mailto:" + what
}
