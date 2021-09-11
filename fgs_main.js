/*
https://github.com/jobisoft/quicktext/wiki/Script-support
https://github.com/jobisoft/quicktext/wiki/List-of-all-supported-tags

*/

var company_email_re_str=this.mVariables[0];
//var company_email_re= new RegExp(company_email_re_str);
let rec_name = this.mQuicktext.process_to();
let to_qty=rec_name['email'].length;
if (to_qty>1)
    return "Добрый день, коллеги!\n\n"+rec_name['email'];
else
    return "Добрый день, " + rec_name['firstname']+"!\n\n";
