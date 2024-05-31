document.getElementById('uploadForm').addEventListener('submit', function(event) {
    const fileInput = document.getElementById('file');
    if (fileInput.files.length === 0) {
        alert('Lütfen bir dosya seçin.');
        event.preventDefault();
    }
});
