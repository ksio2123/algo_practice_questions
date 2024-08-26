const assert = require('assert');
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    // bfs

    // create map of node to list of other nodes;
    let map = new Map();
    for (let i = 0; i < edges.length; i++) {
        let [from, to] = edges[i];
        if (!map.has(from)) {
            map.set(from, []);
        }
        // what if there is from and to already??
        map.get(from).push(to);
        if (!map.has(to)) {
            map.set(to, []);
        }
        map.get(to).push(from);
    }
    // create list of visited nodes;
    let visited = new Set();
    // explore node level by level starting from 0
    // let queue = map.get(0) ?? [];
    // let level = [];
    // let nodes = [0, map.get(0) ?? []];
    // level.push(nodes);
    let queue = [[0, map.get(0) ?? []]];
    visited.add(0);
    while (queue.length !== 0) {
        let temp = [];
        for (let j = 0; j < queue.length; j++) {
            let [parent, toArr] = queue[j];
            for (let i = 0; i < toArr.length; i++) {
                let node = toArr[i];
                if (node === parent) {
                    continue;
                }
                if (visited.has(node)) {
                    return false;
                }
                visited.add(node);
                let children = map.get(node) ?? [];
                children = children.filter(val => val !== parent);

                let newToArr = [[node, children]];
                temp = temp.concat(newToArr);
            }
        }
        queue = temp;
    }
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            return false;
        }
    }
    return true;
};

// union set find 

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree2 = function(n, edges) {
    if (n === 1 ) {
        return edges.length === 0;
    }
    let map = new Map();
    for (let i = 0; i < edges.length; i++) {
        const [u,v] = edges[i];
        let uSet = map.get(u);
        let vSet = map.get(v);
        // create new set to put both elements
        if (uSet === undefined && vSet === uSet) {
            let newSet = new Set();
            newSet.add(u);
            newSet.add(v);
            map.set(u, newSet);
            map.set(v, newSet);
            continue;
        }
        // there is a loop
        if (uSet === vSet) {
            return false;
        }
        if (uSet !== undefined && vSet !== undefined) {
            vSet.forEach(val => {
                uSet.add(val);
                map.set(val, uSet);
            });
            map.set(u, uSet);
            map.set(v, uSet);
            continue;
        }
        let set = uSet || vSet;
        set.add(u);
        set.add(v);
        map.set(u, set);
        map.set(v, set);
    }
    return map.get(0)?.size === n;
};

let n = 6
let edges = [[0,1],[0,2],[2,5],[3,4],[3,5]]
assert(validTree(n, edges))

assert(validTree2(n, edges));
