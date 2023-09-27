export const fileControler = () => {
    const file = document.querySelector('.file');
    const preview = file.querySelector('.file__preview');
    const input = file.querySelector('.file__input');
        
    input.addEventListener('change', (event) => {
        if (event.target.files.length > 0) {
            const src = URL.createObjectURL(event.target.files[0]);
            file.classList.add('file_active');
            preview.src = src;
            preview.style.display = 'block'
        } else {
            file.classList.remove('file_active');
            preview.src = '';
            preview.style.display = 'none'
        }
    });
};