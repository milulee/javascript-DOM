let pause = true;
let time = 0;
var set_timer;
//先创建一个数组用来保存每个位置的编号,之所以用10，是为了好对应，并将第一个（索引为零）的位置，不用
const d = new Array(10);
d[1] = 1;
d[2] = 2;
d[3] = 3;
d[4] = 4;
d[5] = 5;
d[6] = 6;
d[7] = 7;
d[8] = 8;
d[9] = 0;
//再保存每个d[i]可以去到的编号
const d_direct = [
    [0],
    [2, 4],
    [1, 3, 5],
    [2, 6],
    [1, 5, 7],
    [2, 4, 6, 8],
    [3, 5, 9],
    [4, 8],
    [5, 7, 9],
    [6, 8]
];
//以及每个位置的[left,top]属性。即每个d[i]位置
const d_posXY = [
    [0],
    [0, 0],
    [135, 0],
    [270, 0],
    [0, 135],
    [135, 135],
    [270, 135],
    [0, 270],
    [135, 270],
    [270, 270]
];

//定义一个函数，询问此处是否可以移动，可以移向哪里。
//如果可以移动，则返回可移动到的位置编码；否则返回0

function whereCanTo(div_code) {
    // body... 
    let moveFlag = false;
    for (let i = 0; i < d_direct[div_code].length; i++) {
        if (d[d_direct[div_code][i]] == 0) {
            moveFlag = true;
            return d_direct[div_code][i];
        }
    }
    return 0;
}

//定义一个函数，看某数字块在哪个位置，并返回编码
function d_code(id) {
    // body... 
    for (let j = 1; j <= 9; j++) {
        if (d[j] === id) {
            return j;
        }
    }
}

//定义移动函数，参数为块id。
function move(id) {
    // 先看此块div处于哪个位置
    let dCode = d_code(id);
    let target_dCode = 0;
    target_dCode = whereCanTo(dCode);
    if (target_dCode != 0) {
        //在js内修改元素CSS属性的时候，不要忘了加“px”，不要忘了！
        move_to(id, target_dCode);
        d[dCode] = 0;
        d[target_dCode] = id;
    }
    for (let a = 1; a < 9; a++) {
        if (d[a] != a) {
            return 0;
        }
    }
    getById("pause").className = "";

    getById("pause").innerHTML = "Congratulation!";
}
//定义计时函数
function timer() {
    // body... 
    time += 1;
    let min = parseInt(time / 60);
    let sec = time % 60;
    getById("timer").innerHTML = `${min} 分 ${sec} 秒`;
}


//定义strat（）函数，控制游戏暂停与开始
function start() {
    if (pause) {
        getById('start').innerHTML = "暂停";
        pause = false;
        set_timer = setInterval("timer()", 100);
        getById("pause").className = "noDisplay";

    } else {
        clearInterval(set_timer);
        getById("pause").className = "";
        getById("pause").innerHTML = "pause";

        getById('start').innerHTML = '开始';
        pause = true;
    }

}
//写一个打乱顺序的函数
function random_d() {
    // body...

    for (let z = 9; z > 1; z--) {
        let to = parseInt((Math.random() * (z - 1) + 1))

        if (d[z] != 0) {
            move_to(d[z], to);
        }
        if (d[to] != 0) {
            move_to(d[to], z);
        }
        let temp = d[to];
        d[to] = d[z];
        d[z] = temp;
    }

}

//输入要移动的小方块编码以及目标位置编码
function move_to(cur_d, tar_d) {
    // body..
    getById('d' + cur_d).style.left = d_posXY[tar_d][0] + 'px';
    getById('d' + cur_d).style.top = d_posXY[tar_d][1] + 'px';

}

function reset() {
    // body... 
    pause = true;
    time = 0;
    random_d();
    start();

}

//定义id取元素的函数
function getById(id) {
    // body... 
    return document.getElementById(id);
}

window.onload = reset;