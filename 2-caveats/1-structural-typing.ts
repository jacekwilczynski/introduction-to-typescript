// TypeScript has *structural* typing, as opposed to *nominal* typing found in Java, PHP, etc.

interface EntityIndexer {
    index(entity: object): void;
}

class CategoryIndexer implements EntityIndexer {
    index(entity: object): void {
    }
}

class ProductIndexer implements EntityIndexer {
    index(entity: object): void {
    }
}

const indexers: EntityIndexer[] = [
    new CategoryIndexer(),
    new ProductIndexer(),
];
