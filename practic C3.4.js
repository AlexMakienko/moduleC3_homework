class Technique {
    constructor(name, brand, power, color, type){
      this.name = name;
      this.brand = brand;
      this.power = power +" W";
      this.color = color;
      this.type = type;
      this.isPlugged = false;
    }
    // включенный прибор
    powerOn() {
      console.log(this.name + " is ON !", " - Power supply - " + this.power);
      this.isPlugged = true;
    }
    
    // выключеный прибор
    powerOff() {
      console.log(this.name + " is OFF !");
      this.isPlugged = false;
    }
}
  
// Чайник
class Teapot extends Technique {
    constructor (name, brand, power, color, type, volume) {
      super(name, brand, power, color, type);
      this.volume = volume + " L";
      this.isPlugged = false;
    }
}
  
// Телевизор
class TV extends Technique {
    constructor(name, brand, power, color, type, size) {
      super(name, brand, power, color, type); 
      this.size = size + " inch";
      this.isPlugged = false;
    }
}
  
// Варочная панель
class Hob extends Technique {
    constructor(name, brand, power, color, type, comforks, view) {
      super(name, brand, power, color, type); 
      this.comforks = comforks;
      this.view = view;
      this.isPlugged = false;
    }
}
  
// экземпляр чайник
const homeTeapot = new Teapot("Home Teapot", "Philips", 1700, "Braun", "Termopot", "1.8");
  
// экземпляр TV
const homeTV = new TV("Home TV", "SONY", 80, "Silver", "QLED", "50");
  
// экземпляр плита
const homeHob = new Hob ("Home Hob", "Bosh", 7000, "Black", "Induction", "4-x", "embedded");
  
// включить чайник
homeTeapot.powerOn();

// включить ТВ
homeTV.powerOn();

// выключить плиту
homeHob.powerOff();
  
// результат
console.log(homeTeapot)
console.log(homeTV)
console.log(homeHob)