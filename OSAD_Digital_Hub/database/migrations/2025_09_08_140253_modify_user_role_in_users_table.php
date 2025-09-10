<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Renames the column and changes its type to a string
            $table->string('user_role')->default('Student')->after('email')->comment('Replaces user_level');
        });

        // This part is for migrating existing data if you have any.
        // For a fresh database, it's good practice.
        // DB::statement("UPDATE users SET user_role = 'Student' WHERE user_level = 0");
        // DB::statement("UPDATE users SET user_role = 'Admin Assistant' WHERE user_level = 1");
        // ... and so on for other levels.

        Schema::table('users', function (Blueprint $table) {
            // Now we can safely drop the old column
            $table->dropColumn('user_level');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Re-create the old column
            $table->tinyInteger('user_level')->default(0)->after('email');
        });

        // You could add logic here to convert roles back to levels if needed

        Schema::table('users', function (Blueprint $table) {
            // Drop the new column
            $table->dropColumn('user_role');
        });
    }
};