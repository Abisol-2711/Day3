const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5d521d4acamshaf89d90f29bbb41p15bea1jsn6b3884c8549d',
    'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
  }
};

const fetchIpInfo = ip => {
   return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, options)
   .then(res => res.json())
   .catch(error => console.error(error))
};

const $ = selector => document.querySelector(selector);

const form = $('form');
const input = $('#input');
const submit = $('#submit');
const results = $('#results');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {value} = input;
    if (!value) return 
    submit.setAttribute('disabled', '');
    submit.setAttribute('aria-busy', 'true');

    const ipInfo = await fetchIpInfo(value);

    if (ipInfo) {
      results.innerHTML = JSON.stringify(ipInfo, null, 2);
    }

    submit.removeAttribute('disabled');
    submit.removeAttribute('aria-busy');
});