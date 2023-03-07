<?php

namespace App\Modules\Size\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class SizeCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return [
            'data' => SizeResource::collection($this->collection),
            'links' => [
                'self' => 'link-value',
            ],
        ];
    }
}
