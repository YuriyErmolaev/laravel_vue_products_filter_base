<?php

namespace App\Modules\Product\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => ProductResource::collection($this->collection),
            'links' => [
                'self' => 'link-value',
            ],
        ];
    }
}
