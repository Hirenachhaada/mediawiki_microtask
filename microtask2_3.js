

function active_isbn()
{
    let isbn=document.getElementById("isbn");
    let book=document.getElementById("book");
    let check_isbn=document.getElementById("check_isbn");
    let unvalid=document.getElementById("unvalid");
    let valid=document.getElementById("valid");
        if(book.checked==false)
    {
        valid.style.display="none";
        unvalid.style.display="none";
    }
    
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
    let check_newspaper=document.getElementById("check_newspaper");
   
    if(newspaper_check.checked == true)
    {
        newspaper_text.style.display="block";
        check_newspaper.style.display="flex";
        
    }
    else{
        newspaper_text.style.display="none";
        check_newspaper.style.display="none";
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
    let journal_text=document.getElementById("journal_text");
    let check_journal=document.getElementById("check_journal");
    if(journal_check.checked == true)
    {
        journal_text.style.display="block";
        check_journal.style.display="flex";
    }
    else{
        journal_text.style.display="none";
        check_journal.style.display="none";
    }
}

function active_magazine()
{
    let magazine_check=document.getElementById("magazine_checkbox");
    let magazine_text=document.getElementById("magazine_text");
    let check_magazine=document.getElementById("check_magazine");
    if(magazine_check.checked == true)
    {
        magazine_text.style.display="block";
        check_magazine.style.display="flex";
    }
    else{
        magazine_text.style.display="none";
        check_magazine.style.display="none";
    }
}

function active_others()
{
    let others_check=document.getElementById("others_checkbox");
    let others_text=document.getElementById("others_text");
    let check_others=document.getElementById("check_others");
    if(others_check.checked == true)
    {
        others_text.style.display="block";
        check_others.style.display="flex";
    }
    else{
        others_text.style.display="none";
        check_others.style.display="none";
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
    if(url_text.substring(0,8) == "https://" && url_text.substring(0,29) != "https://www.google.com/search" &&  url_text.length>20 && url_text.substring(0,22) != "https://www.google.com")
    {
        console.log(url_text.length)
        alert("valid url")
    }
    if(url_text.substring(0,12) == "https://" && url_text.substring(0,29) != "https://www.google.com/search" &&  url_text.length<20)
    {
        console.log(url_text.length)
        alert("unvalid url")
    }
    if(url_text.substring(0,29) == "https://www.google.com/search" || url_text.substring(0,22) == "https://www.google.com")
    {
        alert("Google search websites are not allowed")
    }
    
}
function check_newspaper(){
    let newspaper_text=document.getElementById("newspaper_text").value;
    if(newspaper_text.length<15){
        alert("Enter a big enough proper source")
    }
    else {
        alert("Valid source")
    }
}
function check_journal(){
    let journal_text=document.getElementById("journal_text").value;
    if(journal_text.length<15){
        alert("Enter a big enough proper source")
    }
    else {
        alert("Valid source")
    }
}
function check_magazine(){
    let magazine_text=document.getElementById("magazine_text").value;
    if(magazine_text.length<15){
        alert("Enter a big enough proper source")
    }
    else {
        alert("Valid source")
    }
}
function check_others(){
    let others_text=document.getElementById("others_text").value;
    if(others_text.length<15){
        alert("Enter a big enough proper source")
    }
    else {
        alert("Valid source")
    }
}


let newspaper_check=document.getElementById("newspaper_checkbox");
let url_check=document.getElementById("url_checkbox");
let journal_check=document.getElementById("journal_checkbox");
let magazine_check=document.getElementById("magazine_checkbox");
let others_check=document.getElementById("others_checkbox");
let submit=document.getElementById("submit")

function submitted(){
    let quotes=document.getElementById('quote').value;
if(quotes!="" && (book.checked==true ||newspaper_check.checked==true || url_check.checked==true ||journal_check.checked==true || magazine_check.checked==true || others_check.checked==true))
{
    window.location.reload();
}
if(quotes==""){
    alert("ALERT!!!!! Please enter the quote")
}
if(book.checked==false &&newspaper_check.checked==false && url_check.checked==false &&journal_check.checked==false && magazine_check.checked==false && others_check.checked==false){
    alert("ALERT!!!!! Please select atleast one checkbox and provide source to submit")
}

}

function quoted() {
    let quotes=document.getElementById('quote').value;
    if(quotes.length<12 )
    {
        
        alert("Enter atleast a big enough quote which can give idea about your edit request")
    }
    else{
        alert("valid quote")
    }
   
}
