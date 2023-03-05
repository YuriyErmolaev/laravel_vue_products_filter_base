<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Color;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Colors = Color::all( 'id' );
        $ColorsNum = count( $Colors );
                
        if( !$ColorsNum ){
            $ColorsAr = [
                'red',                
                'green',
                'blue',
                'yellow'               
            ];
            foreach( $ColorsAr as $Color ){            
                $newColor = Color::create([
                    'name' => $Color,
                ]);                
                $this->command->info( "Color $newColor->name created." );
            }
        } else {
            $this->command->info("Some Colors already created. So, no one Color was not added in this seeding.");
            return;
        };
    }
}
