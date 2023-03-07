<?php

namespace App\Modules\Color\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ColorResource extends JsonResource
{
    public function toArray($request)
    {        
        return [
            'id' => $this->id,
            'name' => $this->name            
        ];
    }
}