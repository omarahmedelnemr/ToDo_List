active = []
function active_timers(element){
    for (i=0;i<$('.task').length;i++){
        if( $(element).parents('.task')[0] ==$('.task')[i]){
            if ($(element).text() == 'timer_off'){
                $(element).children('i').text('timer')
                active.push($(element).parents('.timer').children('.time')[0])
            }else if ($(element).text() == 'timer'){
            new_active = []
            for (i=0;i<active.length;i++){
                if ( active[i] !=($(element).parents('.timer').children('.time')[0])){
                    new_active.push(active[i])
                }}
                active = new_active
                $(element).children('i').text('timer_off')
            }
        break
        }
    }
}


function set_timer(){
$('.start_timer').unbind()
$('.start_timer').on('click',function(){

    active_timers(this)
})
}
function increase(num){
    time = num.split(':')
    hours = Number(time[0])
    minutes = Number(time[1])
    seconds = Number(time[2])

    seconds=seconds+1
    if (seconds>=60){
        minutes+=1
        seconds = 0
    }
    if (minutes>=60){
        hours+=1
        minutes = 0
    }
    hours = String(hours)
    minutes = String(minutes)
    seconds = String(seconds)

    if (hours.length<2){
        hours ='0'+hours
    }
    if (minutes.length<2){
        minutes ='0'+minutes
    }
    if (seconds.length<2){
        seconds = '0'+seconds
    }
    time = hours+':'+minutes+':'+seconds
    return time
}
function run(){
    for (i=0;i<active.length;i++){
        time = $(active[i]).text()
        time = increase(time)
        $(active[i]).text(time)
//        save_all()
    }
}
set_timer()

setInterval(run,1000)