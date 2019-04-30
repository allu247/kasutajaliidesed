

<template>
    <div v-for="(ticket, index) in tickets">
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
    </div>
</template>

<script>
    /* eslint-disable no-console */

    //https://vuejs.org/v2/guide/list.html

    export default {
        name: "listTickets",

        data: function () {
            return {
                tickets: []
            }
        },

        mounted() {
            fetch('./json/ticket.json')
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    console.log(json);
                    this.tickets = json;
                })
                .catch(error => {
                    console.error(error);
                });
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