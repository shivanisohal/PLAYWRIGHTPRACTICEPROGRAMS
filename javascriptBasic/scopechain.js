
let name1="shubham";
function a()
{
    let outerFunc="Test";
    function b()
    {
        let innerfunc="Test1";
        console.log(innerfunc);
        console.log(name1);
        console.log(outerFunc);
    }
    b();

}
a();