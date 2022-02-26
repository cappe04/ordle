const tiles = document.getElementsByClassName("tile")
let current_tile = 0 // next tile to get text
let current_row = 0 // current row*5+current tile to give actual index

let words = ['abbot', 'abort', 'absid', 'accis', 'ackja', 'adept', 'adlig', 'aerob', 'afasi', 'affix', 'affär', 'afton', 'agape', 'agave', 'agens', 'agent', 'agera', 'agoni', 'agrar', 'agtak', 'aioli', 'ajour', 'ajöss', 'akryl', 'akter', 'aktie', 'aktiv', 'aktor', 'aktre', 'aktör', 'alarm', 'alban', 'album', 'alert', 'alexi', 'alias', 'alibi', 'alika', 'alkis', 'alkov', 'alkyd', 'allra', 'alpby', 'alpin', 'alrot', 'altan', 'altea', 'alumn', 'alvar', 'ambis', 'ambra', 'amorf', 'amour', 'ampel', 'amper', 'amöba', 'anbud', 'andas', 'andel', 'andra', 'anemi', 'angel', 'angla', 'anime', 'aning', 'anjon', 'ankel', 'ankra', 'anlag', 'anlöp', 'annan', 'annex', 'anomi', 'anrik', 'anrop', 'anslå', 
    'anstå', 'antal', 'antik', 'aorta', 'apart', 'apati', 'apbur', 'aphus', 'april', 'aptit', 'areal', 'arena', 'argon', 'argot', 'arian', 'arier', 'arisk', 'arkad', 'arkiv', 'armod', 'arrak', 'arsle', 'artig', 'arton', 'artär', 'asgam', 'asiat', 'asien', 'askes', 'asket', 'astat', 'aster', 'astma', 'ataxi', 'atlas', 'atlet', 'atoll', 'atoni', 'atopi', 'attan', 'attjo', 'atypi', 'augur', 'avans', 'avart', 'avbön', 'avdöd', 'aveny', 'avers', 'avgas', 'avgud', 'aviga', 'avisa', 'avkok', 'avlat', 'avrad', 'avrop', 'avsky', 'avslå', 'avstå', 'avtal', 'avtvå', 'avtåg', 'avund', 'avväg', 'aväta', 'axial', 'axill', 'axiom', 'aztek', 'backa', 'backe', 'bacon', 'badda', 'baden', 'bagel', 'bagge', 'bagis', 'bahai', 'bajsa', 'bakis', 'bakom', 'bakpå', 'bakre', 'bakut', 'bakåt', 'balja', 'balka', 'balla', 'balle', 'balsa', 'bamba', 'bambu', 'bamse', 'banal', 'banan', 'banda', 'bandy', 'bandå', 'baner', 'banga', 'banjo', 'banka', 'banko', 'banna', 'banta', 'bantu', 'barka', 'baron', 'barra', 'barsk', 'baryt', 'basal', 'basar', 'basis', 'basse', 'basta', 'bastu', 'basun', 'basår', 'batat', 'batik', 'baxna', 'beach', 'bebis', 'bebop', 'becka', 'bedra', 'befäl', 'begär', 'behag', 'behov', 'beige', 'belag', 'benig', 'benin', 'berså', 
    'beråd', 'beröm', 'beska', 'beslå', 'bestå', 'besök', 'betel', 'betro', 'betsa', 'betyg', 'bevis', 'bevåg', 'bibba', 'bibel', 'bidan', 'bidra', 'bienn', 'bikta', 'bilda', 'bilkö', 'bimbo', 'binda', 'binge', 'bingo', 'binka', 'binom', 'binär', 'birma', 'birot', 'bisak', 'bisam', 'bisol', 'bison', 'bistå', 'bitas', 'bitch', 'biten', 'biton', 'bitsk', 'bitti', 'bivax', 'biväg', 'biyta', 'bjuda', 'bjugg', 'bjäbb', 'bjäfs', 'bjärt', 'björk', 'björn', 'black', 'blada', 'blaha', 'blaja', 'bland', 'blank', 'blarr', 'blask', 'blast', 'bleck', 'bleka', 'bleke', 'blick', 'blida', 'bliga', 'blind', 'bling', 'blini', 'blink', 'blipp', 'blixt', 'block', 'bloda', 'blogg', 'blond', 'bloss', 'blota', 'blott', 'blues', 'bluff', 'blund', 'blurb', 'blusa', 'blygd', 'blåis', 'blåna', 'blåsa', 'blåst', 'blått', 'bläck', 'bläda', 'bläng', 'blänk', 'blära', 'blöda', 'blöja', 'blöta', 'board', 'bobba', 'bobin', 'bocka', 'boden', 'boett', 'bogey', 'boggi', 'bohag', 'bohem', 'bojar', 'boken', 'bokna', 'bolag', 'bolid', 'bolin', 'bolla', 'bolma', 'bolån', 'bomba', 'bomma', 'bonad', 'bonde', 'bonga', 'bonus', 'booma', 'boost', 'boots', 'borax', 'borda', 'boren', 'borga', 'borra', 'borst', 'borta', 'borås', 'bosch', 'botox', 'boule', 'bowla', 
    'boxas', 'boxer', 'boyta', 'boägg', 'bragd', 'braja', 'braka', 'brand', 'brant', 'brasa', 'brass', 'bravo', 'break', 'breda', 'bredd', 'brigg', 'brink', 'brisa', 'brist', 'brits', 'britt', 'brodd', 'broms', 'bronk', 'brons', 'brosk', 'brott', 'brugd', 'bruka', 'brunn', 'brunt', 'brusa', 'brydd', 'brygd', 'bryna', 'bryne', 'brysk', 'bryta', 'bråck', 'bråka', 'bråte', 'bräda', 'brädd', 'bräde', 'bräka', 'bräma', 'bränd', 'bräss', 'bröla', 'bröst', 'budda', 'buffa', 'bugga', 'bukig', 'bukta', 'bulla', 'bulle', 'bulna', 'bulta', 'bunge', 'bunke', 'bunta', 'buren', 'burka', 'burma', 'burma', 'burop', 'burra', 'busig', 'buska', 'buske', 'bussa', 'butan', 'butik', 'butta', 'butyl', 'bygel', 'bygga', 'byggd', 'bygge', 'bylta', 'bylte', 'byråd', 'bytta', 'byväg', 'byxis', 'bågig', 'bågna', 'bädda', 'bägge', 'bälga', 'bälta', 'bälte', 'bända', 'bänka', 'bärga', 'bärig', 'bärsa', 'bärår', 'bävan', 'bäver', 'bödel', 'bökig', 'bölja', 'börda', 'börja', 'bössa', 'bösta', 'bövel', 'cache', 'cajun', 'campa', 'casta', 'ceder', 'cello', 'cerat', 'cesur', 'chans', 'chark', 'charm', 'chatt', 'check', 'chefa', 'chile', 'chili', 'chipp', 'chips', 'chock', 'choka', 'choke', 'chosa', 'chuck', 'cider', 'cilie', 'cirka', 'citat', 'civil', 
    'clips', 'clown', 'coach', 'coupe', 'cover', 'crack', 'crawl', 'crazy', 'credo', 'cross', 'culpa', 'curla', 'curry', 'cykel', 'cykla', 'cysta', 'dabba', 'dadda', 'dadel', 'dagas', 'dager', 'dagga', 'dagis', 'dalbo', 'daler', 'dalsk', 'dalta', 'damig', 'damma', 'dampa', 'damur', 'dandy', 'daner', 'dansa', 'dansk', 'darra', 'daska', 'dativ', 'datja', 'dator', 'datum', 'deala', 'debet', 'debil', 'debut', 'degel', 'degig', 'deism', 'deist', 'dejsa', 'dejta', 'dekad', 'dekal', 'dekan', 'dekis', 'dekor', 'delad', 'delfi', 'delge', 'delta', 'demon', 'denar', 'denim', 'denne', 'deppa', 'derby', 'desto', 'deuce', 'devis', 'devon', 'devot', 'diffa', 'digel', 'diger', 'digga', 'digna', 'dikta', 'dildo', 'dilla', 'dille', 'dimma', 'dimpa', 'dimra', 'dinar', 'dinge', 'dingo', 'dippa', 'dirka', 'dirra', 'disig', 'diska', 'disko', 'dissa', 'disös', 'ditåt', 'divan', 'divig', 'divis', 'dixie', 'djinn', 'djonk', 'djärv', 'docka', 'dofta', 'dolma', 'dolme', 'dolsk', 'dolus', 'domna', 'domän', 'donna', 'doppa', 'dorer', 'dosis', 'doula', 'doyen', 'draft', 'dragg', 'drake', 'drama', 'drank', 'drapa', 'dreja', 'dress', 'dreva', 'drift', 'drill', 'drink', 'driva', 'drive', 'droga', 'dront', 'dropp', 'drots', 'drott', 'druid', 'druva', 
    'dryad', 'dryck', 'dryga', 'drypa', 'dråsa', 'dråse', 'drägg', 'dräkt', 'dräll', 'dräng', 'dräpa', 'dröja', 'dröna', 'drösa', 'dubai', 'dubba', 'ducka', 'duell', 'duett', 'dugga', 'dukat', 'dumma', 'dummy', 'dumpa', 'dunge', 'dunig', 'dunka', 'dunsa', 'dunst', 'durka', 'durra', 'dusch', 'duska', 'dusör', 'dutta', 'duven', 'duvna', 'dvala', 'dvärg', 'dygna', 'dylik', 'dynga', 'dypöl', 'dyrka', 'dyvåt', 'dådra', 'dålig', 'dåsig', 'dåtid', 'däcka', 'dädan', 'dämma', 'dämme', 'dämpa', 'dänga', 'dänka', 'däran', 'därav', 'därom', 'därpå', 'därur', 'däråt', 'däven', 'dävna', 'däxel', 'dödis', 'döing', 'dölja', 'dörja', 'eagle', 'ebola', 'edera', 'edikt', 'edlig', 'efter', 'eftis', 'ehuru', 'ejder', 'ekfat', 'eklog', 'eklut', 'eklöv', 'ekoby', 'ekoxe', 'eksem', 'eland', 'elbas', 'elbil', 'eldig', 'elegi', 'elfel', 'elfte', 'eller', 'ellok', 'elnät', 'eloge', 'eltåg', 'elugn', 'emalj', 'emfas', 'emoji', 'empir', 'enare', 'enbär', 'endiv', 'enfas', 'enhet', 'ening', 'enkel', 'enkla', 'enkom', 'enkät', 'enorm', 'enris', 'enrum', 'ensak', 'ensam', 'ental', 'envar', 'envig', 'envis', 'enzym', 'enögd', 'eocen', 'eoler', 'eosin', 'episk', 'epoxi', 'espri', 'ester', 'estet', 'etage', 'etapp', 'etisk', 'etter', 'event', 'exakt', 
    'exfru', 'exman', 'extas', 'exter', 'extra', 'fabel', 'fabla', 'facil', 'facit', 'fadäs', 'fager', 'fakir', 'falka', 'falla', 'falna', 'falsa', 'falsk', 'falun', 'famla', 'famna', 'famös', 'faner', 'farad', 'farao', 'faren', 'farin', 'farma', 'farsa', 'farsi', 'fasad', 'fasan', 'fasen', 'fason', 'fasta', 'fatal', 'fatig', 'fatta', 'fatwa', 'fatöl', 'fauna', 'favör', 'feber', 'feeri', 'fegis', 'fejka', 'fejsa', 'fekal', 'felas', 'femma', 'femte', 'fenol', 'fenyl', 'ferie', 'festa', 'fetal', 'fetma', 'fetna', 'fetta', 'fiber', 'ficka', 'fidus', 'fiffa', 'figur', 'fiken', 'fikon', 'fikus', 'filea', 'filma', 'filta', 'filur', 'fimpa', 'final', 'fingå', 'finit', 'finka', 'finna', 'finne', 'finsk', 'finta', 'firma', 'firre', 'fisig', 'fiska', 'fiske', 'fitta', 'fixie', 'fjant', 'fjong', 'fjord', 'fjutt', 'fjäll', 'fjärd', 'fjärt', 'fjäsa', 'fjäsk', 'flabb', 'flack', 'flaga', 'flagg', 'flake', 'flams', 'flank', 'flark', 'flarn', 'flata', 'flaxa', 'flera', 'flest', 'flexa', 'flika', 'flina', 'fling', 'flink', 'flint', 'flisa', 'flock', 'flopp', 'flora', 'flott', 'fluff', 'fluga', 'fluid', 'flukt', 'fluor', 'flush', 'fluss', 'flyga', 'flygg', 'flykt', 'flyta', 'flytt', 'flåsa', 'flått', 'fläck', 'fläka', 'fläkt', 'flämt', 
    'fläng', 'fläns', 'flärd', 'flärp', 'fläsk', 'fläta', 'flöda', 'flöde', 'flöja', 'flöjt', 'flört', 'flöte', 'flöts', 'fnasa', 'fnask', 'fnatt', 'fniss', 'fnysa', 'focka', 'foder', 'fodra', 'fogde', 'fokal', 'fokus', 'folie', 'folio', 'folka', 'fonem', 'forma', 'forsa', 'forta', 'forte', 'forum', 'foton', 'frack', 'frakt', 'franc', 'frank', 'frans', 'frasa', 'freak', 'freda', 'frejd', 'freon', 'fresk', 'frett', 'frige', 'frisk', 'frist', 'frita', 'friår', 'frond', 'front', 'frost', 'fruga', 'frukt', 'fryle', 'fryna', 'frysa', 'fråga', 'fräck', 'fräne', 'fräsa', 'fräta', 'fröjd', 'fubba', 'fukta', 'fulna', 'fumla', 'funka', 'furie', 'furir', 'fuska', 'futil', 'futta', 'fylka', 'fylke', 'fylla', 'fylld', 'fylle', 'fyllo', 'fynda', 'fyrop', 'fysik', 'fågel', 'fålla', 'fånga', 'fånge', 'fånig', 'fårig', 'fåtal', 'fäbod', 'fäfot', 'fägna', 'fähus', 'fäkta', 'fälad', 'fälla', 'fälle', 'fänad', 'färde', 'färga', 'färja', 'färla', 'färna', 'färsk', 'fästa', 'fäste', 'fäsör', 'följa', 'följd', 'följe', 'förbi', 'förgå', 'förig', 'förmå', 'förna', 'förom', 'förra', 'förrn', 'förse', 'först', 'förta', 'förty', 'förut', 'förår', 'gabon', 'gabon', 'gadda', 'gagat', 'gagga', 'gagna', 'galax', 'galej', 'galen', 'galge', 'galla', 
    'galon', 'galva', 'galär', 'gamba', 'gamet', 'gamig', 'gamma', 'gapig', 'garde', 'garva', 'gaska', 'gasol', 'gassa', 'gasta', 'gauss', 'gavel', 'gebit', 'gecko', 'gegga', 'gehör', 'geist', 'gelea', 'gemak', 'gemen', 'gemyt', 'gemål', 'genes', 'genie', 'genom', 'genre', 'genta', 'genua', 'genua', 'genus', 'getto', 'gevär', 'ghana', 'gifta', 'gifte', 'gilja', 'gilla', 'gille', 'ginst', 'gippa', 'gipsa', 'gipyr', 'girig', 'gissa', 'gista', 'gitta', 'given', 'givet', 'gjord', 'gjuse', 'gjuta', 'glada', 'glana', 'glans', 'glapp', 'glasa', 'glass', 'glatt', 'glesa', 'glete', 'glida', 'glima', 'glimt', 'gliom', 'glipa', 'glira', 'glisa', 'glopp', 'glosa', 'gloso', 'glugg', 'glunt', 'glupa', 'glutt', 'glytt', 'gläfs', 'glänt', 'glöda', 'glögg', 'gnabb', 'gnaga', 'gnata', 'gnejs', 'gneka', 'gneta', 'gnida', 'gnist', 'gnola', 'gnägg', 'gnäll', 'gnöla', 'godis', 'godta', 'golfa', 'golva', 'gonad', 'gorma', 'gorån', 'gosig', 'gosse', 'gotik', 'gotsk', 'gotta', 'gouda', 'graal', 'grabb', 'grace', 'grada', 'grand', 'grann', 'grava', 'green', 'greja', 'grena', 'grepe', 'grepp', 'greve', 'grift', 'grill', 'grina', 'grind', 'gripa', 'grisa', 'grisk', 'groda', 'grodd', 'grogg'
]
let word = words[Math.floor(Math.random() * words.length)]

const green = "#538d4e"
const yellow = "#b59f3b"

String.prototype.replaceAt = function(index, char){
    let str = this.valueOf()
    if (index < this.length-1){ 
        str = str.slice(0, index) + char + str.slice(index+1);
    } else {
        str = str.slice(0, -1) + "-"
    }
    return str
}

function get_index(i=current_tile){
    return i+current_row*5
}

function insert_char(char){
    tiles[get_index()].innerHTML = char;
    current_tile++;
}

function delete_char(){
    current_tile--;
    tiles[get_index()].innerHTML = "";
}

function get_string(){
    let string = "";
    for(let i = 0; i<5; i++){
        string = string + tiles[get_index(i)].innerHTML;
    };
    return string;
}

function check(guess){
    let place_word = word
    for(let i = 0; i<5; i++){
        if(guess[i] == word[i]){
            tiles[get_index(i)].style.backgroundColor = green
            place_word = place_word.replaceAt(i, "-") // replace med - i stället
        }
    }
    if (place_word.includes("-----")){
        alert("Victory Royale! Ordet var " + word + ".")
    }
    console.log(place_word)
    for(let char of guess){
        if(place_word.includes(char)){
            index = guess.indexOf(char)
            console.log(place_word, char, index)
            tiles[get_index(index)].style.backgroundColor = yellow
            place_word = place_word.replaceAt(index, "-")
        }
    }
}

function guess(guessed_string){
    check(guessed_string)

    if (current_row == 5){
        alert("You baaad! Du förlorade. Ordet var " + word + ".")
    }

    current_row++
    current_tile = 0
}

function on_key(event){
    if(event.key == "Backspace"){
        current_tile > 0 ? delete_char() : null;
    } else if ("abcdefghijklmnopqrstuvwxyzåäö".includes(event.key)){
        current_tile < 30 && Math.ceil((get_index()+1)/5) == current_row+1 || current_tile == 0 ? insert_char(event.key) : null;
    } else if (event.key == "Enter" && current_tile == 5){
        let guessed_string = get_string()
        if (words.includes(guessed_string)){
            guess(guessed_string)
        } else {
            alert(guessed_string + " är inte att godkänt ord.")
        }
    }
}

document.addEventListener("keydown", function(event){on_key(event)})