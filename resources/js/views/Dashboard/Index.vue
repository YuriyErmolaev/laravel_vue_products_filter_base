<template>
   
    
    <div class="card card-primary card-outline">
        <div class="card-body">
            
            <filter-product
                @filterItems="filterItems"
            />
            
            <table-admin
                :items="items.data"
                :headers="headers"
                @updateItems="getItems"
            >
            </table-admin>
            <vue-pagination
                :pagination="items.meta ?? {}"
                @paginate="getItems"
                :offset="per_page"
            >
            </vue-pagination>
        </div>
    </div>
</template>

<script>
import DataService from "../../services/DataService";
import TableAdmin from "../Components/Products/TableAdmin";
import FilterProduct from "../Components/Products/FilterProduct.vue";
import VuePagination from "../Components/Products/Pagination";


export default {
    data() {
        return {
            title: {},
            items: {},
            offset: null,
            headers: {},
            per_page: null,
            sort: null,
            dir: null,
            add: '',
            edit: '',
            current_page: 1,
            filter: {}               
        };
    },
    components: {
        TableAdmin,
        VuePagination,
        FilterProduct
    },
    computed : {
    },
    methods: {    
        filterItems(filter){
            this.filter = filter;
            this.getItems();
        },
        getItems(page, sort, dir) {            
            if (sort) this.sort = sort;
            if (dir) this.dir = dir;
            

            DataService.getList(this.per_page, page, this.sort, this.dir, this.filter).then(
                (response) => {
                    //this.setDefault();
                    this.items = response.data ?? [];

                    const url = new URL(window.location.href);
                    url.searchParams.delete('page');
                    if(page > 1){
                        url.searchParams.set('page', page);
                    }

                    window.history.replaceState(null, null, url); // or pushState

                }
            );
        },
        setDefault() {

            let url = 'products';
            let table = 'products';
            this.title = 'Продукты';
            this.headers = [
                {
                    title: "ID",
                    code: "id" ,
                    dir: "desc",
                    is_sort: true,
                },
                {
                    title: "Name",
                    code: "name",
                    dir: "asc",
                    is_sort: true,
                },
                {
                    title: "Code",
                    code: "code",
                    dir: "asc",
                    is_sort: true,
                },
                {
                    title: "Price",
                    code: "price",
                    dir: "asc",
                    is_sort: true,
                },
                {
                    title: "Description",
                    code: "descr",
                    dir: "asc",
                    is_sort: true,
                },
                {
                    title: "Color",
                    code: "color_name",
                    dir: "asc",
                    is_sort: true,
                },
                {
                    title: "Size",
                    code: "size_name",
                    dir: "asc",
                    is_sort: true,
                },
            ];
            this.offset = [];
            this.per_page = 10;
            this.$store.dispatch('setTitle', this.title);
            DataService.url = url;
            this.getItems();


        },
    },
    mounted() {

        DataService.url = this.$route.params.entity;
        this.setDefault();

    },
};
</script>

<style scoped>
    
</style>

