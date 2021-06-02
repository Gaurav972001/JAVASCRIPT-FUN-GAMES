//GAME 1
function ageInDays(){

    var birthYear=prompt("What year were your born?");
    var ageInDayss=(2021-birthYear)*365;
    var h1=document.createElement('h1');    //creates h1 tag
    var t=document.createTextNode('you are '+ageInDayss+' days old');   //create node(text) for h1 tag 
    h1.setAttribute('id','ageInDays');   //setting id of h1 tag
    h1.appendChild(t);   //adding var t text in h1
    document.getElementById('flex-box-result').appendChild(h1);     //adding h1 in containder with id flex-box-result
}
function reset(){
    document.getElementById('ageInDays').remove();
}
//GAME 2

function generateCat(){
    var image=document.createElement('img');
    // var div=document.getElementById('flex-cat-gen');
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    image.setAttribute('id','cat-img');
    document.getElementById('flex-cat-gen').appendChild(image);
    // div.appendChild(image);
}

function catReset(){
    document.getElementById('cat-img').remove();
}

//GAME 3:

function rpsGame(yourchoice){
    console.log(yourchoice);
    var humanChoice,botChoice;
    humanChoice=yourchoice.id;

    botChoice=numberToChoice(randToRpsInt());
    console.log('computer choice: ', botChoice);

    results=decideWinner(humanChoice,botChoice);
    console.log(results);

    var message=finalMessages(results);
    console.log(message);
    rpsFrontEnd(yourchoice.id,botChoice,message);
}

function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number)
{
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourchoice,botChoice)
{
    var rpsDatabase={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{'scissors':0, 'rock':1, 'paper':0.5},
        'scissors':{'scissors':0.5, 'rock':0, 'paper':1}
    }

    var yourScore= rpsDatabase[yourchoice][botChoice];
    var computerScore= rpsDatabase[botChoice][yourchoice];

    return [yourScore, computerScore];
}

function finalMessages([yourScore, computerScore])
{
    if(yourScore==0)
    {
        return {'messages': 'You lost!','color':'red'};
    }
    else if(yourScore==0.5)
    {
        return {'messages': 'You tied!','color':'yellow'};
    }
    else {
        return {'messages': 'You won!','color':'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    var imagesDatabse={
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv=document.createElement('div');
    var botDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    humanDiv.innerHTML="<img src='"+imagesDatabse[humanImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1)' >"
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    messageDiv.innerHTML="<h1 style='color: "+finalMessage['color']+ "; font-size:60px; padding: 30px; '>"+finalMessage['messages']+ "</h1>"
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);

    botDiv.innerHTML="<img src='"+imagesDatabse[botImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)' >"
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

//GAME 4

var all_buttons=document.getElementsByTagName('button');

var copyAllButtons=[];
for(let i=0;i<all_buttons.length;i++)
{
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonthingy)
{
    if(buttonthingy.value==='red')
    {
        buttonsRed();
    }
    else if(buttonthingy.value==='green'){
        buttonsGreen();
    }
    else if(buttonthingy.value==='reset')
    {
        buttonColorReset();
    }
    else if(buttonthingy.value=='random'){
        randomColor();
    }
}

function buttonsRed()
{
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen()
{
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset()
{
    for(let i=0;i<all_buttons.length;i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColor(){
    var choices=['btn-primary','btn-danger','btn-success','btn-warning'];

    for(let i=0;i<all_buttons.length;i++)
    {
    var randomNumber=Math.floor(Math.random()*4);
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(choices[randomNumber]);
    }
}
