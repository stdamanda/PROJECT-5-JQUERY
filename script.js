$(document).ready(function(){
    //element
    $('h1').click(function(){
        $(this).hide()
    })

    //class
    $('.textClass').click(function(){
        $(this).hide()
    })

    //id
    $('#textId').click(function(){
        $(this).hide()
    })

    $('#show').click(function(){
        $('#textId').show()
    })
    $('#hide').click(function(){
        $('#textId').hide()
    })


    //DOUBLE CLICK
    $('.doubleClick').dblclick(function(){
        $('.alert').hide()
    })

    //TOGGLE METODE BISA 2 FUNGSI
    $('.toggle').click(function(){
        $('.contentToggle').toggle()

        if($(this).text() == "Show"){
            $(this).text("Hide")
        }else{
            $(this).text("Show")
        }
    })

    //CHANGE
    //selama ga ada perlubahan, dia ga akan jalan
    $('#name').change(function(){
        $('.alertName').show()
    })

    //BLUR
    //kalau udah di klik trs klik yg lain dia akan jalan
    $('#email').blur(function(){
        $('.alertEmail').show()
    })


    //ANIMASI
    $('#smaller').click(function(){
        $('.box').animate({
            width: "100px",
            height : "100px",
            marginLeft : "500px"
        },500).css({ //500 kaya pergerakannya cepat lambatnya
            backgroundColor :"#dedede"
        })
    })

    //ADD CLASS
    $('.action').click(function(){
        $('.box').addClass("active")
    })


    //REMOVE CLASS
    $('.actionRemove').click(function(){
        $('.box').removeClass("active")
    })





    //PRODUCT TAB
    $('.product-item').hide()
    $('.product-item:first').show()

    $('.product-colors div a:not(:first)').addClass('inactive')

    $('.product-colors div a').on('click', function(){
        const n = $(this).attr('id')
        if($(this).hasClass('inactive')){
            $('.product-colors div a').addClass('inactive')
            $(this).removeClass('inactive')
        }

        $('.product-item').hide()
        //$('#' + n + 'image').show()
        //fadeIn ngasih sedikit effect pergantian gambarnya
        $('#' + n + 'image').fadeIn()
    })
})