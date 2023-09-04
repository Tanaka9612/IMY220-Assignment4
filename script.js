// Compiled by Tanaka Humbani 15057420

// array of random colors
var colors = ['#7EE8FA','#80FF72', '#FFF07C','#EEC0C6','#E58C8A'];

// counting number of urls passed in.
let count = 0;

let urls = [0]; // Array to collect urls
let IDs = [];   //ID array

// a function to gather all the urls into one array
function checkIfUrl(word){
    var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return word.match(urlRegex);
}

// function to get the ID of each youtube URL for embedding it.
function getIDs(a){ 
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = a.match(regExp);
    return (match && match[2].length === 11)
      ? match[2] : null;
}
// check if the document is ready before DOM manipulations
$(document).ready(function(){
    $('#left, #right').on('click', function(){

        let m = document.getElementById("message").value;

        let urls = checkIfUrl(m);
        // operations
        if(urls==null && m !=="")
        {
            let html = '<div class="col-4 w-75 offset-4 mb-2 rounded">'+ m +'</div>';
            $('.messages').append(html);
            var random = colors[Math.floor(Math.random() * colors.length)];
            $('div.col-4:last-child').css('background-color', random);
        }
        else if(urls !== null){
            // get ids first 
            for(let d = 0 ; d < urls.length;d++){
                IDs[d] = getIDs(urls[d]);
            }
            for(let i = 0 ; i < urls.length ; i++){
                let html = '<div class="col-4 offset-4 mb-2 w-75 rounded">'+m+'<iframe width="100%" height="315px" src="//www.youtube.com/embed/'+IDs[i]+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>';
                $('.messages').append(html);
                var random = colors[Math.floor(Math.random() * colors.length)];
                $('div.col-4:last-child').css('background-color', random);
            }
        }
        else{//maybe its not needed
        }
    });
});
