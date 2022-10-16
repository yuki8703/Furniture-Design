$(function() {
    /*-------------------------------------------
    ハンバーガーメニュー
    -------------------------------------------*/
    $('.toggle_btn').on('click', function() {
        if ($('#header').hasClass('open')) {
            $('#headre').removeClass('open');

        } else {
            $('#header').addClass('open');
        }
    });
    $('#mask').on('click', function() {
        $('#header').removeClass('open');
    });
});