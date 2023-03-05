<?php

namespace App\Modules\Product\Resources;

use App\Models\Color;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;


class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        
        return [
            'id' => $this->id,
            'name' => $this->name,
            'code' => $this->code,
            'price' => $this->price,
            'descr' => $this->descr,
            'color_id' => $this->color_id,            
            'color_name' => $this->color_name,
            'size_id' => $this->size_id,            
            'size_name' => $this->size_name,
        ];
    }
}