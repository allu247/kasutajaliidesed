<template>
    <div class="container">
        <div class="pb-2 mt-4 mb-2 " style = "text-align:center;">
            <h2> {{ offerInfo[0].offerName}} </h2>
        </div>
        <div class="pb-2 mt-4 mb-2 " style = "text-align:right;">

            <h4>HIND: {{ offerInfo[0].offerPrice}} </h4>
            <h5>Kestus:  {{ offerInfo[0].duration}}</h5>
            <a class="btn btn-lg btn-block btn-outline-primary ml-auto" style = "width: 150px;" @click="goToCart">Lisa korvi</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "offerHeader",
        data: function () {
            return {
                offerInfo: [
                    {   offerName: "Dubai kultuuri-ja puhkusereis",
                        offerPrice: "1990 eurot",
                        duration: "01.04.2019 - 08.04.2019",

                    }
                ]
            }
        },
        methods: {



            goToCart() {
                this.$router.push({name: 'Ostukorv'})
            }



        }
    }
</script>

<style scoped>

</style>