const fs = require('fs')
try{
    data =fs.readFileSync('js/data.json')
    data = JSON.parse(data);
}catch{
    data = {'tasks':[],"active_theme":"th5"}
}
tasks_json = data['tasks']
active_theme = data['active_theme']
$('body').css({'background-color':themes[active_theme]['background']})
$('#plus').css({'background-color':themes[active_theme]['footer']})
$('#setting').css({'background-color':themes[active_theme]['footer']})
$('#addList').css({'background-color':themes[active_theme]['footer']})
for (i=0;i<tasks_json.length;i++){
    if (tasks_json[i]['done']==false){
       $('#not_finished').append("<div class = 'task'><span class='line'></span><h3 class='title'>"+tasks_json[i]['title']+"</h3><p class = 'timer'><button class ='start_timer'><i class='material-icons' style='display=none'>timer_off</i></button><span class='time'>"+tasks_json[i]['timer']+"</span></p><div class='right' style = 'display:none;'><input type='checkbox' name = 'Done' class='done'><button class = 'close'>X</button></div></div>")

    }else{
       $('#finished').append("<div class = 'task' style='text-decoration: line-through'><span class='line'></span><h3 class='title'>"+tasks_json[i]['title']+"</h3><p class = 'timer'><button class ='start_timer' style='display:none'><i class='material-icons'>timer_off</i></button><span class='time'>"+tasks_json[i]['timer']+"</span></p><div class='right' style = 'display:block;'><input type='checkbox' name = 'Done' class='done' checked ><button class = 'close'>X</button></div></div>")

    }
}
$('.line').css({'background-color':themes[active_theme]['footer']})

//Save All The Actions
function save_all(){
data = {'tasks':[],"active_theme":""}
    for (i=0;i<$('.task').length;i++){
        data['tasks'].push({
            "title":$($('.task')[i]).children('.title').text(),
            "timer":$($('.task')[i]).children('.timer').children('.time').text(),
            "done":$($('.task')[i]).children('.right').children('.done')[0].checked
        })
    }
    data['active_theme'] = active_theme
    fs.writeFile('js/Data.json',JSON.stringify(data),(err)=>{return;})
}

 $('*').click(function () {
    save_all()
  });