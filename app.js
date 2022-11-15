function talk(){
var know = {
"Who are you" : "Hello,I am E Talk",
"Hello" : "Hi",  
"How are you" : "I am Good :)",
"I need someone to talk to" :  "Reach us on our email mbitsilikesyou@gmail.com, we answer in minutes",
"I need advice" :  "Reach us on our email mbitsilikesyou@gmail.com, we answer in minutes", 
"I need some to talk to and also some advice" : "Reach us on our email mbitsilikesyou@gmail.com, we answer in minutes",
"What is this all about" : "This is an initiative to improve the mental health of individuals by offering a listening ear and expert advice on daily matters",
"Okay" : "Thank You So Much, Dont Hesitate To Reach Out ",
"Bye" : "Bye!.."
};
var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
}
}
