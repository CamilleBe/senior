document.addEventListener('DOMContentLoaded', function() {

    const bigSize = document.querySelector('#size-big');

    bigSize.addEventListener('click', function() {

        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach(function(paragraph) {
            paragraph.style.fontSize = '24px';
        });

    });
});
