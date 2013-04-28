var links = document.querySelectorAll('.title > a');
Array.prototype.forEach.call( links, function( link, i ) {
    if ( link.innerText !== 'More' ) {
        link.setAttribute( 'tabindex', i + 1 );
        link.setAttribute( 'target', '_blank' );
    } else {
        link.setAttribute( 'tabindex', links.length + 1 );
    }
});