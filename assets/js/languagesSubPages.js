window.addEventListener('load', () => {
    if (localStorage.getItem("language") == "turkish") {
        ProjDetailsInTurkish = {
            'turkish': {
                title: "Bu, portföy detayına bir örnektir",
                Project_Information: "Proje bilgisi",
                Category: "Kategori",
                Client: "Müşteri",
                Project_date: "proje tarihi",
                Project_URL: "Proje URL",
            }
        }
        var vecablary = Object.keys(ProjDetailsInTurkish.turkish);
        var all = document.getElementsByClassName("lang");

        for (var i = 0; i < all.length; i++) {
            all[i].innerHTML = ProjDetailsInTurkish.turkish[vecablary[i]];
        }
    }
});