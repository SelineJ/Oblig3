
function updateViewAllPollPage() {
    document.getElementById('app').innerHTML = 
    `
    <h1>Alle polls</h1>
    <ol>${getAllPolls()}</ol>
    `

    
}
//En for loop som lager en liste over alle spørsmålene i model.polls[]
function getAllPolls(){
    let html = ``;
    for (let i = 0; i < model.polls.length; i++)
    {
     html += `<li onclick="viewSelectedPoll(${i})">${model.polls[i].question}</li>`;
    }
    return html;


    
}
//Endrer values i create poll inputsene til valgte poll sine values, og kaller changePage for å endre til createPoll siden.
function viewSelectedPoll(pollNum) {
    
    model.inputs.createPoll.pollId = model.polls[pollNum].pollId;
    model.inputs.createPoll.question = model.polls[pollNum].question;
    model.inputs.createPoll.options = model.polls[pollNum].options;
    model.inputs.createPoll.usersCanAddAlternatives = model.polls[pollNum].usersCanAddAlternatives;
    changePage('createPoll');

}