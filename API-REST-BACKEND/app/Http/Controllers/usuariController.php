<?php

namespace App\Http\Controllers;

use App\usuariModel;
use Illuminate\Http\Request;

class usuariController extends Controller
{    
    /**login system */
    public function login(Request $request){
        $user = $request->user;
        $pass = $request->pass;
        //valid exist in table usuari
        $userValid = usuariModel::where('USUARI_ConsInte__b',$request->id)->first();   
        var_dump($userValid);die;
        if($userValid){

        }
    }

    /**
     * List all users
     * 
     */
    public function index(Request $request)
    {
        $user = usuariModel::all();
        return $user;        
    }

    /**
     * Create a new user
     */
    public function insert(Request $request)
    {
        $user = new usuariModel();                
        $user->USUARI_Clave_____b        = hash("sha256",$request->Password);         
        $user->USUARI_Nombre____b        = $request->Name;       
        $user->USUARI_Cargo_____b        = $request->Position;       
        $user->USUARI_ConsInte__PERUSU_b = 1234567890;
        $user->USUARI_InMoCoPa__b        = 0;
        $user->USUARI_InPeToGu__b        = 0;
        $user->USUARI_IndPerCap_b        = 0;
        $user->USUARI_IndPerRep_b        = 0;
        $user->USUARI_InPeMoPo__b        = 0;
        $user->USUARI_IndiActi__b        = -1;
        $user->USUARI_SegConVen_b        = 0;
        $user->USUARI_SegDiaVen_b        = 90;
        $user->USUARI_LonMinCon_b        = 4;
        $user->USUARI_RepConDia_b        = 180;
        $user->USUARI_SegFecCon_b        = NULL;
        $user->USUARI_Bloqueado_b        = 0;        
        $user->USUARI_UsuaCrea__b        = NULL;
        $user->USUARI_ConsInte__PROYEC_b = NULL;
        $user->USUARI_Foto______b        = $request->Photo;               
        $user->USUARI_PerCamCam_b        = -1;
        $user->USUARI_Correo___b         = $request->Email;               

        return $user->save();        
    }

    /**
     * User details
     */
    public function show(Request $request)
    {
        $user = usuariModel::where('USUARI_ConsInte__b',$request->id)->first();
        return $user;        
    }

    /**
     * Update a user
     */
    public function update(Request $request)
    {        
        $user = usuariModel::where('USUARI_ConsInte__b',$request->id)->first();          
        
        $user->USUARI_Codigo____b        = $request->USUARI_Codigo____b;       
        $user->USUARI_Clave_____b        = $request->USUARI_Clave_____b;       
        $user->USUARI_Nombre____b        = $request->Name;
        $user->USUARI_Cargo_____b        = $request->Position;       
        $user->USUARI_ConsInte__PERUSU_b = $request->USUARI_ConsInte__PERUSU_b;
        $user->USUARI_InMoCoPa__b        = $request->USUARI_InMoCoPa__b;       
        $user->USUARI_InPeToGu__b        = $request->USUARI_InPeToGu__b;       
        $user->USUARI_IndPerCap_b        = $request->USUARI_IndPerCap_b;       
        $user->USUARI_IndPerRep_b        = $request->USUARI_IndPerRep_b;       
        $user->USUARI_InPeMoPo__b        = $request->USUARI_InPeMoPo__b;       
        $user->USUARI_Identific_b        = $request->USUARI_Identific_b;       
        $user->USUARI_UsuaTele__b        = $request->USUARI_UsuaTele__b;       
        $user->USUARI_ClavTele__b        = $request->USUARI_ClavTele__b;       
        $user->USUARI_ConsInte__TURNOS_b = $request->USUARI_ConsInte__TURNOS_b;
        $user->USUARI_ClaSalLla_b        = $request->USUARI_ClaSalLla_b;       
        $user->USUARI_LlavExte__b        = $request->USUARI_LlavExte__b;       
        $user->USUARI_IndiActi__b        = $request->USUARI_IndiActi__b;       
        $user->USUARI_NaciAnno__b        = $request->USUARI_NaciAnno__b;       
        $user->USUARI_NaciMes___b        = $request->USUARI_NaciMes___b;       
        $user->USUARI_NaciDia___b        = $request->USUARI_NaciDia___b;       
        $user->USUARI_SegConVen_b        = $request->USUARI_SegConVen_b;       
        $user->USUARI_SegDiaVen_b        = $request->USUARI_SegDiaVen_b;       
        $user->USUARI_LonMinCon_b        = $request->USUARI_LonMinCon_b;       
        $user->USUARI_RepConDia_b        = $request->USUARI_RepConDia_b;       
        $user->USUARI_SegFecCon_b        = $request->USUARI_SegFecCon_b;       
        $user->USUARI_Bloqueado_b        = $request->USUARI_Bloqueado_b;       
        $user->USUARI_FechCrea__b        = $request->USUARI_FechCrea__b;       
        $user->USUARI_UsuaCrea__b        = $request->USUARI_UsuaCrea__b;       
        $user->USUARI_ConsInte__PROYEC_b = $request->USUARI_ConsInte__PROYEC_b;
        $user->USUARI_Foto______b        = $request->USUARI_Foto______b;       
        $user->USUARI_UsuaCBX___b        = $request->USUARI_UsuaCBX___b;       
        $user->USUARI_ConsInte__USUPER_b = $request->USUARI_ConsInte__USUPER_b;
        $user->USUARI_PerCamCam_b        = $request->USUARI_PerCamCam_b;       
        $user->USUARI_Correo___b         = $request->USUARI_Correo___b;       
        $user->USUARI_passCorreo_b       = $request->USUARI_passCorreo_b;
        $user->USUARI_HorIniLun_b        = $request->USUARI_HorIniLun_b;
        $user->USUARI_HorFinLun_b        = $request->USUARI_HorFinLun_b;
        $user->USUARI_HorIniMar_b        = $request->USUARI_HorIniMar_b;
        $user->USUARI_HorFinMar_b      = $request->USUARI_HorFinMar_b;
        $user->USUARI_HorIniMie_b      = $request->USUARI_HorIniMie_b;
        $user->USUARI_HorFinMie_b      = $request->USUARI_HorFinMie_b;
        $user->USUARI_HorIniJue_b      = $request->USUARI_HorIniJue_b;
        $user->USUARI_HorFinJue_b      = $request->USUARI_HorFinJue_b;
        $user->USUARI_HorIniVie_b      = $request->USUARI_HorIniVie_b;
        $user->USUARI_HorFinVie_b      = $request->USUARI_HorFinVie_b;
        $user->USUARI_HorIniSab_b      = $request->USUARI_HorIniSab_b;
        $user->USUARI_HorFinSab_b      = $request->USUARI_HorFinSab_b;
        $user->USUARI_HorIniDom_b      = $request->USUARI_HorIniDom_b;
        $user->USUARI_HorFinDom_b      = $request->USUARI_HorFinDom_b;
        $user->USUARI_HorIniFes_b      = $request->USUARI_HorIniFes_b;
        $user->USUARI_HorFinFes_b      = $request->USUARI_HorFinFes_b;

        $user->save();
        return $user;               
    }

    /**
     * Delete user
     */
    public function destroy(Request $request)
    {        
        $user = usuariModel::where('USUARI_ConsInte__b',$request->id)->delete();
        if($user > 0){
            return 'true';
        }else{
            return 'false';
        }
    }
}
