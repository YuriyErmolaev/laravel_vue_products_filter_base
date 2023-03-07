<template>

<div class="filters">



<div class="row">    
    
    <div class="col-lg-6 col-md-12">
        
        <div class="mb-3">                    
            <label for="name_filter" class="form-label">Name</label>                    
            <input class="form-control" type="text" id="name_filter" v-model="filter.name">
        </div>        
        <div class="mb-3">
            <template v-for="color in colors" :key="color.id">
                <input class="form-check-input" type="radio" :id="color.name+'_color'" :value="color.id" v-model="filter.color_id" />
                <label class="form-label" :for="color.name+'_color'">{{color.name}}</label>
            </template>
        </div>        
        <div class="mb-3">
            <template v-for="size in sizes" :key="size.id">
                <input class="form-check-input" type="radio" :id="size.name+'_size'" :value="size.id" v-model="filter.size_id" />
                <label class="form-label" :for="size.name+'_size'">{{size.name}}</label>
            </template>
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


<button class="btn btn-primary" @click="filterOut">FILTER OUT</button>
<button class="btn btn-secondary" @click="clearFilter">CLEAR FILTERS</button>

</div>



</template>


<script>
import DataService from '../../../services/DataService';

export default({
    name: 'FilterProduct',
    data() {
        return {      
            filter: {},
            colors: {},
            sizes: {}              
        };
    },
    methods: {
        filterOut() {            
            this.$emit('filterItems', this.filter);
        },
        clearFilter() {
            this.filter = {};        
            this.$emit('filterItems', this.filter);
        },        
        getItems(page, sort, dir, itemsName) {            
            DataService.url = itemsName;                                    
            DataService.getList(this.per_page, page, this.sort, this.dir, this.filter).then(
                (response) => {
                    this[itemsName] = response.data.data ?? [];                    
                }
            );
        }
    },
    props : [],
    mounted(){        
        this.getItems(1,'id','asc','colors');
        this.getItems(1,'id','asc','sizes');
    }
})
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
