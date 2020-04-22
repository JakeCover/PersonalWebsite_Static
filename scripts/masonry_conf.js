var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item',
    columnWidth: 240,
    gutter: 10,
    fitWidth: true
});