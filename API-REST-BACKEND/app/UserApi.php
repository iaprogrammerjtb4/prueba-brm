<?php

    namespace App;

    use Illuminate\Notifications\Notifiable;
    use Illuminate\Foundation\Auth\User as Authenticatable;

    //add class JWTSubject 
    use Tymon\JWTAuth\Contracts\JWTSubject;

    //add and implements JWT in this model
    class UserApi extends Authenticatable implements JWTSubject
    {
        use Notifiable;

        /**
         * define table usersapi
         */
        protected $table = 'usersapi';

        /**
         * The attributes that are mass assignable.
         *
         * @var array
         */
        protected $fillable = [
            'name', 'email', 'password',
        ];

        /**
         * The attributes that should be hidden for arrays.
         *
         * @var array
         */
        protected $hidden = [
            'password', 'remember_token',
        ];

        /**
         * 
         */
        public function getJWTIdentifier()
        {
            return $this->getKey();
        }

        /**
         * 
         */
        public function getJWTCustomClaims()
        {
            return [];
        }
    }