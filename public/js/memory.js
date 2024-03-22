(function(){
	
	var Memory = {

		init: function(cards){
			this.$game = $(".game");
			this.$modal = $(".modal");
			this.$overlay = $(".modal-overlay");
			this.$restartButton = $("button.restart");
			this.cardsArray = $.merge(cards, cards);
			this.shuffleCards(this.cardsArray);
			this.setup();
		},

		shuffleCards: function(cardsArray){
			this.$cards = $(this.shuffle(this.cardsArray));
		},

		setup: function(){
			this.html = this.buildHTML();
			this.$game.html(this.html);
			this.$memoryCards = $(".card");
			this.paused = false;
     	this.guess = null;
			this.binding();
		},

		binding: function(){
			this.$memoryCards.on("click", this.cardClicked);
			this.$restartButton.on("click", $.proxy(this.reset, this));
		},
		// kinda messy but hey
		cardClicked: function(){
			var _ = Memory;
			var $card = $(this);
			if(!_.paused && !$card.find(".inside").hasClass("matched") && !$card.find(".inside").hasClass("picked")){
				$card.find(".inside").addClass("picked");
				if(!_.guess){
					_.guess = $(this).attr("data-id");
				} else if(_.guess == $(this).attr("data-id") && !$(this).hasClass("picked")){
					$(".picked").addClass("matched");
					_.guess = null;
				} else {
					_.guess = null;
					_.paused = true;
					setTimeout(function(){
						$(".picked").removeClass("picked");
						Memory.paused = false;
					}, 600);
				}
				if($(".matched").length == $(".card").length){
					_.win();
				}
			}
		},

		win: function(){
			this.paused = true;
			setTimeout(function(){
				Memory.showModal();
				Memory.$game.fadeOut();
			}, 1000);
		},

		showModal: function(){
			this.$overlay.show();
			this.$modal.fadeIn("slow");
		},

		hideModal: function(){
			this.$overlay.hide();
			this.$modal.hide();
		},

		reset: function(){
			this.hideModal();
			this.shuffleCards(this.cardsArray);
			this.setup();
			this.$game.show("slow");
		},

		// Fisher--Yates Algorithm -- https://bost.ocks.org/mike/shuffle/
		shuffle: function(array){
			var counter = array.length, temp, index;
	   	// While there are elements in the array
	   	while (counter > 0) {
        	// Pick a random index
        	index = Math.floor(Math.random() * counter);
        	// Decrease counter by 1
        	counter--;
        	// And swap the last element with it
        	temp = array[counter];
        	array[counter] = array[index];
        	array[index] = temp;
	    	}
	    	return array;
		},

		buildHTML: function(){
			var frag = '';
			this.$cards.each(function(k, v){
				frag += '<div class="card" data-id="'+ v.id +'"><div class="inside">\
				<div class="front"><img src="'+ v.img +'"\
				alt="'+ v.name +'" /></div>\
				<div class="back"><img src="https://files.u-angers.fr/data/f-8a0fe26aad8b84b52bbec79c.PNG"\
				alt="Memory" /></div></div>\
				</div>';
			});
			return frag;
		}
	};

	var cards = [
		{
			name: "Lapin",
			img: "https://files.u-angers.fr/data/f-fae0d38bff5a23c5eee7f6c6.PNG",
			id: 1,
		},
		{
			name: "Taureau",
			img: "https://files.u-angers.fr/data/f-a422b6f0c39f471caad23cdb.PNG",
			id: 2
		},
		{
			name: "Alligator",
			img: "https://files.u-angers.fr/data/f-6fb9be100f1da4fc3fd6b0d2.PNG",
			id: 3
		},
		{
			name: "Tigre",
			img: "https://files.u-angers.fr/data/f-f47ab0f8f4f68a0d6d9ac1b5.PNG",
			id: 4
		}, 
		{
			name: "Chat",
			img: "https://files.u-angers.fr/data/f-df9f56ae2746247b6b6af49b.PNG",
			id: 5
		},
		{
			name: "Poussin",
			img: "https://files.u-angers.fr/data/f-3cfdd5b34470eb1b93d1b281.PNG",
			id: 6
		},
		{
			name: "Renard",
			img: "https://files.u-angers.fr/data/f-43973f369bd71ec35dd5158c.PNG",
			id: 7
		},
		{
			name: "Aigle",
			img: "https://files.u-angers.fr/data/f-489ae0a8462239960b612a67.PNG",
			id: 8
		},
		{
			name: "Pingouin",
			img: "https://files.u-angers.fr/data/f-cc93dfb88c910c3ee4632908.PNG",
			id: 9
		},
		{
			name: "Chien",
			img: "https://files.u-angers.fr/data/f-9ec7bd456ad5bad71dbf84f1.PNG",
			id: 10
		},
		{
			name: "Dragon",
			img: "https://files.u-angers.fr/data/f-8b75a58e52c989ddd32e0d7f.PNG",
			id: 11
		},
		{
			name: "Requin",
			img: "https://files.u-angers.fr/data/f-8df99aecaba35841b872670c.PNG",
			id: 12
		},
	];
    
	Memory.init(cards);


})();