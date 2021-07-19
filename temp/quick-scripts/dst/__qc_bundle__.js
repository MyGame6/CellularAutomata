
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
    var text = this.pause ? 'Pause' : 'Start';
    this.pause = !this.pause; // console.log(text);
    // cc.find('Canvas/bg/pauseBtn/Background/Label').getComponent(cc.Label).sring = text;

    var btnNode = cc.find("Canvas/bg/pauseBtn");
    var btnLabelNode = cc.find("Background/Label", btnNode);
    var btnLabel = btnLabelNode.getComponent(cc.Label);
    btnLabel.string = text;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxnYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2VsbFByZWZhYiIsIlByZWZhYiIsImNlbGxBcmVhTm9kZSIsIk5vZGUiLCJvbkxvYWQiLCJtYXhTaXplIiwibWF4V0NudCIsIndpZHRoIiwibWF4SENudCIsImhlaWdodCIsInR0IiwicGF1c2UiLCJjZWxsTm9kZUFyciIsImkiLCJqIiwiY2VsbE5vZGUiLCJpbnN0YW50aWF0ZSIsInNldFBvc2l0aW9uIiwidjIiLCJnZXRDb21wb25lbnQiLCJzZXRTdGF0ZSIsImFkZENoaWxkIiwib24iLCJvblRvdWNoU3RhcnQiLCJlIiwicG9zIiwiZ2V0TG9jYXRpb24iLCJuX3BvcyIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwicGFyc2VJbnQiLCJ5IiwieCIsInN3aXRjaFN0YXRlIiwic3RhcnQiLCJ1cGRhdGUiLCJkdCIsImxpZmVDaGFuZ2UiLCJwYXVzZUdhbWUiLCJ0ZXh0IiwiYnRuTm9kZSIsImZpbmQiLCJidG5MYWJlbE5vZGUiLCJidG5MYWJlbCIsIkxhYmVsIiwic3RyaW5nIiwibm93U3RhdGVNYXAiLCJuZXh0U3RhdGVNYXAiLCJjZWxsU3RhdGUiLCJzdGF0ZSIsImNlbGxMaWZlQ2hlY2siLCJzdGF0ZU1hcCIsImluZGV4IiwiZ3JpZCIsInRvdGFsTGlmZSIsImciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0ssTUFEUDtBQUVSQyxJQUFBQSxZQUFZLEVBQUVOLEVBQUUsQ0FBQ087QUFGVCxHQUhQO0FBUUw7QUFFQUMsRUFBQUEsTUFWSyxvQkFVSTtBQUNMLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsT0FB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RyxRQUFRLENBQUNyQyxDQUFELENBQVIsQ0FBWUMsQ0FBWixDQUFoQjtBQUNBLFVBQUlpQyxTQUFTLElBQUksQ0FBakIsRUFBb0JNLFNBQVM7QUFDaEM7O0FBQ0QsUUFBSUEsU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ2hCLGFBQU8sQ0FBUCxDQURnQixDQUNQO0FBQ1osS0FGRCxNQUVPLElBQUlBLFNBQVMsSUFBSSxDQUFqQixFQUFvQjtBQUN2QixhQUFPLENBQUMsQ0FBUixDQUR1QixDQUNiO0FBQ2IsS0FGTSxNQUVBO0FBQ0gsYUFBTyxDQUFQLENBREcsQ0FDTTtBQUNaO0FBQ0o7QUFsSkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY2VsbFByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgICAgIGNlbGxBcmVhTm9kZTogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubWF4U2l6ZSA9IDEwO1xyXG4gICAgICAgIHRoaXMubWF4V0NudCA9IHRoaXMuY2VsbEFyZWFOb2RlLndpZHRoIC8gdGhpcy5tYXhTaXplO1xyXG4gICAgICAgIHRoaXMubWF4SENudCA9IHRoaXMuY2VsbEFyZWFOb2RlLmhlaWdodCAvIHRoaXMubWF4U2l6ZTtcclxuXHJcbiAgICAgICAgdGhpcy50dCA9IDA7XHJcbiAgICAgICAgLy8g5pqC5YGcXHJcbiAgICAgICAgdGhpcy5wYXVzZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIOeUqOS4gOS4quS6jOe7tOaVsOe7hOadpeiusOW9lSDlsI/mlrnlnZdcclxuICAgICAgICB0aGlzLmNlbGxOb2RlQXJyID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5tYXhIQ250OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jZWxsTm9kZUFycltpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWF4V0NudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbE5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmNlbGxQcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgY2VsbE5vZGUuc2V0UG9zaXRpb24oY2MudjIoaiAqIHRoaXMubWF4U2l6ZSwgaSAqIHRoaXMubWF4U2l6ZSkpO1xyXG4gICAgICAgICAgICAgICAgY2VsbE5vZGUuZ2V0Q29tcG9uZW50KCdjZWxsJykuc2V0U3RhdGUoMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxBcmVhTm9kZS5hZGRDaGlsZChjZWxsTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxOb2RlQXJyW2ldW2pdID0gY2VsbE5vZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2VsbEFyZWFOb2RlLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvblRvdWNoU3RhcnQoZSkge1xyXG4gICAgICAgIC8vIOiOt+WPlueCueWHu+WkhOeahOS9jee9ruWdkOagh1xyXG4gICAgICAgIGxldCBwb3MgPSBlLmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgLy8g5bCG54K55Ye75aSE55qE5Z2Q5qCH6L2s5o2i5oiQIGNlbGxBcmVhIOWGhemDqOeahOWdkOagh1xyXG4gICAgICAgIGxldCBuX3BvcyA9IHRoaXMuY2VsbEFyZWFOb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcyk7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPlueCueWHu+eahOWwj+aWueWdlyBjZWxsIOWdkOagh1xyXG4gICAgICAgIGxldCBpID0gcGFyc2VJbnQobl9wb3MueSAvIHRoaXMubWF4U2l6ZSk7XHJcbiAgICAgICAgbGV0IGogPSBwYXJzZUludChuX3Bvcy54IC8gdGhpcy5tYXhTaXplKTtcclxuXHJcbiAgICAgICAgbGV0IGNlbGxOb2RlID0gdGhpcy5jZWxsTm9kZUFycltpXVtqXTtcclxuICAgICAgICBjZWxsTm9kZS5nZXRDb21wb25lbnQoJ2NlbGwnKS5zd2l0Y2hTdGF0ZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhdXNlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50dCArPSBkdDtcclxuICAgICAgICBpZiAodGhpcy50dCA+PSAwLjEpIHtcclxuICAgICAgICAgICAgdGhpcy50dCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGlmZUNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLy8g5byA5aeL5oyJ6ZKu6Kem5Y+R55qE5pa55rOVXHJcbiAgICBwYXVzZUdhbWUoKSB7XHJcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLnBhdXNlID8gJ1BhdXNlJyA6ICdTdGFydCc7XHJcbiAgICAgICAgdGhpcy5wYXVzZSA9ICF0aGlzLnBhdXNlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRleHQpO1xyXG4gICAgICAgIC8vIGNjLmZpbmQoJ0NhbnZhcy9iZy9wYXVzZUJ0bi9CYWNrZ3JvdW5kL0xhYmVsJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zcmluZyA9IHRleHQ7XHJcbiAgICAgICAgbGV0IGJ0bk5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL2JnL3BhdXNlQnRuXCIpO1xyXG4gICAgICAgIGxldCBidG5MYWJlbE5vZGUgPSBjYy5maW5kKFwiQmFja2dyb3VuZC9MYWJlbFwiLCBidG5Ob2RlKTtcclxuICAgICAgICBsZXQgYnRuTGFiZWwgPSBidG5MYWJlbE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBidG5MYWJlbC5zdHJpbmcgPSB0ZXh0O1xyXG4gICAgfSxcclxuXHJcbiAgICBsaWZlQ2hhbmdlKCkge1xyXG4gICAgICAgIGxldCBub3dTdGF0ZU1hcCA9IFtdOyAvLyDlvZPliY3nu4bog57nmoTnirbmgIFcclxuICAgICAgICBsZXQgbmV4dFN0YXRlTWFwID0gW107IC8vIOS4i+S4gOasoee7huiDnueahOeKtuaAgVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4SENudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5vd1N0YXRlTWFwW2ldID0gW107XHJcbiAgICAgICAgICAgIG5leHRTdGF0ZU1hcFtpXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubWF4V0NudDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbFN0YXRlID0gdGhpcy5jZWxsTm9kZUFycltpXVtqXS5nZXRDb21wb25lbnQoJ2NlbGwnKS5zdGF0ZTtcclxuICAgICAgICAgICAgICAgIG5vd1N0YXRlTWFwW2ldW2pdID0gY2VsbFN0YXRlO1xyXG4gICAgICAgICAgICAgICAgbmV4dFN0YXRlTWFwW2ldW2pdID0gY2VsbFN0YXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4SENudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXhXQ250OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuY2VsbExpZmVDaGVjayhub3dTdGF0ZU1hcCwgeyBpLCBqIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8g5aSE55CG57uG6IOe54q25oCBXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gMSB8fCBzdGF0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlTWFwW2ldW2pdID0gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWF4SENudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5tYXhXQ250OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBjZWxsU3RhdGUgPSBuZXh0U3RhdGVNYXBbaV1bal07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNlbGxOb2RlQXJyW2ldW2pdLmdldENvbXBvbmVudCgnY2VsbCcpLnNldFN0YXRlKGNlbGxTdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNlbGxMaWZlQ2hlY2soc3RhdGVNYXAsIGluZGV4KSB7XHJcbiAgICAgICAgLy8g5YGP56e76YePXHJcbiAgICAgICAgbGV0IGdyaWQgPSBbXHJcbiAgICAgICAgICAgIHsgaTogMSwgajogLTEgfSwgeyBpOiAxLCBqOiAwIH0sIHsgaTogMSwgajogMSB9LFxyXG4gICAgICAgICAgICB7IGk6IDAsIGo6IC0xIH0sIHsgaTogMCwgajogMSB9LFxyXG4gICAgICAgICAgICB7IGk6IC0xLCBqOiAtMSB9LCB7IGk6IC0xLCBqOiAwIH0sIHsgaTogLTEsIGo6IDEgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGxldCB0b3RhbExpZmUgPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBnIG9mIGdyaWQpIHtcclxuICAgICAgICAgICAgbGV0IGkgPSBnLmkgKyBpbmRleC5pO1xyXG4gICAgICAgICAgICBsZXQgaiA9IGcuaiArIGluZGV4Lmo7XHJcblxyXG4gICAgICAgICAgICAvLyDmuqLlh7rojIPlm7TlpITnkIZcclxuICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5tYXhIQ250KSB7XHJcbiAgICAgICAgICAgICAgICBpID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaiA+PSB0aGlzLm1heFdDbnQpIHtcclxuICAgICAgICAgICAgICAgIGogPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgaSA9IHRoaXMubWF4SENudCAtIDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGogPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBqID0gdGhpcy5tYXhXQ250IC0gMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGNlbGxTdGF0ZSA9IHN0YXRlTWFwW2ldW2pdO1xyXG4gICAgICAgICAgICBpZiAoY2VsbFN0YXRlICE9IDApIHRvdGFsTGlmZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodG90YWxMaWZlID09IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7Ly/lrZjmtLtcclxuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsTGlmZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTsvL+S4jeWPmFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwOy8v5q275LqhXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------
