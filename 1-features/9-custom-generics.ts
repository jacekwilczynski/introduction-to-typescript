interface Entity {
    id: string;
}

interface Product extends Entity {
    name: string;
    price: number;
}

abstract class EntityRepository {
    put(entity: Entity): void {
    }
}

class ProductRepository extends EntityRepository {
}

const productRepository = new ProductRepository();

productRepository.put({
    id: '899f809e43a74047a9e1ead825b8751a',
});
