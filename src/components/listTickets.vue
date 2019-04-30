<template>
    <div class="row align-items-start border border-black pb-3 pt-3">
        <div class="col-sm-12 col-md-6 col-lg-3">
            <p style = "text-align:center;">
                Sihtkoht: {{tickets[0].destination}}
            </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3" >
            <p style = "text-align:center;">
                Hind: {{tickets[0].price}}
            </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3" >
            <p style = "text-align:center;">
                Lennuliin: {{tickets[0].airline}}
            </p>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-3" >
            <p style = "text-align:center;">
                Väljumine: {{tickets[0].leaveDate}}
            </p>
            <a class="btn btn-lg btn-block btn-outline-primary" @click="goToCart">Lisa korvi</a>
        </div>

    </div>
</template>

<script>



    export default {
        name: "listTickets",

        data: function () {
            return {
                    tickets1: [{

                        destination: "Jaapan/Tokyo", price:"300 eurot", airline: "Ryan Air", leaveDate: "Väljumine: 04.04.2019"

                    }],

                    tickets: ""

            }
        },

        mounted() {
            fetch('./json/ticket.json').then(
                function (response) {
                    console.log(response);
                    return response.json();
                }
            ).then(function (json) {

                this.tickets = json;
                console.log(this.tickets)
            })
        }
        ,



        methods: {

            goToCart() {
                this.$router.push({name: 'Ostukorv'})
            }

        }

    }
</script>

<style scoped src="@/css/worldtravel.css">

</style>