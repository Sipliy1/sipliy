function see(){
    var k=0
    for (var i=0;i<30;i++)
    {
    if(document.test.elements[i].checked)
    {
    k=k+Number(document.test.elements[i].value)
    }
    }
    if(k<=16)document.test.rez.value="Ти класичний американський бургер."
    if(k>16&&k<=25)document.test.rez.value="Ти гурманський бургер."
    if(k>25)document.test.rez.value="Ти бургер преміум класу. "
    }