setting_state = 'close'
$('#settingList button').hide()

for(i=1;i<6;i++){
    id = 'th'+String(i)
    $('#'+id).css({'background-color':themes[id]['background']})
}
$('#setting').click(function(){
    if ($('#addList').css('display')=='block'){
        $('#plus').trigger('click')
    }
    if (setting_state =='close'){
        $('#settingList button').show()

        $('#th1').animate({left:'55px'},50,function(){
            $('#th2').animate({left:'90px'},50,function(){
                $('#th3').animate({left:'125px'},50,function(){
                    $('#th4').animate({left:'160px'},50,function(){
                        $('#th5').animate({left:'195px'},50,function(){

                        })

                    })

                })

            })

        })
        setting_state = 'open'
    }else if(setting_state == 'open'){
        $('#th5').animate({left:'50px'},50,function(){
            $(this).hide()
            $('#th4').animate({left:'50px'},50,function(){
                        $(this).hide()

                $('#th3').animate({left:'50px'},50,function(){
                            $(this).hide()

                    $('#th2').animate({left:'50px'},50,function(){
                                $(this).hide()

                        $('#th1').animate({left:'50px'},50,function(){
                                    $(this).hide()

                        })

                    })

                })

            })

        })
        setting_state = 'close'
    }
})
$('#settingList button').click(function(){
        name =$(this).attr('id')
        active_theme = name
        $('body').css({'background-color':themes[name]['background']})
        $('#footer #setting').css({'background-color':themes[name]['footer']})
        $('#footer #plus').css({'background-color':themes[name]['footer']})
        $('#addList').css({'background-color':themes[name]['footer']})
        $('.line').css({'background-color':themes[name]['footer']})
})
