let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let text = document.getElementById('text').value;
    let img = document.getElementById('image');
    img.src=`https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${text}`;
    img.alt=text;
})