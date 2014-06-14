/**
 * Created with JetBrains RubyMine.
 * User: polyukhovich
 * Date: 02.06.14
 * Time: 22:24
 * To change this template use File | Settings | File Templates.
 */


$(function () {

    $('#new_user_link').on('click', function (event) {
//    event.preventDefault();
        console.log('link was clicked');
    });

    $('#new_user_link').on('click', function (event) {
//    event.preventDefault();
        console.log('link was clicked');
    });

    $("#create_user_form").on('submit', function (event) {
        console.log(this);
        event.preventDefault();
//        event.stopPropagation();
    });
});
