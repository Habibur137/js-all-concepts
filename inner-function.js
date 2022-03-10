function sampleGreet(greet, name){
    function say(){
        if(name){
            return name.split(' ')[0]
        }
        else{
            return ''
        }
    }

    let messaage = greet + say()
    console.log(messaage)
}
sampleGreet('good ', 'habibur rahman')