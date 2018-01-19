$(function () {
    var button = $('#submit-pref').prop('disabled', true);
    var radios = $('input[type="radio"]');
    var arr    = $.map(radios, function(el) {
                return el.name;
              });

    var groups = $.grep(arr, function(v, k){
            return $.inArray(v ,arr) === k;
    }).length;

    radios.on('change', function () {
        button.prop('disabled', radios.filter(':checked').length < groups);
    });
});
