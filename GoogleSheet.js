const scriptURL = 'https://script.google.com/macros/s/AKfycbyW_UfyegSQY3I6_7nKG8CinFKIzGpx-gkWrNi0XYGtmGb50Hmh3hpFqVHBey07YoeT/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
