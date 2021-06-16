var m_e="empty";
var l_posx,l_posy;

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

color="red";
line_width=3;

canvas.addEventListener("mousedown" , m_mousedown);

function m_mousedown(e){
    m_e="mouseDown";
}

canvas.addEventListener("mousemove" , m_mousemove);

function m_mousemove(e){
    c_m_x=e.clientX-canvas.offsetLeft;
    c_m_y=e.clientY-canvas.offsetTop;

    if(m_e=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=line_width;

        ctx.moveTo( l_posx,l_posy);
        ctx.lineTo(c_m_x,c_m_y);
        ctx.stroke();
    }
    l_posx=c_m_x;
    l_posy=c_m_y;
}

canvas.addEventListener("mouseup" , m_mouseup);

function m_mouseup(e){
    m_e="mouseUp";
}

canvas.addEventListener("mouseleave" , m_mouseleave);

function m_mouseleave(e){
    m_e="mouseLeave";
}