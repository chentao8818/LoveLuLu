        var audio_music=document.getElementById('audio_music'); 
        var audio_record=document.getElementById('audio_record'); 
        

        //控制音乐切换播放暂停 
        var img_music=document.getElementById('img_music');
        var timeout_music;
        function music_switch(){ //切换   
            clearTimeout(timeout_music);  
            if(audio_music.paused){
                console.log('switch music to play');
                audio_music.play();
                audio_record.pause(); //播放音乐时录音一定暂停                
                img_music.style.webkitAnimation="music_play_rotate 1s linear infinite";
                $(".div_music_tips").html("正播放").show();                
                timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500);
            }else{
                console.log('switch music to paused'); 
                audio_music.pause();
                // audio_record.play(); //
                img_music.style.webkitAnimation="";
                $(".div_music_tips").html("已暂停").show();  
                timeout_music=setTimeout(function(){$(".div_music_tips").hide()}, 2500); 
            } 
        }

        var timeout_record;
        var div_record=document.getElementById('div_record');
        function record_switch(){ //切换 
            clearTimeout(timeout_record);
            if(audio_record.paused){
                console.log('switch record to play'); 
                audio_record.play();
                audio_music.pause(); //
                img_music.style.webkitAnimation="";
                div_record.style.webkitAnimation="btn_rotate 1s linear infinite";
                $(".div_record_tips").html("正播放").show(); 
                timeout_record=setTimeout(function(){$(".div_record_tips").hide()}, 2500);
            }else{
                console.log('switch record to pause');  
                audio_record.pause(); //播放音乐时录音一定暂停
                audio_music.play();                
                img_music.style.webkitAnimation="music_play_rotate 1s linear infinite";
                div_record.style.webkitAnimation="";
                $(".div_record_tips").html("已暂停").show();  
                timeout_record=setTimeout(function(){$(".div_record_tips").hide()}, 2500); 
            } 
        }



       

      
        

        


        
