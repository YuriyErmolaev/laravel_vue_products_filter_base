<?php

namespace App\Modules\Product\Repositories;

use Illuminate\Support\Facades\DB;

class ProductRepository
{
    public function all(
        $sort = 'id', 
        $dir = 'desc', 
        array $filter = [],
        $count = 10
    )
    {
                
        $builder = DB::table('products')
            ->select(
                'products.*', 
                'colors.name as color_name',
                'sizes.name as size_name'
            )
            ->join('colors', 'colors.id','=','products.color_id')
            ->join('sizes', 'sizes.id','=','products.size_id');
        
        
        if(isset($filter['name'])){
            $builder->where('products.name','like', '%'.$filter['name'].'%');
        }

        if(isset($filter['code'])){
            $builder->where('products.code','=', $filter['code']);
        }

        if(isset($filter['color_id'])){
            $builder->where('products.color_id','=', $filter['color_id']);
        }

        if(isset($filter['min_price'])){
            $builder->where('products.price','>=', $filter['min_price']*100);
        }

        if(isset($filter['max_price'])){
            $builder->where('products.price','<=', $filter['max_price']*100);
        }

        if(isset($filter['size_id'])){
            $builder->where('products.size_id','=', $filter['size_id']);
        }

        if(isset($filter['descr'])){
            $builder->where('products.descr','like', '%'.$filter['descr'].'%');
        }

    
        return $builder->orderBy($sort, $dir)->paginate($count);
    
    
    }



}
