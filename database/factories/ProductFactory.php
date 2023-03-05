<?php

namespace Database\Factories;

use App\Models\Color;
use App\Models\Size;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "name" => $this->faker->words(2, true),
            "code" => $this->faker->unique()->numberBetween(100, 999),
            "price" => $this->faker->unique()->numberBetween(10000, 199900),
            "descr" => $this->faker->sentence(5),
            'color_id' => Color::all()->random()->id,
            'size_id' => Size::all()->random()->id            
        ];
    }
}
