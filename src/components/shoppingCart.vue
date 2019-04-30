<template>
    <div class="container pb-5">
        <div class="pb-2 mt-4 mb-2 " style = "text-align:center;">
            <h2> {{ this.$route.meta.title }} </h2>
        </div>
        <div class="container-fluid border border-black pb-3 pt-3">
            <div class="pb-2 mt-4 mb-2 " style = "text-align:center;">
                <h3> Sinu ostud(4) </h3>
            </div>
        </div>
        <div class="container-fluid">
            <div class="pl-4 pb-2 mt-4 mb-2" style = "text-align:left;">

                <h3> Lennupiletid: </h3>
            </div>

            <div v-for="index in 2" :key="index">
                <ListTickets />
            </div>
        </div>
        <div class="container-fluid">
            <div class="pl-4 pb-2 mt-4 mb-2" style = "text-align:left;">

                <h3> Reisipakkumised: </h3>
            </div>
            <div class="row pb-5">
                <div class="col-xs-12 col-md-4 col-lg-4 pb-5" style="height: 500px;" v-for="index in 2" :key="index">

                    <ListOffers/>
                </div>
            </div>
        </div>

            <div class="container mb-5 pb-10" style = "text-align:center;">
                <div class="row align-items-start pb-5">
                <h3> Vali maksemeetod: </h3>
                </div>
                <div class="row align-items-start pb-5">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" style = "width: 200px" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pangakaart
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Swedbank</a>
                                <a class="dropdown-item" href="#">LHV</a>
                                <a class="dropdown-item" href="#">Danske Bank</a>
                            </div>
                    </div>
                </div>
                    <div class="row align-items-start pb-5">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" style = "width: 200px" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Bitcoin
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <a class="dropdown-item" href="#">Ethereum</a>
                                <a class="dropdown-item" href="#">Bitcoin</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                <div class="row align-items-start pb-5">
                    <button type="button" class="btn btn-lg btn-block btn-outline-primary" style = "width: 200px; text-align: center ">Suundu maksma</button>
                </div>
            </div>

    </div>

</template>

<script>

    import ListTickets from "./listTickets";
    import ListOffers from "./listOffers";
    export default {
        name: "shoppingCart",
        components: {ListOffers, ListTickets},
        data: function () {
            return {

            }
        },
        methods: {

            goToOffer() {
                this.$router.push({name: 'Pakkumine'})
            }

        }
    }
</script>



<style scoped src="@/css/worldtravel.css">

</style>