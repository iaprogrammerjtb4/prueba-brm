<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class usuariModel extends Model
{    
    protected $table = 'usuari';
    public $timestamps = false;    
    protected $fillable = [
        'USUARI_ConsInte__b',
        'USUARI_Codigo____b',
        'USUARI_Clave_____b',
        'USUARI_Nombre____b',
        'USUARI_Cargo_____b',
        'USUARI_ConsInte__PERUSU_b',
        'USUARI_InMoCoPa__b',
        'USUARI_InPeToGu__b',
        'USUARI_IndPerCap_b',
        'USUARI_IndPerRep_b',
        'USUARI_InPeMoPo__b',
        'USUARI_Identific_b',
        'USUARI_UsuaTele__b',
        'USUARI_ClavTele__b',
        'USUARI_ConsInte__TURNOS_b',
        'USUARI_ClaSalLla_b',
        'USUARI_LlavExte__b',
        'USUARI_IndiActi__b',
        'USUARI_NaciAnno__b',
        'USUARI_NaciMes___b',
        'USUARI_NaciDia___b',
        'USUARI_SegConVen_b',
        'USUARI_SegDiaVen_b',
        'USUARI_LonMinCon_b',
        'USUARI_RepConDia_b',
        'USUARI_SegFecCon_b',
        'USUARI_Bloqueado_b',
        'USUARI_FechCrea__b',
        'USUARI_UsuaCrea__b',
        'USUARI_ConsInte__PROYEC_b',
        'USUARI_Foto______b',
        'USUARI_UsuaCBX___b',
        'USUARI_ConsInte__USUPER_b',
        'USUARI_PerCamCam_b',
        'USUARI_Correo___b',
        'USUARI_passCorreo_b'
    ];
}
