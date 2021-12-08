window.a = Object.fromEntries({});
window.b = new Set();
window.c = new WeakMap();
window.b.add(window);
window.c.set(window.a, window.b);
