$('#addList').hide()
$('#addList').css({'height':'0px'})
$('#plus').click(function(){

    if ($('#addList').css('display') == 'none'){
        $('this').animate({transform: 'rotateZ(45deg)'},100)
        $('#addList').show()
        $('#addList').animate({height:'42px'},100)
        $(this).css({'transform': 'rotateZ(45deg)'})
        $('#addList input').focus()
    }
    else if($('#addList').css('display') == 'block'){
        $('#addList').animate({height:'0px'},100,function(){
            $('#addList').hide()
        })
        $(this).css({'transform': 'rotateZ(0deg)'})

    }
})

$('#add').click(function(){
    title = $('#title_input').val()
    if (title != ''){
        $('#not_finished').append("<div class = 'task'><span class='line' style ='background-color:"+themes[active_theme]['footer']+"'></span><h3 class='title'>"+title+"</h3><p class = 'timer'><button class ='start_timer'><i class='material-icons'>timer_off</i></button><span class='time'>00:00:00</span></p><div class='right' style = 'display:none'><input type='checkbox' name = 'Done' class='done'><button class = 'close'>X</button></div></div>")
        tasks_json.push({"title": title,"timer": "00:00:00","status": "not_done"})
        set_event()
        set_timer()
        if ($('.task').length ==1){
            $('#not_yet').hide()
        }
    }
    $('#title_input').val('')
    $('#from').val('')
    $('#to').val('')
})
$('#title_input').on("keyup", function(event){
   if (event.key =='Enter'){
        $('#addList button').trigger('click')
   }
});
