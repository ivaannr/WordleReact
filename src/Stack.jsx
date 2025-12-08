export default class Stack {

    constructor(items = []) {
        this.items = [...items];
    }

    push(element) {
        return new Stack([...this.items, element]);
    }

    pop() {
        if (this.isEmpty()) return this;
        return new Stack(this.items.slice(0, -1));
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    clear() {
        return new Stack([]);
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
        return this.items.join("").toUpperCase() ?? "...";
    }

    forEach(callback) {
        this.items.forEach(callback);
    }

    toArray() {
        return [...this.items];
    }

    get(index) {
        return this.items[index] ?? null;
    }

    isEmpty() { return this.items.length === 0; }

    size() { return this.items.length; }

    clone() {
        return new Stack(this.items);
    }
}
