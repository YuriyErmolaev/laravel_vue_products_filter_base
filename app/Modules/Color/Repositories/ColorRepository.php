<?php

namespace App\Modules\Color\Repositories;

use Illuminate\Support\Facades\DB;

class ColorRepository
{
    public function all(
        $sort = 'id', 
        $dir = 'desc', 
        array $filter = [],
        $count = 10
    )
    {                
        $builder = DB::table('colors')
            ->select(
                'colors.*'
            );
        return $builder->orderBy($sort, $dir)->paginate($count);
    }



}
