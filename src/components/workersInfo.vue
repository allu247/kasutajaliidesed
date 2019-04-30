<template>
    <div class="row pb-5">
        <div class="col-xs-12 col-md-3 col-lg-3 pb-3" v-for="CEO in CEOs" :key="index">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
            <h6>{{ CEO.name }}</h6>
            <h6> {{ CEO.email }}</h6>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: "workersInfo",
        data: function () {
            return {
                CEOs: [
                    {
                        name: "Tõnis Mets", email: "tõnismets@gmail.com"
                    },

                    {
                        name: "Mirjam Paju", email: "mirjampaju@gmail.com"
                    },

                    {
                        name: "Liis Kask", email: "liiskask@gmail.com"
                    },
                    {
                        name: "Toomas Tamm", email: "toomastamm@gmail.com"
                    },

                ]
            }
        },
    }
</script>

<style scoped src="@/css/worldtravel.css">

</style>