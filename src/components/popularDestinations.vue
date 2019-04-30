<template>
    <div class="container pb-5">
        <div class="pb-2 mt-4 mb-2 " style = "text-align:center;">
            <h2> {{ this.$route.meta.title }} </h2>

        </div>
        <div class="pb-2 mt-4 mb-2" style = "text-align:center;">
            <h3> Reisipakkumised: </h3>
        </div>
        <div class="row pb-5">
            <div class="col-xs-12 col-md-4 col-lg-4 pb-5" style="height: 500px;" v-for="index in 6" :key="index">

            <ListOffers/>
            </div>
        </div>
        <div class="pb-2 mt-4 mb-2" style = "text-align:center;">

            <h3> Viimase hetke lennupiletid: </h3>
        </div>
    <div v-for="index in 2" :key="index">
        <ListTickets />
    </div>
</div>

</template>

<script>
    import ListOffers from "./listOffers"
    import ListTickets from "./listTickets";
    export default {
        name: "popularDestinations",
        components: {ListTickets, ListOffers},
        data: function () {
            return {
                offers: [
                    {id: 1, title: 'Sri Lanka ja Maldiivid - ringreis ja rannapuhkus', price: 2499, description: 'Kõrghetked: Suurepärane programm & rannapuhkus India ookeani ääres!' +
                            ' Väga head hotellid 4* hommiku- ja õhtusöökidega! Džunglisse peidetud varemed,' +
                            ' Sigiriya kaljukindlus,' +
                            ' ajaloolised Anuradhapura & Polonnaruwa, koobastemplid, teeistandus. Imeline puhkus Maldiividel.'},

                ],
                tickets: [
                    {
                        destination: "Jaapan/Tokyo", price:"300 eurot", airline: "Ryan Air", leaveDate: "Väljumine: 04.04.2019"
                    }
                ]
            }
        },



    }





</script>

<style scoped src="@/css/worldtravel.css">

</style>