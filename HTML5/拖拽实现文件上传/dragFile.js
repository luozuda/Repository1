function FileLoader(file, events) {
    this.file = file;
    this.step = 1024 * 1024;
    this.reader = new FileReader();
    this.total = file.size;
    this.loaded = 0; //已经上传了多少
    this.events = events;
    this.readBlob(this.reader, 0, this.step);
    this.bindEvent();
}
FileLoader.prototype = {
    readBlob: function (reader, start, step) {
        var file = this.file;
        var reader = this.reader;
        if (file.slice) {
            var blob = file.slice(start, start + step);
        } else {
            var blob = file;
        }
        reader.readAsText(blob);
    },
    bindEvent: function () {
        var reader = this.reader;
        var _this = this;
        reader.onprogress = function (e) {
            _this.onProgress(e.loaded);
        }
        reader.onload = function () {
            _this.onLoad();
        }
    },
    onProgress: function (num) {
        this.loaded += num;
        var per = this.loaded / this.total;
        if (per > 1) {
            per = 1;
        }
        this.events.progressIng(per);
    },
    onLoad: function () {
        //执行文件上传的操作
        var result = this.reader.result;
        this.events.stepLoad(this.loaded);

        if (this.loaded < this.total) {
            this.readBlob(this.reader, this.loaded, this.step);
        } else {
            this.events.finish();
        }
    }
}