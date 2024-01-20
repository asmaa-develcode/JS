class Square {
    constructor(side) {
      this.side = side;
    }
  }
  
  class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  }
  
  class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  }
  
  class AreaCalculator {
    static calculate(area){
      if( area instanceof Square){                      
        return area.side*area.side;         //Puesto que el area cuadrado=ladoxlado

      }
      else if(area instanceof Rectangle){
        return area.width*area.height;        //Puesto que el area de un rectángulo=largoxancho
      }
      else if(area instanceof Circle){
        return area.radius**2 *Math.PI;  //Puesto que el area de un círculo= número pi*radio al cuadrado 
      }
    }
  }
  
  const square = new Square(4);
  const rectangle = new Rectangle(4, 2);
  const circle = new Circle(5);
  
  console.log(AreaCalculator.calculate(square));
  console.log(AreaCalculator.calculate(rectangle));
  console.log(AreaCalculator.calculate(circle));