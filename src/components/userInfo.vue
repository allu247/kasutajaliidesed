<template>
    <div class="container pb-5">
        <div class="pb-2 mt-4 mb-2 " style = "text-align:center;">
            <h2> {{ this.$route.meta.title }} </h2>

        </div>
        <div class="container__userInfo pl-20 pb-6 pt-6" style = "text-align:center;">
        <div class="pb-2 mt-4 mb-2">
            <h3> Kasutajainfo </h3>
        </div>
        <div class="row align-items-start pb-3 pt-3">
            <p style = "text-align:center;">
                Eesnimi: Alvar
            </p>
        </div>
        <div class="row align-items-start pb-3 pt-3">
            <p style = "text-align:center;">
                Perekonnanimi: Valtna
            </p>
        </div>
        <div class="row align-items-start pb-3 pt-3">
            <p style = "text-align:center;">
                Kasutajanimi: Alvar123
            </p>
        </div>
        <div class="row align-items-start pb-3 pt-3">
            <p style = "text-align:center;">
                Email: alvarvaltna@gmail.com
            </p>
        </div>
        <div class="row align-items-start pb-3 pt-3">

            <p style = "text-align:center;">
                Telefon: 5678321
            </p>
        </div>
        </div>
        <div class="container__tickets pl-20 pb-6 pt-6" style = "text-align:center;">
            <div class="pb-2 mt-4 mb-2">
                <h3> Ostude ajalugu </h3>
            </div>
            <div v-for="index in 2" :key="index">
                <ListTickets />
            </div>
            <div class="row pt-5 pb-5">
                <div class="col-xs-12 col-md-6 col-lg-6" style="height: 500px;" v-for="index in 2" :key="index">

                            <ListOffers/>
                </div>
            </div>
        </div>
        <div class="container__changePass mb-5">
            <div class="row align-items-start pb-3 pt-3">
                <h5 style = "text-align:right;">
                    Muuda salasõna:
                </h5>
            </div>
            <div class="row align-items-start pb-3 pt-3">
                <div>
                    <label for="password">Salasõna:</label>
                    <input id="password" class="form-control" style="width:300px" type="text" name="salasõna" placeholder="Salasõna"
                           v-model="password" v-validate="{ required: true, min: 3, max: 128 }">
                    <div class="error" v-if="errors.has('salasõna')">{{errors.first('salasõna')}}</div>
                </div>
            </div>
            <div class="row align-items-start pb-3 pt-3">
                <div>
                    <label for="passwordAgain">Salasõna uuesti:</label>
                    <input id="passwordAgain" class="form-control" style="width:300px" type="text" name="salasõna uuesti" placeholder="Salasõna uuesti"
                           v-model="passwordAgain" v-validate="{ required: true, min: 3, max: 128 }">
                    <div class="error" v-if="errors.has('salasõna uuesti')">{{errors.first('salasõna uuesti')}}</div>
                </div>
            </div>
            <div class="row align-items-start pb-3 pt-3">
                <button type="button" class="btn btn-lg btn-block btn-outline-primary" @click="processForm" style = "width: 200px;">Muuda salasõna</button>
            </div>

        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2';
    import ListTickets from "./listTickets";
    import ListOffers from "./listOffers";
    export default {
        name: "userInfo",
        components: {ListOffers, ListTickets},
        data: function () {
            return {

                password: '',
                passwordAgain: '',
            }
        },
        methods: {
            processForm() {
                this.$validator.validate().then(valid => {
                    if (valid) {

                        Swal.fire({
                            position: 'center',
                            type: 'success',
                            title: "Salasõna muudetud!",
                            showConfirmButton: false,
                            timer: 1000
                        })
                    } else {
                        Swal.fire({
                            position: 'center',
                            type: 'error',
                            title: "Salasõna ei sobi!",
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                });
            }
        }
    }
</script>

<style scoped src="@/css/worldtravel.css">

</style>