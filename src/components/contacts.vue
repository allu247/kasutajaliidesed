<template>
    <div class="container pb-5">
        <div class="pb-2 mt-4 mb-2 " style = "text-align:center;">
            <h2> {{ this.$route.meta.title }} </h2>

        </div>
        <div class="container-fluid__contacts">
            <div class="row align-items-start border border-black pb-3 pt-3">
                <div class="col-xs-12 col-md-4 col-lg-4" style = "text-align:center;">
                    <p>
                    <h5>AADRESS:</h5>
                    <p>Pärnu mnt 76,</p>
                    <p>Tallinn, Harjumaa</p>

                </div>
                <div class="col-xs-12 col-md-4 col-lg-4" style = "text-align:center;">
                    <h5> MEILI AADRESS:</h5>
                    <p>worldtravel@travel.com</p>
                </div>
                <div class="col-xs-12 col-md-4 col-lg-4" style = "text-align:center;">
                    <h5> TELEFON: </h5>
                    <p> 5687321 </p>
                </div>
            </div>
        </div>
        <div class="pb-2 mt-4 mb-2" style = "text-align:center;">
            <h3> Firmajuhid: </h3>
        </div>
                <WorkersInfo/>

        <div class="pb-5" style = "text-align:center;">
            <h3> Töötajad: </h3>
        </div>
            <WorkersInfo/>
    </div>
</template>

<script>

    import WorkersInfo from "./workersInfo";
    export default {
        name: "contacts",
        components: {WorkersInfo},
    }
</script>

<style scoped>

</style>