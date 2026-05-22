// Problem: Given an HTTP status code, print which category it belongs to.
// 200–299 → Success
// 300–399 → Redirection
// 400–499 → Client Error
// 500–599 → Server Error
// Anything else → Invalid

let code=401;
if(code<=299 && code>=200)
{
    console.log("Input : "+code+" Output : Success");
}
else if(code<=399&&code>=300)
{
    console.log("Input : "+code+" Output : Redirection");
}
else if(code<=499&&code>=400)
{
console.log("Input : "+code+" Output : Client Error");
}
else if(code<=599&&code>=500)
{
console.log("Input : "+code+" Output : Server Error");
}
else
    {
    console.log("Input : "+code+" Output : not valid");
}

