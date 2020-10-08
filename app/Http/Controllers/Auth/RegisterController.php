<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\TokenTrait;

class RegisterController extends Controller
{
    use TokenTrait;

    /**
     * @param RegisterRequest $request
     * @return UserResource|\Illuminate\Http\Response
     */
    public function register(RegisterRequest $request)
    {
        $user = User::create($request->all());

        $response = $this->getToken($request);
        if ($response->status() !== 200) {
            return $response;
        }
        return new UserResource($user, $this->getTokenContent());
    }
}
