const button = $('#add-to-list');


const addToList = (item) => {
    $('#items').append(
        '<li>' + item + '<span class="label pending">Pending</span></li>');

}

const li_node = $(this).parent();


button.click(() => {
    const value = $('#item').val(); //reads value of input and can also set the value
    addToList(value);
    $('#item').val(""); //clears the input box
    $('#item').focus(); //adds the focus back onto the text box
    updateTotals();
});

$(document).on('click', '.pending', function() {
    const li_node =$(this).parent();
    li_node.append('<span class="label success">Done!</span>');
    li_node.addClass('completed');
    $(this).remove();
    updateTotals();
});

/*
$('#add-to-list').on('click', () => {
    const value = $('#item').val();
    console.log(value);
    $('item').val();
})
*/

//changes the number of pending and completed tasks
function updateTotals () {
    const pending = $('.pending').length; //$() selects all the elements with class pending
    const completed = $('.success').length;
    console.log('Pending' + pending);
    console.log('Completed' + completed);
$('.total').text('Pending:' + pending + ' ' + 'Completed:' + completed)
}