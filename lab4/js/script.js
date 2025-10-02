function task1() {
    const input = document.getElementById('task1Inp').value.trim();
    const arr = input.split(' ').map(i => parseFloat(i.trim()));
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    document.getElementById('task1Res').innerHTML = 
        `<p>Max: ${max}</p><p>Min: ${min}</p>`;
}

function calculateAverage(grades) {
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}
    
function task2() {
    const input = document.getElementById('task2Inp').value.trim();
    const arr = input.split(' ').map(i => parseFloat(i.trim()));
    if (arr.length !== 10) {
        document.getElementById('task2Res').innerHTML = 
        `<p>Nado 10</p>`;
        return;
    }
    const avg = calculateAverage(arr);
    document.getElementById('task2Res').innerHTML = 
        `<p>Avg: ${avg}</p>`;
}

function fact(n) {
    if (n == 1 || n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}

function task3() {
    const input = parseFloat(document.getElementById('task3Inp').value.trim());
    document.getElementById('task3Res').innerHTML = 
        `<p>Res: ${fact(input)}</p>`;
}

function task4() {
    const input = document.getElementById('task4Inp').value.trim();
    let ans;
    if (input.length !== 3) {
        ans = ":(";
    }
    else{
        ans = parseFloat(input[0]) + parseFloat(input[1]) + parseFloat(input[2]);
    }

    document.getElementById('task4Res').innerHTML = 
        `<p>Res: ${ans}</p>`;
}

function task5() {
    const input = document.getElementById('task5Inp').value.trim();
    let arr = input.split(' ').map(i => parseFloat(i.trim()));

    document.getElementById('task5Res').innerHTML = 
        `<p>Res: ${arr.sort()}</p>`;
}

function task6() {
    const input = document.getElementById('task6Inp').value.trim().toLowerCase();

    let ans = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'а') {
            ans += 1;
        }        
    }

    document.getElementById('task6Res').innerHTML = 
        `<p>Res: ${ans}</p>`;
}

function task7() {
    const input = document.getElementById('task7Inp').value.trim().toLowerCase().split(' ').map(i => i.trim());

    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        if (map.has(input[i])) {
            if (map.get(input[i]) === 0) {
                map.set(input[i], map.get(input[i]) + 1);
            }
            map.set(input[i], map.get(input[i]) + 1);
        }
        else {
            map.set(input[i], 0);
        }
        
    }

    let ans = 0;

    for(let i of map.values()) {
        ans += i;
    }

    document.getElementById('task7Res').innerHTML = 
        `<p>Res: ${ans}</p>`;    
}