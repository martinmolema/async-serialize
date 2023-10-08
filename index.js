window.onload = () => {
    init();
}

function init() {
    const p1 = () => test(1);
    const p2 = () => test(2);
    const p3 = () => test(3);
    const p4 = () => test(4);
    const p5 = () => test(5);

    const items = [p1, p2, p3, p4, p5];
    handleTask(items, 0).then(() => console.log(`done`));
}

function handleTask(items, num) {
    if (num >= items.length) {
        return Promise.resolve();
    }
    console.log(`Handling task ${num}`);
    return items[num]().then(() => {
        if (num < items.length) {
            return handleTask(items, num + 1);
        }
        return Promise.resolve();
    });
}

function test(num) {
    const timeout = (2 + Math.random(4)) * 1000;
    console.log(`Creating promise for ${num} ; wait ${timeout}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Promise done: ${num}`);
            resolve(num);
        }, timeout);

    });
}