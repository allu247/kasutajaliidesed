<template>
    <div class="container pb-5">
        <div class="pb-2 mt-4 mb-2 " style = "text-align:center;">
            <h2> {{ this.$route.meta.title }} </h2>

            <OfferHeader/>
            <a class="btn btn-lg btn-block btn-outline-primary ml-auto" style = "width: 250px;" @click="goToOffer">Tagasi pakkumise juurde</a>
            <div class="row imagetiles pb-5" v-for="index in 3" :key="index">
        <div class="col-xs-12 col-md-6 col-lg-6 pt-3" style="height: 500px;" v-for="index in 2" :key="index">
            <PictureCard/>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
    import PictureCard from "./pictureCard";
    import OfferHeader from "./offerHeader";
    export default {
        name: "offerPictureGallery",
        components: {OfferHeader, PictureCard},
        methods: {

            goToOffer() {
                this.$router.push({name: 'Pakkumine'})
            },


        }
    }
</script>

<style scoped>

</style>