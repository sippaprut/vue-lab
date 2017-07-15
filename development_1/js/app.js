var app = new Vue({
	el : "#app" ,
	data : {
		playerPoint : 100 ,
		monsterPoint : 100 ,
		
		logs : [] ,
		isStart : false
	} ,

	methods : {
		newGame : function() {
			this.playerPoint = 100;
			this.monsterPoint = 100;
			this.isStart = true;
			this.logs = [];
		} ,

		random : function ( max , min) {
			return Math.round(Math.random() * ( max - min ));
		} , 

		attack : function() {
			var vm = this;
			var maxAttack = 5;
			var minAttack = 1;
			this.calulateAttackPoint(vm.random(maxAttack , minAttack ) , vm.random(maxAttack , minAttack ) );
		} ,

		specialAttack : function() {
			var vm = this;
			var maxAttack = 20;
			var minAttack = 5;
			this.calulateAttackPoint(vm.random(maxAttack , minAttack ) , vm.random(maxAttack , minAttack ) );
		} ,

		calulateAttackPoint : function ( playerPoint , monsterPoint ) {
			var player =  { 
				status : 'player' , 
				damage : playerPoint ,  
				action : 'attack' 
			};
			var monster = { 
				status : 'monster' , 
				damage : monsterPoint ,  
				action : 'attack' 
			};
			
			this.playerPoint -=  monster.damage;
			this.monsterPoint -= player.damage;

			this.logs.unshift(player);
			this.logs.unshift(monster);
		} ,

		heal : function () {
			var vm = this;
			if ( this.playerPoint < 100 ) {
				var player = { 
					status : 'player' , 
					damage : 10 ,  
					action : 'heal' 
				};
				this.playerPoint += player.damage;
				if (this.playerPoint > 100 ) this.playerPoint = 100;
				this.logs.unshift(player);
			}
		} ,

		checkStatus : function( info ) {
			if ( info.action == "attack")
			return info.status == 'player' ? "list-group-item-info" : "list-group-item-danger";
			else return 'list-group-item-success';
		} ,
		resultDamage : function( damage ) {
			return damage > 0 ? damage : 'miss';
		}
	} ,

	watch :  {
		playerPoint : function( value ) {
			if ( value <= 0 )
			{
				if (confirm("You are lose!! , Are you need continue new game?")) {
					this.newGame();
				}
				else 
				{
					this.isStart = false;
				}
				
			}
		} ,
		monsterPoint : function ( value ) {
			if ( value <= 0 )
			{
				if (confirm("You are lose!! , Are you need continue new game?")) {
					this.newGame();
				}
				else {
					this.isStart = false;
				}
			}
		}
	}
});