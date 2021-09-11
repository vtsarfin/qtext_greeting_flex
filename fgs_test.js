/*
https://github.com/jobisoft/quicktext/wiki/Script-support
https://github.com/jobisoft/quicktext/wiki/List-of-all-supported-tags

*/

//var company_email_re_str=this.mVariables[0];

var company_email_re_str="@myoffice.team|@collabio.team";
var rec_name = {'email': [
    'vadim.tsarfin@myoffice.team',
        'vadim.tsarfin@collabio.team',
        'alexey.krasikov@myoffice.team',
        'vtsarfin@gmail.com'
]
};
var group_greeting_inner="дорогие коллеги!";
var group_greeting_outter="коллеги!";

let to_qty=rec_name['email'].length;
if (to_qty>1) 
{
    if (rec_name['email'].find( email => !email.match(company_email_re_str))) 
    {
        console.log("Добрый день, "+group_greeting_outter + "!\n"); }
    else
    {console.log("Добрый день, "+group_greeting_inner + "!\n");}

}
else
console.log( "Добрый день, "+rec_name['email'][0]+"!\n\n");
