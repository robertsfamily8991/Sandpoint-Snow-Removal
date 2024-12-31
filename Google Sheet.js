const scriptURL = 'https://script.google.com/macros/s/AKfycbxPlqQJ_bm9kSt2iY-3XSb5QBnazRVo0mUwUV4oD0xikUTGj90fHN71L8bkiI97uEAMzg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted.\n\nWe will contact you very soon with more information." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})


// https://www.youtube.com/watch?v=jdIntB1J-i8&t=392s
