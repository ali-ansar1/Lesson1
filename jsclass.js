class Person {
    constructor(name, dob, family) {
        this.name = name,
        this.dob = dob;
        this.family = family;
    }

    getAge() {
        var now = new Date();
        var years =  now.getFullYear()  - this.dob.getFullYear();
        return years + " yrs. old";
    }

    addFamilyMember(name, relation) { 
        if(this.family == null) { this.family = [];}
        var family = {
            name: name,
            relation: relation
        };
        this.family.push(family);
    }
};


var danish = new Person("Mohd danish", new Date(1995, 4, 20), []);

console.log(danish.name + " and he is " + danish.getAge());
console.log(danish);
danish.addFamilyMember("Maqsood Alam", "Father");
console.log(danish);


class Rectangle {
    constructor(width, height, unit) {
        this.width =  width;
        this.height = height;
        this.unit = unit;
        this.shapeName = "rectangle";
    }

    get description () {
        return "this is a "+ this.shapeName + " with a width of " 
        + this.width + " " + this.unit
        + " and height " + this.height + " " + this.unit;
    }

    set horizontalSize(w) {
        this.width = w;
    }

    getPermiter() {
        var perimeter = 2 * (this.width + this.height);
        return perimeter + " " + this.unit;
    }

    getArea() {
        var area = this.width * this.height;
        return area + " " + this.unit;
    }

}

var myRect = new Rectangle(10.5, 32.3450, "meters");
console.log(myRect);
console.log(myRect.getPermiter());
console.log(myRect.getArea());


console.log(myRect.description);
myRect.horizontalSize = 4;
console.log(myRect.description);

class Square extends Rectangle {
    constructor(side, units) {
        super(side, side,units);
        this.shapeName = "square";
    }
}

var sq = new Square(4, "feets");
console.log(typeof(sq), sq);

console.log(sq.getPermiter(), sq.getArea());
console.log(sq.description);





