<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;


class validatelogin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        /*
        if(!$request->session()->has('id'))
        {
            return redirect('tlog');
        }*/
        //echo "Middleware";
        $path=$request->path();
        if(($path=="tlog" || $path=="Register") && session()->has('id'))
        {
            return redirect('tdash');
        }
        return $next($request);
    }
}
