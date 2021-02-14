$('.task').css({'width':'288px'})

if ($('.task').length ==0){
     $('#not_yet').show()
}
function set_event(state ='hide'){
    $('.task').on('mouseenter',function(){
        $(this).animate({width:'290px'},50)
        $(this).children('.right').fadeIn(100)
        $(this).children('.title').css({'max-width':'200px'})
    })
    $('.task').on('mouseleave',function(){
        $(this).animate({width:'288px'},50)
        if ($(this).children('.right').children('.done')[0].checked ==false){
            $(this).children('.right').fadeOut(100)
             $(this).children('.title').css({'max-width':'300px'})


        }
    })
$('.done').on('click',function(){
    if ($(this)[0].checked){
        $(this).parents('.task').css({'text-decoration': 'line-through'})
            $($(this).parents('.task').children('.timer').children('.start_timer')[0]).children('i').text('timer')
            active_timers($($(this).parents('.task').children('.timer').children('.start_timer')[0]))
            $($(this).parents('.task').children('.timer').children('.start_timer')[0]).hide()

            $(this).parents('.task').animate({left:'110%'},300,function(){
                $(this).remove()
                $('#finished').append(this)
                $(this).children('.right').show()
                $(this).animate({left:'0%'})

            set_event()
            })

    }else if ($(this)[0].checked == false){
            $(this).parents('.task').css({'text-decoration': 'none'})
                $($(this).parents('.task').children('.timer').children('.start_timer')[0]).show()
                $(this).parents('.task').animate({left:'110%'},function(){
                    $(this).remove()
                    $('#not_finished').append(this)
                    $(this).children('.right').hide()
                    $(this).animate({left:'0%'})

                set_event()
                set_timer()
        })
    }
    })
    $('.close').click(function(){
        $(this).parents('.task').animate({height:'0px'},200,function(){
            $(this).remove()
            if ($('.task').length ==0){
                $('#not_yet').show()
            }
            save_all()

        })
    })
}


set_event()

$('.task').click(function(){
    if ($('#addList').css('display')=='block'){
        $('#plus').trigger('click')
    }
})