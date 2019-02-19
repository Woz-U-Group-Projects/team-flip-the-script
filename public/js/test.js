
function validate(frm) {
    var ele = frm.elements['feedurl[]'];
    if (!ele.length) {
        alert(ele.value);
    }
    for (var i = 0; i < ele.length; i++) {
        alert(ele[i].value);
    }
    return true;
}

function add_feed() {
    var div1 = document.createElement('div');
    // Get template data
    div1.innerHTML = document.getElementById('newlinktpl').innerHTML;
    // append to our form, so that template data
    //becomes part of form
    document.getElementById('newlink').appendChild(div1);
}