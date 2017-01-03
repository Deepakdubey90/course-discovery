
function addDatePicker() {
    _.each($('.add-pikaday'), function(el) {
        if (el.getAttribute('datepicker-initialized') !== 'true') {
            new Pikaday({
                field: el,
                format: 'YYYY-MM-DD hh:mm:ss',
                defaultDate: $(el).val(),
                setDefaultDate: true,
                showTime: true,
                use24hour: false,
                autoClose: true
            });
            el.setAttribute('datepicker-initialized', 'true');
        }
    });
}

function interpolateString(formatString, parameters) {
    return formatString.replace(/{\w+}/g,
        function(parameter) {
            var parameterName = parameter.slice(1,-1);
            return String(parameters[parameterName]);
        });
}

function alertTimeout(wait, elementName) {
    var element = elementName || ".alert-messages";
    setTimeout(function(){
        $(element).hide();
    }, wait);
}