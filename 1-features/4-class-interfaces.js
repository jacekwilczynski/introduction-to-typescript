class Rectangle {
    width;
    height;

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle {
    radius;

    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

function printAreas(shapes) {
    for (const shape of shapes) {
        console.log(shape.getArea());
    }
}

printAreas([
    new Rectangle(2, 3),
    new Circle(4),
]);
