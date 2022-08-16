const people = document.getElementById(`people`);
const billInput_1 = document.getElementById(`billInput_1`);
const taxInput_1 = document.getElementById(`taxInput_1`);
const billInput_2 = document.getElementById(`billInput_2`);
const taxInput_2 = document.getElementById(`taxInput_2`);
const output = document.getElementById(`output`);
let peopleCount=1;

BillCalculator();

function BillCalculator()
{
    const bill1=Number(billInput_1.value);
    const bill2=Number(billInput_2.value);
    const tax1=(Number(taxInput_1.value)/100)*bill1;
    const tax2=(Number(taxInput_2.value)/100)*bill2;
    const totalBill = (((bill1+tax1)+(bill2+tax2))/peopleCount).toFixed(1);
    output.value = totalBill.toString();
}

function decreasePeople()
{
    if(Number(people.innerText)>1)
    {
        peopleCount = peopleCount-1;
        people.innerText=`${peopleCount}`;
        BillCalculator();
    }
    
}
function increasePeople()
{
        peopleCount = peopleCount+1;
        people.innerText=`${peopleCount}`;
        BillCalculator();
    
}