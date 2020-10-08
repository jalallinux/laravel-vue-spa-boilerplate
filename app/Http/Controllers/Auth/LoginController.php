<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\TokenTrait;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    use TokenTrait;

    /**
     * @param LoginRequest $request
     * @return UserResource|Response
     * @throws ValidationException
     */
    public function login(LoginRequest $request)
    {
        $user = $this->getUser($request);

        $response = $this->getToken($request);
        if ($response->status() !== 200) {
            return $response;
        }

        return new UserResource($user, $this->getTokenContent());
    }

    /**
     * @param LoginRequest $request
     * @return User
     * @throws ValidationException
     */
    protected function getUser(LoginRequest $request)
    {
        $user = User::whereEmail($request->email)->first();

        if (!Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => __('password-failed')
            ]);
        }
        return $user;
    }


}
