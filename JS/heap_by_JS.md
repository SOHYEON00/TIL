# 자바스크립트로 힙 구현하기

> ref https://1ilsang.dev/2020-04-02/js/heap

<br/>
<br/>

```
function add(n) {
    if( this.idx + 1 === this.arr.length) throw Error('Stack Overflow');

    let idx = ++this.idx;
    this.arr[idx] = n;

    while(idx > 1) {
        const nextIdx = idx >> 1;
        const parent = this.arr[nextIdx];
        const cur = this.arr[idx];

        if(parent <= cur) break;

        this.arr[nextIdx] = cur;
        this.arr[idx] = parent;

        idx >>= 1;
    }
}

function main() {
    const heap = new heap();
    for (let i = 10; i > 0; i--) {
        heap.add(i);
    }
    heap.print();

    while(heap.peek()){
        console.log(heap.pop(), heap.idx)
        heap.print();
    }
}

main();
```