

class Paging{
    // 获取记录的起始序号
    start
    // 一次获取记录的条数。服务端默认start=0，count=10
    count
    req
    // 锁
    locker = false
    url
    // 是否有更多数据
    moreData = true
    accumulator = []

    constructor(start=0,count = 10,req) {
        this.start = start
        this.count = count
        this.req = req
        this.url = req.url
    }

    async getMoreData(){
        // 如果没有更多数据了
        if(!this.moreData){
            return
        }
        // 如果还有更多数据，就加锁、获取数据、解锁
        // 如果锁住，得到的是false，那么!false，就是true，表示被锁住了，直接返回，否则，获取锁成功
        if(!this._getLocker()){
            return
        }
        const data = await this._actualGetData()
        this._releaseLocker()
        return data
    }

    async _actualGetData() {
    //     发起后端请求，获取当前数据
        const req = this._getCurrentReq()
        let paging = await Http.request(req)
        // 请求失败，返回false，这就直接返回空
        if(!paging){
            return null
        }
        if (paging.total === 0) {
            return {

            }
        }
    }

    // 拼接url，将当前页面和一次获取记录的条数拼接到url上
    _getCurrentReq() {
        let url = this.url
        const params = `start=${this.start}&count=${this.count}`;
        // 如果url本身带有参数，则需要后面跟参数，如果没有带参数，
        if(url.includes("?")){
            url += '&' + url + params
        }else{
            url += '?' + params
        }
        this.req.url = url
        return this.req;
    }

    _getLocker(){
        // locker默认是false，表示没有锁住，
        // 如果if成功，则locker为true，表示已经锁住了，那么就返回false
        if(this.locker){
            return false;
        }
        this.locker = true
        return true
    }

    _releaseLocker() {
        this.locker = false
    }

}


export {
    Paging
}


