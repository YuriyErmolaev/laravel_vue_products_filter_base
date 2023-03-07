<?php

namespace App\Modules\Size\Repositories;

use Illuminate\Support\Facades\DB;

class SizeRepository
{
    public function all(
        $sort = 'id', 
        $dir = 'desc', 
        array $filter = [],
        $count = 10
    )
    {                
        $builder = DB::table('sizes')
            ->select(
                'sizes.*'
            );
        return $builder->orderBy($sort, $dir)->paginate($count);
    }



}
