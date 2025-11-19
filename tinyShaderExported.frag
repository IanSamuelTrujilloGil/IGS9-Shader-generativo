#ifdef GL_ES
precision mediump float;
#endif
#define PI 3.14159265359
uniform vec2 u_resolution;
uniform float u_time;
void main(){
    vec2 p=gl_FragCoord.xy/u_resolution*2.-1.;
    p.x*=u_resolution.x/u_resolution.y;
    float r=length(p),a=atan(p.y,p.x);
    float t=(a+PI)/(2.*PI);
    float d=2.*u_time+4./(r+.002);
    float b=mod(d,1.);
    vec3 c=vec3(t,1.-t,.5+.5*t)*b;
    gl_FragColor=vec4(c,1.);
}