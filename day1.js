const list1 = [23238,94370,15509,48816,31300,14729,47167,18644,10058,15802,63557,66676,95224,20517,33109,58060,63986,92785,75525,91034,54945,70951,72666,19148,84872,44568,83462,75888,51807,71629,78782,15141,31753,33506,47083,38009,46783,59913,27337,84961,49804,79195,37742,38653,60692,34988,68550,59229,72846,28642,96975,76719,68212,49896,85899,65378,81584,57795,89138,24417,85907,33187,32132,61218,79906,75306,36113,19848,79974,82681,61356,67779,73747,43226,27418,81936,65390,86410,63152,83433,15154,67196,52145,97392,68822,95968,10231,75979,68791,73395,35116,75457,59013,60089,81215,85282,77169,77343,58477,93845,80320,25356,30605,41757,52096,37058,59797,65557,29895,76060,20451,98101,89542,35720,21328,78382,70594,44254,79324,61358,70753,19289,50375,55565,62697,97267,10937,45672,39846,55006,12817,25730,41309,79332,62494,40764,48573,32570,70630,33351,72008,99063,55424,54777,61905,81660,43650,98062,64890,84348,19809,17397,85724,50967,80513,90817,27451,97017,22724,61250,51613,92507,20838,21646,43227,54500,67589,68298,97081,49525,77455,49455,92689,10868,26724,94594,84697,14040,26930,62034,41654,72668,69857,89426,38354,68214,51210,60260,97778,64646,86706,71151,52064,92076,52941,83276,45040,24804,80127,75976,50856,98860,86849,55826,44426,18776,88579,86039,31003,38782,44759,49379,96296,52253,40895,11295,82274,75980,80045,24187,84264,39382,68621,78207,29605,82965,35473,76842,53704,18987,87307,13653,63448,82570,35219,78126,90509,67069,30317,59656,85165,87543,63866,96015,41635,58535,86065,59283,52899,93324,30465,90803,65604,41070,21201,66296,23241,49231,16090,60878,18216,31255,43385,27548,21800,90258,66198,77218,33929,63886,38478,75472,22622,68813,24242,56625,33816,99853,25244,58312,84081,18267,98628,70385,55944,34925,45979,69251,87383,40150,53132,11700,56444,96855,84569,10076,82102,34089,75465,96939,59547,17871,48300,99007,60501,54290,82299,19912,29748,94064,67058,96558,28211,83522,24984,73026,37704,45679,59293,70715,75300,47834,73179,15396,13155,15322,87738,39228,10094,19187,24608,64188,92176,27181,25568,23269,73632,76443,50395,95389,37621,98105,52329,22302,21359,85409,78562,80124,27657,21050,99720,34473,40097,71499,14699,39662,10126,70882,53822,26814,46613,60821,50555,47797,13233,82025,60368,83906,10747,55896,92268,69037,34685,19218,28324,11651,78958,17530,74555,77014,24738,16637,45665,92616,37952,19685,94702,41971,36214,56277,50495,12931,30115,43240,35685,83746,65419,24233,47241,35356,94202,79253,47166,91716,47182,53626,13563,48825,28824,90758,89417,22416,48389,38655,27191,79955,82905,86695,40972,45612,41731,61510,91192,15004,22943,68404,60311,60689,60979,19808,80126,13846,22482,39349,85531,80209,63852,54497,51625,38979,28939,59010,30553,94589,70488,81746,64311,88295,93665,53760,14737,25521,86653,91054,74929,20082,43069,95088,82111,39862,82669,83378,62130,43544,23808,98111,20879,49519,94944,75415,47156,27019,81852,83726,36393,65529,22850,12435,45103,54394,48022,52784,76933,66619,45083,85277,95818,23357,10551,86368,49946,73961,11496,15914,21677,24401,72493,72307,25787,56985,55531,59945,63295,20808,89697,65568,98707,62217,99249,13276,10427,69239,69378,64906,79879,12341,63649,93094,81490,13491,74076,54347,49315,56725,86924,62370,48988,42946,43680,62438,46412,97903,26320,69366,34171,30248,19619,47420,87678,61051,62807,30534,49199,48341,53638,12820,79439,80714,14366,21888,95972,63117,96782,71622,62648,21936,69675,88205,93488,28475,75331,885 ]
const list2 = [13566,36024,55397,74664,17063,51799,15841,23368,31784,26560,63598,64238,34398,56909,92726,68924,57048,26014,31329,94857,62055,86820,79888,54193,64008,66408,72177,36433,50915,57446,83814,68745,49974,23911,95786,68113,94406,62211,56784,94022,25450,14134,68083,23513,12558,84396,64714,91602,34696,77831,92541,89475,85884,13067,72337,67192,79815,60194,98225,76168,49423,42334,16869,28212,49530,70987,27380,65969,58336,29555,15185,27892,45357,16226,34282,57030,67528,85594,87209,48706,39094,92425,41158,13218,89940,36158,49892,18536,33875,25301,48995,43802,15859,16762,14079,40543,78528,80563,63790,34723,42209,80010,20402,31826,17804,23133,45728,29578,25201,19223,43592,16495,50177,49325,56368,58107,96858,40702,54122,66352,84125,64557,36478,21398,23314,33560,94376,87064,85434,88218,46511,41177,25743,79467,90233,52553,60114,47197,56396,86953,33455,74476,96482,55447,90694,17644,53678,61180,65904,16186,81286,29918,19891,96319,56920,32015,83497,70611,99287,76641,61657,45309,80456,26665,29046,67399,27422,25384,99375,49040,13492,79037,13940,79569,35285,17402,28691,80060,17764,16460,46080,40227,78848,44098,22168,68974,11211,85678,47237,15654,27791,86062,15464,17781,34593,68411,74606,78082,45238,47596,83976,78775,32564,38458,56095,19049,59884,61713,12586,71952,15948,60195,66160,68140,41252,63158,35569,16913,82612,39936,35220,76131,82435,22514,53274,50112,48834,72176,42173,80511,15345,17018,56499,61108,48125,37090,41712,74389,95128,79636,32860,37312,55664,30874,67430,53615,67143,80372,42002,68161,63538,25325,34829,46528,87192,31965,68787,40059,56924,42197,26535,90702,26059,81161,62845,12510,26277,64781,13278,78633,51097,89516,87001,47790,53747,68829,57481,90261,42399,27704,28192,82081,24857,24666,11832,13780,86885,54795,49822,76824,61611,13521,12863,68277,60665,51726,51612,74645,41552,26678,74863,63800,41727,99103,58104,54295,91608,66787,96403,24122,18362,37399,76437,76764,51182,31959,78800,88215,66170,38609,93219,56941,54441,99377,23852,59302,40519,91744,58780,72924,36628,98718,81412,21317,23220,78709,39119,29614,61676,97905,14132,54096,28991,99011,14482,51520,71860,20894,25065,16521,80366,66391,63902,94636,96136,79320,67662,48663,41376,97873,64430,34888,86671,28544,66090,68744,39264,29035,37617,67516,54629,89601,77846,25577,23697,13888,36480,42693,89256,89158,57149,45687,81601,11742,25855,82126,77158,99385,52562,27936,14178,38907,16471,48879,48666,97019,78855,15889,27499,74471,27602,59841,47781,80063,60367,74814,96287,18708,28309,32491,42072,40525,23095,65115,76241,51582,76017,82319,60029,34572,11694,42589,92808,53672,71879,21102,70772,66328,28292,23647,90576,44274,93611,56311,33210,78898,65730,37335,32826,44122,72941,62253,35825,74801,19077,33451,35101,48681,48780,46277,12266,21120,20902,35431,68165,57657,55016,87368,67994,99826,88957,88985,43889,30387,99360,47035,58387,42988,44845,39179,96840,71124,70096,84859,71066,80356,21371,21765,88790,17102,87375,63108,74109,92699,24278,87513,24348,16008,96153,12282,50626,12467,59026,51222,52078,81512,26458,72722,40420,79396,44600,20546,79176,49970,76231,32729,66738,28761,69601,65035,86520,69715,59834,80407,42115,89480,88021,30456,16088,20661,16888,99028,70510,30376,71734,14921,94337,22224,42161,88361,31535,51894,42426,82387,45624,65423,34399,72594,60814,79783,98771,15746,11904,73829,15984,37923,63667,70855,80613,33857,79971,92655,29086,86558,47862,30305,43797,78738,17162,22784,75268,65143,50823,44565,71918,19190,31370,52184,70746,11795,82864,49179,93166,25964,51543,67165,14735,42619,67085,47951,37715,85323,66390,40997,37793,51479,45790,38977,26440,60484,16719,25903,35257,47974,36555,81425,56477,69938,38438,55091,11871,97372,30739,47544,89052,86846,30264,82028,66868,14950,56174,70462,77897,41292,78971,63762,86460,12600,76430,25860,73809,50807,24363,39627,56779,29471,29435,48282,13701,29066,98632,95925,63494,76894,88362,39810,74648,22893,47457,23402,43524,53995,22600,16355,83879,52304,15978,57284,87367,79453,97899,12905,20157,52491,99897,22036,93436,93947,60118,95116,15592,38745,15543,37902,78943,41806,80120,98892,96820,48791,41286,52694,74146,30157,45719,35943,76301,51285,21915,67957,79104,86815,72663,69550,16103,84534,30666,96429,12187,35462,78621,51476,82756,22845,20616,67042,16238,25871,28198,23559,78860,49908,18023,62123,51557,26004,76371,39013,18494,57718,83007,46759,57343,61566,12226,25359,25885,32679,58578,50467,72985,39985,93884,21383,76784,15103,80666,42240,63438,68737,83475,62436,52869,21103,40685,92906,59830,40987,69507,62862,29516,19760,15370,58962,79258,22407,97541,72085,51653,94689,30439,29231]

findDistanceBetweenArray( (list1, list2, d) => {
    check((a)=>{
        let i = list2.findIndex() // Finds the index of the second list
            (num => num > d - a);
        return i === -1 || arr2[i] > a + d; 
    });
    list2.sort((a,b) => a - b); // Sort the first list and subtract a and b
    return list1.reduce(
        (count, a) => count + (check(a) ? 1 : 0), 0);
});

console.log(findDistanceBetweenArray(list1, list2));