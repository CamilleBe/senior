document.addEventListener('DOMContentLoaded', function() {

    const bigSize = document.querySelector('#size-big');

    bigSize.addEventListener('click', function() {

        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach(function(paragraph) {
            paragraph.style.fontSize = '24px';
        });

    });

    const normalSize = document.querySelector('#size-normal');

    normalSize.addEventListener('click', function() {

        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach(function(paragraph) {
            paragraph.style.fontSize = '18px';
        });

    });

    const litlleSize = document.querySelector('#size-little');

    litlleSize.addEventListener('click', function() {

        const paragraphs = document.querySelectorAll('p');

        paragraphs.forEach(function(paragraph) {
            paragraph.style.fontSize = '14px';
        });

    });
});
