<?php

use Illuminate\Database\Seeder;

/**
 * Class DatabaseSeeder.
 */
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        initialize_gates();

        seed_database();

        initialize_roles();

        create_admin_user();

        first_user_as_manager();

	create_flags();

///////
        DB::table('groups')->insert([
            'name' => 'Team1'
        ]);

        DB::table('groups')->insert([
            'name' => 'Team2'
        ]);

        DB::table('groups')->insert([
            'name' => 'Team3'
        ]);


        $faker = Faker\Factory::create();

        $flagIds = App\Flag::pluck('id')->all();
        $groupIds = App\Group::pluck('id')->all();

        for($i=1; $i <= 7; $i++) {

            DB::table('flag_group')->insert([
                'flag_id' => $faker->randomElement($flagIds),
                'group_id' => $faker->randomElement($groupIds),
                'captured' => date("Y-m-d H:i:s"),
            ]);


        }



    }
}
