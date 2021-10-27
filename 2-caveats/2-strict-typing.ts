// When you use a *statically* & *strictly* typed, language to write code that will be executed in the environment
// of a *dynamically* and *loosely* typed language, you may have to jump through some hoops.

(function () {
    console.log(window.someCustomGlobal);
})();
