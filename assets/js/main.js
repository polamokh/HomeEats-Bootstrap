$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$('#saveChangesModalButton').click(function () {
    $('#saveAlert').show('fade');

    setTimeout(function () {
        $('#saveAlert').hide('fade');
    }, 3000);
});

$(function () {
    $('[data-toggle="popover"]').popover({
        trigger: 'foucs'
    });
});

$('#collapseDescription').collapse();
$('#collapseReviews').collapse();