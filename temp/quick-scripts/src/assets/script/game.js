"use strict";
cc._RF.push(module, 'e01b2lBw45MvKijxWrPwELL', 'game');
// script/game.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    cellPrefab: cc.Prefab,
    cellAreaNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.maxSize = 10;
    this.maxWCnt = this.cellAreaNode.width / this.maxSize;
    this.maxHCnt = this.cellAreaNode.height / this.maxSize;
    this.tt = 0; // 暂停

    this.pause = true; // 用一个二维数组来记录 小方块

    this.cellNodeArr = [];

    for (var i = 0; i < this.maxHCnt; i++) {
      this.cellNodeArr[i] = [];

      for (var j = 0; j < this.maxWCnt; j++) {
        var cellNode = cc.instantiate(this.cellPrefab);
        cellNode.setPosition(cc.v2(j * this.maxSize, i * this.maxSize));
        cellNode.getComponent('cell').setState(0);
        this.cellAreaNode.addChild(cellNode);
        this.cellNodeArr[i][j] = cellNode;
      }
    }

    this.cellAreaNode.on('touchstart', this.onTouchStart, this);
  },
  onTouchStart: function onTouchStart(e) {
    // 获取点击处的位置坐标
    var pos = e.getLocation(); // 将点击处的坐标转换成 cellArea 内部的坐标

    var n_pos = this.cellAreaNode.convertToNodeSpaceAR(pos); // 获取点击的小方块 cell 坐标

    var i = parseInt(n_pos.y / this.maxSize);
    var j = parseInt(n_pos.x / this.maxSize);
    var cellNode = this.cellNodeArr[i][j];
    cellNode.getComponent('cell').switchState();
  },
  start: function start() {},
  update: function update(dt) {
    if (this.pause) return;
    this.tt += dt;

    if (this.tt >= 0.1) {
      this.tt = 0;
      this.lifeChange();
    }
  },
  // 开始按钮触发的方法
  pauseGame: function pauseGame() {
    this.pause = !this.pause;
    var text = this.pause ? 'Pause' : 'Start';
    cc.find('Canvas/bg/pauseBtn/Background/Label').getComponent(cc.Label).sring = text;
  },
  lifeChange: function lifeChange() {
    var nowStateMap = []; // 当前细胞的状态

    var nextStateMap = []; // 下一次细胞的状态

    for (var i = 0; i < this.maxHCnt; i++) {
      nowStateMap[i] = [];
      nextStateMap[i] = [];

      for (var j = 0; j < this.maxWCnt; j++) {
        var cellState = this.cellNodeArr[i][j].getComponent('cell').state;
        nowStateMap[i][j] = cellState;
        nextStateMap[i][j] = cellState;
      }
    }

    for (var _i = 0; _i < this.maxHCnt; _i++) {
      for (var _j = 0; _j < this.maxWCnt; _j++) {
        var state = this.cellLifeCheck(nowStateMap, {
          i: _i,
          j: _j
        }); // 处理细胞状态

        if (state == 1 || state == 0) {
          nextStateMap[_i][_j] = state;
        }
      }
    }

    for (var _i2 = 0; _i2 < this.maxHCnt; _i2++) {
      for (var _j2 = 0; _j2 < this.maxWCnt; _j2++) {
        var _cellState = nextStateMap[_i2][_j2];

        this.cellNodeArr[_i2][_j2].getComponent('cell').setState(_cellState);
      }
    }
  },
  cellLifeCheck: function cellLifeCheck(stateMap, index) {
    // 偏移量
    var grid = [{
      i: 1,
      j: -1
    }, {
      i: 1,
      j: 0
    }, {
      i: 1,
      j: 1
    }, {
      i: 0,
      j: -1
    }, {
      i: 0,
      j: 1
    }, {
      i: -1,
      j: -1
    }, {
      i: -1,
      j: 0
    }, {
      i: -1,
      j: 1
    }];
    var totalLife = 0;

    for (var _i3 = 0, _grid = grid; _i3 < _grid.length; _i3++) {
      var g = _grid[_i3];
      var i = g.i + index.i;
      var j = g.j + index.j; // 溢出范围处理

      if (i >= this.maxHCnt) {
        i = 0;
      }

      if (j >= this.maxWCnt) {
        j = 0;
      }

      if (i < 0) {
        i = this.maxHCnt - 1;
      }

      if (j < 0) {
        j = this.maxWCnt - 1;
      }

      var cellState = stateMap[i][j];
      if (cellState != 0) totalLife++;
    }

    if (totalLife == 3) {
      return 1; //存活
    } else if (totalLife == 2) {
      return -1; //不变
    } else {
      return 0; //死亡
    }
  }
});

cc._RF.pop();