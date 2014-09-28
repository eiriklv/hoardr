(function setNavigation() {
    var activeLinkID = '#nav-' + document.body.id;
    console.log(activeLinkID);
    $(activeLinkID).addClass('active');
})();
