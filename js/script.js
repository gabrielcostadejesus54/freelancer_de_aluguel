// Menu
let menu = $('.fa-bars')
let nav = $('.menu-mobile ul')

$(menu).click(function(){
    if($(nav).is(":hidden")){
        $(menu).removeClass('fa-bars')
        $(menu).addClass('fa-xmark')
    }else{
        $(menu).removeClass('fa-xmark')
        $(menu).addClass('fa-bars')
    }
    $(nav).slideToggle()
})
// Fim Menu

