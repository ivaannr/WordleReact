export default class Stack {

    constructor() { this.items = []; }

    push(element) { this.items.push(element); }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.items.length - 1];
    }

    clear() {
        this.items = [];
    }

    count() {
        return this.items.length;
    }

    index(item) {
        return this.items.indexOf(item);
    }

    contains(valor) {
        return this.items.includes(valor);
    }

    print() {
        return this.items.join("").toString().toUpperCase() ?? "...";
    }

    forEach(callback) {
        this.items.forEach(callback);
    }

    toArray() {
        return this.items;
    }

    isEmpty() { return this.items.length === 0; }

    size() { return this.items.length; }

    log() { console.log(this.items); }
}