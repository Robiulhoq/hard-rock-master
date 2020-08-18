    const displaydata0 = document.getElementById('fastdisplay0');
    const displaydata1 = document.getElementById('fastdisplay1');
    const displaydata2 = document.getElementById('fastdisplay2');
    const displaydata3 = document.getElementById('fastdisplay3');
    const displaydata4 = document.getElementById('fastdisplay4');
    const displaydata5 = document.getElementById('fastdisplay5');
    const displaydata6 = document.getElementById('fastdisplay6');
    const displaydata7 = document.getElementById('fastdisplay7');
    const displaydata8 = document.getElementById('fastdisplay8');
    const displaydata9 = document.getElementById('fastdisplay9');

    const displaydataname0 = document.getElementById('singerName0');
    const displaydataname1 = document.getElementById('singerName1');
    const displaydataname2 = document.getElementById('singerName2');
    const displaydataname3 = document.getElementById('singerName3');
    const displaydataname4 = document.getElementById('singerName4');
    const displaydataname5 = document.getElementById('singerName5');
    const displaydataname6 = document.getElementById('singerName6');
    const displaydataname7 = document.getElementById('singerName7');
    const displaydataname8 = document.getElementById('singerName8');
    const displaydataname9 = document.getElementById('singerName9');

//last part id
 const extraDisplay0 = document.getElementById('lastdisplay0');
 const extraDisplay1 = document.getElementById('lastdisplay1');
 const extraDisplay2 = document.getElementById('lastdisplay2');
 const extraDisplay3 = document.getElementById('lastdisplay3');

 const extraDisplayName0 = document.getElementById('writer0');
 const extraDisplayName1 = document.getElementById('writer1');
 const extraDisplayName2 = document.getElementById('writer2');
 const extraDisplayName3 = document.getElementById('writer3');

// serch button
const btnname = document.getElementById('searchbtn').addEventListener('click', function(){
    const input = document.getElementById('nameOfSong').value;

    fetch('https://api.lyrics.ovh/suggest/'+input+'')
        .then(respon => respon.json())
        .then(data =>{
            
    function display(arruname){
             const name = data['data'][arruname]['title'];
             return name;
        }
    function displayname(arrayname){
             const singername = data['data'][arrayname]['artist']['name'];
             return singername;
        }
        const lyrics0 = displaydata0.innerText = display(0);
        const lyricsname0 = displaydataname0.innerText = displayname(0);

        const lyrics1 =  displaydata1.innerText = display(1);
        const lyricsname1 = displaydataname1.innerText = displayname(1);

        const lyrics2 =  displaydata2.innerText = display(2);
        const lyricsname2 = displaydataname2.innerText = displayname(2);

        const lyrics3 = displaydata3.innerText = display(3);
        const lyricsname3 = displaydataname3.innerText = displayname(3);

        const lyrics4 = displaydata4.innerText = display(4);
        const lyricsname4 = displaydataname4.innerText = displayname(4);

        const lyrics5 = displaydata5.innerText = display(5);
        const lyricsname5 = displaydataname5.innerText = displayname(5);

        const lyrics6 = displaydata6.innerText = display(6);
        const lyricsname6 = displaydataname6.innerText = displayname(6);

        const lyrics7 = displaydata7.innerText = display(7);
        const lyricsname7 = displaydataname7.innerText = displayname(7);

        const lyrics8 = displaydata8.innerText = display(8);
        const lyricsname8 = displaydataname8.innerText = displayname(8);

        const lyrics9 = displaydata9.innerText = display(9);
        const lyricsname9 = displaydataname9.innerText = displayname(9);
 // last part show display 
    const extraLyrics0 = extraDisplay0.innerText = display(0);
    const extraLyrics1 = extraDisplay1.innerText = display(1);
    const extraLyrics2 = extraDisplay2.innerText = display(2);
    const extraLyrics3 = extraDisplay3.innerText = display(3);

    const extralyricsname0 = extraDisplayName0.innerText = displayname(0); 
    const extralyricsname1 = extraDisplayName1.innerText = displayname(1); 
    const extralyricsname2 = extraDisplayName2.innerText = displayname(2); 
    const extralyricsname3 = extraDisplayName3.innerText = displayname(3); 
// lyrics part

    const lyricsOutput = document.getElementById('outputLyrics')   

        function lyricsdata(id ,lyricsnamesinger, lyricstitle){
            document.getElementById(id).addEventListener('click', function(){
                    fetch('https://api.lyrics.ovh/v1/'+lyricsnamesinger+'/'+lyricstitle+'')
                    .then(respon => respon.json())
                    .then(data =>{
                        const catchlyrics = data['lyrics']
                        lyricsOutput.innerText = catchlyrics;
                        
                       })
                       
                })
              }
      
       lyricsdata('lyrics1', lyricsname0, lyrics0);
       lyricsdata('lyrics2', lyricsname1, lyrics1);
       lyricsdata('lyrics3', lyricsname2, lyrics2);
       lyricsdata('lyrics4', lyricsname3, lyrics3);
       lyricsdata('lyrics5', lyricsname4, lyrics4);

       lyricsdata('lyrics6', lyricsname5, lyrics5);
       lyricsdata('lyrics7', lyricsname6, lyrics6);
       lyricsdata('lyrics8', lyricsname7, lyrics7);
       lyricsdata('lyrics9', lyricsname8, lyrics8);
       lyricsdata('lyrics10', lyricsname9, lyrics9);

       lyricsdata('lastlyrbtn1', extralyricsname0, extraLyrics0);
       lyricsdata('lastlyrbtn2', extralyricsname1, extraLyrics1);
       lyricsdata('lastlyrbtn3', extralyricsname2, extraLyrics2);
       lyricsdata('lastlyrbtn4', extralyricsname3, extraLyrics3);

        
    })
})
 
// last section bonus

   

   

