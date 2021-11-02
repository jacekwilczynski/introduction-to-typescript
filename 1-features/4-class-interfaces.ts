interface Surface {
    getArea(): number;
}

class Rectangle implements Surface {
    public constructor(
        private readonly width: number,
        private readonly height: number
    ) {
    }

    public getArea(): number {
        return this.width * this.height;
    }
}

class Circle implements Surface {
    constructor(
        private readonly radius: number
    ) {
    }

    public getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

function printAreas(shapes: Surface[]): void {
    for (const shape of shapes) {
        console.log(shape.getArea());
    }
}

printAreas([
    new Rectangle(2, 3),
    new Circle(4),
]);
