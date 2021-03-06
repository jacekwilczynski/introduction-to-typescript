(function asMap() {
    const quantitiesKeyedByProductId = new Map<string, number>();

    quantitiesKeyedByProductId.set('a7de0a2ac96d43b08592f4c81f3fa421', 3);
    quantitiesKeyedByProductId.set('84ba8ff79717457e93428316470baa8a', 5);

    console.log(quantitiesKeyedByProductId);
})();

(function asPlainObject() {
    interface StringToNumberMap {
        [key: string]: number;
    }

    const quantitiesKeyedByProductId: StringToNumberMap = {};

    quantitiesKeyedByProductId['a7de0a2ac96d43b08592f4c81f3fa421'] = 3;
    quantitiesKeyedByProductId['84ba8ff79717457e93428316470baa8a'] = 5;

    console.log(quantitiesKeyedByProductId);
})();
