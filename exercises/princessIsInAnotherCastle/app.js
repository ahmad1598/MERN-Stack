class Player {
    constructor(name,totoalCoins,status,hasStar){
        this.name = name;
        this.totoalCoins = totoalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = true;
    }

    setName(namePicked){
        this.name = namePicked;
    }

    gotHit(){
        if(this.status != 'Dead'){
            if(this.status === 'Powered Up'){
                this.status = 'Big';
                this.gotPowerup();
            } else if(this.status === 'Big'){
                this.status = 'Small';
            } else if(this.status === 'Small'){
                this.status === 'Dead';
                this.gameActive = false;
            }
        }
      
    }

    gotPowerup(){
        if(this.status === 'Small'){
            this.status = 'Big';
        } else if(this.status === 'Big'){
            this.status === 'Powered Up';
        } else if (this.status === 'Powered Up'){
            this.hasStar = true;
        } else if(this.status === 'Dead'){
            console.log('You are Dead.')
        }
    }

    addCoin(){
        this.totoalCoins++;
    }

    print(){
        if(!this.hasStar){
            console.log(`Name: ${this.name}
Status: ${this.status}
Total Coins: ${this.totoalCoins}
               
        `)
        
        } else{
            console.log(`Congratulations! You got a star!
Name: ${this.name}
Total Coins: ${this.totoalCoins}
Status: ${this.status}
You have Star

        `)
        this.hasStar = false;
        }
        
    }

}

let luigi = new Player("Luigi",0,"Small", false);

function randomRange() {
    let rnd = Math.floor(Math.random() * 3);
    if(rnd === 0){
        luigi.gotHit();
    } else if(rnd === 1){
        luigi.gotPowerup();
        
    } else{
        luigi.addCoin();
    }

    luigi.print();
    if(luigi.gameActive === false){
        clearInterval(game)
    }
    
}
const game = setInterval(randomRange,1000);


