document.getElementByID("#search_form").addEventListener("submit", function(event) {
  fetch(
    method: 'POST',
    action: '/guess',
  )
})
