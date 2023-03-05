<?php

namespace Database\Seeders;

use App\Modules\Utils\Services\PasswordRandomService;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {   
        $this->call([           
            ColorSeeder::class,
            SizeSeeder::class,
            ProductSeeder::class
        ]);
    }
}
