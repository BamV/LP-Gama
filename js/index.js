const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        name,
        email,
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

     let content = document.getElementById('content');
     let loading = `
     <div class="loader-container">
        <img class="loader" src="./assets/loader.gif" alt="">
            <p>Carregando</p>
        </div>
    </div>`;
     let finished = `<p>Pronto</p>`;
      content.innerHTML = loading;

     setTimeout(() => {
         content.innerHTML = finished;
     }, 1000)
})