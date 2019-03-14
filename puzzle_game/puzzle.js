var pause = true;
var set_timer;
//这个d，用来保存大DIV当前装的小方块的编号
const d = new Array(10);
const d_direct = new Array(
    [0], //为了逻辑简单，第一个元素不用
    [2, 4],
    [1, 3, 5],
    [2, 6],
    [1, 5, 7],
    [2, 4, 6, 8],
    [3, 5, 9],
    [4, 8],
    [5, 7, 9],
    [6, 8]
); //对于大div里面的小方块给他们可移动的位置编号
const d_posXY = new Array(
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
); //大DIV编号的位置
d[1] = 1;
d[2] = 2;
d[3] = 3;
d[4] = 4;
d[5] = 5;
d[6] = 6;
d[7] = 7;
d[8] = 8;
d[9] = 0; //{d[$]=$;}*8

function move(id) {
    if(!pause){
	    // 移动函数
	    for (var i = 1; i < 10; i++) {
	        if (d[i] == id)
	            break;
	    } //找出小方块在大DIV里的位置
	    let target_d = 0;
	    target_d = whereCanTo(i) //保存小DIV可以去的编号，0表示不能动
	    if (target_d != 0) {
	        d[i] = 0;
	        d[target_d] = id;
	        getById("d" + id).style.left = d_posXY[target_d][0] + "px";
	        getById("d" + id).style.top = d_posXY[target_d][1] + "px";
	    }
	    let finish_flag = true;
	    for (let k = 1; k < 9; k++) {
	        if (d[k] != k) {
	            finish_flag = false;
	            break;
	        }
	    }
	    if (finish_flag === true) {
	        if (!pause)
	            start();
	        alert("Congratulation");
	    }
    }
}

function whereCanTo(cur_div) {
    // body... 
    let move_flag = false;
    for (var j = 0; j < d_direct[cur_div].length; ++j) {
        if (d[d_direct[cur_div][j]] == 0) {
            move_flag = true;
            break;
        }
        //如果目标值为0，说明目标内没有方块，可以移动
        //设置移动flag，并得到j
    }
    if (move_flag == true) {
        return d_direct[cur_div][j]; //返回可去位置
    } else {
        return 0;
    }
}

function timer() {
    // body... 
    time += 1;
    let min = parseInt(time / 60);
    let sec = time % 60;
    getById("timer").innerHTML = `${min} 分 ${sec} 秒`;
}

function start() {
    // body... 
    if (pause) {
        getById("start").innerHTML = "暂停";
        pause = false;
        set_timer = setInterval(timer, 1000);
        getById("pause").className="noDisplay";
        //启动定时
    } else {
        getById("start").innerHTML = "开始";
        pause = true;
        clearInterval(set_timer);
        getById("pause").className="";

    }
}

function reset() {
    time = 0;
    random_d();
    if (pause)
        start();
}

function random_d() {
    // body... 
    for (var i = 9; i > 1; --i) {
        var to = parseInt(Math.random() * (i - 1) + 1); //产生随机数，范围为1到i，不能超出范围，因为没这个id的DIV
        if (d[i] != 0) {
            document.getElementById("d" + d[i]).style.left = d_posXY[to][0] + "px";
            document.getElementById("d" + d[i]).style.top = d_posXY[to][1] + "px";
        }
        //把当前的DIV位置设置为随机产生的DIV的位置
        if (d[to] != 0) {
            document.getElementById("d" + d[to]).style.left = d_posXY[i][0] + "px";
            document.getElementById("d" + d[to]).style.top = d_posXY[i][1] + "px";
        }
        //把随机产生的DIV的位置设置为当前的DIV的位置
        var tem = d[to];
        d[to] = d[i];
        d[i] = tem;
        //然后把它们两个的DIV保存的编号对调一下
    }

}

function getById(id) {
    // body... 
    return document.getElementById(id);
}

window.onload = function () {
	/* body... */
	reset();
};