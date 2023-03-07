<?php

namespace App\Modules\Size\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SizeResource extends JsonResource
{
    public function toArray($request)
    {        
        return [
            'id' => $this->id,
            'name' => $this->name            
        ];
    }
}