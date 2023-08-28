var obj ={};

var Human  = function(name, age){
    //constructor Function;
    console.log(this);
    
    this.name = name;
    this.age = age;

    this.yearOfBirth = new Date().getFullYear() - age;

    this.walk = function(){
        console.log(this.name + ' walks home');
    }

    this.tryEats = function(){
        if(this.eats){
            console.log('Can eat');
        }else{
            console.log('Can-not eat');
        }
    }

    this.growUp = function(years){
        years = years || 1;
        this.age = this.age + years;
    }

    this.getYOB = function(){
        return this.yearOfBirth;
    }

}


console.log(Human());
var ishaan  = new Human('Ishaan', 28);
var vishal  = new Human('Vishal', 27);
var ranjita = new Human('Ranjita', 31);

debugger;

Human.prototype.eats = function(){
    console.log(this.name + ' eats');
}

debugger;