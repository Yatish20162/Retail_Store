$(document).ready(function () {
    $("#refresh").click(function () {
        $("#qtyInput").val(0);
    })

    $("#delete").click(function () {
        $(".name").remove();
    })


    $("Net").click(function () {

        var ary = document.getElementsByName("elements");
        var ans = 0;
        for (i = 0; i < ary.length; i++) {
            ans += ary[i].value;
        }

        alert(ans);
    })

    function doAdd() {
        alert();
        const div=document.querySelector('#newProductDetails'); 
        div.innerHTML.appendChild("section");
    }
})


