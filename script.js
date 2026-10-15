
x=0;

firstTime = true;

yesteryear = '<p>Yesteryear is a 2026 novel following the life of Natalie Heller Mills, a "tradwife" influencer. The book flips between her past, from before she becomes the face of Yesteryear Ranch, to her present when she seemingly time travels to the 1800s and is placed in the real version of the life she mimicked on camera.</p><br> <p>To spoil the book, she never time travelled. The ranch from the 1800s and Yesteryear are one and the same. After an incident where her social media manager/producer went on TV and accused her of assault, Natalie had a mental break that resulted in her completely cutting off all contact with the outside world, ripping up their house and convincing her husband to pretend to live like they were in the 1800s for their newborn daughter. She lived this life hopped up on anti-depressants and other drugs while her husband left to “hunt and work the farm”, when in reality, he was chilling in a nearby shack, watching the game or helping their adult children clean and bring in store bought meat and vegetables. By the time of the book’s setting, she had another mental break, regressing back to when she was 20 and thinking she had time travelled.</p><br><p>Natalie and Caleb’s relationship is amicable at best and hostile at worst. They’re both subject to traditional gendered expectations but truly want the opposite. In the end, those expectations, as pushed by Natalie, destroyed all that they were.</p>';

dcc = '<p>Dungeon Crawler Carl is a scifi-fantasy book series set in a post-alien takeover of Earth. After the earth was stripped of resources, the survivors were forced to either fend for themselves on the barren surface, or go into the dungeon for a chance of taking back the planet. Unlike most alien invasion type stories where the aliens happen upon or find the planet, DCC makes it so these aliens intentionally planted humans on the planet, waited for civilization to sprout and grow, and then took over. This is because the main moneymaker is not the mining of resources, but rather the income from televising the planet’s inhabitants fighting and killing their way through the dungeon for a chance to survive.</p><br> <p>This is one of the things that makes DCC an interesting read. It’s like “The Hunger Games” in space. There is no shortage of scenes reminding the reader that all the suffering the players are going through is for the entertainment of aliens. In the first and second book, almost every chapter started with a counter of the titular character Carl’s follower count. We have a number of interview chapters where Carl and his cat Donut are whisked away to do an interview right before or after they’ve fought for their lives. Even the logistics of the dungeon itself are specially made to be viewer friendly and palatable, from the numerous bathrooms to prevent players from peeing in sight of the camera, impossible to spoil food because food poisoning is a very unglamorous death, and even the</p>'

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

    if(!post.classList.contains("hidden")){
        setTimeout(() => {post.classList.toggle("hidden")}, 500);
        
        console.log("asdf")
    }

    if (!firstTime){
        setTimeout(() => {contentSwitch(name)}, 500);
    }else{
        contentSwitch(name);
        firstTime = false;
    }

    post.classList.toggle("hidden");
}

function contentSwitch(name){
    var post = document.getElementById('post1');
    if(name == 'yesteryear'){
        post.innerHTML = yesteryear;
    }else if(name == 'dcc'){
        post.innerHTML = dcc;
    }else if(name == 'tbd'){
        post.innerHTML = tbd;
    }
}

function copyText() {
    var copy = document.getElementById("email");
    navigator.clipboard.writeText("justinebiancastaromana@gmail.com");
    alert("Email copied to clipboard");
}
