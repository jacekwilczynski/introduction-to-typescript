interface Entity {
    id: string;
}

interface Product extends Entity {
    name: string;
    price: number;
}

abstract class EntityRepository<T extends Entity> {
    put(entity: T): void {
    }
}

class ProductRepository extends EntityRepository<Product> {
}

const productRepository = new ProductRepository();

productRepository.put({
    id: '899f809e43a74047a9e1ead825b8751a',
    name: 'Super product',
    price: 123.45,
});
