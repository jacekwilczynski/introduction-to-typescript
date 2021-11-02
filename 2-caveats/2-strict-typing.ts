// When you use a *statically* & *strictly* typed, language to write code that will be executed in the environment
// of a *dynamically* and *loosely* typed language, you may have to jump through some hoops.

declare global {
    interface Window {
        someCustomGlobal: string;
    }
}

(function () {
    // "shut up, TypeScript"
    console.log((<any>window).someCustomGlobal);

    // after using `declare`
    console.log(window.someCustomGlobal);
})();
