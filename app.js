// **************AUDIO***************************

var audios = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audios.play();
		playPauseBTN.innerHTML = img.src= "la-musique.png ,&#9208;";
	}else{
		count = 0;
		audios.pause();
		playPauseBTN.innerHTML =img.src= "la-musique.png ,&#9658;";
	}

}

function stop(){
	playPause()
	audios.pause();
	audios.currentTime = 0;
	playPauseBTN.innerHTML = "Play &#9658;";
}

const audio = document.getElementById('desmain');

audio.load();
// ****************GAME***********************************
document.querySelector('.btn-roll').addEventListener('click', e => {
  audio.currentTime = 11;
  audio.play();
})


var scores, roundScore, activePlayer, gamePlaying;
let images = ["loose",
"img/die1.svg",
"img/die2.svg",
"img/die3.svg",
"img/die4.svg",
"img/die5.svg",
"img/die6.svg",
];

let random = document.querySelectorAll("img");




init();

document.querySelector('.btn-roll').addEventListener('click',  function (){   
    if(gamePlaying) {
        var dice =  Math.floor(Math.random() *6+1);
                console.log(dice );
               

            random.forEach(function(die){
                die.classList.add("shake");
            });
            setTimeout(function(){
                random.forEach(function(die){
                    die.classList.remove("shake");
                });
                document.querySelector(".dice").setAttribute("src", images[dice]);
            },
            1000
            );
                if(dice !== 1) {       
                   
                    roundScore += dice;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                } else {
                    const looserSong = document.getElementById('looserSong')
                    looserSong.play()
                    looserSong.currentTime=1;
                    
                    nextPlayer();
                }  
            };
         });
      
    



document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if(gamePlaying) {

        scores[activePlayer] += roundScore; 

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  
        if(scores[activePlayer] >= 100) {

          
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            // Adding the 'winner' class to the player
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');

            // Removing the active player status from the winner 
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            // Changing the 'gamePlaying' variable to 'false' 
            gamePlaying = false;

        } else {
            // If the player wins the game, then it's the next player's turn
            nextPlayer();
        }
    }
});

    

document.querySelector(".btn-new").addEventListener('click', init);

function init() {

  gamePlaying = true;

  scores = [0, 0];

  activePlayer = 0;

  roundScore = 0;

  

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0'; 


//   document.getElementById('name-0').textContent = 'Joueur 1';
//   document.getElementById('name-1').textContent = 'Joueur 2'; 
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}

function nextPlayer() {
 
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    


}
