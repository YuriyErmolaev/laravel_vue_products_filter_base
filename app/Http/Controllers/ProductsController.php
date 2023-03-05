<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


use App\Modules\Product\Repositories\ProductRepository;
use App\Modules\Product\Resources\ProductCollection;
use App\Modules\Utils\DTO\ParamListDTO;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;


class ProductsController extends BaseController
{
    
    use AuthorizesRequests;
    
    private ProductRepository $repository;

    public function __construct(ProductRepository $repository)
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
        return new ProductCollection($results);
    }
}
