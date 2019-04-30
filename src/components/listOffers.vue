<template>
            <div class="card h-100">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal"> {{offers[0].title}}</h4>
                </div>
                <div class="card-body">
                    <p class="card-text" >
                        {{offers[0].description}}
                    </p>
                </div>
                <div class="card-footer">
                    <p style = "text-align:center;">
                        HIND: {{offers[0].price}}
                    </p>
                    <a class="btn btn-lg btn-block btn-outline-primary" @click="goToOffer">Vaata lähemalt</a>
                </div>
            </div>
</template>

<script>
    import json from '../../public/json/offer.json'
    export default {

        name: "listOffers",
        data: function () {
            return {
                offers: [
                    {id: 1, title: 'Sri Lanka ja Maldiivid - ringreis ja rannapuhkus', price: 2499, description: 'Kõrghetked: Suurepärane programm & rannapuhkus India ookeani ääres!' +
                            ' Väga head hotellid 4* hommiku- ja õhtusöökidega! Džunglisse peidetud varemed,' +
                            ' Sigiriya kaljukindlus,' +
                            ' ajaloolised Anuradhapura & Polonnaruwa, koobastemplid, teeistandus. Imeline puhkus Maldiividel.'},

                ]
            }
        },
        methods: {

            goToOffer() {
                this.$router.push({name: 'Pakkumine'})
            },



            goToCart() {
                this.$router.push({name: 'Ostukorv'})
            }



        }
    }
</script>

<style scoped src="@/css/worldtravel.css">

</style>