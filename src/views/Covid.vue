<template>
<div class="container mt-5 mb-5">
    <div class="row justify-content-center">
        <h3>Covid Data Countryiwise</h3>
        <div class="col-md-4">
            <select name="" id="" v-model="cdata.selected" class="form-control" @change="getCountry(cdata.selected)">
                <option v-for="country in  cdata.countries" :key="country.id" :value="country.Country">
                    {{country.Country}}
                </option>
            </select>
        </div>
        <CovidList :status="cdata.status" :date="cdata.date" :NewConfirmed="cdata.NewConfirmed" :NewDeaths="cdata.NewDeaths" :NewRecovered="cdata.NewRecovered" :TotalConfirmed="cdata.TotalConfirmed" :TotalDeaths="cdata.TotalDeaths" :TotalRecovered="cdata.TotalRecovered" />
    </div>
</div>
</template>

<script>
import CovidList from "@/components/CovidList.vue";
import {
    reactive
} from "@vue/reactivity";
import {
    onMounted
} from "@vue/runtime-core";
import axios from "axios";
export default {
    components: {
        CovidList,
    },
    setup() {
        const cdata = reactive({
            covidata: "",
            global: "",
            countries: "",
            selected: '',
            status: "Global",
            date:'',
            NewConfirmed: '',
            NewDeaths: '',
            NewRecovered: '',
            TotalConfirmed: '',
            TotalDeaths: '',
            TotalRecovered: '',
        });

        onMounted(() => {
            axios.get("https://api.covid19api.com/summary").then((res) => {
                console.log(res.data.Date)
                cdata.countries = res.data.Countries;
                cdata.date = res.data.Date
                cdata.NewConfirmed = res.data.Global.NewConfirmed
                cdata.NewDeaths = res.data.Global.NewDeaths
                cdata.NewRecovered = res.data.Global.NewRecovered
                cdata.TotalConfirmed = res.data.Global.TotalConfirmed
                cdata.TotalDeaths = res.data.Global.TotalDeaths
                cdata.TotalRecovered = res.data.Global.TotalRecovered
            });
        });

        const getCountry = (currentcountry) => {
            const countrynew = cdata.countries.find(item => {
                return item.Country === currentcountry
            })
            console.log(countrynew)
            cdata.status = countrynew.Country
            cdata.NewConfirmed = countrynew.NewConfirmed
            cdata.NewDeaths = countrynew.NewDeaths
            cdata.NewRecovered = countrynew.NewRecovered
            cdata.TotalConfirmed = countrynew.TotalConfirmed
            cdata.TotalDeaths = countrynew.TotalDeaths
            cdata.TotalRecovered = countrynew.TotalRecovered

        }

        return {
            cdata,
            getCountry
        };
    },
};
</script>

<style scoped>
</style>
