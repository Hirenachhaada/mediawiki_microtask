

function active_isbn()
{
    let isbn=document.getElementById("isbn");
    let book=document.getElementById("book");
    let check_isbn=document.getElementById("check_isbn");
    let unvalid=document.getElementById("unvalid");
    let valid=document.getElementById("valid");
    
    if(book.checked == true)
    {
        isbn.style.display="block";
        check_isbn.style.display="flex";  
    }
    else{
        isbn.style.display="none";
        check_isbn.style.display="none";
    }
}
function active_newspaper()
{
    let newspaper_check=document.getElementById("newspaper_checkbox");
    let newspaper_text=document.getElementById("newspaper_text");
   
    if(newspaper_check.checked == true)
    {
        newspaper_text.style.display="block";
        
    }
    else{
        newspaper_text.style.display="none";
    }
}
function active_url()
{
    let url_check=document.getElementById("url_checkbox");
    let url_text=document.getElementById("url_text");
    let check_url=document.getElementById("check_url");
    if(url_check.checked == true)
    {
        url_text.style.display="block";
        check_url.style.display="flex"; 
    }
    else{
        url_text.style.display="none";
        check_url.style.display="none";
    }
}

function active_journal()
{
    let journal_check=document.getElementById("journal_checkbox");
    let journal_text=document.getElementById("journal_text")
    if(journal_check.checked == true)
    {
        journal_text.style.display="block";
    }
    else{
        journal_text.style.display="none";
    }
}

function active_magazine()
{
    let magazine_check=document.getElementById("magazine_checkbox");
    let magazine_text=document.getElementById("magazine_text")
    if(magazine_check.checked == true)
    {
        magazine_text.style.display="block";
    }
    else{
        magazine_text.style.display="none";
    }
}

function active_others()
{
    let others_check=document.getElementById("others_checkbox");
    let others_text=document.getElementById("others_text")
    if(others_check.checked == true)
    {
        others_text.style.display="block";
    }
    else{
        others_text.style.display="none";
    }
}

let book1=document.getElementById("isbn").value;
let unvalid=document.getElementById("unvalid");
let valid=document.getElementById("valid");
let book=document.getElementById("book");
if(book.checked==false)
{
    valid.style.display="none";
    unvalid.style.display="none";
}

function check_isbn(){
    let isbn=document.getElementById("isbn");
    let book=document.getElementById("book");
    let book1=document.getElementById("isbn").value;
    let unvalid=document.getElementById("unvalid");
    let valid=document.getElementById("valid");
    
    if(book1.length<13)
    {
        unvalid.style.display="flex";
        valid.style.display="none";
        console.log("less")
        console.log(book1.length)
    }
    else{
       unvalid.style.display="none";
        valid.style.display="flex";
    }

}

function check_url(){
    let url_text=document.getElementById("url_text").value;
    if(url_text.substring(0,8) != "https://" )
    {
        alert("Your url is not of type https ")
    }
    if(url_text.substring(0,8) == "https://" && url_text.substring(0,29) != "https://www.google.com/search" &&  url_text.length>20)
    {
        console.log(url_text.length)
        alert("valid url")
    }
    if(url_text.substring(0,12) == "https://" && url_text.substring(0,29) != "https://www.google.com/search" &&  url_text.length<20)
    {
        console.log(url_text.length)
        alert("unvalid url")
    }
    if(url_text.substring(0,29) == "https://www.google.com/search" )
    {
        alert("Google search websites are not allowed")
    }
    

}


let newspaper_check=document.getElementById("newspaper_checkbox");
let url_check=document.getElementById("url_checkbox");
let journal_check=document.getElementById("journal_checkbox");
let magazine_check=document.getElementById("magazine_checkbox");
let others_check=document.getElementById("others_checkbox");
let submit=document.getElementById("submit")

function submitted(){
if(book.checked==true ||newspaper_check.checked==true || url_check.checked==true ||journal_check.checked==true || magazine_check.checked==true || others_check.checked==true)
{
    window.location.reload();
}
else{
    alert("ALERT!!!!! Please select atleast one checkbox and provide source to submit")
}
}

function quoted() {
    let quotes=document.getElementById('quote').value;
    if(quotes.length<12 )
    {
        
        alert("Enter atleast a big enough quote which can give idea about your edit request")
    }
    /*if(quotes.length>15){
        alert("Valid quotes")
    }*/
   
}





/*let str=document.getElementById("url_text").value;

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }*/

  /*
    To check the word entered in the quotes are from english dictionary or not

   if you really want to check the input against any english word the "English Dictionary" the array of words would
    be realy huge and, as it would be loaded along the Javascript, the Javascript would become a file too big 
    to download along with your web page.

In that case, you'd need a database (let say MySQL) to store the words and a script that runs on the server (let's say PHP)
 that you pass the word with an ajax call. The script would make a query on the DB to see if the word exists and give back 
 the result to your javascript as the ajax response (1=english word 0=word not on the dictionary)
  
 
 */ 

