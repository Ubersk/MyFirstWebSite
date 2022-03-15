function CreatePerson2() {
    var Name =
        document.getElementById('Person2Name');
    var Surname =
        document.getElementById('Person2Surname');
    var Person2Cash =
        document.getElementById('Person2Cash');

    alert(Name.value + " " + Surname.value + " " + Person2Cash.value);
}
function CreatePerson1()
{
    var Name=
    document.getElementById('Person1Name');
    var Surname =
    document.getElementById('Person1Surname');
    var Person1Cash =
    document.getElementById('Person1Cash');

    alert(Name.value +" " + Surname.value + " " + Person1Cash.value);
}

function Summ() {
    var d = Number(Person1Cash.value) + Number(Person2Cash.value);
    alert(d);
}