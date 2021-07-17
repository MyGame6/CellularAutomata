
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/cell');
require('./assets/script/game');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2VsbFByZWZhYiIsIlByZWZhYiIsImNlbGxBcmVhTm9kZSIsIk5vZGUiLCJvbkxvYWQiLCJtYXhTaXplIiwibWF4V0NudCIsIndpZHRoIiwibWF4SENudCIsImhlaWdodCIsInR0IiwicGF1c2UiLCJjZWxsTm9kZUFyciIsImkiLCJqIiwiY2VsbE5vZGUiLCJpbnN0YW50aWF0ZSIsInNldFBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJzZXRTdGF0ZSIsImFkZENoaWxkIiwib24iLCJvblRvdWNoU3RhcnQiLCJlIiwicG9zIiwiZ2V0TG9jYXRpb24iLCJuX3BvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicGFyc2VJbnQiLCJ5IiwieCIsInN3aXRjaFN0YXRlIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImxpZmVDaGFuZ2UiLCJwYXVzZUdhbWUiLCJ0ZXh0IiwiZmluZCIsIkxhYmVsIiwic3JpbmciLCJub3dTdGF0ZU1hcCIsIm5leHRTdGF0ZU1hcCIsImNlbGxTdGF0ZSIsInN0YXRlIiwiY2VsbExpZmVDaGVjayIsInN0YXRlTWFwIiwiaW5kZXgiLCJncmlkIiwidG90YWxMaWZlIiwiZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxNQURQO0FBRVJDLElBQUFBLFlBQVksRUFBRU4sRUFBRSxDQUFDTztBQUZULEdBSFA7QUFRTDtBQUVBQyxFQUFBQSxNQVZLLG9CQVVJO0FBQ0wsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS0osWUFBTCxDQUFrQkssS0FBbEIsR0FBMEIs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QixFQUFvQjtBQUN2QixhQUFPLENBQUMsQ0FBUixDQUR1QixDQUNiO0FBQ2IsS0FGTSxNQUVBO0FBQ0gsYUFBTyxDQUFQLENBREcsQ0FDTTtBQUNaO0FBQ0o7QUE3SUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY2VsbFByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgICAgIGNlbGxBcmVhTm9kZTogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubWF4U2l6ZSA9IDEwO1xyXG4gICAgICAgIHRoaXMubWF4V0NudCA9IHRoaXMuY2VsbEFyZWFOb2RlLndpZHRoIC8gdGhpcy5tYXhTaXplO1xyXG4gICAgICAgIHRoaXMubWF4SENudCA9IHRoaXMuY2VsbEFyZWFOb2RlLmhlaWdodCAvIHRoaXMubWF4U2l6ZTtcclxuXHJcbiAgICAgICAgdGhpcy50dCA9IDA7XHJcbiAgICAgICAgLy8g5pqC5YGcXHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIOeUqOS4gOS4quS6jOe7tOaVsOe7hOadpeiusOW9lSDlsI/mlrnlnZdcclxuICAgICAgICB0aGlzLmNlbGxOb2RlQXJyID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhIQ250OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsTm9kZUFycltpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWF4V0NudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY2VsbE5vZGUuc2V0UG9zaXRpb24oY2MudjIoaiAqIHRoaXMubWF4U2l6ZSwgaSAqIHRoaXMubWF4U2l6ZSkpO1xyXG4gICAgICAgICAgICAgICAgY2VsbE5vZGUuZ2V0Q29tcG9uZW50KCdjZWxsJykuc2V0U3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxBcmVhTm9kZS5hZGRDaGlsZChjZWxsTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxOb2RlQXJyW2ldW2pdID0gY2VsbE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2VsbEFyZWFOb2RlLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZSkge1xyXG4gICAgICAgIC8vIOiOt+WPlueCueWHu+WkhOeahOS9jee9ruWdkOagh1xyXG4gICAgICAgIGxldCBwb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgLy8g5bCG54K55Ye75aSE55qE5Z2Q5qCH6L2s5o2i5oiQIGNlbGxBcmVhIOWGhemDqOeahOWdkOagh1xyXG4gICAgICAgIGxldCBuX3BvcyA9IHRoaXMuY2VsbEFyZWFOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPlueCueWHu+eahOWwj+aWueWdlyBjZWxsIOWdkOagh1xyXG4gICAgICAgIGxldCBpID0gcGFyc2VJbnQobl9wb3MueSAvIHRoaXMubWF4U2l6ZSk7XHJcbiAgICAgICAgbGV0IGogPSBwYXJzZUludChuX3Bvcy54IC8gdGhpcy5tYXhTaXplKTtcclxuXHJcbiAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5jZWxsTm9kZUFycltpXVtqXTtcclxuICAgICAgICBjZWxsTm9kZS5nZXRDb21wb25lbnQoJ2NlbGwnKS5zd2l0Y2hTdGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhdXNlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy50dCA+PSAwLjEpIHtcclxuICAgICAgICAgICAgdGhpcy50dCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGlmZUNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8g5byA5aeL5oyJ6ZKu6Kem5Y+R55qE5pa55rOVXHJcbiAgICBwYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5wYXVzZSA9ICF0aGlzLnBhdXNlO1xyXG4gICAgICAgIHZhciB0ZXh0ID0gdGhpcy5wYXVzZSA/ICdQYXVzZScgOiAnU3RhcnQnO1xyXG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9iZy9wYXVzZUJ0bi9CYWNrZ3JvdW5kL0xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zcmluZyA9IHRleHQ7XHJcbiAgICB9LFxyXG5cclxuICAgIGxpZmVDaGFuZ2UoKSB7XHJcbiAgICAgICAgbGV0IG5vd1N0YXRlTWFwID0gW107IC8vIOW9k+WJjee7huiDnueahOeKtuaAgVxyXG4gICAgICAgIGxldCBuZXh0U3RhdGVNYXAgPSBbXTsgLy8g5LiL5LiA5qyh57uG6IOe55qE54q25oCBXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhIQ250OyBpKyspIHtcclxuICAgICAgICAgICAgbm93U3RhdGVNYXBbaV0gPSBbXTtcclxuICAgICAgICAgICAgbmV4dFN0YXRlTWFwW2ldID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXhXQ250OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsU3RhdGUgPSB0aGlzLmNlbGxOb2RlQXJyW2ldW2pdLmdldENvbXBvbmVudCgnY2VsbCcpLnN0YXRlO1xyXG4gICAgICAgICAgICAgICAgbm93U3RhdGVNYXBbaV1bal0gPSBjZWxsU3RhdGU7XHJcbiAgICAgICAgICAgICAgICBuZXh0U3RhdGVNYXBbaV1bal0gPSBjZWxsU3RhdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhIQ250OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1heFdDbnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5jZWxsTGlmZUNoZWNrKG5vd1N0YXRlTWFwLCB7IGksIGogfSk7XHJcbiAgICAgICAgICAgICAgICAvLyDlpITnkIbnu4bog57nirbmgIFcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PSAxIHx8IHN0YXRlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXh0U3RhdGVNYXBbaV1bal0gPSBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhIQ250OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLm1heFdDbnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxTdGF0ZSA9IG5leHRTdGF0ZU1hcFtpXVtqXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2VsbE5vZGVBcnJbaV1bal0uZ2V0Q29tcG9uZW50KCdjZWxsJykuc2V0U3RhdGUoY2VsbFN0YXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgY2VsbExpZmVDaGVjayhzdGF0ZU1hcCwgaW5kZXgpIHtcclxuICAgICAgICAvLyDlgY/np7vph49cclxuICAgICAgICBsZXQgZ3JpZCA9IFtcclxuICAgICAgICAgICAgeyBpOiAxLCBqOiAtMSB9LCB7IGk6IDEsIGo6IDAgfSwgeyBpOiAxLCBqOiAxIH0sXHJcbiAgICAgICAgICAgIHsgaTogMCwgajogLTEgfSwgeyBpOiAwLCBqOiAxIH0sXHJcbiAgICAgICAgICAgIHsgaTogLTEsIGo6IC0xIH0sIHsgaTogLTEsIGo6IDAgfSwgeyBpOiAtMSwgajogMSB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgbGV0IHRvdGFsTGlmZSA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGcgb2YgZ3JpZCkge1xyXG4gICAgICAgICAgICBsZXQgaSA9IGcuaSArIGluZGV4Lmk7XHJcbiAgICAgICAgICAgIGxldCBqID0gZy5qICsgaW5kZXguajtcclxuXHJcbiAgICAgICAgICAgIC8vIOa6ouWHuuiMg+WbtOWkhOeQhlxyXG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLm1heEhDbnQpIHtcclxuICAgICAgICAgICAgICAgIGkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChqID49IHRoaXMubWF4V0NudCkge1xyXG4gICAgICAgICAgICAgICAgaiA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBpID0gdGhpcy5tYXhIQ250IC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaiA8IDApIHtcclxuICAgICAgICAgICAgICAgIGogPSB0aGlzLm1heFdDbnQgLSAxO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY2VsbFN0YXRlID0gc3RhdGVNYXBbaV1bal07XHJcbiAgICAgICAgICAgIGlmIChjZWxsU3RhdGUgIT0gMCkgdG90YWxMaWZlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b3RhbExpZmUgPT0gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gMTsvL+WtmOa0u1xyXG4gICAgICAgIH0gZWxzZSBpZiAodG90YWxMaWZlID09IDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xOy8v5LiN5Y+YXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIDA7Ly/mrbvkuqFcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/cell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b72dAwNiVAw7li1gDpVV3u', 'cell');
// script/cell.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    colorNode: cc.Node
  },
  setState: function setState(state) {
    if (state === void 0) {
      state = 0;
    }

    this.state = state;

    if (this.state == 0) {
      this.colorNode.color = new cc.Color(255, 255, 255);
    } else {
      this.colorNode.color = new cc.Color(0, 0, 0);
    }
  },
  switchState: function switchState() {
    var state = this.state == 0 ? 1 : 0;
    this.setState(state);
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjZWxsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29sb3JOb2RlIiwiTm9kZSIsInNldFN0YXRlIiwic3RhdGUiLCJjb2xvciIsIkNvbG9yIiwic3dpdGNoU3RhdGUiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRUosRUFBRSxDQUFDSztBQUROLEdBSFA7QUFRTEMsRUFBQUEsUUFSSyxvQkFRSUMsS0FSSixFQVFlO0FBQUEsUUFBWEEsS0FBVztBQUFYQSxNQUFBQSxLQUFXLEdBQUgsQ0FBRztBQUFBOztBQUNoQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7O0FBQ0EsUUFBSSxLQUFLQSxLQUFMLElBQWMsQ0FBbEIsRUFBcUI7QUFDakIsV0FBS0gsU0FBTCxDQUFlSSxLQUFmLEdBQXVCLElBQUlSLEVBQUUsQ0FBQ1MsS0FBUCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsR0FBdkIsQ0FBdkI7QUFDSCxLQUZELE1BRU87QUFDSCxXQUFLTCxTQUFMLENBQWVJLEtBQWYsR0FBdUIsSUFBSVIsRUFBRSxDQUFDUyxLQUFQLENBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQUF2QjtBQUNIO0FBQ0osR0FmSTtBQWlCTEMsRUFBQUEsV0FqQksseUJBaUJTO0FBQ1YsUUFBSUgsS0FBSyxHQUFHLEtBQUtBLEtBQUwsSUFBYyxDQUFkLEdBQWtCLENBQWxCLEdBQXNCLENBQWxDO0FBQ0EsU0FBS0QsUUFBTCxDQUFjQyxLQUFkO0FBQ0gsR0FwQkk7QUFzQkw7QUFFQTtBQUVBSSxFQUFBQSxLQTFCSyxtQkEwQkcsQ0FFUCxDQTVCSSxDQThCTDs7QUE5QkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY29sb3JOb2RlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgc2V0U3RhdGUoc3RhdGUgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvck5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xvck5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzd2l0Y2hTdGF0ZSgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlID09IDAgPyAxIDogMDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
