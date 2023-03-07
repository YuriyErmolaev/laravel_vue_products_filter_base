<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Modules\Size\Repositories\SizeRepository;
use App\Modules\Size\Resources\SizeCollection;
use App\Modules\Utils\DTO\ParamListDTO;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;


class SizesController extends BaseController
{
    use AuthorizesRequests;
    
    private SizeRepository $repository;

    public function __construct(SizeRepository $repository)
    {
        $this->repository = $repository;
    }

    public function index(Request $request)
    {
        
        $params = ParamListDTO::fromRequest($request);

        $results = $this->repository->all(
            $params->getSort(),
            $params->getDir(),
            $params->getFilter(),
            $params->getCount()        
        );        
        return new SizeCollection($results);
    }
}
