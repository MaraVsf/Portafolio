function menu() {
    const nav = document.getElementById('navBtn');
    if (nav.style.display === 'none') {
        nav.style.display = 'block';
        nav.style.position = 'fixed';
        nav.style.right = '10px';
        nav.style.textAlign = 'center';
    } else {
        nav.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById('btnMenu').addEventListener('click', ()=> {
        menu();
    })
})