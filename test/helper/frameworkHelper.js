module.exports ={
    getTimeStamp: function(){
        this.d = new Date();
        this.dd=(this.d.toLocaleDateString()).replace('/','-');
        this.dd=(this.dd.replace('/','-'));
        this.ddd=(this.d.toLocaleTimeString()).replace(':','_');
        this.ddd=(this.ddd.replace(':','_'));
        this.ddd=(this.ddd.replace(':','_'));
        this.timstmp = this.dd+'_'+this.ddd;

        return this.timstmp;
    }
}