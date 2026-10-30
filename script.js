
x=0;

firstTime = true;
prevName = '';

robbie = "assets/robbie.png"
donut = "donut.webp"
brushbuddy = "brushbuddy.png"

witchhattitle = '<h1>Witch Hat Atelier: Kapag ang Inobasyon ay Nabigong Maabot ang mga Nangangailangan Nito</h1><br>'
witchhat = '<p>Kahit na mas mataas ang kalidad ng buhay ngayon, marami pa ring isyu sa mundo na kailangang lutasin, tulad ng malnutrisyon o mga maiiwasang sakit. Mayroong libu-libong mananaliksik na naghahanap ng solusyon o inobasyon para mga isyung ito. Mahigit sa tatlong milyong papel ang inilathala sa Scopus database, ayon sa National Center for Science and Engineering Statistics. Bagama`t hindi nagpapatuloy sa pampublikong pamamahagi dahil kulang ito sa substansiya o higpit ang karamihan sa pananaliksik sa produkto o inobasyon, marami pa ang hindi hinahabol dahil hindi kumikita. Wala gaanong akda na nagpapakita nitong “gridlocking” ng solusyon at inobasyon ng kapitalismo, pero meron akong maiisip na isa na may interesanteng ideya sa paksa.</p><br> <p>Sa Witch Hat Atelier (WHA), nakakagawa ng mga makina o aparato gamit ng mahika ang mga witches. Pwede itong ikumpara sa mga teknolohiyang inobasyon sa totoong mundo. Sinasabi sa teksto na ginagamit nila ang mahika, at gumagawa nitong mga aparato, upang makahanap ng mga solusyon sa mga problema ng mga tao, katulad ng pananaliksik sa totoong buhay.  Sa “Silver Eve” arc ng akda, may pagdiriwang saan ipinapakita ng mga witches ang kanilang aparato para sa pagkakataon na mabili ng hari at maipamahagi sa publiko.</p><br>';
witchhat2 = '<p>Nagpakita ng sarili niyang aparato si Coco, ang bida ng akda. Para may konteksto, inilikha niya ito dahil sa kanyang kaibigan, si Custas. Nakatira si Custas sa iskwater na itinayo sa ibabaw ng mga palabas na kanal. Kahit na may mahika na naglilinis sa tubig paglabas nito sa siyudad, walang naglilinis nito bago ito dumaan sa iskwater.</p><br> <p>Kaya gumawa si Coco ng pitsel na naglilinis ng tubig gamit ang parehong mahika, para malinis ang ­itinatapon na tubig. Kahit na akala ni Coco na dahil wala namang mawawala, at may matulungan na komunidad, walang bumoto para dito kasi walang personal na benepisyo para sa kanila.</p><br><p>Kahit na ang daming inobasyon at solusyon sa mga isyu ng mundo, hindi sila napupunta sa mga taong higit na nangangailangan nito. Isa sa posibleng rason dito ang kulang ng insentibo para gawing komersyal, lalo na kapag mas mababa ang ‘buying power’ ng ‘target audience’.</p><br><p>Isang halimbawa nito ang paggamit ng gamot ng erectile dysfunction para sa pagkamayabong ng mga kababaihan na may manipis na endometrial lining. Kahit na marami nang pananaliksik na nagpapakita ng positibong epekto sa pagkamayabong ng mga kababaihan na may manipis na endometrial lining (Li et al., n.d.), hindi gaanong ninanaliksik ng medisina ang mga problema na partikular sa kababaihan, at walang komersyal na produkto base sa pananaliksik na nagawa na.</p><br>';
atelier = '<img src="atelier.jpg" style="max-width:50%"><br>'
witchhat3 = '<p>At kahit na ipinamahagi sa publiko isang inobasyon, kung pribado kung ito ay pribado sa halip na pinondohan ng gobyerno, maaaring paghigpitan ang pag-access para sa mga taong mas malala ang kalagayan gamit ng ‘price gouging’. Maraming mga gamot na may ganitong isyu, tulad ng insulin (Herman & Kuo, 2021), saan kahit na kailangan ng mga tao upang mabuhay, hindi nila kayang bilhin.</p><br> <p>Ang nakikita sa “Silver Eve” arc ng WHA ang ideya na sa kabila ng lahat ng mga teknolohikal na inobasyon na nalikha natin sa loob ng maraming siglo ng sangkatauhan, sa kasalukuyan, ang mga ito ay nananatiling mga ideya lamang, nilikha upang malutas ang isang problema ngunit hindi kailanman aktwal na magagamit sa isang malawakang paraan. Kakaunti ang pakinabang sa altruismo, kaya ang mga solusyon ay maaaring mamatay o magpatuloy, ngunit hindi aktwal na maabot ang mga nangangailangan nito.</p><br><p>Ngunit kahit na ganoon, kinikilala ng WHA na hindi pa tapos ang lahat. Sa pagtatapos ng precession, nakuha ni Coco ang mga boto na kailangan niya dahil binago ng kanyang kaibigang si Agott ang kanyang kagamitan upang direktang magdala ng tubig sa kanal, na ginagawa itong mas kaakit-akit at kapaki-pakinabang sa mga tao. Ang isa pang karakter, si Olruggio, gumagawa rin ng pro bono na trabaho habang nagtatrabaho para sa mayayamang aristokrata. Hindi niya pinapasa ang kanyang inobasyon sa mga insentibo ng ibang tao, at ginagamit niyang pangtulong diretso. Bagama`t ibinebenta ng mga mangkukulam sa WHA ang kanilang mga kagamitan, nagtatrabaho sila bilang mga lingkod bayan. Sa totoong mundo, ang mga kawanggawa, programa ng gobyerno, at mga organisasyon ng pananaliksik ay maaaring makatulong sa pamamahagi at pagpopondo ng pananaliksik, hindi lamang para magawa ito kundi para maging mahalaga ito.</p><br>';

witchhatcite = '<h2>Sanggunian</h3><br><p>Publication Output by Geography and Scientific Field. National Center for Science and Engineering Statistics . (n.d.). https://www.ncses.nsf.gov/pubs/nsb20257/assets/publication-output-by-geography-and-scientific-field/figures/nsb20257-figdisc-024.pdf</p><br><p>Li, X., Luan, T., Zhao, C., Zhang, M., Dong, L., Su, Y., & Ling, X. (n.d.). Effect of sildenafil citrate on treatment of infertility in women with a thin endometrium: a systematic review and meta-analysis. Journal of International Medical Research. https://pmc.ncbi.nlm.nih.gov/articles/PMC7673063/</p><br><p>Herman, W. H., & Kuo, S. (2021). 100 years of Insulin: Why is Insulin So Expensive and What Can be Done to Control Its Cost? Endocrinology and Metabolism Clinics of North America, 50(3), e21–e34. https://doi.org/10.1016/j.ecl.2021.09.001</p>'

dcctitle = '<h1>Dungeon Crawler Carl: Pagsasamantala ng Kahirapan</h1><br>'
dcc = '<p>Ang “Dungeon Crawler Carl” (DCC) ay isang serye ng libro na tungkol sa buhay ni Carl at ang kanyang pusa, si Donut, pagkatapos ng apokaliptiko. Matapos ang pagsalakay at agawin ng mga alien ang mga yaman ng ng mga alien sa Earth, ang mga natitirang tao ay napipilitang subukang mabuhay sa baog na ibabaw ng Earth, o pumasok sa ‘Dungeon’, saan may pagkakataong mabawi ang kanilang planeta. Kahit ano pa ang piliin nila, malamang mamamatay pa rin sila. Hindi ito tulad sa ibang “alien invasion” na kuwento, dahil sa mundo ng DCC, sinabi na “tinanim” ng mga alien ng buhay sa ilang planeta at naghintay na lumagoa ng lipunan bago sila sumalakay. Ginawa nila ito dahil mas kumikita na paggawa ng “death game” na palabas gamit ang mga naninirahan sa nawasak na planeta kaysa ibenta ang mga likas na yaman galing sa planeta.</p><br> <p>Itong ideya na para lang sa libangan ng mga alien ang paghihirap ng mga naglalaro (tinataway “crawlers” ng libro) ang isa sa pinaka-importanteng aspeto ng libro. Sa una at ikalawang libro, nasa simula ng halos lahat ng kabanata ang bilang ng ‘followers’ at ‘likes’ ni Carl, at palagi itong tumataas pagkatapos ng eksena kung saan muntik siyang mamamatay. May ilang kabanata saan dinala sila Carl at Donut sa isang “celebrity-style” panayam pagkatapos ng isang laban saan meron silang kaibigang namatay. Tinatangal lahat ng mga pangit na realidad ng sitwasyon nila para hindi kailangang pag-isipan ng mga manonood kung gaano kalupit ang ginagawa ng korporasyon na namamahala sa Dungeon. Pinapatay nila ang umiihi sa labas ng CR, imposible masira ang pagkain kasi nakakabagot na kamatayan ang food poisoning, mayroon pang mabibiling mga ‘upgrades’ para hindi na kailangang matulog ang mga crawler kasi nakakabagot manonood ng taong walang ginagawa.</p><br>';

dcc2 = '<p>Itinatampok itong dehumanisasyon at kalupitan ng Dungeon sa unang “boss fight” ng serye, laban “Hoarder”. Sa kanyang unang pagpakita, inilarawan siya bilang isang taba at higanteng babae, kasuklam-suklam, nagsusuka ng ipis. Mas malapit sa isang halimaw kaysa tao. Nasa wikang Espanyol lahat ng kanyang diyalogo, at kapag isinalin mo ito, mapagtatanto mo na natatakot at nasasaktan siya, na gusto lang niyang mamatay. Sa susunod na kabanata, isiniwalat na ginagamit ng mga alien ang mapagkukunang nakuha nila mula sa planeta upang itayo ang Dungeon. Kasama dito sa mga mapagkukunang ang tao. Bago dumating ang apokalipsis, isa siyang normal na babae, ngunit ginamit ang kanyang bangkay upang lumikha ng tiwaling bersiyon ng isang tao, isang karikatura ng sangkatauhan. Nagbibigay sa kanya ng respeto ang libro at ang mga karakter, ngunit malinaw sa deskripsyon at diyalogo na nilikha siya para lang patawanin ang mga manonood ng palabas.</p><br><p>Ipinapakita ko itong mga halimbawa upang ipaliwanag ang isa sa mga pangunahing ideya sa DCC na maaaring maiugnay sa totoong buhay. Ito ay ang pagsasamantala ng kahirapan sa midya. Pinaka-halata ito sa pag-usbong ng internet, at ang kasikatan ng mga influencer tulad ni Mr. Beast. Ang mga premyong pera sa mga hamong nakakaakit ng mga desperadong tao (Scholz, n.d.). Sa kontekstong Filiipino, maraming mga vlogger na gumagamit ng mga mahihirap na tao para sa kanilang mga bidyo, nilalarawan ni Duria (2025).</p><br>'

carlndonut = '<img src="carlndonut.jpg" style="max-width:50%"><br>'

dcc3 = '<p>Gusto ko tong iugnay sa ideya ni Debord (1967/2014) ng “society of the spectacle”, saan ang “spectacle” ang ideya na kahit na iniisip na itinuturing na bahagi ng realidad ang midya, hiwalay ito sa totoong buhay, nagpapakita lang ng pekeng representasyon. Mas madali para sa isang mambabasa o manonood na magdiskonekta sa nangyayari sa isang “spectacle”. Pwede rin maging “spectacle” ang mga tao, ang kanilang kahirapan nagiging representasyon lamang, hinubaran ng lahat ng kapangitan hanggang wala nang tunay. Pinapakita ito sa DCC sa dehumanisasyon ng Hoarder, or ang “poverty porn” ng midya tulad ng kay Mr. Beast, o kahit na mga palabas tulad ng Eat Bulaga!.</p><br><p>Mayroong pagkiling batay sa kasarian sa kalupitang ito na ipinapakita sa DCC, na karaniwan sa Pilipinas. Napapaliwanag itong ideya sa konteksto ng Pilipinas ni Duria (2025). Ito bakit nakakapangilabot na babae ang pinaka-unang “boss fight” ng libro. May mas maliit na halimbawa nito, tulad ng mga babaeng goblin na nilalarawan bilang halimaw, at ang mga karaniwang paglalarawan ng mga sex worker sa mga “story floors”.</p><br>'

dcc4 = '<p>Nagtuturo ng salamin pabalik sa mga manonood ang Dungeon Crawler Carl, tulad ng lahat ng magagandang science fiction. Nagpapakita itong repleksyon ng maraming bagay, ngunit ang sa tingin ko, isa sa mga mas may kaugnayang repleksyon ay kung paano ang parehong mass media at ang pag-usbong ng internet ay lumikha ng mas malaki at mas madaling ma-access na mga plataporma upang kumita mula sa pagdurusa ng mga tao. Walang gaanong pagkakaiba sa pagitan ng dalawang taong nag-aagawan para sa isang nagliligtas-buhay na premyong pera sa reality TV at sina Carl at Donut na nag-aagawan upang iligtas ang kanilang buhay sa Dungeon Crawler World: Earth. Sa parehong sitwasyon, nagiging libangan lamang ang mga tao upang punan ang mga bulsa ng sinumang gumagawa ng nito.</p><br>'

dcccite = '<h2>Sanggunian</h3><br><p>Debord, Guy. (2014). The Society of the Spectacle (K. Knabb, Trans.). (Original work published 1967)</p><br><p>Duria, J. J. (2025). Gendered Exploitation: content examination and analysis of selected poverty porn vloggers in the Philippines. SSRN Electronic Journal. https://doi.org/10.2139/ssrn.5340865</p><br><p>Scholz, T. (n.d.). Digital Labor: The Internet as Playground and Factory. Routledge.</p>'

tbd = '<p>maam, sa kasunod na blogpost ko, magsulat ako about "The Secret Life of OFWs" by Jet Tagasa. dahil sa requirements and kulang ko ng bokabularya sa filipino, i dont think i would do it justice but i have a lot of thoughts about it. pls read it when you can. its currently selling at fully booked last i checked. its really good. also, alam ko medyo janky ito. alam ko everyone elses sites will be better made, and their posts will be better formatted, pero ang exposure ko sa blogs was on tumblr (i use a lot of tumblr), saan lahat ng posts diyan are long text posts na basically walls of text analyzing their favorite shows or books or movies tapos i wanted to make my own site also so i wanted this to be medyo early 2000s internet with a modern touch. so pls forgive the jank, dapat campy and feeling homemade ang site kasi it is, and i hope okay lang ang walls of text kasi thats my personal experience with blogging. for reference, see below. galing yan na personal ko na tumblr. kung iba ang ideya mo ng blog sa ideya ko, dont hold that against me please :(</p>'

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

tumblr1 = '<img src="tumblr1.jpeg" style="max-width:50%">'
tumblr2 = '<img src="tumblr2.jpeg" style="max-width:50%">'

function contentSwitch(name){
    var pfp = document.getElementById('pfp')
    var post = document.getElementById('post1');
    if(name == 'witchhat'){
        post.innerHTML = witchhattitle + witchhat + witchhat2 + atelier + witchhat3 + witchhatcite;
        pfp.src = brushbuddy;
    }else if(name == 'dcc'){
        post.innerHTML = dcctitle + dcc + dcc2 + carlndonut + dcc3 + dcccite;
        pfp.src = donut;
    }else if(name == 'tbd'){
        post.innerHTML = tbd + tumblr1 + tumblr2;
    }
}

function closeContent(){
    var post = document.getElementById('post1');

    if(!post.classList.contains("hidden")){
        setTimeout(() => {post.innerHTML = '';}, 400);
        post.classList.toggle("hidden");
        firstTime = true;

        pfp.src = robbie;
    }
}
