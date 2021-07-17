
cc.Class({
    extends: cc.Component,

    properties: {
        cellPrefab: cc.Prefab,
        cellAreaNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.maxSize = 10;
        this.maxWCnt = this.cellAreaNode.width / this.maxSize;
        this.maxHCnt = this.cellAreaNode.height / this.maxSize;

        this.tt = 0;
        // 暂停
        this.pause = true;

        // 用一个二维数组来记录 小方块
        this.cellNodeArr = [];

        for (let i = 0; i < this.maxHCnt; i++) {
            this.cellNodeArr[i] = [];
            for (let j = 0; j < this.maxWCnt; j++) {
                let cellNode = cc.instantiate(this.cellPrefab);
                cellNode.setPosition(cc.v2(j * this.maxSize, i * this.maxSize));
                cellNode.getComponent('cell').setState(0);
                this.cellAreaNode.addChild(cellNode);
                this.cellNodeArr[i][j] = cellNode;
            }
        }

        this.cellAreaNode.on('touchstart', this.onTouchStart, this);
    },

    onTouchStart(e) {
        // 获取点击处的位置坐标
        let pos = e.getLocation();
        // 将点击处的坐标转换成 cellArea 内部的坐标
        let n_pos = this.cellAreaNode.convertToNodeSpaceAR(pos);

        // 获取点击的小方块 cell 坐标
        let i = parseInt(n_pos.y / this.maxSize);
        let j = parseInt(n_pos.x / this.maxSize);

        let cellNode = this.cellNodeArr[i][j];
        cellNode.getComponent('cell').switchState();
    },

    start() {

    },

    update(dt) {
        if (this.pause) return;
        this.tt += dt;
        if (this.tt >= 0.1) {
            this.tt = 0;
            this.lifeChange();
        }
    },

    // 开始按钮触发的方法
    pauseGame() {
        this.pause = !this.pause;
        var text = this.pause ? 'Pause' : 'Start';
        cc.find('Canvas/bg/pauseBtn/Background/Label').getComponent(cc.Label).sring = text;
    },

    lifeChange() {
        let nowStateMap = []; // 当前细胞的状态
        let nextStateMap = []; // 下一次细胞的状态

        for (let i = 0; i < this.maxHCnt; i++) {
            nowStateMap[i] = [];
            nextStateMap[i] = [];
            for (let j = 0; j < this.maxWCnt; j++) {
                let cellState = this.cellNodeArr[i][j].getComponent('cell').state;
                nowStateMap[i][j] = cellState;
                nextStateMap[i][j] = cellState;
            }
        }

        for (let i = 0; i < this.maxHCnt; i++) {
            for (let j = 0; j < this.maxWCnt; j++) {
                let state = this.cellLifeCheck(nowStateMap, { i, j });
                // 处理细胞状态
                if (state == 1 || state == 0) {
                    nextStateMap[i][j] = state;
                }
            }
        }


        for (let i = 0; i < this.maxHCnt; i++) {
            for (let j = 0; j < this.maxWCnt; j++) {
                let cellState = nextStateMap[i][j];
                this.cellNodeArr[i][j].getComponent('cell').setState(cellState);
            }
        }
    },

    cellLifeCheck(stateMap, index) {
        // 偏移量
        let grid = [
            { i: 1, j: -1 }, { i: 1, j: 0 }, { i: 1, j: 1 },
            { i: 0, j: -1 }, { i: 0, j: 1 },
            { i: -1, j: -1 }, { i: -1, j: 0 }, { i: -1, j: 1 }
        ];

        let totalLife = 0;

        for (let g of grid) {
            let i = g.i + index.i;
            let j = g.j + index.j;

            // 溢出范围处理
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

            let cellState = stateMap[i][j];
            if (cellState != 0) totalLife++;
        }
        if (totalLife == 3) {
            return 1;//存活
        } else if (totalLife == 2) {
            return -1;//不变
        } else {
            return 0;//死亡
        }
    },

});
