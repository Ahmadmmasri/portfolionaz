var word = {
    "tr": [
        "kürtaj",
        "anal",
        "anüs",
        "eşek",
        "eşek beceren",
        "eşekler",
        "pislik",
        "götler",
        "top çantası",
        "taşaklar",
        "piç",
        "bellend",
        "hayvani",
        "canavarlık",
        "orospu",
        "orospular",
        "bitching",
        "kanlı",
        "oral seks",
        "bollok",
        "dangalak",
        "göğüsler",
        "memeler",
        "buceta",
        "serseri",
        "popo",
        "halı muncher",
        "çatlak",
        "cipa",
        "klitoris",
        "horoz",
        "saksocu",
        "musluklar",
        "zenci",
        "bok",
        "boşalmak",
        "cumshot",
        "cunillingus",
        "am",
        "lanet olsun",
        "çük",
        "yapay penis",
        "dildolar",
        "dink",
        "köpek beceren",
        "duche",
        "lezbiyen",
        "ejaculated",
        "ejakülatlar",
        "ejaculating",
        "boşalma",
        "ibne",
        "alt sınıf öğrencilerini uşak gibi kullanma",
        "ibneler",
        "kıç",
        "felching",
        "flanş",
        "kahretsin",
        "becerdin",
        "pezevenk",
        "pislikler",
        "kahrolası",
        "fuckings",
        "fuck you",
        "fuck",
        "seks",
        "şekerleme makinesi",
        "god lanetli",
        "lanet olası",
        "cehennem",
        "hore",
        "dik",
        "otuzbir",
        "kock",
        "labia",
        "şehvet",
        "lusting",
        "mazoşist",
        "mastürbasyon yapmak",
        "anne herif",
        "nazi",
        "zenciler",
        "orgasim",
        "orgazm",
        "ağaçkakan",
        "penis",
        "işemek",
        "sarhoş",
        "öfkeli!",
        "kızdıran",
        "sidik",
        "pissoff",
        "bok, kaka",
        "porno",
        "pornografi",
        "dikmek",
        "pube",
        "amcıklar",
        "kedi",
        "kolza",
        "ırz düşmanı",
        "rektum",
        "geciktirmek",
        "rimming",
        "sadist",
        "sikmek",
        "sikme",
        "vidalama",
        "skrotum",
        "meni",
        "sevişmek",
        "shagging",
        "transeksüel",
        "palavra",
        "shitted",
        "shitting",
        "boktan",
        "sürtük",
        "fahişeler",
        "smegma",
        "sürme hastalığı",
        "kapmak",
        "orospu çocuğu",
        "spac",
        "cesaret",
        "testis",
        "baştankara",
        "titt",
        "vajina",
        "viagra",
        "vulva",
        "wang",
        "masturbasyon yapmak",
        "fahişe",
        "x oy verildi",
        "xxx"
    ]
};

document.getElementById("submitbuttom").addEventListener("click", function(e) {
    e.preventDefault();
    var TextMessage = [];
    console.log(word.tr.length);
    TextMessage = document.getElementById("Textmessage").value.toLowerCase().split(" ");
    IsTextbad();

    function IsTextbad() {
        var number = 0;
        TextMessage.forEach(element => {
            for (var i = 0; i < word.tr.length; i++) {
                if (word.tr.indexOf(TextMessage[i]) >= 0) {
                    number++
                }
            }
        });
        number > 0 ? result(true) : result(false);

        function result(value) {
            var name = document.getElementById("subject").value;
            var email = document.getElementById("email").value;
            var subj = document.getElementById("subject").value;

            if (value != true)
                name != "" && email != "" && subj != "" ? document.querySelector('Form').submit() : null;
            else
                alert("Please be polite")

        }
    }









});