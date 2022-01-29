const insert = document.getElementById('insert');
window.addEventListener('keydown',(e) => {
        insert.innerHTML = `
        <div class="key">${e.key === ' ' ? 'space' : e.key}<small>Event.Key</small></div>
        <div class="key">${e.keyCode}<small>Event.keyCode</small></div>
        <div class="key">${e.code};<small>Event.code</small></div> `
            
})
