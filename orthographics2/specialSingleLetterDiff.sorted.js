var pairsInFILE = new Array(
["adept","adopt"],
["antsy","artsy"],
["assent","assert"],
["asserted","assorted"],
["band","bard"],
["bane","bare"],
["banter","barter"],
["basis","oasis"],
["beard","heard"],
["bearing","hearing"],
["bearings","hearings"],
["bears","hears"],
["beast","boast"],
["beasts","boasts"],
["bend","bond"],
["bending","bonding"],
["bending","pending"],
["bends","bonds"],
["betting","petting"],
["bid","bio"],
["billows","pillows"],
["bind","bird"],
["binder","hinder"],
["binders","hinders"],
["binds","birds"],
["bitch","hitch"],
["bitch","pitch"],
["bitten","bitter"],
["blend","blond"],
["blight","plight"],
["blot","plot"],
["blots","plots"],
["blow","plow"],
["blowing","plowing"],
["blows","plows"],
["blunder","plunder"],
["blundered","plundered"],
["blunt","blurt"],
["blunted","blurted"],
["blush","plush"],
["board","hoard"],
["boarding","hoarding"],
["boards","hoards"],
["bold","hold"],
["bolder","holder"],
["bolster","holster"],
["bone","bore"],
["bone","hone"],
["boned","bored"],
["boned","honed"],
["bones","bores"],
["bounded","hounded"],
["bounded","pounded"],
["bounding","hounding"],
["bounding","pounding"],
["bounds","hounds"],
["bounds","pounds"],
["bout","pout"],
["bower","power"],
["breach","broach"],
["breach","preach"],
["breached","broached"],
["breached","preached"],
["breaches","preaches"],
["breaching","preaching"],
["bread","broad"],
["brew","brow"],
["brews","brows"],
["brick","prick"],
["bricks","pricks"],
["bride","pride"],
["brides","prides"],
["brim","prim"],
["brow","prow"],
["bust","oust"],
["busted","ousted"],
["careen","career"],
["case","ease"],
["cases","eases"],
["cast","east"],
["cave","eave"],
["cede","code"],
["ceded","coded"],
["ceding","coding"],
["chained","chaired"],
["change","charge"],
["changeable","chargeable"],
["changed","charged"],
["changes","charges"],
["changing","charging"],
["chant","chart"],
["chanted","charted"],
["chanting","charting"],
["chants","charts"],
["clan","elan"],
["clarify","clarity"],
["clean","clear"],
["cleaned","cleared"],
["cleaner","clearer"],
["cleanest","clearest"],
["cleaning","clearing"],
["cleanly","clearly"],
["cleans","clears"],
["colon","color"],
["colonization","colorization"],
["commence","commerce"],
["compete","compote"],
["cone","core"],
["cones","cores"],
["cons","eons"],
["convent","convert"],
["convey","convoy"],
["conveys","convoys"],
["count","court"],
["counted","courted"],
["counting","courting"],
["counts","courts"],
["dank","dark"],
["deer","doer"],
["defect","detect"],
["defected","detected"],
["defecting","detecting"],
["defection","detection"],
["defective","detective"],
["defector","detector"],
["defectors","detectors"],
["defects","detects"],
["defer","deter"],
["deferred","deterred"],
["deferring","deterring"],
["defers","deters"],
["dell","doll"],
["dignify","dignity"],
["dispense","disperse"],
["dispensed","dispersed"],
["dispensing","dispersing"],
["diversify","diversity"],
["dozed","oozed"],
["dozing","oozing"],
["dress","dross"],
["dust","oust"],
["dusted","ousted"],
["dusting","ousting"],
["eases","oases"],
["elder","older"],
["eldest","oldest"],
["emission","omission"],
["emissions","omissions"],
["emit","omit"],
["emits","omits"],
["emitted","omitted"],
["emitting","omitting"],
["ether","other"],
["ethers","others"],
["eve","eye"],
["even","ever"],
["ever","over"],
["fact","tact"],
["faint","taint"],
["fainted","tainted"],
["fake","take"],
["fakes","takes"],
["faking","taking"],
["falsify","falsity"],
["fame","tame"],
["fear","tear"],
["fearing","tearing"],
["fears","tears"],
["fend","tend"],
["fended","tended"],
["fending","tending"],
["fester","foster"],
["festering","fostering"],
["filth","tilth"],
["finder","tinder"],
["fine","fire"],
["fined","fired"],
["fines","fires"],
["fining","firing"],
["flattened","flattered"],
["flattening","flattering"],
["foiled","toiled"],
["foiling","toiling"],
["fold","told"],
["frail","trail"],
["french","trench"],
["gene","gone"],
["gone","gore"],
["hand","hard"],
["handy","hardy"],
["harrowing","narrowing"],
["hasty","nasty"],
["haughty","naughty"],
["hear","near"],
["heard","hoard"],
["hearing","nearing"],
["hears","nears"],
["hearse","hoarse"],
["heed","need"],
["heeded","needed"],
["heeds","needs"],
["heist","hoist"],
["herb","hero"],
["herd","hero"],
["here","hero"],
["herein","heroin"],
["high","nigh"],
["hone","none"],
["hovel","novel"],
["hovels","novels"],
["how","now"],
["hull","null"],
["hunt","hurt"],
["hunting","hurting"],
["hunts","hurts"],
["hype","hypo"],
["identifies","identities"],
["identify","identity"],
["impunity","impurity"],
["indemnify","indemnity"],
["infer","inter"],
["inferior","interior"],
["inferiority","interiority"],
["infernal","internal"],
["inferred","interred"],
["ink","irk"],
["inks","irks"],
["intensify","intensity"],
["interned","interred"],
["invented","inverted"],
["lead","load"],
["leaded","loaded"],
["leader","loader"],
["leaders","loaders"],
["leading","loading"],
["leads","loads"],
["leaves","loaves"],
["left","loft"],
["less","loss"],
["lessen","lesson"],
["lessens","lessons"],
["lest","lost"],
["lever","lover"],
["levers","lovers"],
["literal","litoral"],
["limb","limp"],
["man","mar"],
["mans","mars"],
["mean","moan"],
["meaning","moaning"],
["means","moans"],
["meld","mold"],
["melding","molding"],
["melting","molting"],
["mere","more"],
["mess","moss"],
["mine","mire"],
["mined","mired"],
["moons","moors"],
["naked","raked"],
["nation","ration"],
["national","rational"],
["nationality","rationality"],
["nationalization","rationalization"],
["nationalize","rationalize"],
["nationalized","rationalized"],
["nationalizing","rationalizing"],
["nationally","rationally"],
["nations","rations"],
["nearing","rearing"],
["nears","rears"],
["neon","noon"],
["nest","rest"],
["nested","rested"],
["nesting","resting"],
["nests","rests"],
["new","now"],
["niches","riches"],
["night","right"],
["nightly","rightly"],
["nights","rights"],
["notation","rotation"],
["note","rote"],
["nude","rude"],
["nun","run"],
["nuns","runs"],
["nut","rut"],
["nuts","ruts"],
["oath","path"],
["oaths","paths"],
["off","oft"],
["oiled","piled"],
["one","ore"],
["ones","ores"],
["overbearing","overhearing"],
["pain","pair"],
["pained","paired"],
["pains","pairs"],
["panted","parted"],
["panting","parting"],
["premise","promise"],
["premises","promises"],
["prescribe","proscribe"],
["prescribed","proscribed"],
["prescribes","proscribes"],
["prescription","proscription"],
["promoted","prompted"],
["promoting","prompting"],
["purify","purity"],
["qualifies","qualities"],
["qualify","quality"],
["quantify","quantity"],
["queen","queer"],
["rabid","rapid"],
["read","road"],
["reads","roads"],
["rebel","repel"],
["rebelled","repelled"],
["rebelling","repelling"],
["rebels","repels"],
["refrain","retrain"],
["refrained","retrained"],
["refraining","retraining"],
["relics","relies"],
["reuse","rouse"],
["reused","roused"],
["rife","rite"],
["riff","rift"],
["riven","river"],
["robe","rope"],
["robed","roped"],
["robes","ropes"],
["roof","root"],
["roofed","rooted"],
["roofs","roots"],
["salve","salvo"],
["savers","savors"],
["saving","saying"],
["savings","sayings"],
["scaled","sealed"],
["scaling","sealing"],
["scam","seam"],
["scams","seams"],
["scan","scar"],
["scans","scars"],
["scar","sear"],
["scaring","searing"],
["sear","soar"],
["searing","soaring"],
["seen","seer"],
["selves","solves"],
["shake","snake"],
["shaking","snaking"],
["share","snare"],
["shared","snared"],
["sharing","snaring"],
["sheen","sheer"],
["sheer","sneer"],
["shone","shore"],
["sifting","sitting"],
["sigh","sign"],
["sighed","signed"],
["sighing","signing"],
["sighs","signs"],
["sin","sir"],
["slew","slow"],
["solidify","solidity"],
["sour","spur"],
["sours","spurs"],
["specifics","specifies"],
["spinal","spiral"],
["spine","spire"],
["spun","spur"],
["spurned","spurred"],
["spurning","spurring"],
["squint","squirt"],
["stain","stair"],
["stains","stairs"],
["staved","stayed"],
["step","stop"],
["stepped","stopped"],
["stepping","stopping"],
["steps","stops"],
["stone","store"],
["stoned","stored"],
["stones","stores"],
["stony","story"],
["studies","studios"],
["tell","toll"],
["tells","tolls"],
["tense","terse"],
["tensely","tersely"],
["threat","throat"],
["threats","throats"],
["throughout","throughput"],
["tribe","tripe"],
["unclean","unclear"],
["unfold","untold"],
["unheeded","unneeded"],
["unify","unity"],
["verify","verity"],
["vertex","vortex"],
["wafer","water"],
["wafers","waters"],
["waif","wait"],
["wan","war"],
["wand","ward"],
["warning","warring"],
["wean","wear"],
["weaning","wearing"],
["were","wore"],
["where","whore"],
["winds","winos"],
["wine","wire"],
["woe","woo"],
["woes","woos"]
);