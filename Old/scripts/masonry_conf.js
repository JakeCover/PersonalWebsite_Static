var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.grid-item-padding',
    columnWidth: '.grid-sizer',
    percentPosition: true
});