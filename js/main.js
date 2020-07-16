var phonebox = document.querySelector("input#phonebox");
var mobilebox = document.querySelector("input#mobilebox");
var facebookbox = document.querySelector("input#facebookbox");
var linkedinbox = document.querySelector("input#linkedinbox");
var twitterbox = document.querySelector("input#twitterbox");
var xingbox = document.querySelector("input#xingbox");
var youtubebox = document.querySelector("input#youtubebox");

document.querySelector("input#name").onkeyup = function(){setTimerName(document.querySelector("input#name").value)};

var Webflow = Webflow || [];
  Webflow.push(function() {
    $.get('https://raw.githubusercontent.com/sheamcfarland/sheamcfarland.github.io/master/facebook.html', function(data) {
      $('#ajaxContentfb').append(data);
    });
    $.get('https://raw.githubusercontent.com/sheamcfarland/sheamcfarland.github.io/master/linkedin.html', function(data) {
      $('#ajaxContentli').append(data);
    });
    $.get('https://raw.githubusercontent.com/sheamcfarland/sheamcfarland.github.io/master/twitter.html', function(data) {
      $('#ajaxContenttw').append(data);
    });
    $.get('https://raw.githubusercontent.com/sheamcfarland/sheamcfarland.github.io/master/xing.html', function(data) {
      $('#ajaxContentxi').append(data);
    });
    $.get('https://raw.githubusercontent.com/sheamcfarland/sheamcfarland.github.io/master/youtube.html', function(data) {
      $('#ajaxContentyt').append(data);
    });
  });

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
document.getElementById('nametext').innerText = document.getElementById('name').placeholder
document.getElementById('titletext').innerText = document.getElementById('title-2').placeholder
document.getElementById('phonelink').href = "tel:" + document.getElementById('phone').placeholder
document.getElementById('phonelink').innerText = document.getElementById('phone').placeholder
document.getElementById('mobilelink').innerText = ""
document.getElementById('mobilecontainer').style.display = "none"
document.getElementById('email-signature').href = "mailto:" + document.getElementById('email').placeholder
document.getElementById('email-signature').innerText = document.getElementById('email').placeholder
document.getElementById('facebooklink').href = document.getElementById('facebook').placeholder + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
//document.getElementById('facebookcontainer').style.display = "inline"
document.getElementById('linkedinlink').href = document.getElementById('linkedin').placeholder + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
//document.getElementById('linkedincontainer').style.display = "inline"
document.getElementById('twitterlink').href = document.getElementById('twitter').placeholder + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
//document.getElementById('twittercontainer').style.display = "inline"
document.getElementById('xinglink').href = ""
document.getElementById('xingcontainer').style.display = "none"
//document.getElementById('youtubecontainer').style.display = "inline"
document.getElementById('youtubelink').href = document.getElementById('youtube').placeholder + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"

phonebox.onclick = function() {
  console.log("toggle");
  if (phonebox.checked == true){
    document.getElementById('phonecontainer').style.display = "table-row"
    console.log(phonebox.checked);
    if (document.getElementById('phone').value == ""){
        document.getElementById('phonelink').href = "tel:" + document.getElementById('phone').placeholder
        document.getElementById('phonelink').innerText = document.getElementById('phone').placeholder
      } else {
        document.getElementById('phonelink').href = "tel:" + document.getElementById('phone').value
        document.getElementById('phonelink').innerText = document.getElementById('phone').value
      }
    } else {
      console.log(phonebox.checked);
      document.getElementById('phonelink').innerText = ""
      document.getElementById('phonecontainer').style.display = "none"
    }
  }

mobilebox.onclick = function() {
  if (mobilebox.checked == true){
    document.getElementById('mobilecontainer').style.display = "table-row"
    if (document.getElementById('mobile').value == ""){
        document.getElementById('mobilelink').href = "tel:" + document.getElementById('mobile').placeholder
        document.getElementById('mobilelink').innerText = document.getElementById('mobile').placeholder
      } else {
        document.getElementById('mobilelink').href = "tel:" + document.getElementById('mobile').value
        document.getElementById('mobilelink').innerText = document.getElementById('mobile').value
      }
    } else {
      document.getElementById('mobilelink').innerText = ""
      document.getElementById('mobilecontainer').style.display = "none"
    }
  }

  facebookbox.onclick = function() {
    if (facebookbox.checked == true){
      document.getElementById('facebookcontainer').style.display = ""
      if (document.getElementById('facebook').value == ""){
          document.getElementById('facebooklink').href = document.getElementById('facebook').placeholder + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
        } else {
          document.getElementById('facebooklink').href = document.getElementById('facebook').value + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
        }
      } else {
        document.getElementById('facebooklink').href = ""
        document.getElementById('facebookcontainer').style.display = "none"
      }
    }
    linkedinbox.onclick = function() {
      if (linkedinbox.checked == true){
        document.getElementById('linkedincontainer').style.display = ""
        if (document.getElementById('linkedin').value == ""){
            document.getElementById('linkedinlink').href = document.getElementById('linkedin').placeholder + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
          } else {
            document.getElementById('linkedinlink').href = document.getElementById('linkedin').value + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
          }
        } else {
          document.getElementById('linkedinlink').href = ""
          document.getElementById('linkedincontainer').style.display = "none"
        }
      }
      twitterbox.onclick = function() {
        if (twitterbox.checked == true){
          document.getElementById('twittercontainer').style.display = ""
          if (document.getElementById('twitter').value == ""){
              document.getElementById('twitterlink').href = document.getElementById('twitter').placeholder + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
            } else {
              document.getElementById('twitterlink').href = document.getElementById('twitter').value + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
            }
          } else {
            document.getElementById('twitterlink').href = ""
            document.getElementById('twittercontainer').style.display = "none"
          }
        }
        xingbox.onclick = function() {
          if (xingbox.checked == true){
            document.getElementById('xingcontainer').style.display = ""
            if (document.getElementById('xing').value == ""){
                document.getElementById('xinglink').href = document.getElementById('xing').placeholder + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
              } else {
                document.getElementById('xinglink').href = document.getElementById('xing').value + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
              }
            } else {
              document.getElementById('xinglink').href = ""
              document.getElementById('xingcontainer').style.display = "none"
            }
          }
          youtubebox.onclick = function() {
            if (youtubebox.checked == true){
              document.getElementById('youtubecontainer').style.display = ""
              if (document.getElementById('youtube').value == ""){
                  document.getElementById('youtubelink').href = document.getElementById('youtube').placeholder + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
                } else {
                  document.getElementById('youtubelink').href = document.getElementById('youtube').value + "?utm_source=Email&utm_medium=email&utm_term=&utm_content=&utm_campaign=signature"
                }
              } else {
                document.getElementById('youtubelink').href = ""
                document.getElementById('youtubecontainer').style.display = "none"
              }
            }

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
    document.getElementById('phonelink').innerText = what
}

function setTimerMobile(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffMobile,500); // delay is in milliseconds
}
function sendItOffMobile() {
    what = document.getElementById("mobile").value;
    document.getElementById('mobilelink').innerText = what
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

function setTimerFacebook(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffFacebook,500); // delay is in milliseconds
}
function sendItOffFacebook() {
    what = document.getElementById("facebook").value;
    document.getElementById('facebooklink').href = what + "?utm_source=Email&utm_medium=email&utm_campaign=signature"
}

function setTimerLinkedin(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffLinkedin,500); // delay is in milliseconds
}
function sendItOffLinkedin() {
    what = document.getElementById("linkedin").value;
    document.getElementById('linkedinlink').href = what + "?utm_source=Email&utm_medium=email&utm_campaign=signature"
}
function setTimerTwitter(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffTwitter,500); // delay is in milliseconds
}
function sendItOffTwitter() {
    what = document.getElementById("twitter").value;
    document.getElementById('twitterlink').href = what + "?utm_source=Email&utm_medium=email&utm_campaign=signature"
}
function setTimerXing(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffXing,500); // delay is in milliseconds
}
function sendItOffXing() {
    what = document.getElementById("xing").value;
    document.getElementById('xinglink').href = what + "?utm_source=Email&utm_medium=email&utm_campaign=signature"
}
function setTimerYoutube(what) {
    if (timerHandle) clearTimeout(timerHandle);
    timerHandle = setTimeout(sendItOffYoutube,500); // delay is in milliseconds
}
function sendItOffYoutube() {
    what = document.getElementById("youtube").value;
    document.getElementById('youtubelink').href = what + "?utm_source=Email&utm_medium=email&utm_campaign=signature"
}
