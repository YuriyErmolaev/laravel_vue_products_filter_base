<template>
   
    
    <div class="card card-primary card-outline">
        <div class="card-body">
            
            <div class="filters">

                <div class="row">
                    
                    <div class="col-lg-6 col-md-12">
                        
                        <div class="mb-3">                    
                            <label for="name_filter" class="form-label">Name</label>                    
                            <input class="form-control" type="text" id="name_filter" v-model="filter.name">
                        </div>
                        
                        <div class="mb-3">
                            
                            <input class="form-check-input" type="radio" id="one_color" value="1" v-model="filter.color_id" />
                            <label class="form-label" for="one_color">Red</label>

                            <input class="form-check-input" type="radio" id="two_color" value="2" v-model="filter.color_id" />
                            <label class="form-label" for="two_color">Green</label>                
                            
                            <input class="form-check-input" type="radio" id="three_color" value="3" v-model="filter.color_id" />
                            <label class="form-label" for="three_color">Blue</label>

                            <input class="form-check-input" type="radio" id="four_color" value="4" v-model="filter.color_id" />
                            <label class="form-label" for="four_color">Yellow</label>

                        </div>
                        
                        <div class="mb-3">
                                                                                    
                            <input class="form-check-input" type="radio" id="one_size" value="1" v-model="filter.size_id" />
                            <label class="form-label" for="one_size">XS</label>

                            <input class="form-check-input" type="radio" id="two_size" value="2" v-model="filter.size_id" />
                            <label class="form-label" for="two_size">S</label>                
                            
                            <input class="form-check-input" type="radio" id="three_size" value="3" v-model="filter.size_id" />
                            <label class="form-label" for="three_size">M</label>

                            <input class="form-check-input" type="radio" id="four_size" value="4" v-model="filter.size_id" />
                            <label class="form-label" for="four_size">L</label>

                            <input class="form-check-input" type="radio" id="five_size" value="5" v-model="filter.size_id" />
                            <label class="form-label" for="five_size">XL</label>

                            <input class="form-check-input" type="radio" id="six_size" value="6" v-model="filter.size_id" />
                            <label class="form-label" for="six_size">XXL</label>

                        </div>

                        

                    </div>

                    <div class="col-lg-6 col-md-12">
                        
                        <div class="mb-3">
                            <label for="code_filter" class="form-label">Code</label>
                            <input class="form-control" type="text" id="code_filter" v-model="filter.code">
                        </div>
                        
                        <div class="row">                                
                            <div class="col-lg-6 col-md-12">                                                              
                                <label for="min_price_filter" class="form-label">Min price</label>                    
                                <input class="form-control" type="number" id="min_price_filter" v-model="filter.min_price" min="0.00" max="10000.00" step="0.01" />
                            </div>                                    
                            <div class="col-lg-6 col-md-12">                                  
                                <label for="max_price_filter" class="form-label">Max price</label>                    
                                <input class="form-control" type="number" id="max_price_filter" v-model="filter.max_price" min="0.00" max="10000.00" step="0.01" />
                            </div>
                        </div>

                        

                    </div>

                </div>

                <div class="input_area">
                    <label for="name_filter" class="form-label">Description</label> 
                    <input class="form-control" type="text" id="descr_filter" v-model="filter.descr">
                </div>


                <button class="btn btn-primary" @click="getItems">FILTER OUT</button>
                <button class="btn btn-secondary" @click="clearFilter">CLEAR FILTERS</button>

            </div>
            
            
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
    },
    computed : {
    },
    methods: {
        clearFilter() {
            this.filter = {};
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

    .btn {
        margin: 0 10px 10px 0;
    }

    .filters{
        margin-bottom: 20px;
    }

    .form-check-input, .form-label {
        cursor: pointer;
    }
    .form-check-input {
        margin-right: 5px;
    }

    .form-label {
        margin-right: 10px;
    }

    .input_area {
        margin-bottom: 20px;
    }
    
</style>

