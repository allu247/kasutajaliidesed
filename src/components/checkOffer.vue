<template>
    <div class="container pb-5">
        <div class="pb-2 mt-4 mb-2 " style = "text-align:center;">
            <h2> {{ this.$route.meta.title }} </h2>
        </div>
                <OfferHeader/>

            <div class="container-fluid mb-5">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#üldinfo" role="tab" aria-selected="true">Üldinfo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#reisikava" role="tab"  aria-selected="false">Reisikava</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#reisihind" role="tab"  aria-selected="false">Reisi hind</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab1" data-toggle="tab" href="#viisajadokumendid" role="tab"  aria-selected="false">Viisa ja dokumendid</a>
                    </li>
                </ul>
                <div class="row align-items-start pb-5">
                    <div class="col" style="width: 500px">
                        <div class="card h-100">
                            <div class="card-body">
                                <div class="tab-content" id="myTabContent">
                                    <p class="tab-pane fade" id="üldinfo" role="tabpanel" aria-labelledby="home-tab">
                                        {{ offerInfo[0].generalInfo}}
                                    </p>
                                    <p class="tab-pane fade" id="reisikava" role="tabpanel" aria-labelledby="profile-tab">
                                        {{ offerInfo[0].travelPlan}}
                                    </p>
                                    <p class="tab-pane fade show active" id="reisihind" role="tabpanel" aria-labelledby="contact-tab">
                                        {{ offerInfo[0].priceIncludes}}
                                    </p>
                                    <p class="tab-pane fade show active" id="viisajadokumendid" role="tabpanel" aria-labelledby="contact-tab1">
                                        {{ offerInfo[0].documentInfo}}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-6 col-lg-6" style="height: 500px">
                        <div class="card h-100">

                            <img class="img-fluid w-100 h-100" src="maldiivid4.jpg" alt="Cinque Terre">

                            <div class="card-footer">
                                <a class="btn btn-lg btn-block btn-outline-primary" @click="goToGallery">Veel pilte reisist</a>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import OfferHeader from "./offerHeader";
    export default {
        name: "checkOffer.vue",
        components: {OfferHeader},
        data: function () {
            return {
                offerInfo: [
                    {
                        generalInfo: "Meie reisidel teenindavad Teid targad ja laia silmaringiga eestikeelsed giidid ning hoolivad reisijuhid. Lisaks on reisil ka kohalik giid, kes jagab praktilist infot ja tegeleb kohapealse korraldusliku poolega. Reisi meeldivaks kulgemiseks oleme välja valinud hea tasemega hotellid. Meie reisijuhid jagavad soovitusi söögikohtade osas ja annavad nõu muude küsimuste korral. Anname endast kõik, et veedaksite kvaliteetse ja täisväärtusliku puhkuse! Araabia Ühendemiraatide liitriigi seitse iseseisvat emiraati asuvad küll kõrbes, kuid asustus on siiski koondunud linnadesse. Dubai pakub kõigile külastajatele uusi ja põnevaid elamusi. See on koht, kus minevik kohtub tulevikuga, kus on võimalik näha nii ajaloolist kui ka ultramodernset. Dubais on ilusad liivarannad, suurepärased võimalused sisseostude sooritamiseks, maailma moodsaim arhitektuur. Dubai on eksootiline ja samas turvaline sihtkoht. Siin asuvad 828 m kõrgune Burj Khalifa, siin on merre ehitatud tehissaared, siin on maailma üheks kõige luksuslikumaks peetav hotell Burj-Al-Arab, maailma suurim kaubanduskeskus. Abu Dhabi on riigi poliitika- ja tööstuskeskus, olles üks suurimaid naftatootjaid maailmas.",
                        travelPlan: "1. päev LEND TALLINN-ISTANBUL Koguneme kell 16:30 Tallinna lennujaama lendudele registreerimise check-in lauas nr 1, kus reisijatele väljastatakse vajalikud reisidokumendid. Lend Tallinn-Istanbul kell 18:10-22:30 (kohalikud kellaajad, lennu number TK1424). Palume kontrollida kogunemise ja reisi väljumise kellaaega vahetult enne reisi. 2. päev LEND ISTANBUL–DUBAI, DHOW LAEVAKRUIIS Lend Istanbul-Dubai kell 01:25-06:50 (kohalikud kellaajad, lennu number TK762). Varahommikune saabumine Araabia Ühendemiraatidesse - Dubaisse. Transfeer hotelli, majutus hotellis Dusit D2**** või sarnases. Puhkus lennust. Infotund, mille jooksul meie kogenud giid juhatab Teile kätte parimad söögikohad ja meelelahutuspaigad, annab infot kohalike olude ja lähiümbruse kohta. Soovijatele lisatasu eest dhow laevakruiis õhtusöögiga. 3. päev DUBAI, BURJ KHALIFAH PILVELÕHKUJA Hommikusöök. Täna tutvume Dubai vana ja uue linnaosaga. Vanalinna keskuseks on Deira, mis on koondunud ümber turu. Dubai uues linnaosas kõrguvad põneva arhitektuuriga pilvelõhkujad. Omaette vaatamisväärsuseks peetakse maailma suurimat Dubai kaubamaja, kust võib leida lausa 1200 erinevat poodi. Pärastlõunal esmatutvus Dubaiga - Burj Khalifah pilvelõhkuja on maailma kõrgeim hoone olles Dubai uue linnaosa keskuseks. Ehitis on tekitanud maailmas palju uudishimu ning huvi. Majal on 160 korrust, meie sõidame 124. korrusele, kust avaneb imeline vaade tervele linnale. Tutvume Dubai vanimate hoonetega Bastakiya kvartalis, mis on oma nime saanud Lõuna-Iraanist Bastakist pärit Pärsia kaupmeeste järgi. Külastame 180 aasta vanust Al Fahidi kindlust, kus hetkel tegutseb Dubai ajaloo muuseum. Võtame ette paadisõidu mööda Dubai jõge traditsioonilise Abra paadiga. Külastame Dubai kuulsaid turge – vürtsiturgu, tekstiili- ning kullaturgu. Vaatame maailma luksuslikumat hotelli Burj Al Arabi. 4. päev VABA PÄEV VÕI SAFARI Hommikusöök. Vaba päev Dubai elu-oluga tutvumiseks, linnapeal uudistamiseks ning mõnusaks supluseks. Tegevust jagub ka lastega peredele. Näiteks võib külastada teemaparki. Soovijatele pärastlõunane safari (lisatasu eest) täis põnevust ning idamaist maagiat. Safari jooksul imetleme Dubai kõrbe ning õhtustame. 5. päev VABA PÄEV VÕI EKSKURSIOON MUSANDAMI POOLSAARELE Hommikusöök. Vaba päev Dubais puhkamiseks, rannamõnude nautimiseks või sisseostude sooritamiseks. Soovijatega sõidame Musandami poolsaarele Omaanis (lisatasu eest), mis tõlkes tähendab fjordide maa. Dibba Al Byahi kalurikülast alustame kruiisi, mille jooksul näeme mägede vahele surutud kohalikke kalurikülasid ning imelist loodust. Soovijatel võimalus snorgeldamiseks. Kruiisi hinnas sisaldub lõunasöök. 6. päev VABA PÄEV RANNAMÕNUDE NAUTIMISEKS Hommikusöök. Päev puhkuseks. Dubais on palju põnevat tegevust kogu perele. Võib külastada individuaalselt näiteks vahvat veeparki, võtta ette helikopterisõit või külastada delfinaariumit. 7. päev ABU DHABI Hommikusöök. Suundume Araabia Ühendemiraatide pealinna Abu Dhabisse, mille nimi pärineb legendist, eesti keelde tõlgituna tähendab see gaselli isa. Tõeliselt kaunist, roheliste aedade linna, kutsutakse sageli ka Lähis-Ida Manhattaniks. Kuid moodsate pilvelõhkujate kõrval kõrguvad minaretid. Abu Dhabi on suur emiraat, laiudes lausa 86% terve riigi ulatusest. Ekskursiooni käigus näeme ligi saja kupliga ehitud emiraadi paleed, mida kasutatakse hotellina. Näeme kuulsat Uniooni väljakut, mis on dekoreeritud Ühendemiraatide kommetest lähtuvalt. Võimalusel külastame Sheikh Zayedi nimelist mošeed, mis on maailmas suuruselt kolmas, mahutades 40000 inimest. Ehitusega realiseerus idee maailma ühtsusest, mis väljendub juba materjalide valikus, kasutusel on marmor, kuld, poolvääriskivid, kristallid ja keraamika (külastusel palume tähelepanu pöörata riietumise nõuetele). Sõidame mööda rannikut ning imetleme kauneid vaateid merele. Külastame traditsioonilist külakest, mis loodi, et kohalikud noored ei unustaks oma päritolu. Ühtlasi avaneb võimalus külastada luksuslikku kaubamaja Abu Dhabi Marina. 8. päev LEND DUBAI-ISTANBUL ja ISTANBUL-TALLINN Aeg suunduda lennujaama. Lend Dubai-Istanbul kell 08:30-12:45 ja lend Istanbul-Tallinn kell 14:55-17:15 (kohalikud kellaajad, lennu numbrid TK0763 ja TK1423).",
                        priceIncludes: "Hind sisaldab: Lennupiletid Tallinn-Istanbul-Dubai-Istanbul-Tallinn (liinilennud) Lennujaamamaksud, käibemaks. Lennujaamamaksud võivad muutuda olenemata reisikorraldajast! Toitlustus lennukis Mugavustega reisibussi kasutamine vastavalt programmile Giidi/reisisaatja teenused, eestikeelsed ekskursioonid ja reisiteenindus kogu reisi vältel Majutus hotellis**** vastavalt programmile (2-in toad), 5 hommikusööki Varajane check-in hotelli saabumispäeval Turismimaks Dubais Lisakulud: Ühene majutus hotellis 435 € Tervisekindlustus al. 15,34 € (kuni 65 a, vanematele kõrgem tariif). Lisainfo reisikindlustuse kohta Germalo Reiside kontorist. Soovitame kindlasti vormistada ka reisitõrkekindlustuse! Safari 65 € (ettetellimisel ja tasumisel), sisaldab söögi, orienteeruv väljasõidu kestus u kell 15:30-21:30 Ekskursioon Musandami poolsaar 135 € (ettetellimisel ja tasumisel), sisaldab lõunasöögi, kestab terve päev. Palume meile teatada koos tellimusega passi number! Dhow laevakruiis õhtusöögiga 60 € (ettetellimisel, maksmine kohapeal), kestus u 2h Burj Khalifah pilet 40 € (ettetellimisel kontoris kuu enne reisi, maksmine kohapeal ) Privaatne Abra takso ja Dubai muuseum ning Monoreil 10 € (kogutakse kogusummana) Helikopterisõit hind alates 325 USD (ei sisalda transfeere) Veepark hind alates 65 USD (individuaalne külastus) Delfinaarium hind alates 25 USD (individuaalne külastus)",
                        documentInfo: "Ainuke kehtiv reisidokument on pass. Pass peab kehtima vähemalt 6 kuud peale kavandatava reisi lõppemist. Passis ei tohi olla Iisraeli viisa või Iisraeli sissesõidu- või väljasõidutemplid! Halli passiga viisat saada ei ole võimalik."

                    }
                ]
            }
        },

        methods: {

            goToCart() {
                this.$router.push({name: 'Ostukorv'})
            },
            goToGallery() {
                this.$router.push({name: 'Galerii'})
            }

        }

    }
</script>

<style scoped>

</style>