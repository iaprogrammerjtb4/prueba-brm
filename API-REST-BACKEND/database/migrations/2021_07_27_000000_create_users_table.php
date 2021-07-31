<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

		/**
		 * Table system users
		 */
        Schema::create('USUARI', function (Blueprint $table) {
            $table->increments('USUARI_ConsInte__b')->unique();
            $table->string('USUARI_Codigo____b',50)->nullable()->default(NULL);
            $table->string('USUARI_Clave_____b',253)->nullable()->default(NULL);
		    $table->string('USUARI_Nombre____b',253)->nullable()->default(NULL);
            $table->string('USUARI_Cargo_____b',253)->nullable()->default(NULL);
		    $table->integer('USUARI_ConsInte__PERUSU_b')->nullable()->default(NULL);
		    $table->smallInteger('USUARI_InMoCoPa__b');
		    $table->smallInteger('USUARI_InPeToGu__b');
		    $table->smallInteger('USUARI_IndPerCap_b');
		    $table->smallInteger('USUARI_IndPerRep_b');
		    $table->smallInteger('USUARI_InPeMoPo__b');
		    $table->string('USUARI_Identific_b',50)->nullable()->default(NULL);
		    $table->string('USUARI_UsuaTele__b',50)->nullable()->default(NULL);
		    $table->string('USUARI_ClavTele__b',50)->nullable()->default(NULL);
		    $table->integer('USUARI_ConsInte__TURNOS_b')->nullable()->default(NULL);
		    $table->string('USUARI_ClaSalLla_b',50)->nullable()->default(NULL);
		    $table->string('USUARI_LlavExte__b',50)->nullable()->default(NULL);
		    $table->smallInteger('USUARI_IndiActi__b');
		    $table->integer('USUARI_NaciAnno__b')->nullable()->default(NULL);
		    $table->integer('USUARI_NaciMes___b')->nullable()->default(NULL);
		    $table->integer('USUARI_NaciDia___b')->nullable()->default(NULL);
		    $table->smallInteger('USUARI_SegConVen_b');
		    $table->integer('USUARI_SegDiaVen_b');
		    $table->integer('USUARI_LonMinCon_b');
		    $table->integer('USUARI_RepConDia_b');
		    $table->dateTime('USUARI_SegFecCon_b')->nullable()->default(NULL);
		    $table->smallInteger('USUARI_Bloqueado_b');
		    $table->dateTime('USUARI_FechCrea__b')->nullable()->default(NULL);
		    $table->string('USUARI_UsuaCrea__b',253)->nullable()->default(NULL);
            $table->integer('USUARI_ConsInte__PROYEC_b')->nullable()->default(NULL);
		    $table->string('USUARI_Foto______b',255)->nullable()->default(NULL);
		    $table->integer('USUARI_UsuaCBX___b')->nullable()->default(NULL);
		    $table->integer('USUARI_ConsInte__USUPER_b')->nullable()->default(NULL);
		    $table->smallInteger('USUARI_PerCamCam_b');
		    $table->string('USUARI_Correo___b',255)->nullable()->default(NULL);
		    $table->string('USUARI_passCorreo_b',255)->nullable()->default(NULL);
		    $table->time('USUARI_HorIniLun_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorFinLun_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorIniMar_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorFinMar_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorIniMie_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorFinMie_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorIniJue_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorFinJue_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorIniVie_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorFinVie_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorIniSab_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorFinSab_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorIniDom_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorFinDom_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorIniFes_b')->nullable()->default(NULL);
		    $table->time('USUARI_HorFinFes_b')->nullable()->default(NULL);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
