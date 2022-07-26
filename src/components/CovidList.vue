<template>
<div class="mt-3">
    <h1>{{status}}</h1>
    <p class="qoute">Date: {{date}}</p>
    <div class="d-flex  flex-wrap cardFlex">
        <div class="card mt-5">
            <div class="card-body">
                <div class="card-title">
                    NewConfirmed: <h2>{{NewConfirmed}}</h2>
                </div>
            </div>
        </div>
        <div class="card mt-5">
            <div class="card-body">
                <div class="card-title">
                    NewRecovered: <h2>{{NewRecovered}}</h2>
                </div>
            </div>
        </div>

        <div class="card mt-5">
            <div class="card-body">
                <div class="card-title">
                    NewRecovered: <h2> {{NewRecovered}}</h2>
                </div>

            </div>
        </div>

        <div class="card mt-5">
            <div class="card-body">
                <div class="card-title">
                    TotalConfirmed: <h2>{{TotalConfirmed}}</h2>
                </div>
            </div>
        </div>

        <div class="card mt-5">
            <div class="card-body">
                <div class="card-title">
                    TotalDeaths: <h2>{{TotalDeaths}}</h2>
                </div>
            </div>
        </div>

        <div class="card mt-5">
            <div class="card-body">

                <div class="card-title">
                    TotalRecovered: <h2>{{TotalRecovered}}</h2>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    props: ['date', 'status', "NewConfirmed", "NewDeaths", "NewRecovered", "TotalConfirmed", "TotalDeaths", 'TotalRecovered'],
    setup() {

        return {

        }
    }
}
</script>

<style scoped>
.card {
    width: 400px;
    background: red;
    padding: 30px;
    box-shadow: 4px 5px 6px #282828;
}

.card h2 {
    font-size: 3rem;
    color: #fff;
    text-shadow: 4px 0px 5px black;
    font-weight: 900;
}

.cardFlex .card:nth-child(odd) {
    background: blue;
}

.cardFlex .card:nth-child(even) {
    background: green;
}
</style>
