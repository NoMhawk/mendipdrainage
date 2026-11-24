// Yeo Drainage: septic tank compliance checker. Runs in the browser only; nothing is sent anywhere.
// Results must match research/regulations.md.
(function () {
  var forms = document.querySelectorAll('.ck-form');
  if (!forms.length) return;

  var LINKS = {
    replace: '<a href="/septic-tank-replacement/">septic tank replacement</a>',
    plant: '<a href="/sewage-treatment-plant-installation/">treatment plants</a>',
    survey: '<a href="/septic-tank-survey/">septic tank survey</a>',
    field: '<a href="/drainage-field-installation/">drainage fields</a>',
    cesspit: '<a href="/cesspit-replacement/">cesspit replacement</a>',
    service: '<a href="/treatment-plant-servicing/">servicing</a>',
    sale: '<a href="/selling-a-house-with-a-septic-tank/">selling a house with a septic tank</a>',
    how: '<a href="/how-it-works/">how septic tanks and treatment plants work</a>'
  };

  function result(a) {
    var r;
    if (a.type === 'septic' && (a.to === 'stream' || a.to === 'ditch')) {
      r = { level: 'bad', title: 'This needs upgrading',
        text: 'Under the Environment Agency\'s general binding rules, a septic tank must not discharge to a stream, river or ditch. GOV.UK says to put it right as soon as possible, with plans in place within a reasonable time, usually 12 months. The usual fix is a sewage treatment plant, or a drainage field if your ground drains well. See ' + LINKS.replace + '.' };
    } else if (a.type === 'plant' && a.to === 'ditch') {
      r = { level: 'warn', title: 'Worth checking',
        text: 'A treatment plant can only discharge to surface water that flows all year round. If your ditch dries up in summer, the discharge may not meet the rules, and a drainage field or a different outfall may be needed. A ' + LINKS.survey + ' will tell you for sure.' };
    } else if (a.type === 'plant' && a.to === 'stream') {
      r = { level: a.issue === 'yes' ? 'warn' : 'good', title: a.issue === 'yes' ? 'Allowed, but something is wrong' : 'This is the right kind of setup',
        text: a.issue === 'yes'
          ? 'Treatment plants are allowed to discharge to a stream that flows all year, but the rules also say a system must be repaired if it is not working properly. Smells or backing up usually mean a service or repair is needed. See ' + LINKS.service + '.'
          : 'Treatment plants are allowed to discharge to a stream that flows all year, as long as the plant meets the standard, is the right size, and is emptied and serviced. Keep your service records. See ' + LINKS.service + '.' };
    } else if ((a.type === 'septic' || a.type === 'plant') && a.to === 'ground') {
      r = a.issue === 'yes'
        ? { level: 'warn', title: 'Your drainage field may be failing',
            text: 'Smells, wet ground or slow drains often mean the drainage field or soakaway has blocked up. The rules say a system that is not in good working order must be repaired or replaced. A ' + LINKS.survey + ' finds the cause before you spend money. See also ' + LINKS.field + '.' }
        : { level: 'good', title: 'Probably fine',
            text: 'Discharging to the ground through a proper drainage field is allowed. Older "soakaways" may not meet today\'s standard, so if you are changing anything, check it first. Keep it emptied at least once a year, or as the manufacturer says.' };
    } else if (a.type === 'cesspit') {
      r = { level: 'info', title: 'Cesspits are allowed, but costly to run',
        text: 'A cesspit has no outlet, so it fills up and has to be pumped out often. Replacing it with a treatment plant can cut those costs, if there is a stream or suitable ground for the clean water. See ' + LINKS.cesspit + '.' };
    } else {
      r = { level: 'info', title: 'Let\'s find out',
        text: 'Lots of people don\'t know what they have or where it goes, and that\'s fine. A ' + LINKS.survey + ' finds the tank and the outlet and tells you, in writing, whether it meets the rules. Start with ' + LINKS.how + '.' };
    }
    if (a.sale === 'yes') {
      r.text += ' <strong>Buying or selling?</strong> The seller must give the buyer a written description of the system, and if work is needed the buyer and seller should agree who will do it as a condition of sale. See ' + LINKS.sale + '.';
    }
    return r;
  }

  Array.prototype.forEach.call(forms, function (form) {
    var box = form.parentNode.querySelector('.ck-result');
    var err = form.querySelector('.ck-error');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var a = {}, missing = false;
      ['type', 'to', 'issue', 'sale'].forEach(function (k) {
        var c = form.querySelector('input[name="ck-' + k + '"]:checked');
        if (!c) missing = true; else a[k] = c.value;
      });
      if (missing) { err.hidden = false; return; }
      err.hidden = true;
      var r = result(a);
      box.className = 'ck-result ck-' + r.level;
      box.innerHTML = '<h3>' + r.title + '</h3><p>' + r.text + '</p>' +
        '<p class="ck-cta"><a class="btn btn-gold" href="/contact/">Book a free site visit</a> <button type="button" class="btn btn-ghost ck-again">Start again</button></p>' +
        '<p class="small">A guide only, based on the general binding rules for England. Your property may have other factors, such as a nearby sewer or protected site.</p>';
      box.hidden = false;
      box.querySelector('.ck-again').addEventListener('click', function () {
        form.reset(); box.hidden = true; form.querySelector('input').focus();
      });
      box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
})();
