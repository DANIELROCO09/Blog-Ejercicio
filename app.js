document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;
    const date = new Date().toLocaleDateString();

    const postHTML = `
        <div class="col-12">
            <div class="card shadow-sm post-card">
                <div class="card-body">
                    <h5 class="card-title text-primary">${title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${date}</h6>
                    <p class="card-text">${content}</p>
                    <button class="btn btn-sm btn-outline-danger" onclick="this.closest('.col-12').remove()">Eliminar</button>
                </div>
            </div>
        </div>
    `;

    const container = document.getElementById('postsContainer');
    container.insertAdjacentHTML('afterbegin', postHTML);

    this.reset();
});

const contentDiv = document.getElementById('postsContainer');

function showAbout() {
    contentDiv.innerHTML = `
        <div class="card p-4">
            <h2>Sobre mí</h2>
            <p>Hola, soy un desarrollador aprendiendo Bootstrap y JS modular.</p>
        </div>
    `;
}

document.getElementById('btnAbout').onclick = showAbout;

