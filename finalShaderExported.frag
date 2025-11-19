
    #ifdef GL_ES
    precision mediump float;
    #endif

    #define PI 3.14159265359

    uniform vec2  u_resolution;  
    uniform float u_time;        

    void main() {

        vec2 fragCoord = gl_FragCoord.xy;

        vec2 uvNormalized = fragCoord / u_resolution;

        vec2 coordsCentered = uvNormalized * 2.0 - 1.0;

        float aspectRatio = u_resolution.x / u_resolution.y;
        coordsCentered.x *= aspectRatio;

        float radius = length(coordsCentered);

        vec3 finalColor = vec3(0.0);

        
            
            float angle = atan(coordsCentered.y, coordsCentered.x);
            
            float angleNorm = (angle + PI) / (2.0 * PI);  

            float speed = 2.0;
            float depth = speed * u_time + 4.0 / (radius + 0.002);
            float bands = mod(depth, 1.0);  

        

            vec3 hueColor = vec3(
                angleNorm, 
                1.0 - angleNorm, 
                0.5 + 0.5 * angleNorm
            );

            finalColor = hueColor * bands;
            
        
        
        gl_FragColor = vec4(finalColor, 1.0);
    }