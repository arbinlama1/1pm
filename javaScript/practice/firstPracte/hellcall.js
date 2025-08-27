function getData(dataid, getNext) {
    console.log(dataid);
    setTimeout(() => {
       if(getNext) {
        getNext();
       }
    
    },2000)
}
getData(1,() => {
    getData(2, () => {
        getData(3);
    });
});