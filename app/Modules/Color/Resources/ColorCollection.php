<?php

namespace App\Modules\Color\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ColorCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => ColorResource::collection($this->collection),
            'links' => [
                'self' => 'link-value',
            ],
        ];
    }
}
