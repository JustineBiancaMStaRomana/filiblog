
x=0;

firstTime = true;
prevName = '';

yesteryear = '<p>hindi pa to tapos maam</p>';

dcc = '<p>Dungeon Crawler Carl is a scifi-fantasy book series set in a post-alien takeover of Earth. After the earth was stripped of resources, the survivors were forced to either fend for themselves on the barren surface, or go into the dungeon for a chance of taking back the planet. Unlike most alien invasion type stories where the aliens happen upon or find the planet, DCC makes it so these aliens intentionally planted humans on the planet, waited for civilization to sprout and grow, and then took over. This is because the main moneymaker is not the mining of resources, but rather the income from televising the planet’s inhabitants fighting and killing their way through the dungeon for a chance to survive.</p><br> <p>This is one of the things that makes DCC an interesting read. It’s like “The Hunger Games” in space. There is no shortage of scenes reminding the reader that all the suffering the players are going through is for the entertainment of aliens. In the first and second book, almost every chapter started with a counter of the titular character Carl’s follower count. We have a number of interview chapters where Carl and his cat Donut are whisked away to do an interview right before or after they’ve fought for their lives. Even the logistics of the dungeon itself are specially made to be viewer friendly and palatable, from the numerous bathrooms to prevent players from peeing in sight of the camera, impossible to spoil food because food poisoning is a very unglamorous death, even the loot is specially tailored to fit the “character” a crawler is “playing”.</p><br> <p>The juxtaposition of the absurdity and wackiness of the dungeon and its cruelty are highlighted in the first boss fight of the series, with “The Hoarder”. When she’s first shown, she’s described as a giant, fat, hideous woman surrounded by garbage and puking cockroaches. Her only dialogue is in Spanish, but when you translate it, you realize she’s pleading for her suffering to end. Later, it’s revealed that the aliens tend to reuse the resources taken from the world to create the dungeon, including the people. So by that, it’s shown that the Hoarder was a normal woman warped and twisted to a disgusting caricature of humanity. The circumstances are treated with respect by the book and human characters, but she’s painted as something to point at and laugh by the dungeon’s system AI.</p><br>'

dcc2 = '<p>I show all of these examples to highlight one of the key points of DCC that could be related to real life, which is the exploitation of suffering in entertainment. This has become most apparent with the rise of the internet, and popularity of influencers like Mr. Beast. </p><br> <p>I’d like to relate this idea to that of the ‘society of the spectacle”, as coined by Debord (1967/2014), where he discusses his concept of the ‘spectacle’ as the idea that entertainment and media is a part of society, but in reality is disconnected from the real world. The dehumanization of the Hoarder in DCC and the apparent poverty porn of shows like those by Mr. Beast turn people into these spectacles, an idea that only exists on screen for those who can afford to look away in real life.</p>'

tbd = '<p>wala pa akong nasulat para dito</p>'

function typeout(){
    var text = "Aklatan ni Bianca";
    var name = document.getElementById("name");

    if(x < text.length){
        name.innerHTML += text.charAt(x);
        setTimeout(typeout, 50);
        x=x+1;
    }
    
}

function changeContent(name){
    var post = document.getElementById('post1');

    if (name == prevName){
        closeContent();
        prevName = '';
        return;
    }

    if(!post.classList.contains("hidden")){
        setTimeout(() => {post.classList.toggle("hidden")}, 400);
        
        console.log("asdf")
    }

    if (!firstTime){
        setTimeout(() => {contentSwitch(name)}, 400);
    }else{
        contentSwitch(name);
        firstTime = false;
    }

    prevName = name;
    post.classList.toggle("hidden");
}

function contentSwitch(name){
    var post = document.getElementById('post1');
    if(name == 'yesteryear'){
        post.innerHTML = yesteryear;
    }else if(name == 'dcc'){
        post.innerHTML = dcc + dcc2;
    }else if(name == 'tbd'){
        post.innerHTML = tbd;
    }
}

function closeContent(){
    var post = document.getElementById('post1');

    if(!post.classList.contains("hidden")){
        setTimeout(() => {post.innerHTML = '';}, 400);
        post.classList.toggle("hidden");
        firstTime = true;
    }
}
