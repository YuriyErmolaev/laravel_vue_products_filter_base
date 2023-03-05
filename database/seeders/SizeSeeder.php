<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Size;

class SizeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $Sizes = Size::all( 'id' );
        $SizesNum = count( $Sizes );
                
        if( !$SizesNum ){
            $SizesAr = [
                'XS',                
                'S',
                'M',
                'L',
                'XL',
                'XXL'
            ];
            foreach( $SizesAr as $Size ){            
                $newSize = Size::create([
                    'name' => $Size,
                ]);                
                $this->command->info( "Size $newSize->name created." );
            }
        } else {
            $this->command->info("Some Sizes already created. So, no one Size was not added in this seeding.");
            return;
        };
    }
}
