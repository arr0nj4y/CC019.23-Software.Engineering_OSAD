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
            // This adds the new column for the user's role
            $table->tinyInteger('user_level')->default(0)->after('email');
            // default(0) means new users will automatically be a 'Student'
            // 0 = Student, 1 = Admin Assistant, 2 = Director, 3 = Admin
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // This tells Laravel how to remove the column if you need to undo the migration
            $table->dropColumn('user_level');
        });
    }
};