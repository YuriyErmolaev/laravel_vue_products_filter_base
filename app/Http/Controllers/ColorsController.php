<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Modules\Color\Repositories\ColorRepository;
use App\Modules\Color\Resources\ColorCollection;
use App\Modules\Utils\DTO\ParamListDTO;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;


class ColorsController extends BaseController
{
    use AuthorizesRequests;
    
    private ColorRepository $repository;

    public function __construct(ColorRepository $repository)
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
        return new ColorCollection($results);
    }
}
