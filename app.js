// **************AUDIO***************************

var audios = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;
var trans = document.getElementById('transition')

function playPause  (){
	if(count == 0){
		count = 1;
		 audios.play();
        
	} 
    else{
		count = 0;
		audios.pause();
	}
}


const audio = document.getElementById('desmain');

audio.load();

document.querySelector('.btn-roll').addEventListener('click', e => {
    audio.currentTime = 11;
    audio.play();
  })
  


  
// ****************GAME***********************************


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

// ********ROLL DICE********
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
            500
            );
                if(dice !== 1) {       
                   
                    roundScore += dice;
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                } else {
                    const looserSong = document.getElementById('looserSong')
                    looserSong.play()
                    nextPlayer();
                }  
            };
         });
      
    

// ********BTN HOLD*********

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

// ********BTN NEW AND INIT FUNCTION********

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
    document.getElementById('transition');
    trans.play();
    }

    
