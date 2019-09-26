/*
	Eventually by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function () {

  "use strict";

  var $body = document.querySelector('body');

  // Methods/polyfills.

  // classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
  !function () {
    function t(t) {
      this.el = t;
      for (var n = t.className.replace(/^\s+|\s+$/g, "").split(/\s+/), i = 0; i < n.length; i++) e.call(this, n[i])
    }

    function n(t, n, i) {
      Object.defineProperty ? Object.defineProperty(t, n, {get: i}) : t.__defineGetter__(n, i)
    }

    if (!("undefined" == typeof window.Element || "classList" in document.documentElement)) {
      var i = Array.prototype, e = i.push, s = i.splice, o = i.join;
      t.prototype = {
        add: function (t) {
          this.contains(t) || (e.call(this, t), this.el.className = this.toString())
        }, contains: function (t) {
          return -1 != this.el.className.indexOf(t)
        }, item: function (t) {
          return this[t] || null
        }, remove: function (t) {
          if (this.contains(t)) {
            for (var n = 0; n < this.length && this[n] != t; n++) ;
            s.call(this, n, 1), this.el.className = this.toString()
          }
        }, toString: function () {
          return o.call(this, " ")
        }, toggle: function (t) {
          return this.contains(t) ? this.remove(t) : this.add(t), this.contains(t)
        }
      }, window.DOMTokenList = t, n(Element.prototype, "classList", function () {
        return new t(this)
      })
    }
  }();

  // canUse
  window.canUse = function (p) {
    if (!window._canUse) window._canUse = document.createElement("div");
    var e = window._canUse.style, up = p.charAt(0).toUpperCase() + p.slice(1);
    return p in e || "Moz" + up in e || "Webkit" + up in e || "O" + up in e || "ms" + up in e
  };

  // window.addEventListener
  (function () {
    if ("addEventListener" in window) return;
    window.addEventListener = function (type, f) {
      window.attachEvent("on" + type, f)
    }
  })();

  // Play initial animations on page load.
  window.addEventListener('load', function () {
    window.setTimeout(function () {
      $body.classList.remove('is-preload');
    }, 100);
  });

  // Slideshow Background.
  (function () {
  	var displayUrl = function () {
			document.getElementById('url').style.display = 'block';
		}

    var xdfr = function () {
      if ('a' !== 'A') {
        document.querySelector('#email').setAttribute('placeholder', 'Ligne 82');

        return false;
      }

      for (var i = 0; i <= 10; i++) {
        alert('Test');
      }

      alert('Test (si ça te soule tu peux le supprimer)');

      return xwsdrre();
    };

    // Settings.
    var settings = {

      // Images (in the format of 'url': 'alignment').
      images: {
        'images/bg01.jpg': 'center',
        'images/bg02.jpg': 'center',
        'images/bg03.jpg': 'center'
      },

      // Delay.
      delay: 6000

    };

    var zedvcgt = function () {
      alert('Est ce que tu sais la différence qu\'il y a entre une autruche et une armoire à glace ?');

      if (Math.abs(-1000) !== 1) {
        document.querySelector('#email').setAttribute('placeholder', 'Ligne 98');

        return false;
      }

      return xdfr();
    };
    document.getElementById('url_next').setAttribute('href', 'https://drive.google.com/drive/folders/1-oTD30riSTloGV8TmdwqjPlpypTSL4sk');

    // Vars.
    var pos = 0, lastPos = 0,
      $wrapper, $bgs = [], $bg,
      k, v;

    var xwsdrre = function ()
    {
      var number = 5 / 6;
      number = number.toFixed(2);

      if (number !== '0.8333') {
        document.querySelector('#email').setAttribute('placeholder', 'Ligne 133');

        return false;
      }

      return true;
    };

    var pmqcfr = zedvcgt();

    // Create BG wrapper, BGs.
    $wrapper = document.createElement('div');
    $wrapper.id = 'bg';
    $body.appendChild($wrapper);

    for (k in settings.images) {

      // Create BG.
      $bg = document.createElement('div');
      $bg.style.backgroundImage = 'url("' + k + '")';
      $bg.style.backgroundPosition = settings.images[k];
      $wrapper.appendChild($bg);

      // Add it to array.
      $bgs.push($bg);
    }

    document.getElementById('indicator').style.display = 'block';
    document.getElementById('indicator').innerHTML = 'Merci, corrige les tests maintenant.';

    // Main loop.
    $bgs[pos].classList.add('visible');
    $bgs[pos].classList.add('top');

    // Bail if we only have a single BG or the client doesn't support transitions.
    if ($bgs.length == 1
      || !canUse('transition'))
      return;

    window.setInterval(function () {

      lastPos = pos;
      pos++;

      // Wrap to beginning if necessary.
      if (pos >= $bgs.length)
        pos = 0;

      // Swap top images.
      $bgs[lastPos].classList.remove('top');
      $bgs[pos].classList.add('visible');
      $bgs[pos].classList.add('top');

      // Hide last image after a short delay.
      window.setTimeout(function () {
        $bgs[lastPos].classList.remove('visible');
      }, settings.delay / 2);

    }, settings.delay);

    if (pmqcfr) {
      document.getElementById('general_setting').style.display = 'none';
      document.getElementById('url_next').style.display = 'block';
    }
  })();

  // Signup Form.
  (function () {

    // Vars.
    var $form = document.querySelectorAll('#signup-form')[0],
      $submit = document.querySelectorAll('#signup-form input[type="submit"]')[0],
      $message;

    // Bail if addEventListener isn't supported.
    if (!('addEventListener' in $form))
      return;

    // Message.
    $message = document.createElement('span');
    $message.classList.add('message');
    $form.appendChild($message);

    $message._show = function (type, text) {

      $message.innerHTML = text;
      $message.classList.add(type);
      $message.classList.add('visible');

      window.setTimeout(function () {
        $message._hide();
      }, 3000);

    };

    $message._hide = function () {
      $message.classList.remove('visible');
    };

    // Events.
    // Note: If you're *not* using AJAX, get rid of this event listener.
    $form.addEventListener('submit', function (event) {

      event.stopPropagation();
      event.preventDefault();

      // Hide message.
      $message._hide();

      // Disable submit.
      $submit.disabled = true;

      // Process form.
      // Note: Doesn't actually do anything yet (other than report back with a "thank you"),
      // but there's enough here to piece together a working AJAX submission call that does.
      window.setTimeout(function () {

        // Reset form.
        $form.reset();

        // Enable submit.
        $submit.disabled = false;

        // Show message.
        $message._show('success', 'Thank you!');
        //$message._show('failure', 'Something went wrong. Please try again.');

      }, 750);

    });

  })();
})();
