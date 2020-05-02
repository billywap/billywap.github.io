String.prototype.filter = function(banWord) {
    return this.split(' ').filter(word => word !== banWord).join(' ');
}

Array.prototype.bubbleSort = function() {
    let arr = this;
    for (let j = 0; j < arr.length; j++) {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                let tmp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = tmp;  
            }
        }
    }
    return arr;
};


describe('Js Inheritance', function() {
    describe('#String.filter()', function() {
    it('should return "This house is nice!" when input is "This house is not nice!"', ()=>{
    const str = "This house is not nice!";
    
    assert.equal("This house is nice!", str.filter("not"));
    });
    });
    
    describe('#Array.bubbleSort()', function() {
    it('sshould return [-2, 0, 1, 3, 4, 6] when input is [6,4,0, 3,-2,1]', ()=>{
    const arr = [6, 4, 0, 3, -2, 1];
    const expected = [-2, 0, 1, 3, 4, 6];
    assert.deepEqual(expected, arr.bubbleSort());
    });
    });
    
    });